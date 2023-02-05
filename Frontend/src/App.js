import './App.css';
import Nav from './Navbar/Navbar'
import Summary from './Summary/Summary'
import Products from './Operation/AllProduct';
function App() {
  return (
    <>
    <Nav />
    <div className="screen">
      <Summary />
      <Products />
    </div>
    </>
  );
}

export default App;
