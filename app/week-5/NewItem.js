"use client";
import { useState } from "react";

export default function NewItem() {
  // State
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 text-black"
    >

      <div>
        <label className="block text-sm font-medium mb-1">
          Item Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b69ccf]"
        />
      </div>

  
      <div className="flex gap-4">
        
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b69ccf]"
          />
        </div>
    
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b69ccf]"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

      </div>

      <button
        type="submit"
        className="w-full bg-[#b69ccf] text-black py-2 rounded-md transition hover:bg-[#442b63]  hover:text-white font-semibold"
      >
        +
      </button>
    </form>
  );
}
