import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-4">
      <div className="w-11/12 mx-auto">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mobile Mart
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
