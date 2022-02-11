import React from "react";
import './Layout.scss';

/*Import Component*/ 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const Layout = ({children , counter , modalActive , setModalActive , data}) => {

    return (
        <div className='layout'>
          <Header
            counter={counter}  setModalActive={setModalActive}
          />
              <main className="main"
              
              >
                  {children}
                  <Modal
                    modalActive={modalActive} setModalActive={setModalActive} data={data}
                  />
              </main>
          <Footer/>
        </div>
    );
};

export default Layout;