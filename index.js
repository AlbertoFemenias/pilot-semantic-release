// RUN WITH $ npm run start
var http = require("http");

const port = 8080
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
  response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as an index
  const body = `
    <html>
      <head>
        <title>Simple server</title>
        <h1>Hello world</h1>
      </head>
      <body>
        <h2>You have requested the url: ${ request.url }</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. 
          
          Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
         </p>
      </body>
    </html>
    `;

  response.end(body);

}).listen(port);

// Console will print the domain and host
console.log("Server running at http://127.0.0.1:" + port + "/");
