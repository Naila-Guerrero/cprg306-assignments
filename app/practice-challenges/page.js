import StateEventsLab from "./stateLab"
import Header from "../Header";

export default function Page(){
  return(
    <div>
      <header className="w-full "><Header/></header>
      <main>
        <StateEventsLab/>
      </main>
    </div>
  )
}
