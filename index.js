import express from "express";
const app = express();
const port = 4001;

// Pug template engine
app.set("view engine", "pug");
app.set("views", "./views");

// Built-in middleware for static files like css
app.use(express.static("views"));

app.use((req, res, next) => {
  const day = new Date().getDay();
  const hour = new Date().getHours();

  //   if ((hour >= 9) & (hour <= 17) & (day > 0) & (day < 6)) {
  //     return next();
  //   }

  if (day < 6) {
    return next();
  }

  res.status(300).send("We have closed for the Week");
});

app.get("/", (req, res) => {
  res.render("content");
});

app.get("/our-service", (req, res) => {
  res.render("service.pug");
});

app.get("/contact-us", (req, res) => {
  res.render("contact.pug");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
