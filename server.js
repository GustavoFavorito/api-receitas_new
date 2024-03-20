const express = require('express')
const mongoose = require('mongoose');
const Receita = require('./models/receitaModel')
const app = express()
const port = 3000;

app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Try: /receita e /ingrediente')
});

// fetch whole receita
app.get('/receita', async(req,res)=> {
    try {
        const receita = await Receita.find({});
        res.status(200).json(receita);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// fetch one receita
app.get('/receita/:id', async(req,res)=> {
    try {
        const {id} = req.params;
        const receita = await Receita.findById(id);
        res.status(200).json(receita);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// add receita
app.post('/receita', async(req, res) => {
    try {
        const receita = await Receita.create(req.body);
        res.status(200).json(receita);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

// change receita
app.put('/receita/:id', async(req, res) => {
    try {
        const {id} = req.params;
        let receita = await Receita.findByIdAndUpdate(id, req.body);
        if(!receita) {
            return res.status(404).json({ message: `can't find any receita with id ${id}`});
        }
        receita = await Receita.findByIdAndUpdate(id, req.body);
        res.status(200).json(receita);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }   
});

// remove receita
app.delete('/receita/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const receita = await Receita.findByIdAndDelete(id);
        if(!receita) {
            return res.status(404).json({ message: `can't find any receita with id ${id}`});
        }
        res.status(200).json(receita);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

// database connection
mongoose
.connect('mongodb+srv://admin:admin@api-receita-new.4w1xbd0.mongodb.net/api-receita-new?retryWrites=true&w=majority&appName=api-receita-new')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
        console.log(`Running on port ${port}`);
    })
}).catch((error) =>{
    console.log(error)
});
