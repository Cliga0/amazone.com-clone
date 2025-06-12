/**
 * Providers.tsx
 * -------------
 * Composant racine qui regroupe tous les contextes React globaux
 * utilisés dans l’application (auth, panier, thème, etc.).
 * 
 * Ce fichier est monté dans layout.tsx pour que tous les enfants
 * aient accès à ces contextes.
 */

'use client'; // Obligatoire pour que les contextes fonctionnent côté client

import React from 'react';
import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
// import { ThemeProvider } from './ThemeProvider'; // optionnel

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Ajoute ici d’autres contextes si besoin */}
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      </CartProvider>
    </AuthProvider>
  );
}
