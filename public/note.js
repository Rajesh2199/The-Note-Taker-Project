// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Note  DATA
// =============================================================
var waitList = []


var tables = [
  {
    routeName: "ammon",
    name: "Ammon",
    tableId: "t1",
    groupSize: 4,
    phonenumber: 1234567
  },
  {
    routeName: "dilanli",
    name: "Dilan Li",
    tableId: "t2",
    groupSize: 3,
    phoneNumber: 1234678
  },
  {
    routeName: "raj",
    name: "Raj",
    tableId: "t3",
    groupSize: 6,
    phoneNumber: 1234789
  }
];

// Routes
//-----------------------


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });



  
  // Displays saved notes
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.get("/api/tables:table", function(req, res) {
    var selected = req.params.table;

    console.log(selected)

    for (var i = 0; i < tables.length; i++) {
        if (selected === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }
    return res.json(false)
  });

  app.get("/api/waitlist", function(req, res) {
     res.json(waitList);
  });

  // Create New Table - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(tables.length)
    //verification that tables.length is no greater than five, if so, push to waitlist
   
    var newRes = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newRes);
    if (tables.length > 4) {
        // alert ("Reservations are full")
        waitList.push(newRes)
        res.json(newRes)
    } else {
    tables.push(newRes);
  
    res.json(newRes);
    }
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });