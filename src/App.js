import React,{useState , useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';
import './App.scss';

function App() {

  const [carts,setCarts] = useState([]);

  const [counter, setCounter] = useState(0);
  const [modalActive,setModalActive] = useState(false);

  const addCounter = () => {
    setCounter(counter + 1);
  }


  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(myRes => setCarts(myRes))
  }, [])

  console.log(carts)
  return (
    <div className='app'>
       <Layout counter={counter}
               modalActive={modalActive} 
               setModalActive={setModalActive} 
               data={carts}
               >
        <Content addCounter={addCounter} data={carts}/>
      </Layout>
    </div>
  );
}

export default App;
