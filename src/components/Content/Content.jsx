import React from "react";
import './Content.scss'
import { Routes, Route } from "react-router-dom";

/*Import Pages*/
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const Content = ({addCounter , data}) => {


    return (
        <div className="content">
            <Routes>
              <Route path='/'
                     element={<Home/>}
              />
              <Route path='/product'
                     element={
                            <Product 
                            addCounter={addCounter}
                            data={data}
                     />
                     }
              />
              <Route path='/about' 
                     element={<About/>}
              />
              <Route path='/contact'
                     element={<Contact/>}
              />
            </Routes>
        </div>
    )
}

export default Content;