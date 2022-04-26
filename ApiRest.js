const { body, validationResult } = require('express-validator');
var morgan = require('morgan')
const express = require('express')
const app = express()
const db = require('./db.json')


app.use(express.json())
app.use(morgan(':method :url :status :user-type'))

app.get('/db', (req,res) => {
    res.status(200).json(db)
})

app.get('/db/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const saw = db.find(saw => saw.id === id)
    res.status(200).json(saw)

})

app.post('/db', 

    body('id').isInt().notEmpty,
    body('model').isString(),
    body('name').isString(),
    body('motor').isString().isLength({max: 2}),
    body('Box').isString(),
    body('Energy').isString(),
    body('price').isInt(),


     (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    db.push({
        id : req.body.id,
        model: req.body.model,
        name : req.body.name,
        motor : req.body.motor,
        Box : req.body.Box,
        Energy : req.body.Energy,
        price: req.body.price,
    })
     res.status(200).json(db)
})
app.put('/db/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let saw = db.find(saw => saw.id === id)

    saw.model = req.body.model,
    saw.name =req.body.name,
    saw.motor = req.body.motor,
    saw.Box = req.body.Box,
    saw.Energy = req.body.Energy,
    saw.price = req.body.price

    res.status(200).json(saw)
})

app.delete('/db/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let saw = db.find(saw => saw.id === id)
    db.splice(db.indexOf(unv),1)
    res.status(200).json(db)
})
 
module.exports= app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})