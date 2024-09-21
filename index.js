import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

const thoughtArr = [{
    "title": "Welcome to your thoughts",
    "content": "create yours here by pressing the 'Create' button or edit existing ones",
    "id": 1,
},{
    "title": "Hello",
    "content": "World",
    "id": 2,
},{
    "title": "Lorem Ipsum",
    "content": "Dolor sit amet, consectetur adipiscing elit. Etiam consequat molestie orci, scelerisque eleifend enim pretium vel. Ut malesuada cursus. ",
    "id": 3,
}];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/thoughts", (req, res) => {
    res.render("thought.ejs", { "thoughts": thoughtArr });
})

app.get("/create", (req, res) => {
    res.render("create.ejs");
})

app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`);
})