async function getWeather() {
    const weather = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1a020046244e3a8a1b59477bd1f674f7");
const json = await weather.json();
 const body = document.querySelector("body");
  for (const weather of json.main) {
    const main = document.createElement("hi");
    const url = document.createElement("h2");
    main.innerHTML = weather.temperature;
    id.innerHTML = weather.id;
    url.href = weather.url;
    body.append(main, url);

}
}
getWeather();
