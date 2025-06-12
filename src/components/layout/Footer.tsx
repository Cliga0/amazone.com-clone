/**
 * Footer.tsx
 * ----------
 * Pied de page global du site e-commerce.
 *
 * Contient des liens vers les pages informatives, catégories principales,
 * assistance client, mentions légales, réseaux sociaux, etc.
 *
 * Affiché sur toutes les pages via le layout global.
 */

import React from 'react';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          {/* Catégories */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link href="/categorie/electronique" className="hover:underline">Électronique</Link></li>
              <li><Link href="/categorie/mode" className="hover:underline">Mode</Link></li>
              <li><Link href="/categorie/maison" className="hover:underline">Maison</Link></li>
              <li><Link href="/categorie/sport" className="hover:underline">Sport & Loisirs</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="hover:underline">Notre histoire</Link></li>
              <li><Link href="/carriere" className="hover:underline">Carrières</Link></li>
              <li><Link href="/presse" className="hover:underline">Presse</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Aide */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Aide</h3>
            <ul className="space-y-2">
              <li><Link href="/aide/livraison" className="hover:underline">Livraison</Link></li>
              <li><Link href="/aide/retours" className="hover:underline">Retours</Link></li>
              <li><Link href="/aide/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/aide/support" className="hover:underline">Support client</Link></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Suivez-nous</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Mention légale & copyright */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-500 text-center">
          <p>
            &copy; {currentYear} Amazon Clone. Tous droits réservés. | 
            <Link href="/conditions" className="hover:underline ml-1">Conditions générales</Link> | 
            <Link href="/confidentialite" className="hover:underline ml-1">Confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
