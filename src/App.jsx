import { CartProvider } from "./context/cartContext";
import { MenuProvider } from "./context/menuContext";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <MenuProvider>
      <CartProvider>
        <div className="App">
          <h1>카페 주문 시스템 ☕️</h1>
          <MenuList />
          <Cart />
        </div>
      </CartProvider>
    </MenuProvider>
  );
}
