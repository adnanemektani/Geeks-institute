/*
db.users.insertOne({
  name: "Yasmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
})
{
  acknowledged: true,
  insertedId: ObjectId('69b3ef63ca20a4733f7f7769')
}
db.users.find().pretty()
{
  _id: ObjectId('69b3ef63ca20a4733f7f7769'),
  name: 'Yasmine',
  email: 'yasmine@tech.ma',
  address: {
    city: 'Casablanca',
    country: 'Morocco',
    postalCode: '20000'
  }
}
db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("69b3ef63ca20a4733f7f7769") 
})
{
  acknowledged: true,
  insertedId: ObjectId('69b3f055ca20a4733f7f776a')
}
db.orders.find().pretty()

*/
// Embedding (Address): High performance (1 Read), but has a 16MB limit. Use for data that is "part of" the parent.
//Referencing (Orders): More flexible, prevents huge documents. Use for One-to-Many relationships that grow over time.