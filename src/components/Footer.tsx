
import { Linkedin, Twitter, Instagram } from "lucide-react";
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
      icon: Twitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/wcd_school/",
      icon: Instagram,
    },
  ];

  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <img
              src="/lovable-uploads/cf3e8c0c-1af2-4f27-bb73-063b5c9c0b2d.png"
              alt="World Class Designer Logo"
              className="h-10 w-auto"
            />
          </div>
          
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white",
                  "transition-colors duration-200 transform hover:scale-110"
                )}
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} World Class Designer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
