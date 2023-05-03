require('../src/db/moongose')
const tasks = require('../src/models/task.js')

// tasks.findByIdAndDelete('64417d91a6c1e708b74c1338').then((task) => {
//     console.log(task)
//     return tasks.countDocuments({complete:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await tasks.findByIdAndDelete(id)
    const count = await tasks.countDocuments({completed: true})

    return count
}

deleteTaskAndCount('643c5f0888cb4119b957e052').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})