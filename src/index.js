require("dotenv").config()
const express = require("express");
const { connectMongo } = require("./db/connection");
const { postsRouter } = require("./Routers/postsRouter");
const { errorHandler } = require("./helpers/apiHelpers");

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use("/api/posts", postsRouter);
app.use(errorHandler);



const start = async () => {
   try {
      await connectMongo()

      app.listen(PORT, (err) => {
         if (err) console.log(`Server works at port ${PORT}`);
      })
   } catch (error) {
      console.error(`Error to launch, ${error.message}`);
   }
}

start();