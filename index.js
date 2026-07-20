const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`Server is started on port 3000`);
})

db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    })

    app.get('/komik', async (req, res) => {
        try {
            const komik = await db.Komik.findAll();
            res.send(komik);
        } catch (error) {
            res.send(error);
        }
    });

