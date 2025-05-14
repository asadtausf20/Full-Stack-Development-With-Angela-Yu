import express from "express";
const app = express();
const port = 4000;

app.get("/", (req,res) =>{
  res.send(req.rawHeaders);
});

app.get("/contact", (req,res)=>{
  res.send("<h1><b>Phone Number:</b>9038846930</h1>");
})

app.get("/about", (req,res)=>{
  res.send("<h1><b>29-04-2025: SOON I WILL START MY POSTERR WEBSITE, INSHALLAH!</b></h1>");
})

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})




// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
