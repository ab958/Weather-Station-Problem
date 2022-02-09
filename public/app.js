const weaform = document.querySelector("form");
const inpu = document.querySelector("input");

weaform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("testing");

  const loc = inpu.value;
  console.log(loc);
  const apiKey = "51a0a2cc5a8a1bec363dbafda742d3da";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=${apiKey}`;

  fetch(url).then((res) => {
    res.json().then((data) => {
      // converstion of tempurate from Fahrenheit to Celsius

      document.getElementById("demo").innerHTML = ``;
      document.getElementById("demo1").innerHTML = ``;
      document.getElementById("demo2").innerHTML = ``;
      document.getElementById("demo3").innerHTML = ``;
      document.getElementById("demo4").innerHTML = ``;

      if (data.cod === "404" || loc === "") {
        return (document.getElementById("demo").innerHTML = "city not found");
      } else {
        let temp = data.main.temp;
        let c = (temp - 32) * (5 / 9);
        document.getElementById(
          "demo"
        ).innerHTML = `Weather Information for ${data.name}:`;
        document.getElementById(
          "demo1"
        ).innerHTML = `----------------------------------------`;
        document.getElementById(
          "demo2"
        ).innerHTML = `- Temperature: ${c.toFixed(2)} ºC`;
        document.getElementById(
          "demo3"
        ).innerHTML = `- Description: ${data.weather[0].main} `;
        document.getElementById(
          "demo4"
        ).innerHTML = `- Humidity: ${data.main.humidity} % `;
      }
    });
  });
});
