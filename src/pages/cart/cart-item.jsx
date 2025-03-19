import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function CartItem({ product }) {
  const { id, productImage, productName, price } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useContext(ShopContext);

  return (
    <div className="flex items-center gap-6 p-4 border rounded-lg shadow-md bg-white">
      <img
        src={productImage}
        alt={productName}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <p className="text-lg font-semibold text-gray-800">{productName}</p>
        <p className="text-gray-600 font-medium">₹{price}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => removeFromCart(id)}
          className="w-8 h-8 flex items-center justify-center text-white bg-red-500 hover:bg-red-600 rounded-md"
        >
          -
        </button>
        <input
          type="text"
          value={cartItems[id]}
          className="w-12 text-center border rounded-md"
          onChange={(e) => updateCartItem(Number(e.target.value), id)}
        />

        <button
          onClick={() => addToCart(id)}
          className="w-8 h-8 flex items-center justify-center text-white bg-green-500 hover:bg-green-600 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
}
