import React,{useState } from 'react';
import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';
import './App.scss';

function App() {

  const [carts,setCarts] = useState([
    {id:1, title : "Forsage 8", body : "asd"},
    {id:2, title : "Forsage 8", body : "asd"},
    {id:3, title : "Forsage 8", body : "asd"},
    {id:4, title : "Forsage 8", body : "asd"},
    {id:5, title : "Forsage 8", body : "asd"}
]);

  const [counter, setCounter] = useState(0);
  const [modalActive,setModalActive] = useState(false);

  const addCounter = () => {
    setCounter(counter + 1);
  }

  
  return (
    <div className='app'>
       <Layout counter={counter}
               modalActive={modalActive} 
               setModalActive={setModalActive} 
               data={carts}>
        <Content addCounter={addCounter} data={carts}/>
      </Layout>
    </div>
  );
}

export default App;
