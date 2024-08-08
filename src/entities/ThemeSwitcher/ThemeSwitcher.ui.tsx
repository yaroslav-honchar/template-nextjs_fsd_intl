"use client"

import { useTheme } from "next-themes"

import React from "react"

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return <button onClick={toggleTheme}>Theme: {theme}</button>
}
