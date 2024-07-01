import express from 'express';
import userRoutes from './src/features/user/routes/user.routes.js';
import postRoutes from './src/features/post/routes/post.routes.js';
import commentRoutes from './src/features/comment/routes/comment.routes.js';

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res)=>{
    res.send("welcome to postaway app");
})

export default app;