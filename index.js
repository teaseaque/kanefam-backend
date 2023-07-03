const dotenv = require(`dotenv`)
const express = require('express');

dotenv.config()

const app = express();

app.get('/endpoint-1', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "Hello EP 1"
        }
    })
})

app.get('/endpoint-2', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "Hello EP 2"
        }
    })
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))