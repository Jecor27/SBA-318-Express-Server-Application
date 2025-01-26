const express = require("express")
const jokesRoutes = require('./routes/jokes')
const app = express();
app.set('view engine', 'ejs');

const PORT = 8080;

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    let data = {
        name: 'jokesss',
        hobbies: ['playing football', 'playing chess', 'cycling']
    }

    res.render('home', { data: data });
});

app.use('/api/jokes', jokesRoutes)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});