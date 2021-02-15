const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
 
let cats = [
   { id: 1, name: 'John', age: 3 },
   { id: 2, name: 'Maew', age: 2  },
   { id: 3, name: 'Cat', age: 1 }]
 
app.use(cors())
 
app.get('/', (req,res) => {
   res.json(cats)
})
 
app.listen(PORT, () => console.log(`listen at ${PORT}`))