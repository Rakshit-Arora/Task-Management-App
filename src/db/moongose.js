const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name:{
//         type: String,
//         require: true,
//         trim: true
//     },
//     email:{
//         type: String, 
//         require: true, 
//         trim: true, 
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value))
//             {
//                 throw new Error('Email must be provided!!')
//             }
//         }
//     },
//     age:{
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0)
//             throw new Error('Age must be a positive Number!!')
//         }
//     },
//     password:{
//         type: String, 
//         required: true,
//         minLength: 7, 
//         trim: true, 
//         validate(value){
//             if(value.toLowerCase().includes('password'))
//             throw new Error('Password should not be equal to password!!')
//         }
//     }
// })

// const me = new User({
//     name: '    Rakshit   ',
//     email: 'RAkShItArOrA@gmail.coM',
//     password: '12345678'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const tasks = mongoose.model('tasks', {
//     description:{
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     }
// })

// const des = new tasks({
//     description: 'hello',
//     completed: true
// })

// des.save().then(() => {
//     console.log(des)
// }).catch((error) => {
//     console.log('Error!', error)
// })