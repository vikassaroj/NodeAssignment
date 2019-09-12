const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;
const app = express()
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

//database schema 
var FileSchema = new mongoose.Schema({
    name: String,
    img: String,
    summary: String

});

//database schema model
const Data = mongoose.model('data', FileSchema)



//routes
app.get('/show', (req, res) => {
    Data.find()
        .then(doc=>{

            res.json(doc)
        })
    

});

//Save and Show

app.post('/save', (req, res) => {
    Data.insertMany([{
        name: "Harry Potter and the Order of the Phoenix",
        img: "https://bit.ly/2IcnSwz",
        summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
    }, {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        img: "https://bit.ly/2tC1Lcg",
        summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
    }, {
        name: "Avengers: Endgame",
        img: "https://bit.ly/2Pzczlb",
        summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    }])
    .then(result=>{
        res.json(result)
    })
    .catch(e=>{
        res.json(e)
    })
    
});




//server and port
const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.......`));





