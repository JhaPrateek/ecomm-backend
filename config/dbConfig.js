const mongoose=require("mongoose")



const config={
    connect:()=>{
        mongoose.connect(process.env.DB_URL).then((response)=>{
            console.log(`DB connected successfully: ${response}`);
        }).catch((err)=>{
            console.log(`something went wrong `,err);
        })
    }
}

module.exports=config;