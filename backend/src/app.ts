import express from 'express'

//routes
import home from '../routes/home'

const app = express();

app.use('/', home);

app.listen(3000, () => console.log('servidor rodando'))