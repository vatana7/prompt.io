import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

export const POST = async (request: any) => {
  const { userId, prompt, tags } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Post({ prompt, tags, creator: userId, createdAt: Date.now() });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
