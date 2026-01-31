import React from "react";

export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="grid grid-cols-[auto_220px_120px] items-center py-2 border-b border-gray-200">
      <span className="font-medium">
        {name}
      </span>

      <span>
        Qty: {quantity}
      </span>

      <span className="text-right">
        <span>
          {category}
        </span>
      </span>
    </li>
  );
}