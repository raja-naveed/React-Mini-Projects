import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center w-full h-12 bg-gray-100 text-gray-700">
      <div className="flex items-center">
        <img src="/logo512.png" alt="Google Keep Logo" className="w-8 h-8 mr-2" />
        <span className="font-bold text-xl">Keep</span>
      </div>
      <div className="flex-1 text-center">© {currentYear} Raja Keep</div>
    </footer>
  );
};

export default Footer;
