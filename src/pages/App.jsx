import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import useGetItems from '../hooks/useGetItems'
import AppRoutes from '../routes/AppRoutes'

function App () {
  const searchRef = useRef(null)
  const [search, setSearch] = useState('')
  const { dataState: items, loading } = useGetItems(search)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setSearch(searchRef.current.value)
    console.log(search)
    navigate('/WADMarket/products/')
  }

  return (
    <div className='App'>
      <Navbar handleSubmit={handleSubmit} searchRef={searchRef} />
      <AppRoutes items={items} loading={loading} />
    </div>
  )
}

export default App
