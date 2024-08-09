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

export async function DELETE(request: Request, { params }: Params) {
  const postId = Number(params.postId)
  await prisma.post.delete({
    where: {
      id: postId
    },
  });
  return new Response("success", { status: 200 })
}