import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`);
})