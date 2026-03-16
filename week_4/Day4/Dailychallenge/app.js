const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log(' Connection Successful!'))
  .catch(err => console.error(' Connection Failed:', err));

// --- USER SCHEMA ---
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);

// --- POST SCHEMA ---
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  comments: [{
    text: String,
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    },
    createdAt: { type: Date, default: Date.now }
  }]
});
const Post = mongoose.model('Post', postSchema);

// --- SEED DATA ---
const seedData = async () => {
  const lina = await User.create({ username: 'LinaDev', email: 'lina@test.com' });
  const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

  await Post.create({
    title: "MongoDB Relationships",
    content: "Today we learned about population...",
    author: lina._id,
    comments: [
      { text: "Great post!", author: adam._id }
    ]
  });

  console.log(' Data seeded!');
};

// --- GET FULL FEED ---
const getFullBlogFeed = async () => {
  const feed = await Post.find()
    .populate('author', 'username')
    .populate('comments.author', 'username');
    
  console.log(JSON.stringify(feed, null, 2));
};

// --- RUN ---
const run = async () => {
  await seedData();
  await getFullBlogFeed();
};

run();