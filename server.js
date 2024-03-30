require("dotenv").config()
const express=require("express")

const app=express()

app.get("/health",(req,res)=>{
    res.json({"hello":"world"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started at PORT ${process.env.PORT}`);
})