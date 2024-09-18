import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

const thoughtArr = [{
    "title": "Welcome to your thoughts",
    "content": "create yours here by pressing the orange 'Create' button or edit existing ones",
    "importance": 3,
},{
    "title": "Hello",
    "content": "World",
    "importance": 2,
}];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/thoughts", (req, res) => {
    res.render("thought.ejs", { "thoughts": thoughtArr });
})

app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`);
})