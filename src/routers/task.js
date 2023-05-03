const express = require('express')
const tasks = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

//............................For TASKS Database........................



//                POST(Insert) in Users database

router.post('/tasks', auth, async (req, res) => { 
    // const task = new tasks(req.body)
    const task = new tasks({
        ...req.body,
        owner: req.user._id
    })

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e) {
        res.status(400).send(e)
    }
})


//                GET(Read) in Tasks database
        //Get /tasks?completed=true
        //GET /tasks?limit=10&skip=20
        //GET /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}

    if(req.query.completed)
    {
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy)
    {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try{
        //const task = await tasks.find({owner: req.user._id})
        await req.user.populate({
            path: 'Task',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.Task)
        //res.send(task)
    }catch(e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try{
        const task = await tasks.findOne({_id, owner: req.user._id})

        if(!task)
        {
            return res.status(404).send()
        }

        res.send(task)
    }catch(e) {
        res.status(500).send()
    }
})


//                PATCH(Update) in tasks database

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation)
    {
        return res.status(400).send({error: "Invalid Updates!!"})
    }

    try{
        //const task = await tasks.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        const task = await tasks.findOne({_id: req.params.id, owner: req.user._id})
        
        if(!task)
        {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])

        await task.save()

        res.send(task)
    }catch(e)
    {
        res.status(400).send()
    }
})


//                DELETE(delete) in tasks database

router.delete('/tasks/:id', auth, async (req, res) => {
    try{
        //const task = await tasks.findByIdAndDelete(req.params.id)

        const task = await tasks.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if(!task)
        {
            res.status(404).send()
        }

        res.send(200).send()
    }catch(e)
    {
        res.status(500).send()
    }
})

module.exports = router