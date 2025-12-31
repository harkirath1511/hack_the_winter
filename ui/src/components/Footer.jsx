import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#learn" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a
              href="/"
              className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4 inline-block hover:text-primary-700 dark:hover:text-primary-300 transition-smooth"
            >
              CampaignAI
            </a>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Build, launch, and scale your startup with AI-powered assistance.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-neutral-900 dark:text-neutral-100 font-semibold mb-4 capitalize text-sm">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {currentYear} CampaignAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
