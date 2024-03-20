const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://admin:admin@api-receita-new.4w1xbd0.mongodb.net/api-receita-new?retryWrites=true&w=majority&appName=api-receita-new')
.then(() => {
    console.log('Connected to MongoDB')
}).catch((error) =>{
    console.log(error)
});
