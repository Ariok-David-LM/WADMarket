import { useEffect, useState, createContext, useContext } from 'react'
import useGetItems from '../hooks/useGetItems'
// #1 Creación de mi contexto vacío
const ProductContext = createContext()

// #2 Creación del proveedor del contexto
function ProductProvider (props) {
  const [list, setList] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Simulamos llamada a la API
  const { dataState: items, loading: cargando } = useGetItems()
  useEffect(() => {
    setList(items)
    setLoading(cargando)
  }, [items])

  // Tenemos que indicar en el Provider que DATOS debe proveer.
  const value = {
    list,
    selectedProduct,
    setSelectedProduct,
    loading,
    search,
    setSearch
  }

  return (
    <ProductContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
const usaProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumer
export {
  ProductProvider,
  usaProductContext
}
