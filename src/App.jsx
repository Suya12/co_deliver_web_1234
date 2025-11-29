import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store_select from './page/store_select/index.jsx'

import Co_order_create from './page/co_order_create/index.jsx'
import Pay from './page/pay/index.jsx'
import Co_deliver_list from './page/co_deliver_list/index.jsx'
import Category from './page/category/index.jsx'
import Deliver_process from './page/deliver_process/index.jsx'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/co_deliver_list" element={<Co_deliver_list />} />
        <Route path="/store_select" element={<Store_select />} />
        <Route path="/co_order_create" element={<Co_order_create />} />
        <Route path="/pay" element={<Pay />} />     
        <Route path="/deliver_process" element={<Deliver_process />} />    
      </Routes>
    </BrowserRouter>
  )
}

export default App
