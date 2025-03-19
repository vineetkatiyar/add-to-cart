import { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

export function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🛒 Cart</h1>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} product={product} />;
          }
        })}
      </div>
      <div>
        <p>SubTotal : {totalAmount}₹</p>
      </div>
    </div>
  );
}
