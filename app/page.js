import Link from "next/link"
import Header from "./Header"

export default function Page(){
  return(
    <div className="min-h-screen w-full mx-auto flex flex-col items-center">
      <header className="w-full "><Header/></header>
    <main>
      <ul className="flex flex-col">
        <Link href="week-2" className="text-center"> Week 2 Assignment </Link>
        <Link href="week-3" className="text-center"> Week 3 Assignment </Link>
        <Link href="week-4" className="text-center"> Week 4 Assignment </Link>
        <Link href="practice-challenges" className="text-center">Practice</Link>
        <Link href="week-5" className="text-center"> Week 5 Assignment </Link>
      </ul>
    </main>
    </div>
  )
}
