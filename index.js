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

const deletePost = (id) => {
	for (let i = 0; i < thoughtArr.length; i++) {
		if (thoughtArr[i].id == id) {
			thoughtArr.splice(i, 1);
		}
	}
};

const updatePost = (id, title, content) => {
	for (let i = 0; i < thoughtArr.length; i++) {
		if (thoughtArr[i].id == id) {
			thoughtArr[i].title = title;
			thoughtArr[i].content = content;
		}
	}
};

const thoughtArr = [
	{
		title: "Welcome to Thoughtblocks",
		content: "A place where you can express the way you think",
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
		id: () => thoughtArr.length == {} ? 0 : thoughtArr[thoughtArr.length - 1].id + 1,
	});
	res.redirect("/thoughts");
});

app.post("/view", (req, res) => {
	const targetPost = findPost(req.body.id);
	res.render("view.ejs", { thought: targetPost });
});

app.post("/edit", (req, res) => {
	const targetPost = findPost(req.body.id);
	res.render("edit.ejs", { thought: targetPost });
});

app.post("/edit-post", (req, res) => {
	updatePost(req.body.id, req.body.title, req.body.content);
	res.redirect("/thoughts");
});

app.post("/delete", (req, res) => {
	const targetPost = findPost(req.body.id);
	deletePost(targetPost.id);
	res.redirect("/thoughts");
});

app.listen(port, (req, res) => {
	console.log(`Server running on port ${port}`);
});
