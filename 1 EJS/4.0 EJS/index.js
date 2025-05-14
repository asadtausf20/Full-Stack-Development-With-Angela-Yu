import express from "express";

const app = express();

app.set('view engine', 'ejs');

function DayToday() {
    const d = new Date();
    const today = d.getDate();
    console.log(today); 
}

app.get("/", (req, res)=>{
    res.render('index', {
        
    });
    DayToday();
});

app.listen(3000); 