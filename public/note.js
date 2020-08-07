// Dependencies
var http = require("http");

var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);
// Start the server
server.listen(PORT, function() {
    // Callback triggered when server is successfully listening.
    console.log("Server listening on: http://localhost:" + PORT);
  });


  // Create a function which handles incoming requests and sends responses
  function handleRequest(req, res) {
    // Capture the url the request is made to
    var path = req.url;
    // Depending on the URL, display a different HTML file.
  switch (path) {
  case "/":
      return displayRoot(res);
  case "/index.html":
      return displayFood(res);
  case "/notes.html":


  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data/notes...
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });

}






