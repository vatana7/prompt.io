import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

export const GET = async (request: any) => {
  const params = new URL(request.url).searchParams;
  const postId = params.get("id");

  try {
    await connectToDB();

    const response = await Post.findByIdAndDelete(postId);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get prompts", { status: 500 });
  }
};
