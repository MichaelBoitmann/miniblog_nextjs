  "use client"

import { Post, User } from "@prisma/client"
import Markdown from "markdown-to-jsx"
import styles from "./PostDetails.module.css"

type Props = Post & {
  author: User | null
}

export default function PostDetails({ id, author, title, content, published }: Props) {
  async function publishPost(postId: number) {
    await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT"
    })
  }

  return (
    <main>
      <h1>{published ? title : `${title} (Draft)`}</h1>
      <p>by {author?.name || "anonymous"}</p>
      <section className={styles.section}>
        <Markdown>{content || ""}</Markdown>
      </section>
      {!published && <button className={styles.button} onClick={() => publishPost(id)}>Publish</button>}
      <button className={styles.button}>Delete</button>
    </main>
  )
}