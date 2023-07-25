const express = require('express')
const app = express()
const {query, validationResult, matchedData} = require('express-validator')

app.use(express.json())

app.get('/hello', query('person').notEmpty().escape() ,(req, res)=>{
    const  result = validationResult(req)

    if( result.isEmpty() )
    {
        const data = matchedData(req)
        res.send(`Hello ${data.person}`)
    }

        res.send({errors: result.array()})
})

app.listen(3000)