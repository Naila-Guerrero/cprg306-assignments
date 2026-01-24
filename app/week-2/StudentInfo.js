import Link from "next/link"

export default function StudentInfo() {
    return(
        <section>
            <h1>Student Information</h1>
            <h2>Student name: Naila Guerrero </h2>
            <Link href= "https://github.com/Naila-Guerrero/cprg306-assignments" className="text-center font-semibold"> <strong>Super cool and awesome repo</strong> </Link>
        </section>
    )
}