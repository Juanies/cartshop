"use client"
import { useState } from 'react';
import Link from 'next/link';
import ButtonA from './subcomponents/ButtonA';
import ButtonCart from './subcomponents/ButtonCart';

export default function Header({ count }) {
  const [show, setShow] = useState(false);

  const expose = () => {
    setShow(!show);
    console.log(show);
  };

  const data = [
    { "name": "Inicio", "url": "/inicio" },
    { "name": "Tienda", "url": "/inicio" },
    { "name": "About us", "url": "/inicio" },
  ];

  return (
    <div className='flex sticky top-0 z-5 p-5 justify-between h-20 items-center bg-white  text-black'>
      <nav>
        <ul className='flex gap-20'>
          {data.map((item, index) => (
            <ButtonA key={index} url={item.url} name={item.name} />
          ))}
        </ul>
      </nav>
      <button onClick={() => expose()}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16.5" cy="18.5" r="1.5" />
          <circle cx="9.5" cy="18.5" r="1.5" />
          <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
        </svg>
      </button>
    </div>
  );
}
