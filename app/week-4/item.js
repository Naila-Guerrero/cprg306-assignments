import React from "react";
import items from "./items.json"

export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-100 p-4 rounded-md shadow text-black max-w-xl text-center">
      <p className="font-semibold">{name}</p>
      <p className="">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500">{category}</p>
    </li>
  );
}
