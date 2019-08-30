const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config();

const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;

const path = require('path');

const cors = require('cors');

let General = require('./app/models/general.model')
let Budget = require('./app/models/budget.model')

const dataRoutes = express.Router();

const config = require('./app/config/db.config')

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('db connected');
}).catch(err => {
    console.log('db not connected', err)
    process.exit()
})

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
    app.use("/greenPrint-MERN/",express.static(path.join(__dirname,'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    });
    
}

dataRoutes.route('/addBudgetData').post((req, res) => {
    let bData = new Budget(req.body)
    bData.save()
        .then(bData => {
            res.status(200).json({ 'budget-data': 'budget data added' })
        })
        .catch(err => {
            res.status(400).send('budget failed')
        })
})

dataRoutes.route('/addGeneralData').post((req, res) => {
    let gData = new General(req.body)
    gData.save()
        .then(gData => {
            res.status(200).json({ 'general-data': 'general data added' })
        })
        .catch(err => {
            res.status(400).send('general failed')
        })
})

app.use('/data', dataRoutes);

app.listen(port, () => {
    // console.log(process.env);
    console.log(`server listening on port ${port}`)
})
