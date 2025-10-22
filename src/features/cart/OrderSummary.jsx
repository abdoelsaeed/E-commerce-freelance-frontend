import { useState } from "react";
import { createOrder } from "../../services/orderApi";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function OrderSummary({ totalPrice }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleCreateOrder() {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill in all fields before checking out.");
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        customer_name: form.name,
        customer_phone: form.phone,
        address: form.address,
      };

      await createOrder(orderData);
      setSuccessMsg("✅ Order created successfully!🎉");

      // window.location.href = `/order/${order.id}`;
      setTimeout(()=>window.location.href = `/`,1000) 
    } catch (err) {
      console.error("Order creation failed", err);
      alert("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:w-1/1 flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Order Summary
        </h2>
        {successMsg && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            className="mb-4"
          >
            {successMsg}
          </Alert>
        )}
        {/* Form Inputs */}
        <div className="space-y-4 mb-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4F954F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4F954F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4F954F] resize-none"
              rows="3"
            ></textarea>
          </div>
        </div>

        {/* Summary */}
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal</span>
          <span>{totalPrice.toFixed(2)} EGP</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Shipping</span>
          <span>0 EGP</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900 text-lg mt-4 border-t pt-3">
          <span>Total</span>
          <span>{totalPrice.toFixed(0)} EGP</span>
        </div>

        <button
          className="w-full bg-[#4F954F] text-white py-3 mt-6 rounded-xl hover:bg-[#3E7A3E] transition-colors duration-200 disabled:opacity-60"
          disabled={loading}
          onClick={handleCreateOrder}
        >
          {loading ? "Processing..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
