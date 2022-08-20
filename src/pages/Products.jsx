import CardProduct from '../components/CardProduct/CardProduct'
import Loading from '../components/Loading/Loading'
import { usaProductContext } from '../contexts/ProductContext'

const Products = () => {
  const context = usaProductContext()

  return (
    <div className='container-fluid d-flex flex-wrap px-sm-4 pt-sm-3 px-2 pt-1'>
      {context.loading
        ? <Loading />
        : (<>
          {context.list.length === 0
            ? <div className='container-fluid text-center fs-3 fw-bold'>No se encontro el producto que busca</div>
            : context.list.filter(product => {
              if (context.search === '') {
                return product // Si la busqueda es vacia, retorno todas las canciones
              } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
                return product // Retorno el producto que cumple con el criterio de busqueda
              }
              return null // Ningun producto coincide
            }).map((product) => (
              <CardProduct product={product} key={product._id} />
            ))}
        </>)}
    </div>
  )
}

export default Products
