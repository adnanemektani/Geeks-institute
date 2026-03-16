const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/collegeDB")
  .then(() => console.log(" Connection Successful!"))
  .catch((err) => console.error(" Connection Failed:", err));

const userShema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model("User", userShema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const post = mongoose.model("Post", postSchema);

const run = async () => {
  const admin = await User.create({ name: "Lina" });
  await post.create({ title: "Mongoose is Awesome", author: admin._id });
  const postWithData = await post
    .findOne8({ title: "Mongoose s Awesome" })
    .populate("author");
  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`);
};
