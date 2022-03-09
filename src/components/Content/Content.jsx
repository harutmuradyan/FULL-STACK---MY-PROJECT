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
import PlayVideo from "../Pages/Items/Item/PlayVideo/PlayVideo";
const Content = ({addCounter}) => {



       return (
              <div className="content">
                     <Routes>
                            <Route path='/'
                                   element={
                                          <Product 
                                          addCounter={addCounter}
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
                                          <Action addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path='/product/category/comedy' 
                                   element={
                                          <Comedy addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path='/product/category/drama' 
                                   element={
                                          <Drama addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path='/product/category/fantasy' 
                                   element={
                                          <Fantasy addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path='/product/category/romance' 
                                   element={
                                          <Romance addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path='/product/category/mystery' 
                                   element={
                                          <Mystery addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path='/product/category/thiller' 
                                   element={
                                          <Thiller addCounter={addCounter}
                                   />
                                   }
                            />
                            <Route path="/product/category/id" 
                                   element={
                                          <PlayVideo
                                   />
                                   }
                            />
                     </Routes>
              </div>
    )
}

export default Content;