require("dotenv").config()
const express = require("express");
const { connectMongo } = require("./db/connection");
const { postsRouter } = require("./Routers/postsRouter")

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use("/api/posts", postsRouter);

app.use((error, req, res, next) => {
   res.status(500).json({ message: error.message })
});

const start = async () => {
   try {
      await connectMongo()

      app.listen(PORT, (err) => {
         if (err) console.error("Error at the server lanuch", err);
         console.log(`Server works at port ${PORT}`);
      })
   } catch (error) {
      console.error(`Error to lounch, ${error.message}`);
   }
}

start();