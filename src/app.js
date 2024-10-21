import express from 'express'
import {pool} from './db.js'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../index.html')
})

app.get('/ping', async (req, res) => {
    const result = await pool.query(`SELECT "Hello World" as RESULT`);
    console.log(result)
    res.send('Welcome to Server')
})

app.listen(PORT)
console.log('Server on port', PORT)