import { redirect } from "next/navigation"
import styles from "./SignUp.module.css"
import Link from 'next/link'
import prisma from "@/lib/prisma"

export default function SignUpPage() {

  async function submitAction(formData: FormData) {
    "use server"
    const name = String(formData.get('name'))
    const email = String(formData.get('email'))
    const data = {name, email}
    if (name && email) {
      await prisma.user.create({ data })
      redirect('/')
    }  
  }
  // async function submitData(event: React.SyntheticEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   const name = String(formData.get('name'))
  //   const email = String(formData.get('email'))
  //   const data = {name, email}
  //   if (name && email) {
  //     await fetch('http://localhost:3000/api/signup', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     router.push("/")
  //   }
  // }
  return (
    <div className={styles.page}>
      <form action={submitAction}>
        <h1>Sign Up</h1>
        <input name="name" placeholder="Name" type="text" />
        <input name="email" placeholder="Email Address" type="email" />
        <button type="submit">Sign Up</button>
        <Link className={styles.back} href="/">or Cancel</Link>
      </form>
    </div>
  )
}