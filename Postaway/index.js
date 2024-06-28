import express from 'express';
import userRoutes from './src/features/user/routes/user.routes.js';

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.get("/", (req, res)=>{
    res.send("welcome to postaway app");
})

export default app;