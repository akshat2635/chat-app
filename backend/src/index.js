import express from "express"
import authRoutes from "./routes/auth.js";

const app=express();
const PORT=5000;

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});
