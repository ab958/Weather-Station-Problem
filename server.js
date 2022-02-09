const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const request = require("request");

const dirname = path.join(__dirname, "/public");
const viewPath = path.join(__dirname, "/templete/views");
const parPath = path.join(__dirname, "/templete/partials");
console.log(viewPath);

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(dirname));
hbs.registerPartials(parPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    author: "Abdul Wahab",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    author: "Abdul Wahab",
  });
});

app.get("/help", (req, res) => {
  res.render("Help", {
    title: "Help",
    text: "Please fill the form to contact us",
    author: "Abdul Wahab",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "no location Given",
    });
  }

  res.send({
    forcast: "it is raining",
    location: "Pakistan",
    address: req.query.address,
  });
});
// const apiKey = "51a0a2cc5a8a1bec363dbafda742d3da";

// app.get("/wahab", function (req, res) {
//   let city = "lahore";
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

//   request(url, function (err, response, body) {
//     if (err) {
//       res.render("index", { weather: null, error: "Error, please try again" });
//     } else {
//       let weather = JSON.parse(body);
//       if (weather.main == undefined) {
//         res.render("index", {
//           weather: null,
//           error: "Error, please try again",
//         });
//       } else {
//         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//         let des = `${weather}`;
//         console.log(weatherText);
//         // عبدالوھاب;
//         console.log(weather.weather[0].description);
//         res.render("index", { weather: weatherText, error: null });
//       }
//     }
//   });
// });

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    err: "Page not found",
    author: "Abdul Wahab",
  });
});

app.listen(3000, () => {
  console.log("sever is up");
});
