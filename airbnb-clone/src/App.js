import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
// import Footer from './components/footer';
import Card from './components/Card';

import bike from './images/bike.png';
import wedding from './images/wdding.png';
import katie_zaferes from './images/katie_zaferes.png';

export default function App() {
  return (
    <div className="App">

      <Navbar />

      <Main />

        <div className="carrusel">

          <Card 
            img={bike}
            rating="4.5"
            reviewCount="3.0"
            country="USA"
            title="Bike Tour"
            price={100}
          />
          <Card 
            img={wedding}
            rating="4.5"
            reviewCount="3.0"
            country="USA"
            title="Bike Tour"
            price={100}
          />
          <Card 
            img={katie_zaferes}
            rating="5.0"
            reviewCount="3.0"
            country="USA"
            title="Bike Tour"
            price={100}
          />
          <Card 
            img={bike}
            rating="4.5"
            reviewCount="3.0"
            country="USA"
            title="Bike Tour"
            price={100}
          />
        </div>

      

    </div>
  );
}


