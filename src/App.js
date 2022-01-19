import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showingCartModal, setShowingCartModal] = useState(false);
  const showCartModal = () => {
    setShowingCartModal(true);
  };
  const closeCartModal = () => {
    setShowingCartModal(false);
  };

  return (
    <CartProvider>
      {showingCartModal && <Cart onModalClose={closeCartModal} />}
      {!showingCartModal && (
        <>
          <Header onModalOpen={showCartModal} />
          <main>
            <Meals />
          </main>
        </>
      )}
    </CartProvider>
  );
}

export default App;
