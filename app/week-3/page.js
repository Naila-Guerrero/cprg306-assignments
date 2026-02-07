import GroceryItemList from "./GroceryItemList";

export default function Page(){
    return(
    <main className="flex flex-col items-center justify-between">
        <h1>Shopping List</h1>
      <GroceryItemList/>
    </main>
    )
}
