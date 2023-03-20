const express = require('express')
var axios = require("axios").default;
const path=require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    console.log(path.join(__dirname,'public'))
    return res.sendFile('index.html',{root:__dirname});
})
app.get('/searchword', (req, res) => {
    console.log(req.query)
    var options = {
        method: 'GET', 
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: { term: req.query.entry },
        headers: {
            'X-RapidAPI-Key': '7f92305b8emsh61be8e768a651a7p176063jsn91a90fd3b3cb',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data)
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
    // let response={}
    // response.data={
    // permalink: 'http://ridiculous.urbanup.com/113394',      
    // thumbs_up: 464,
    // author: 'Anonymous',
    // word: 'ridiculous',
    // defid: 113394,
    // current_vote: '',
    // written_on: '2003-05-01T10:30:52.000Z',}
  

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} on http://localhost:3000`)
})