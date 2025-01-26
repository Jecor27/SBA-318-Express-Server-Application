const express = require('express')
//app.set('view engine', 'ejs');

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ messg: 'GET all phrases' })

});


router.get('/:id', (req, res) => {
    res.json({ messg: 'GET a single phrase' })
})

router.post('/', (req, res) => {
    res.json({ messg: 'POST a new phrase' })
})

router.delete('/:id', (req, res) => {
    res.json({ messg: 'DELETE a phrase' })
})

router.patch('/:id', (req, res) => {
    res.json({ messg: 'UPDATE a phrase' })
})

module.exports = router