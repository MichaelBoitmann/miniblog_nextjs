import Image from "next/image";
import styles from "./page.module.css";

export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api", {
    next: { revalidate: 6000 }
  });
  const data = response.json();
  console.log(data);


  return (
    <main className={styles.main}>
      Home
    </main>
  );
}
