import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrive from './components/Arrive';
import Clients from './components/Clients';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
      headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "x-api-key": process.env.REACT_APP_APIKEY
        }
      });
      console.log(response);
      const { nodes } = await response.json();
      setItems(nodes);
    })();
    
  }, []);
  
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrive />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
