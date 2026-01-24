import Link from "next/link"

export default function StudentInfo() {
    return(
        <section>
            <h1>Student Information</h1>
            <h2>Student name: Naila Guerrero </h2>
            <Link href="https://github.com/Angel-IglesiasP/cprg306-assignments" className="text-center font-semibold"> <strong>Here is my repo!</strong> </Link>
        </section>
    )
}