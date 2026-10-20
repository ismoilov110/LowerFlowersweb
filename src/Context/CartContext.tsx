"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

interface CartItem {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[],
  isOpen: boolean,
  addItem: (item: Omit<CartItem, "quantity">) => void,
  removeItem: (id: number) => void,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
  openCart: () => void,
  closeCart: () => void
}


export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) {
      setItems(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  function addItem(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)

      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function increaseQuantity(id: number) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)))
  }

  function decreaseQuantity(id: number) {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id)

      if (target && target.quantity <= 1) {
        return prev.filter((i) => i.id !== id)
      }

      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      )
    })
  }

  function openCart() {
    setIsOpen(true)
  }

  function closeCart() {
    setIsOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}