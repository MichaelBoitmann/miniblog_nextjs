"use client"

import { useRouter } from "next/navigation"
import styles from "./SignUp.module.css"
import Link from 'next/link'

export default function SignUpPage() {
  const router = useRouter()

  async function submitData(event: React.SyntheticEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name'))
    const email = String(formData.get('email'))
    const data = {name, email}
    if (name && email) {
      await fetch('http://localhost:3000/api/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      router.push("/")
    }
  }




  return (
    <div className={styles.page}>
      <form onSubmit={submitData}>
        <h1>Sign Up</h1>
        <input name="name" placeholder="Name" type="text" />
        <input name="email" placeholder="Email Address" type="email" />
        <button type="submit">Sign Up</button>
        <Link className={styles.back} href="/">or Cancel</Link>
      </form>
    </div>
  )
}