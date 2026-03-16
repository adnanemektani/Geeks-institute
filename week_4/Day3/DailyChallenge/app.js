const mongoose = require('mongoose');

// The Connection Handshake
mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log(' Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error(' Connection Failed:', err));

  
const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);


//
const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp"
    });
    console.log(" Task Created:", newTask);
  } catch (err) {
    console.error(" Error:", err.message);
  }
};
//
const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log(" Current Tasks:", tasks);
};


// 
const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(taskId, { status: 'completed' });
  console.log(" Task marked as completed!");
};


const noTitleTask = async () => {
  try {
    await Task.create({
      description: "test"
    });
  } catch (err) {
    console.error("Error:", err.message)
  }
}
const wrongStatus = async () => {
  try {
    await Task.create({
      title: "Test task",
      status: "in-progress" // ← hkda
    });
  } catch (err) {
    console.error("Error:", err.message)
  }
}

createTask();
noTitleTask();
wrongStatus();
getAllTasks();