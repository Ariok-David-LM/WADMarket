import CardProduct from '../components/CardProduct/CardProduct'
import Loading from '../components/Loading/Loading'

const Products = ({ items, loading }) => {
  return (
    <div className='container-fluid d-flex flex-wrap px-sm-4 pt-sm-3 px-2 pt-1'>
      {loading
        ? <Loading />
        : (<>
          {items.length === 0
            ? <div className='container-fluid text-center fs-3 fw-bold'>No se encontro el producto que busca</div>
            : (
              <>
                {items.map(item => (
                  <CardProduct img={item.image} name={item.product_name} brand={item.brand} price={item.price} id={item._id} key={item._id} />
                ))}
              </>
              )}
           </>
          )}
    </div>
  )
}

export default Products
