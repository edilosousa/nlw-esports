import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
    return res.json([
        {
            id: '1', name: 'User 1'
        },
        {
            id: '2', name: 'User 2'
        },
        {
            id: '3', name: 'User 3'
        },
        {
            id: '4', name: 'User 4'
        }
    ])
})

app.listen(3333)