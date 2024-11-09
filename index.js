import express from "express";
const app = express();
const port = 4001;

// Pug template engine
app.set("view engine", "pug");
app.set("views", "./views");

// Built-in middleware for static files like css
app.use(express.static("public"));

app.use((req, res, next) => {
  const day = new Date().getDay();
  const hour = new Date().getHours();

  //   console.log(day);
  //   console.log(hour);
  //   console.log(req.url);

  //   if ((hour >= 9) & (hour <= 17) & (day >= 6)) {
  //     return next();
  //   }

  if (day >= 6) {
    return next();
  }

  res.status(300).send("We have closed for the day");
});

app.get("/", (req, res) => {
  res.render("content");
});

app.get("/our-service", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
