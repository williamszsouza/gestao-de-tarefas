import express from 'express'
import cors  from 'cors'
import bodyParser from 'body-parser'
import Tasks from './routes/tasks.js'


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/routes/tasks', Tasks)

app.listen(3000, (err) => {
    if (err){
        console.error(err)
    }
})