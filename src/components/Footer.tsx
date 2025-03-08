
import { Linkedin, Instagram, Twitter as TwitterIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/wcdschool",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/wcd_school",
      icon: TwitterIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/wcd_school/",
      icon: Instagram,
    },
  ];

  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-gray-400 hover:text-white",
                  "transition-colors duration-200 transform hover:scale-110"
                )}
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} World Class Designer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
