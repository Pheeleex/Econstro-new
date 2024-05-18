
import{ Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Pages/RootLayout'
import Home from './Pages/Home'
import AddToCart from './Pages/AddToCart'
import Success from './Pages/AddToCart/Success/Success'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element= {<RootLayout />}>
     <Route index element={<Home />} />
     <Route path='/AddToCart' element={<AddToCart />} />
     <Route path='/Success' element={<Success />} />
  </Route>
)
)


function App() {
  return (
    (<RouterProvider router={router} />)
  )
}

export default App
