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

app.get('/', (_req, res) => {
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) =>  res.json(data))
  .catch(err => console.error(err));
});
