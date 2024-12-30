'use client';
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  title: string;
  price: string;
  quantity: number;
}

interface UserDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVV: string;
}

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipmentCharges = 250;

  const calculateSubtotal = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => {
      const priceString = item.price.replace("$", "").trim();
      const price = parseFloat(priceString);

      if (isNaN(price)) {
        console.error(`Invalid price for item with title: ${item.title}`, item.price);
        return total;
      }

      return total + price * item.quantity;
    }, 0);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserDetails
  ): void => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePlaceOrder = (): void => {
    const emptyFields = Object.keys(userDetails).filter(
      (key) => userDetails[key as keyof UserDetails].trim() === ""
    );

    if (emptyFields.length > 0) {
      alert("Please fill out all the fields in the form.");
      return;
    }
    if (userDetails.phone.length !== 11) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    if (userDetails.cardNumber.length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (userDetails.cardCVV.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    clearCart();
    setUserDetails({
      name: "",
      phone: "",
      address: "",
      city: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    });
    setOrderPlaced(true);
  };

  return (
    <div
      className="p-8 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/img/red-bg.jpeg')" }}
    >
      {orderPlaced ? (
        <div className="text-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <Image
            src="/img/logo/Ababeel (4).png"
            alt="Logo"
            width={150}
            height={50}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-red-800">Order placed successfully!</h2>
          <p className="mt-4">Thank you for shopping with us.</p>
          <Link href="/">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-700 mt-6 w-full">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <form
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
          onSubmit={(e) => {
            e.preventDefault();
            handlePlaceOrder();
          }}
        >
          <Image
            src="/img/logo/Ababeel (4).png"
            alt="Logo"
            width={150}
            height={50}
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-red-800 text-center mb-6">Checkout</h2>

          {/* User Details */}
          <div>
            <label className="block mb-2 text-red-900 font-bold">Name</label>
            <input
              type="text"
              value={userDetails.name}
              onChange={(e) => handleFormChange(e, "name")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="Your Name"
            />
            <label className="block mb-2 text-red-900 font-bold">Phone</label>
            <input
              type="text"
              value={userDetails.phone}
              onChange={(e) => handleFormChange(e, "phone")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="Your Phone (11 digits)"
            />
            <label className="block mb-2 text-red-900 font-bold">Address</label>
            <input
              type="text"
              value={userDetails.address}
              onChange={(e) => handleFormChange(e, "address")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="Your Address"
            />
            <label className="block mb-2 text-red-900 font-bold">City</label>
            <input
              type="text"
              value={userDetails.city}
              onChange={(e) => handleFormChange(e, "city")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="Your City"
            />
          </div>

          {/* Payment Details */}
          <h3 className="text-lg font-bold text-red-800 mt-6 mb-4">Payment Details</h3>
          <div>
            <label className="block mb-2 text-red-900 font-bold">Card Number</label>
            <input
              type="text"
              value={userDetails.cardNumber}
              onChange={(e) => handleFormChange(e, "cardNumber")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="Your Card Number"
            />
            <label className="block mb-2 text-red-900 font-bold">Expiry Date</label>
            <input
              type="text"
              value={userDetails.cardExpiry}
              onChange={(e) => handleFormChange(e, "cardExpiry")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="MM/YY"
            />
            <label className="block mb-2 text-red-900 font-bold">CVV</label>
            <input
              type="text"
              value={userDetails.cardCVV}
              onChange={(e) => handleFormChange(e, "cardCVV")}
              className="w-full border-gray-300 border rounded-lg p-2 mb-4 shadow-sm"
              placeholder="CVV"
            />
          </div>

          {/* Total */}
          <div className="mt-6">
            <p className="font-bold text-red-900">Subtotal: {calculateSubtotal().toFixed(2)} PKR</p>
            <p className="font-bold text-red-900">Shipment: {shipmentCharges.toFixed(2)} PKR</p>
            <p className="font-bold text-lg text-red-800 mt-4">
              Total:  {(calculateSubtotal() + shipmentCharges).toFixed(2)} PKR
            </p>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 rounded-lg mt-6 hover:bg-red-700"
          >
            Place Order
          </button>
          <Link href="/">
            <button
              type="button"
              className="w-full bg-gray-300 text-gray-800 font-bold py-2 rounded-lg mt-4 hover:bg-gray-400"
            >
              Continue Shopping
            </button>
          </Link>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
