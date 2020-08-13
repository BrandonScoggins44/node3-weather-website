<h1>Weather Application</h1>
<h2>Live Application</h2>
<p>https://scoggins-weather-application.herokuapp.com/</p>
<h2>Purpose</h2>
<p>This application allows a user to check the current weather conditions for any location which they can enter by name. It will return the first matching result. 
If there are multiple results, the search parameter can be further specified to identify the specific location. Weather conditions returned are: description, temperature (F), 
feels like temperature (F), and chance of precipitation.</p>
<h2>Tech Stack</h2>
<p>This weather application was primarily developed using Node.js, and JavaScript. It makes use of common techniques, such as callbacks and object destructuring, as well as
common modules. The Express module is used to set up the server and handle routing, Request is used to communicate with external API's, and HBS (handlebars) is used to establish 
views and partials which make up the front end of the application. Nodemon is also used as a devDependency for automatic server restarts during development.</p>
<p>Some basic HTML and CSS is also used to give the interface a nicer apperance.</p>
<p>GitHub is used for version control, and is setup to communicate with Heroku which is used to for "production" deployment.</p>
<h2>External API's</h2>
<h4>MapBox</h4>
<p>https://api.mapbox.com</p>
<p>MapBox is used to geocode the user provided location. It identifies the location by name, and returns location details. We make use of the latitude, longitude, and place_name
attributes.</p>
<h4>WeatherStack</h4>
<p>http://api.weatherstack.com</p>
<p>WeatherStack is used to retrieve the weather information for a provided location. We send the latitude and longitude details from the MapBox response, and then display the 
weather details mentioned above to the user.</p>

## Development server

Run `npm dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
