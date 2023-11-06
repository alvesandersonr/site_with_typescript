import express from 'express'
import cors from 'cors'

import '../database/src'

//routes
import home from '../routes/home'
import user from '../routes/user'

const app = express();

app.use(cors({
    origin: ['http://localhost:5000']
}))

app.use(express.json());

app.use('/', home);
app.use('/user', user);

const PORT = 3000;
app.listen(PORT, () => console.log(`server's on port: ${PORT}`))