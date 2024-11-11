'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-400 py-12 bottom-0 left-0 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi iste impedit odio quae sequi at error iusto. Recusandae sunt odit fuga consequuntur laborum quasi porro labore ullam. Officiis, iure.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Links</h3>
          <ul>
            <li>
              <Link href="/" className="hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">About</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-red-500">Courses</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow us</h3>
          <ul>
            <li>
              <Link href="/" className="hover:text-red-500">Home</Link>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Facebook</a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">TikTok</a>
            </li>
            <li>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">WhatsApp</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact us</h3>
          <p>
            Gmail: <a href="mailto:muzammilshaheen77@gmail.com" className="hover:text-red-500">muzammilshaheen77@gmail.com</a>
          </p>
          <p>
            Phone: <span className="hover:text-white">03033105085</span>
          </p>
        </div>
      </div>
      <p className="flex justify-center p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem</p>
    </footer>
  );
};

export default Footer;
