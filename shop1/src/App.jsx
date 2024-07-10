import './App.css'
import {BrowserRouter,Routes,Route,Link, useParams,Outlet} from 'react-router-dom'
import Home from './components/home/Home'
import Layout from './components/Layout'
import Product from './components/home/product/Product'
import ProductDetails from './components/home/product/ProductDetails'

function App() {
  

  return (
    <div className='m-0'>
            <BrowserRouter>
                <Routes >
                  <Route path='/' element={<Layout/>}  >
                      <Route index element={<Home />} />
                      <Route path='product' element={<Product />} />
                      <Route path='product/:id' element={<ProductDetails />} />
                  </Route>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App
