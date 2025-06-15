const mongoose = require('mongoose');

main().then(() =>{
    console.log("connection successful");
})
.catch((err) =>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:  String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);

User.findOneAndUpdate({name: "om" },{email:"om@gmail.com"},{new: true})
.then((res)=>{
    console.log(res)
}).catch((err) =>{
    console.log(err)
});

// User.find({age : {$gte : 40}})
//    .then((res) => {
//     console.log(res);
//    }).catch((err) =>{
//     console.log(err);
//    });

// const user2 = new User({
//     name : "Ram",
//     email : "ram@gmail.com",
//     age : 40,
// });

// user2.save()
//    .then((res)=>{
//        console.log(res)
//    }).catch((err) =>{
//        console.log(err)   
//    });

// User.insertMany([
//     {name:"ram",email:"ram@gmail.com",age:50},
//     {name:"om",email:"om@gmail.com",age:40},
//     {name:"joy",email:"joy@gmail.com",age:30},
//     {name:"rock",email:"rock@gmail.com",age:60},
// ]).then((data) =>{
//     console.log(data)
// });