import PostDetails from "@/components/PostDetails";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";


interface Props {
  params: {
    postId: string;
  }
}


export default async function PostPage({ params }: Props) {
  console.log(params.postId)
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.postId)
    },
    include: {
      author: true,
    }
  })

  if (!post) {
    notFound();
  }

  return <PostDetails {...post} />
}