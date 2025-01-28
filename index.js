const express = require("express")
const {router :jokesRoutes, data} = require('./routes/jokes')
const app = express();
app.set('view engine', 'ejs');

const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.render('home', { data });
});

app.use('/api', jokesRoutes)

app.use('/api/jokes', (req, res, next) => {
    if (req.method === 'POST' && !req.body.joke) {
        return res.status(400).json({ error: 'Joke is required' });
    }
    next();
});


app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
  });

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});