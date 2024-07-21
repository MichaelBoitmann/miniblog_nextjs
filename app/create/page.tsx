export default function CreatePostPage() {
  return (
    <main>
      <form>
        <h1>Create Draft</h1>
        <input name="title" placeholder="Title" type="text" />
        <input name="email" placeholder="Author (email adress)" type="email" />
        <textarea name="content" cols={50} rows={8} placeholder="Content" />
        <button type="submit">Create Post</button>
        <Link href="/">or Cancel</Link>
      </form>
    </main>
  )
}