import { Post } from "@/models/post";
import { User } from "@/models/user"; // Import the User model
import { connectToDB } from "@/utils/database";

export const POST = async (req: any) => {
  const { perPage, search } = await req.json();

  try {
    await connectToDB();
    let posts: any;
    let count: number;

    if (search === "") {
      count = await Post.countDocuments();
      posts = await Post.find().sort({ createdAt: -1 }).skip(0).limit(perPage).populate("creator");
    } else {
      const regexSearch = { $regex: search, $options: "i" };

      // Fetch user objects based on username search
      const users = await User.find({ username: regexSearch });

      // Create an array of user ObjectIds from fetched user objects
      const userIds = users.map((user) => user._id);

      // Use $in operator to search for posts with matching user ObjectIds
      count = await Post.countDocuments({
        $or: [{ prompt: regexSearch }, { tags: regexSearch }, { creator: { $in: userIds } }],
      });

      posts = await Post.find({
        $or: [{ prompt: regexSearch }, { tags: regexSearch }, { creator: { $in: userIds } }],
      })
        .skip(0)
        .limit(perPage)
        .populate("creator");
    }

    return new Response(JSON.stringify({ posts, count }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get posts", { status: 500 });
  }
};
