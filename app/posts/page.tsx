interface Props {
  params: {
    postId: string;
  }
}


export default function PostPage({ params}) {
  console.log(params.postId)
  await prima.post.fundUnique({
    where: {
      id: Number(params.postId)
    },
    include: {
      author: true,
    }
  })

  if (!post) {
    notFound()
  }

  return (

    <div>postpage</div>
  )
}