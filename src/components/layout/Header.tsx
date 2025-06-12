"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useCart } from '@/context/CartProvider'; 

export default function Header() {
  const { cartItemsCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Recherche lancée pour : ${searchQuery}`);
  };

  return (
    <header className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" aria-label="Accueil" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Amazon Clone Logo"
            width={120}
            height={32}
            priority
            className="object-contain"
          />
        </Link>

        {/* Barre de recherche */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden sm:flex flex-1 max-w-xl mx-6"
          role="search"
          aria-label="Recherche de produits"
        >
          <input
            type="search"
            name="search"
            aria-label="Recherche"
            placeholder="Rechercher des produits, marques et plus"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-l-md px-4 py-2 text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 rounded-r-md px-4 py-2 font-semibold text-gray-900"
            aria-label="Lancer la recherche"
          >
            Rechercher
          </button>
        </form>

        {/* Menu utilisateur & panier */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/login" className="hover:underline" aria-label="Se connecter">
            Connexion
          </Link>
          <Link href="/account" className="hover:underline" aria-label="Mon compte">
            Mon Compte
          </Link>
          <Link href="/orders" className="hover:underline" aria-label="Mes commandes">
            Commandes
          </Link>

          {/* Mini panier */}
          <Link href="/cart" aria-label="Panier d’achats" className="relative flex items-center hover:underline">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l1.5 4.5m-13-9h16"
              />
            </svg>

            {cartItemsCount > 0 && (
              <span
                className="absolute top-0 right-0 -mt-1 -mr-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full"
                aria-live="polite"
              >
                {cartItemsCount}
              </span>
            )}
          </Link>
        </nav>
      </div>

      {/* Barre de recherche mobile */}
      <div className="sm:hidden px-4 pb-3">
        <form
          onSubmit={handleSearchSubmit}
          role="search"
          aria-label="Recherche de produits"
          className="flex"
        >
          <input
            type="search"
            name="search"
            aria-label="Recherche"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow rounded-l-md px-3 py-2 text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 rounded-r-md px-4 py-2 font-semibold text-gray-900"
            aria-label="Lancer la recherche"
          >
            OK
          </button>
        </form>
      </div>
    </header>
  );
}
