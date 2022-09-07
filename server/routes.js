const express = require('express');

const router = express.Router();


router.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO contact set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('contact added!')
            
        })
    })
})

module.exports = router