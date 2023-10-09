// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    { username: 'Todd', comment: 'lol that is so funny!' },
    { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
    { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { username: 'onlysayswoof', comment: 'woof woof woof' },
    { username: 'iliketurtles', comment: 'I like turtles!' },
    { username: 'Tom', comment: 'Tom likes turtles, too' }
]

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;
    comments.push({ username, comment });
    res.redirect('/comments');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
