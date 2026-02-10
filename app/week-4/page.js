import ItemList from "./item-list";
import Header from "../Header";


export default function Page() {
  return (
    <div>
      <header className="w-full "><Header/></header>
      <main className="p-6 justify-center">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <ItemList/>
      </main>
    </div>
  );
}
