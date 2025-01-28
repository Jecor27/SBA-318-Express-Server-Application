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
//grabbing all phrases
router.get('/', (req, res) => {
    res.json(data.jokes);

});
//grabbing any available users
router.get('/users', (req, res) => {
    
    res.json(data.users)
});


router.get('/jokes/:id', (req, res) => {
    const joke = data.jokes.find(j => j.id == req.params.id);
    if (!joke) return res.status(404).json({ error: 'Joke not found' });

    res.json(joke);
    res.json({ messg: 'GET a single phrase' })
})

//post a new joke
router.post('/jokes', (req, res) => {
    const newJoke = {
        id: data.jokes.length + 1,
        content: req.body.joke
    }
    data.jokes.push(newJoke);
    res.status(201).json(newJoke);
    //res.json({ messg: 'POST a new phrase' })
})

router.delete('/jokes/:id', (req, res) => {
    res.json({ messg: 'DELETE a phrase' })
})

router.patch('/jokes/:id', (req, res) => {
    res.json({ messg: 'UPDATE a phrase' })
})

module.exports = router