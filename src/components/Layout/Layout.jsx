import React from "react";
import './Layout.scss';

/*Import Component*/ 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const Layout = ({children}) => {

    return (
        <div className='layout'>
          <Header
            
          />
              <main className="main"
              
              >
                  {children}
                  <Modal
                      
                  />
              </main>
          <Footer/>
        </div>
    );
};

export default Layout;