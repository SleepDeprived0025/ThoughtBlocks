import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));

const findPost = (id) => {
	for (let i = 0; i < thoughtArr.length; i++) {
		if (thoughtArr[i].id == id) {
			return thoughtArr[i];
		}
	}
};

function handleViewClick(event) {
	let id = event.target;
	console.log(id);
}

const thoughtArr = [
	{
		title: "Welcome to Thoughtblocks",
		content:
			"A place where you can express the way you think",
		id: 1,
	},
	{
		title: "Hello",
		content: "World",
		id: 2,
	},
	{
		title: "Lorem Ipsum",
		content:
			"Dolor sit amet, consectetur adipiscing elit. Etiam consequat molestie orci, scelerisque eleifend enim pretium vel. Ut malesuada cursus. ",
		id: 3,
	},
];

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.get("/thoughts", (req, res) => {
	res.render("thought.ejs", { thoughts: thoughtArr });
});

app.get("/create", (req, res) => {
	res.render("create.ejs");
});

app.post("/create", (req, res) => {
	thoughtArr.push({
		title: req.body.title,
		content: req.body.content,
		id: thoughtArr[thoughtArr.length - 1].id + 1,
	});
	res.redirect("/thoughts");
});

app.post("/view", (req, res) => {
	const targetPost = findPost(req.body.id);
	console.log(targetPost);
	res.render("view.ejs", { thought: targetPost });
});

app.post("/edit", (req, res) => {
	const targetPost = findPost(req.body.id);
	console.log(targetPost);
	res.render("edit.ejs", { thought: targetPost });
});

app.listen(port, (req, res) => {
	console.log(`Server running on port ${port}`);
});
