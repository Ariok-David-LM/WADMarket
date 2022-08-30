import { useState, createContext, useContext } from 'react'
// #1 Creación de mi contexto vacío
const SesionCartContext = createContext()

// #2 Creación del proveedor del contexto
function SesionCartProvider (props) {
  const [cart, setCart] = useState([])

  // Tenemos que indicar en el Provider que DATOS debe proveer.
  const value = {
    cart,
    setCart
  }

  return (
    <SesionCartContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
const usaSesionCartContext = () => {
  const context = useContext(SesionCartContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumer
export {
  SesionCartProvider,
  usaSesionCartContext
}
