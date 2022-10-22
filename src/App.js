
import Cart from './components/cart/Cart';
import LevelCategory from './components/levelCategory/LevelCategory';
import Navbar from './components/navbar/Navbar';
import TypeCategory from './components/typeCategory/TypeCategory';
import DigimonProducts from './pages/DigimonProducts/DigimonProducts';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <DigimonProducts/>
    <LevelCategory></LevelCategory>
    <TypeCategory></TypeCategory>
    {/* <Cart></Cart> */}
    </>
  );
}

export default App;
