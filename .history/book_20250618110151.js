const mongoose = require('mongoose');

main().then(() =>{
    console.log("connection successful");
})
.catch((err) =>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true,
    },
    author: {
        type:String
    },
     price:{
       type :Number,
       min: 1,
    },
     discount:{
        type:Number,
        default: 0, 
     },
     category: {
        type: String,
        enum : ["fiction", "non-fiction"]
     }
});

const book = mongoose.model("book",bookSchema);

// book.findByIdAndUpdate("68512e2bc15a95586bc093b5",{price:-100}, {runValidators: true})
// .then((res) =>{
//     console.log(res)
// })
//   .catch((err) =>{
//     console.log(err.errors.price.properties.message);
//   });

let book1 = new book({  
    title:"Rich",
    author:"joy",
    price:750,
    disccount:50,
    category:"fiction",
});

book1.save()
.then((res) => {
    console.log(res)
}).catch((err) =>{
    console.log(err)
});
