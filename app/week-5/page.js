import Header from "../Header";
import NewItem from "./NewItem";

export default function Page(){
  return(
    <div>
      <header className="w-full "><Header/></header>
      <main>
        <NewItem/>
      </main>
    </div>
  )
}