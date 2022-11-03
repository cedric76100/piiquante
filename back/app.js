const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//mongodb+srv://admin:<password>@cluster0.jpspa6r.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.jpspa6r.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection reussie");
}
app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);