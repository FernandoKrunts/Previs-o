const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "ebd22cef27e20c54430e4c1ac4105ed0";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cond === "404") {
        container.style.height = "400px";
        error404.style.display = "block";
      }
    });
});
