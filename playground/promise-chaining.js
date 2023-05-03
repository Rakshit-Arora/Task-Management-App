require('../src/db/moongose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('643c67f52b23a51c437ce576', {age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.findByIdAndUpdate({age})

    return count
}

updateAgeAndCount('643c67f52b23a51c437ce576', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})