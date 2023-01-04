const express = require('express')
const bp = require('body-parser')
const url_to_short = require('prettylink')
const app = express()
const copy = require('copy-to-clipboard')
const bitly = new url_to_short.Bitly('059de440ae83f84b82b7b7fdee0bc4700e7300e4')

app.use(bp.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000, function(){
    console.log('On it...')
})

app.get('/',function(req,res){
    res.render('index',{
        additional:'https://bit.ly/3FQXXbk',
        long_url:'https://www.google.com/'
    })
})
app.post('/', function(req,res){
    var url = req.body.link
    if(url.length === 0){
        console.log('empty')
    }else{
        bitly.short(url).then((result) => {
            console.log(result)
            res.render('index', {
                additional:result.link,
                long_url:result.long_url
            })
    
        }).catch((err) => {
            console.log(err);
        });
    }
})