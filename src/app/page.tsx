/**
 * page.tsx
 * ---------
 * Page d’accueil du clone Amazon.
 * 
 * Affiche un banner principal + une sélection de produits populaires.
 * Les données sont chargées côté serveur pour SEO et performances optimales.
 * 
 * Technologies utilisées :
 * - Next.js 13 (App Router, Server Components)
 * - TypeScript strict
 * - TailwindCSS pour le design responsive
 * 
 * Structure :
 * - HeroBanner : promotion / message principal
 * - ProductGrid : grille de produits
 * - ProductCard : présentation individuelle de chaque produit
 */

import React from 'react';

// Type du produit
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number; // sur 5
  description: string;
}

// Simulation d'une API côté serveur pour récupérer les produits populaires
async function fetchPopularProducts(): Promise<Product[]> {
  // Ici tu peux remplacer par un appel réel API / base de données
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Écouteurs Sans Fil Bluetooth',
          price: 49.99,
          imageUrl: '/products/earbuds.jpg',
          rating: 4.5,
          description: 'Son haute qualité et autonomie longue durée.',
        },
        {
          id: '2',
          name: 'Montre Connectée Sport',
          price: 129.99,
          imageUrl: '/products/smartwatch.jpg',
          rating: 4.7,
          description: 'Suivi santé et notifications intelligentes.',
        },
        {
          id: '3',
          name: 'Enceinte Bluetooth Portable',
          price: 89.99,
          imageUrl: '/products/speaker.jpg',
          rating: 4.3,
          description: 'Puissante et résistante à l’eau.',
        },
        // Ajoute autant de produits que tu veux
      ]);
    }, 200) // Simule un délai réseau de 200ms
  );
}

// Composant pour afficher une étoile (pour la note produit)
const Star = () => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.973c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.285-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" />
  </svg>
);

// Carte produit réutilisable
function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
        width={400}
        height={192}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>

        <div className="flex items-center mt-2">
          {/* Affichage étoiles */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-700">{product.rating.toFixed(1)}</span>
        </div>

        <p className="mt-3 font-bold text-indigo-600 text-lg">
          {product.price.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
          })}
        </p>
      </div>
    </article>
  );
}

// Hero banner principal
function HeroBanner() {
  return (
    <section className="relative bg-indigo-600 text-white rounded-lg p-8 mb-10 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl font-extrabold max-w-xl leading-tight">
        Découvrez les meilleures offres du moment
      </h1>
      <p className="mt-4 text-lg max-w-md">
        Profitez de promotions exclusives sur une sélection d’appareils électroniques de qualité.
      </p>
      <a
        href="#products"
        className="inline-block mt-6 bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
        aria-label="Voir les produits en promotion"
      >
        Voir les offres
      </a>
    </section>
  );
}

// Page principale côté serveur
export default async function HomePage() {
  const products = await fetchPopularProducts();

  return (
    <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="products" role="main">
      <HeroBanner />

      <section aria-labelledby="popular-products-title">
        <h2
          id="popular-products-title"
          className="text-2xl font-bold text-gray-900 mb-6"
          tabIndex={-1} // Facilite le focus clavier pour accessibilité
        >
          Produits populaires
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
