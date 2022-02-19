import React from "react";
import './Content.scss'
import { Routes, Route } from "react-router-dom";

/*Import Pages*/
import Product from '../Pages/Product/Product';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Action from "../Pages/Categorys/Action/Action";
import Drama from "../Pages/Categorys/Drama/Drama";
import Fantasy from "../Pages/Categorys/Fantasy/Fantasy";
import Romance from "../Pages/Categorys/Romance/Romance";
import Thiller from "../Pages/Categorys/Thriller/Thiller";
import Comedy from "../Pages/Categorys/Comedy/Comedy";
import Mystery from "../Pages/Categorys/Mystery/Mystery";
const Content = ({addCounter , data}) => {


    return (
        <div className="content">
            <Routes>
              <Route path='/'
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
              <Route path='/login' 
                     element={<Login/>}
              />
              <Route path='/register' 
                     element={<Register/>}
              />
              <Route path='/product/category/action' 
                     element={
                            <Action data={data}
                                    addCounter={addCounter}
                     />
                     }
              />
              <Route path='/product/category/comedy' 
                     element={
                            <Comedy data={data}
                                    addCounter={addCounter}
                     />
                     }
              />
              <Route path='/product/category/drama' 
                     element={
                            <Drama data={data}
                                   addCounter={addCounter}
                     />
                     }
              />
              <Route path='/product/category/fantasy' 
                     element={
                            <Fantasy data={data}
                                     addCounter={addCounter}
                     />
                     }
              />
              <Route path='/product/category/romance' 
                     element={
                            <Romance data={data}
                                     addCounter={addCounter}
                     />
                     }
              />
              <Route path='/product/category/mystery' 
                     element={
                            <Mystery data={data}
                                     addCounter={addCounter}
                     />
                     }
              />
              <Route path='/product/category/thiller' 
                     element={
                            <Thiller data={data}
                                     addCounter={addCounter}
                     />
                     }
              />
            </Routes>
        </div>
    )
}

export default Content;