import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('presentation-theme') || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('presentation-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  const isDark = theme === 'dark'

  const colors = isDark ? {
    bg: '#0a0a0a',
    bgElevated: '#141414',
    bgCard: 'rgba(255,255,255,0.04)',
    bgCardHover: 'rgba(255,255,255,0.07)',
    text: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.55)',
    textTertiary: 'rgba(255,255,255,0.3)',
    textMuted: 'rgba(255,255,255,0.15)',
    border: 'rgba(255,255,255,0.08)',
    borderHover: 'rgba(255,255,255,0.15)',
    brand: '#ec4899',
    brandDark: '#db2777',
    brandLight: '#f472b6',
    brandBg: 'rgba(236,72,153,0.08)',
    brandBorder: 'rgba(236,72,153,0.2)',
    grey: '#888888',
    greyBg: 'rgba(255,255,255,0.03)',
    greyBorder: 'rgba(255,255,255,0.06)',
    glassBg: 'rgba(255,255,255,0.04)',
    glassBorder: 'rgba(255,255,255,0.08)',
    shadow: 'rgba(0,0,0,0.3)',
    gradientLine: 'linear-gradient(90deg, #ec4899 0%, #f472b6 50%, #ec4899 100%)',
  } : {
    bg: '#ffffff',
    bgElevated: '#fafafa',
    bgCard: '#ffffff',
    bgCardHover: '#f8f8f8',
    text: '#0f0f0f',
    textSecondary: '#555555',
    textTertiary: '#888888',
    textMuted: '#cccccc',
    border: '#e5e5e5',
    borderHover: '#d0d0d0',
    brand: '#ec4899',
    brandDark: '#db2777',
    brandLight: '#f472b6',
    brandBg: 'rgba(236,72,153,0.06)',
    brandBorder: 'rgba(236,72,153,0.25)',
    grey: '#888888',
    greyBg: '#f8f8f8',
    greyBorder: '#d0d0d0',
    glassBg: 'rgba(0,0,0,0.02)',
    glassBorder: '#e5e5e5',
    shadow: 'rgba(0,0,0,0.08)',
    gradientLine: 'linear-gradient(90deg, #ec4899 0%, #f472b6 50%, #ec4899 100%)',
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
