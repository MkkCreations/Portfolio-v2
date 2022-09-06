const express = require('express');
/* const ContactControl = require('./contactControl'); */

const router = express.Router();


/* router.post('/', ContactControl.store); */

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