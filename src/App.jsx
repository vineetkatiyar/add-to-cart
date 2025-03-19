import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ShopPage} from "./pages/shop/shop"
import { ShopContextProvider } from "./context/shop-context";
import { Cart } from "./pages/cart/cart";
import { Navbar } from "../src/components/navbar";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Navbar />
          <main className="flex-1 container mx-auto p-4">
            <Routes>
              <Route path="/" element={<ShopPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
