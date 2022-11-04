const express=require('express')

const app=express()


app.get('/',(req,res)=>{
   res.status(200).json({message:'Welcome to AI Store Manager V1.0'})
})

app.listen(4000,()=>{
    console.log('Server is listening on port 4000')
})