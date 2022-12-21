let express = require('express');
const cors = require('cors');
const bodyParser = require('body-Parser')
let app = express();
const hostname = '127.0.0.1'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
let nameList = [];
let msg = [];
app.get('/getList', function(req, res) {
    let id = req.query.id
    if (nameList.indexOf(id) == -1) {
        nameList.push(id);
        msg.push([]);
    }
    let index = nameList.indexOf(id);
    itemList = msg[index];
    res.send(itemList)
});
app.post('/addList', function(req, res) {
    let id = req.body.id
    if (nameList.indexOf(id) == -1) {
        nameList.push(id);
        msg.push([]);
    }
    let index = nameList.indexOf(id);
    itemList = msg[index];
    itemList.push(req.body.name)
    let obj = {
        status: "succeed",
        newItem: req.body.name,
        allList: itemList,
    }
    res.send(obj)
});
//定义端口，此处所用为3000端口，可自行更改
app.listen(3000, function() {
    console.log('runing ...');
})