const express =require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */

mongoose.connect("mongodb://localhost:27017/nexusMarket")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err));

/* =========================
   USER MODEL
========================= */

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }
});

const User = mongoose.model("User", userSchema);

/* =========================
   PRODUCT MODEL
========================= */

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  image: String
});

/* Compound index for fast search */
productSchema.index({ category: 1, price: -1 });

const Product = mongoose.model("Product", productSchema);

/* =========================
   ORDER MODEL
   (Avoid 16MB Trap)
========================= */

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);

/* =========================
   GET PRODUCTS
   Infinite Scroll Pagination
========================= */

app.get("/api/products", async (req, res) => {

  try {

    const page = parseInt(req.query.page) || 1;
    const limit = 12;

    const products = await Product.find()
      .select("title price image category")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error: error.message
    });

  }

});

/* =========================
   GET USER
   Error Handling
========================= */

app.get("/api/users/:id", async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});

/* =========================
   CREATE ORDER
========================= */

app.post("/api/orders", async (req, res) => {

  try {

    const { userId, productIds } = req.body;

    const order = await Order.create({
      user: userId,
      products: productIds
    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: "Order creation failed"
    });

  }

});

/* =========================
   GET ORDERS WITH POPULATE
========================= */

app.get("/api/orders", async (req, res) => {

  const orders = await Order.find()
    .populate("user", "name email")
    .populate("products", "title price")
    .lean();

  res.json(orders);

});

/* =========================
   SERVER
========================= */

app.listen(3000, () => {
  console.log("Server running on port 3000");
});