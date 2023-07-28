
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";


import AllCocktails from './AllCocktails';
import RandomCocktail from './RandomCocktail';
import RandomCocktails from './RandomCocktail';


function App() {
  return (
    <div className="App">
      <RandomCocktail />
      <RandomCocktails />
      <AllCocktails />
    </div>
  );
}

export default App;
