const express = require('express')
//app.set('view engine', 'ejs');

const router = express.Router()

const data = {
    jokes: [{
        id: 1,
        content:" Why don’t eggs tell jokes? Because they might crack up."
    }],
    users: [{
        id: 1,
        name: "Jesus mcduffle",
        email: "example@example.com"
    }],
}

router.get('/', (req, res) => {
    res.json({ messg: 'GET all phrases' })

});


router.get('/:id', (req, res) => {
    res.json({ messg: 'GET a single phrase' })
})

router.post('/jokes', (req, res) => {
    const newJoke = {
        id: data.jokes.length + 1,
        content: req.body.joke
    }
    data.jokes.push(newJoke);
    res.status(201).json(newJoke);
    //res.json({ messg: 'POST a new phrase' })
})

router.delete('/:id', (req, res) => {
    res.json({ messg: 'DELETE a phrase' })
})

router.patch('/:id', (req, res) => {
    res.json({ messg: 'UPDATE a phrase' })
})

module.exports = router