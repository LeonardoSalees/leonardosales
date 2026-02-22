"use client"; // Necessário para usar o useState

import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // npm install react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Sobre', href: '#about' },
    { name: 'Formação', href: '#formation' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tighter">
          Dev<span className="text-brand-cyan">/</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão Mobile (Hambúrguer) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Dropdown */}
      <div className={`
        fixed top-20 left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible h-auto pb-10' : 'opacity-0 invisible h-0'}
      `}>
        <ul className="flex flex-col items-center gap-6 pt-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className="text-xl font-semibold text-white/70 hover:text-brand-cyan transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;