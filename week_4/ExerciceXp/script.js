db.students.insertMany([
  { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
  { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Marcus", age: 24, city: "New York", major: "AI" }
])
/*
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69b3e39f956a23286830a370'),
    '1': ObjectId('69b3e39f956a23286830a371'),
    '2': ObjectId('69b3e39f956a23286830a372'),
    '3': ObjectId('69b3e39f956a23286830a373'),
    '4': ObjectId('69b3e39f956a23286830a374')
  }
}*/

db.students.find().pretty()
/*
{
  _id: ObjectId('69b3e39f956a23286830a370'),
  name: 'Yassine',
  age: 19,
  city: 'Rabat',
  major: 'AI'
}
{
  _id: ObjectId('69b3e39f956a23286830a371'),
  name: 'Sophia',
  age: 26,
  city: 'Paris',
  major: 'Cybersecurity'
}
{
  _id: ObjectId('69b3e39f956a23286830a372'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69b3e39f956a23286830a373'),
  name: 'Elena',
  age: 31,
  city: 'Madrid',
  major: 'Data Science'
}
{
  _id: ObjectId('69b3e39f956a23286830a374'),
  name: 'Marcus',
  age: 24,
  city: 'New York',
  major: 'AI'
}

*/
db.students.find({ age: { $gte: 18, $lte: 25 } })
/*
{
  _id: ObjectId('69b3e39f956a23286830a370'),
  name: 'Yassine',
  age: 19,
  city: 'Rabat',
  major: 'AI'
}
{
  _id: ObjectId('69b3e39f956a23286830a372'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69b3e39f956a23286830a374'),
  name: 'Marcus',
  age: 24,
  city: 'New York',
  major: 'AI'
}*/

db.students.updateOne({ name: "Yassine" }, { $set: { city: "Casablanca" } })
/*{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}*/
db.students.deleteOne({ name: "Sophia" })
/*{
  acknowledged: true,
  deletedCount: 1
}*/
db.students.updateMany({ major: "AI" }, { $set: { major: "Generative AI" } })
/*{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}*/
db.students.find().pretty()
/*
{
  _id: ObjectId('69b3e39f956a23286830a370'),
  name: 'Yassine',
  age: 19,
  city: 'Casablanca',
  major: 'Generative AI'
}
{
  _id: ObjectId('69b3e39f956a23286830a372'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69b3e39f956a23286830a373'),
  name: 'Elena',
  age: 31,
  city: 'Madrid',
  major: 'Data Science'
}*/
