
import Cart from './components/cart/Cart';
import LevelCategory from './components/levelCategory/LevelCategory';
import TypeCategory from './components/typeCategory/TypeCategory';
import DigimonProducts from './pages/DigimonProducts/DigimonProducts';

function App() {
  return (
    <>
    <LevelCategory></LevelCategory>
    <TypeCategory></TypeCategory>
    <DigimonProducts/>
    <Cart></Cart>
    </>
  );
}

export default App;
