import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrive from './components/Arrive';
import Clients from './components/Clients';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      const response = await axios.get('https://jsonplaceholder.org/posts');
      setItems(response.data);
      console.log(response.data);
    })();
    
  }, []);
  
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrive items={items} key={items.id} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
