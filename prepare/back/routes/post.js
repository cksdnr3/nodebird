const express = require('express')

const router = express.Router();

router.post('/', (req, res) => {
    res.json({ id: 1, content: 'POST post' })
})

router.delete('/', (req, res) => {
    res.json({ id: 1, content: 'DELETE post' })
})


module.exports = router;