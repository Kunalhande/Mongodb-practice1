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

User.updateOne({name:"ram"}, {age:10});

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
//     {name:"ram",eamil:"ram@gmail.com",age:50},
//     {name:"om",eamil:"om@gmail.com",age:40},
//     {name:"joy",eamil:"joy@gmail.com",age:30},
//     {name:"rock",eamil:"rock@gmail.com",age:60},
// ]).then((data) =>{
//     console.log(data)
// });