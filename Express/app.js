const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.status(200).send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})