/*use ecomart_db

db.products.insertMany([
  { name: "Solar Power Bank", category: "Electronics", price: 45, stock: 100 },
  { name: "Bamboo Toothbrush", category: "Home", price: 5, stock: 50 },
  { name: "Recycled Notebook", category: "Stationery", price: 12, stock: 3 },
  { name: "LED Smart Bulb", category: "Electronics", price: 25, stock: 8 },
  { name: "Glass Water Bottle", category: "Home", price: 18, stock: 20 }
])

switched to db ecomart_db

db.products.find({ stock: { $lt: 10 } })


db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}


db.products.find().sort({ price: -1 }).limit(1).pretty()
ecomart_db
Selection deleted

*/
