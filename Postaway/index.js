import express from 'express';
import userRoutes from './src/features/user/routes/user.routes.js';
import postRoutes from './src/features/post/routes/post.routes.js';

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res)=>{
    res.send("welcome to postaway app");
})

export default app;