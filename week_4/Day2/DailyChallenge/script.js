
// -- Step 1

db.users.insertOne({
  username: "YasmineDev",
  bio: "Fullstack Developer & AI Enthusiast",
  socialLinks: {
    twitter: "@yasmine_dev",
    github: "yasmine-git",
    linkedin: "linkedin.com/in/yasmine"
  }
});


const authorId = db.users.findOne({ username: "YasmineDev" })._id;



db.posts.insertOne({
  title: "Why I Love MongoDB",
  body: "Schema flexibility is a game changer...",
  authorId: authorId, 
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      user: "CodeMaster",
      text: "Great article! Very clear.",
      date: new Date()
    }
  ]
});



db.posts.updateOne(
  { title: "Why I Love MongoDB" },
  { 
    $push: { 
      comments: { 
        user: "TechExplorer", 
        text: "I agree, embedding is king for performance!", 
        date: new Date() 
      } 
    } 
  }
);



db.posts.find({ title: "Why I Love MongoDB" }).pretty();


/**
 *  THE DESIGN DEFENSE (Explanation for the Prof)
 * -----------------------------------------------------------
 * 1. User Info (Referencing): Allows updating profile details in one place.
 * 2. Comments (Embedding): Optimized for "Read" performance—fetching post + comments in 1 hit.
 * 3. Social Links (Embedding): Data belongs strictly to the parent (User).
 * *  WARNING: If comments exceed 16MB (viral post), we must move them 
 * to a separate collection using Referencing.
 */