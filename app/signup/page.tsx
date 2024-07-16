import styles from "./SignUp.module.css"

export default function SignUpPage() {
  return (
    <div>
      <form action="">
        <h1>Sign Up</h1>
        <input name="name" placeholder="Name" type="text" />
        <input name="email" placeholder="Email Address" type="email" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}