import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards.jsx';


function App() {
  
  
  return (
    <div className="App">
      <header>
        <div className='header'>
          <h1>Shophy</h1>
        
        </div>
      </header>
      <h1>Список продуктов</h1>
      <section>
        <div className='card-sect'> 
      <Cards />
      </div>
    </section>
    </div >
  );
}





export default App;
