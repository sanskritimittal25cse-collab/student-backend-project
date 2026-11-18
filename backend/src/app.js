import express from "express";
const app = express(); // create an instance of the Express application
app.use(express.json()); // middleware to parse JSON request bodies


import userRoutes from "./routes/user.routes.js"; // import user routes
import postRouter from "./routes/post.route.js"; // import post routes


app.use("/api/v1/users", userRoutes);// use user routes for /api/users endpoint

app.use("/api/v1/posts", postRouter)// use post routes for /api/posts endpoint


export default app;//http://localhost:4000/api/v1/users/register