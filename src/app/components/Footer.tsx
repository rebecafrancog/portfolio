import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-900 bg-black mt-20">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Rebeca Franco Gomes. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-600">Built with React, Tailwind, Ionic</p>
      </div>
    </footer>
  );
};
