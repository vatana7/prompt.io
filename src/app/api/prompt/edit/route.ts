import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

export const POST = async (res: any) => {
  const { id, tags, prompt } = await res.json();
  try {
    await connectToDB;

    //Finding post and replacing tags and prompt
    const post = await Post.findById(id);
    post.tags = tags;
    post.prompt = prompt;

    await post.save();

    return new Response(JSON.stringify({ post }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to edit prompt", { status: 500 });
  }
};
