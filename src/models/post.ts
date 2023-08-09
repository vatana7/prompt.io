import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tags: {
    type: String,
    required: [true, "Tag is required!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = models.Post || model("Post", PostSchema);

export { Post };
