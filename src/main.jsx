import { createRoot } from 'react-dom/client'
// import"./assets/css/style.css"
import "../public/css/style.css"
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommonLayout from './Components/CommonLayout';
import HydratedLimePowder from './Components/HydratedLimePowder';
import QuickLimePowder from './Components/QuickLimePowder';
import QuickLimeLumps from './Components/QuickLimeLumps';
import IndustrialUses from './Components/IndustrialUses';
import ContactUs from './Components/ContactUs';
import ProductionProcess from './Components/ProductionProcess';
import AboutUs from './Components/AboutUs';
import Breadcrumbs from './Components/Breadcrumbs';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Breadcrumbs/>}></Route>
      <Route element={<CommonLayout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/hydrated-lime-powder' element={<HydratedLimePowder/>} />
        <Route path='/quick-lime-powder' element={<QuickLimePowder/>} />
        <Route path='/quick-lime-lumps' element={<QuickLimeLumps/>} />
        <Route path='/industrial-uses' element={<IndustrialUses/>} />
        <Route path='/production-process' element={<ProductionProcess/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
