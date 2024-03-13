
import { useState } from 'react'
import { Products } from './components/Products.jsx'
import {products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header.jsx'


function App() {

  const [products] = useState(initialProducts)
  //creamos un estado para filtrar si se desea por categorias o por precio
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  //procedemos a crear la funcion que ejecutara el filtro 
  ///pasamos los productos al filtro, luego empezamos a filtrar con el metodo 'filter'
const filterProducts = (products) => {
  return products.filter(product => {
    return (
      product.price >= filter.minPrice && 
      (
        filter.category === 'all' || product.category === filter.category
      )
    )
  })
}


const filterProductss = filterProducts(products)
  return ( 
    <>
    <Header changeFilters={setFilter} /> 
    <Products products={filterProductss}/> 
    </>
         
  )
}

export default App
