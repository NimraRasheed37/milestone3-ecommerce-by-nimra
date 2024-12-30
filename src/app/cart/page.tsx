"use client";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";  // Import the trash icon

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const [orderNotes, setOrderNotes] = useState("");
  const router = useRouter(); // Router to navigate to checkout

  useEffect(() => {
    console.log("Cart Items:", cartItems); // Debugging
  }, [cartItems]);

  const handleQuantityChange = (id: number, category: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartQuantity(id, category, quantity);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const priceString = item.price.replace('$', '').trim();
      const price = parseFloat(priceString);

      if (isNaN(price)) {
        console.error(`Invalid price for item with title: ${item.title}`, item.price);
        return total; // Skip this item if the price is invalid
      }

      return total + price * item.quantity;
    }, 0);
  };

  const calculateTotalWithShipping = () => {
    const subtotal = calculateSubtotal();
    const shippingCharge = 5; 
    return subtotal + shippingCharge;
  };

  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="flex flex-col min-h-screen text-black bg-gray-50 w-[90%] md:w-[80%] mx-auto">
      <main className="flex-grow container mx-auto px-4 py-6">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-medium">Your cart is empty!</h2>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-8  text-center text-red-700"> Your Cart</h2>
            <div className="overflow-x-auto ">
              <table className="table-auto w-full border-collapse border border-black">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border border-black bg-red-500 text-white">Product</th>
                    <th className="p-4 border border-black bg-red-500 text-white">Quantity</th>
                    <th className="p-4 border border-black bg-red-500 text-white">Total</th>
                    <th className="p-4 border border-black bg-red-500 text-white"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={`${item.id}-${item.title}-${item.category}`}>
                      <td className="flex flex-col md:flex-row items-center p-2 border-b border-black">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="w-14 h-14 object-cover mr-4"
                        />
                        <div className="mt-2 md:mt-0">
                          <h3 className="font-semibold text-sm md:text-lg">{item.title}</h3>
                        </div>
                      </td>
                      <td className="text-center p-4 border border-black">
                        <div className="flex items-center justify-center text-[10px] md:text-lg">
                          {/* Decrease Quantity */}
                          <button
                            onClick={() => handleQuantityChange(item.id, item.category, item.quantity - 1)}
                            className="w-4 h-4 md:w-8 md:h-8 text-center border border-black rounded-l-lg bg-gray-100 hover:bg-red-600 hover:text-white"
                          >
                            -
                          </button>
                          
                          {/* Quantity Input */}
                          <input
                            type="number"
                            value={item.quantity && !isNaN(item.quantity) ? item.quantity : 1}
                            onChange={(e) => handleQuantityChange(item.id, item.category, parseInt(e.target.value) || 1)}
                            className="w-4 h-4 md:w-8 md:h-8 text-center text-black border-t border-b border-red-900"
                          />
                          
                          {/* Increase Quantity */}
                          <button
                            onClick={() => handleQuantityChange(item.id, item.category, item.quantity + 1)}
                            className="w-4 h-4 md:w-8 md:h-8 text-center border border-black rounded-r-lg  hover:bg-red-700 hover:text-white"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-center p-4 border text-[10px] font-semibold md:text-lg border-black">
                        {(() => {
                          const priceString = item.price.replace('$', '').trim();
                          const price = parseFloat(priceString);
                          const quantity = item.quantity && !isNaN(item.quantity) ? item.quantity : 1;

                          if (isNaN(price) || isNaN(quantity)) {
                            return '0.00';
                          }

                          return `${(price * quantity).toFixed(2)} PKR`;
                        })()}
                      </td>
                      <td className="text-center p-4 border border-black">
                        {/* Trash Icon Button */}
                        <button
                          onClick={() => removeFromCart(item.id, item.category)}
                          className="text-red-500 hover:text-red-700 "
                        >
                          <FaTrash size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <label
                htmlFor="order-notes"
                className="block text-lg font-medium mb-2"
              >
                Special instructions
              </label>
              <textarea
                id="order-notes"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full p-4 border border-black rounded-lg"
                placeholder="Add any special instructions for your order..."
              />
            </div>

            <div className="flex justify-between items-center mt-8 flex-wrap">
              <div>
                <p className="md:text-xl text-lg font-semibold">
                  Subtotal: {calculateSubtotal().toFixed(2)} PKR
                </p>
                <p className="md:text-xl text-lg font-semibold">
                  Shipping: 250 PKR
                </p>
                <p className="md:text-xl text-lg font-semibold mb-5">
                  Total: {calculateTotalWithShipping()} PKR
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-red-600 text-white md:px-6 md:py-3 px-3 py-5 rounded-lg text-lg font-medium hover:bg-black hover:shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
