import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartItemsCount: number; // total quantité d’articles
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Total des quantités dans le panier
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Ajouter un article (ou augmenter quantité si déjà présent)
  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCartItems((current) => {
      const existingIndex = current.findIndex((i) => i.id === item.id);
      if (existingIndex >= 0) {
        // Mise à jour quantité
        const updated = [...current];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      // Nouvel article
      return [...current, { ...item, quantity }];
    });
  };

  // Supprimer un article par id
  const removeFromCart = (id: string) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartItemsCount, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte panier
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
