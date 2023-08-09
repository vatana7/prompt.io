import { Post } from "@/models/post";
import { User } from "@/models/user"; // Import the User model
import { connectToDB } from "@/utils/database";

export const GET = async (request: any) => {
  const params = new URL(request.url).searchParams;
  const username = params.get("username");

  try {
    await connectToDB();

    // Find the user with the specified username
    const user = await User.findOne({ username });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Find posts using the user's ObjectId
    const response = await Post.find({ creator: user._id }).sort({ createdAt: -1 }).populate("creator");

    return new Response(JSON.stringify({ response, user }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get posts", { status: 500 });
  }
};
