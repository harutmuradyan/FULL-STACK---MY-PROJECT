import React from 'react';
import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';
import './App.scss';

function App({Children}) {

  return (
    <div className='app'>
       <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
