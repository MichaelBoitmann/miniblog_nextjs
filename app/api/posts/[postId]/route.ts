import prisma from "@/lib/prisma";

interface Params {
  params: {
    postId: string;
  }
}

export async function PUT(request: Request, { params }: Params) {
  const postId = Number(params.postId)
  await prisma.post.update({
    where: {
      id: postId
    }, 
    data: {
      published: true
    }
  })
  return new Response('success', {status: 200 })
}