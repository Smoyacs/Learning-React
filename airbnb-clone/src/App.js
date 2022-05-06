import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';


import data from './data.js';

export default function App() {
  const cards = data.map(item => {
    return <Card key={item.id} {...item} />
  })

  return (
    <div className="App">

      <Navbar />

      <Main />

        <div className="carrusel">
          {cards}
        </div>


      

    </div>
  );
}


