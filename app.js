import express from 'express'
import bodyParser from 'body-parser'
import renderApi from '@api/render-api';


const app = express()
const port = 3001
app.use(bodyParser.json())
app.listen(port, ()=>{
    console.log(`The running is sucses http://localhost:${port}`);
})





renderApi.auth('rnd_FBwW0y9CeHQyL985kYc9LO6w1mWb');


app.get('/', (req, res) => {
    renderApi.listServices({ name: '', includePreviews: true, limit: 20 })
        .then(({ data }) => res.json(data)) // מחזיר את הנתונים ללקוח
        .catch(err => res.status(500).send(err.message)); // מחזיר שגיאה ללקוח
});



