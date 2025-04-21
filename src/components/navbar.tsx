import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const navLinks = [{ name: "Home", href: "/" }];

  const serviceLinks = [
    {
      name: "AI Enabled Services",
      href: "/services/ai-enabled",
    },
    {
      name: "IOT Services",
      href: "/services/iot",
    },
    {
      name: "Blockchain",
      href: "/services/blockchain",
    },
    {
      name: "Media and Entertainment",
      href: "/services/media",
    },
    {
      name: "Tiered Services",
      href: "/services/tiered",
    },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // If it's a hash link on the same page, handle smooth scrolling
    if (href.includes("#") && window.location.pathname === href.split("#")[0]) {
      e.preventDefault();

      // Close mobile menu if open
      if (isOpen) {
        setIsOpen(false);
      }

      // Close services dropdown if open
      if (servicesOpen) {
        setServicesOpen(false);
      }

      // Get the target element
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (element) {
        // Get the navbar height to offset the scroll position
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;

        // Calculate the element's position relative to the viewport
        const elementPosition = element.getBoundingClientRect().top;

        // Calculate the offset position
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight - 20;

        // Scroll to the element
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // For links to other pages, just close menus
      if (isOpen) {
        setIsOpen(false);
      }
      if (servicesOpen) {
        setServicesOpen(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/ACCUMBRIDGE-LOGO.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-base leading-4 ml-2 font-medium text-earth-800">
            ACCUMENBRIDGE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-earth-800 hover:text-moss-600 transition-colors duration-300"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={toggleServices}
              className="flex items-center text-earth-800 hover:text-moss-600 transition-colors duration-300"
            >
              Services{" "}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50">
                {serviceLinks.map((service) => (
                  <div key={service.name}>
                    <Link
                      to={service.href}
                      className="block px-4 py-2 font-medium text-earth-800 hover:bg-moss-50 hover:text-moss-600 transition-colors duration-200"
                      onClick={(e) => scrollToSection(e, service.href)}
                    >
                      {service.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/request-demo">
            <Button className="bg-moss-600 hover:bg-moss-700 text-white border-none">
              Request Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-earth-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-earth-700 hover:text-moss-600 py-2 transition-colors duration-300"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="py-2">
              <button
                onClick={toggleServices}
                className="flex items-center w-full text-left text-earth-700 hover:text-moss-600 transition-colors duration-300"
              >
                Services{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-2 pl-4 border-l-2 border-moss-200">
                  {serviceLinks.map((service) => (
                    <div key={service.name} className="mb-2">
                      <Link
                        to={service.href}
                        className="block py-2 font-medium text-earth-800 hover:text-moss-600 transition-colors duration-200"
                        onClick={(e) => scrollToSection(e, service.href)}
                      >
                        {service.name}
                      </Link>
                      {service.children && (
                        <div className="pl-3">
                          {service.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block py-1 text-sm text-earth-700 hover:text-moss-600 transition-colors duration-200"
                              onClick={(e) => scrollToSection(e, child.href)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/request-demo">
              <Button className="bg-moss-600 hover:bg-moss-700 text-white w-full border-none">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
