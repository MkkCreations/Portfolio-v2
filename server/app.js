const express = require('express');
const myconnection = require('express-myconnection');
const mysql2 = require('mysql2');
const cors = require('cors');
const path = require('path');

const router = require('./routes');

const app = express();
app.set('port', process.env.PORT || 4000);

const dbOptions = {
    host: 'b0wffh2twhbrduvxiz38-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'uchomtw7pdick2fj',
    password: 'IgQmN7GNNPyDkmz0krNp',
    database: 'b0wffh2twhbrduvxiz38'
}


/* const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'desarollo'
}
 */
// middlewares -------------------------------------
app.use(cors());
app.use(myconnection(mysql2, dbOptions, 'single'));
app.use(express.json());



app.use(express.static(path.join(__dirname, '../client/build')));

// routes -------------------------------------------

app.use('/api', router);

app.listen(app.get('port'), () => {
    console.log('listening on port' , app.get('port'));
});