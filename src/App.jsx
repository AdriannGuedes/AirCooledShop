
import Cart from './components/Cart/cart';
import Header from './components/Header/header';
import Products from './components/Products/products';
import Provider from './context/provider';
import './index.css';

function App() {
  return (
    <div>
      <Provider>
        <Header />
        <Products />
        <Cart />
      </Provider>


    </div>
  );
}

export default App;
