const express=require('express')
const app=express()
require('dotenv').config()
const mongoose = require('mongoose');


app.use(express.json())
// database connection
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB',{
            serverSelectionTimeoutMS:5000
        });
        console.log('db connected successfully');
        
    } catch (error) {
        console.log(`db not connected. ${error.message}`);
        process.exit(1)
    }
}



const port=process.env.PORT || 5000
app.listen(port,async()=>{
    console.log(`server is running at port : ${port}`);
    await connectDB()
})


app.get('/',async(req,res)=>{
    try {
        const response= await fetch('')
        const result= await response.json()
    
        res.json({
            message:"data fetch successfully",
            data:result
        }) 
    } catch (error) {
        res.json({
            status:false,
            message:error.message,
        }) 
    }

})


// schema
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title field is required'],
        minlength:[3,'title length is less than 3'],
        maxlength:[10,'title length is more than 10'],
        trim:true,
        /*

         validate:{
            validator:function(v){
                return v.length===10
            },
            message:""
        }
        
        */
        
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
})


// model
const Product=mongoose.model('Product',productSchema)

//add products
app.post('/products',async(req,res)=>{

    try {
        const productData=new Product({
            title:req.body.title,
            price:req.body.price,
            description:req.body.description
        })

        const product= await productData.save()

        res.status(201).json({
            status:201,
            message:"data save succssfully",
            data:product
        })

    } catch (error) {
        res.status(500).json(error.message)
    }
})



// get all products
app.get('/products',async(req,res)=>{
    try {

        const price=req.query.price
        let products

        /*find({
            $and:[
                {price:{$gt:price}},
                {rating:{$gt:rating}}
                ]
            })*/

        if(price){
            products=await Product.find({
                price:{$gt:price}
            }).select({createdAt:0,_id:1})
        }else{
            products=await Product.find().select({createdAt:0,_id:1})
        }

        if(products){

            res.status(200).json({
                status:true,
                data:products
            })
        }else{
            res.status(404).json({
                status:false,
                message:'Products not found'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
})


//get single product
app.get('/products/:id',async(req,res)=>{
    try {
        const id=req.params.id

        if(!mongoose.isValidObjectId(id)){
            return  res.status(404).json({
                status:false,
                message:'Product not found'
            })
        }


        const product=await Product.findOne({
            _id:id
        }).select({
            _id:0,
            createdAt:0
        })


        if(product){
            res.status(200).json({
                status:true,
                data:product
            })
        }else{
            res.status(404).json({
                status:false,
                message:'Product not found'
            })
        }
        
    } catch (error) {
         res.status(500).json({
            status:false,
            message:error.message
        })
    }
})


app.delete('/products/:id',async(req,res)=>{
    try {

        if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(404).json({
                status:false,
                message:'products not found'
            })
        }

        const product=await Product.findByIdAndDelete({
            _id:req.params.id
        }).select({createdAt:0})

        if(product){
            res.status(200).json({
                status:true,
                message:'products deleted successfully',
                data:product
            })
        }else{
            return res.status(404).json({
                status:false,
                message:'products not found'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
})



app.put('/products/:id',async(req,res)=>{
    try {
        const id=req.params.id
        if(!mongoose.isValidObjectId(id)){
             return res.status(404).json({
                status:false,
                message:'Product Not Found'
            })
        }
        const updatedProduct=await Product.findByIdAndUpdate({
            _id:id
        },{
            $set:{
                title:req.body.title,
                price:req.body.price,
                description:req.body.description,
                
            }
        },{
            new:true
        }).select({createdAt:0})

        if(!updatedProduct){
            return res.status(404).json({
                status:false,
                message:'Product Not Found'
            })
        }

        res.status(200).json({
            status:true,
            message:'product updated successfully',
            data:updatedProduct
        })
        
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
})
