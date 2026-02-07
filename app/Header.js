"use client";
import Link from "next/link"

export default function Header(){
    return(
        <div className="mb-5 bg-[#b69ccf] w-full flex justify-around p-5 rounded-md items-center hover:text-[#442b63] ">
            <Link href = "/">
                <span className="text-2xl transition-colors text-white hover:text-[#442b63]"> 
                CPRG 306: Web Development 2 - Assignments
                </span>
            </Link>
            <Link href="https://github.com/Naila-Guerrero/cprg306-assignments">
            <img className="rounded-full size-[55] hover:border-[#442b63]" src="/lemres.jpeg" alt="github image"/>
            </Link>
        </div>
    )
}

