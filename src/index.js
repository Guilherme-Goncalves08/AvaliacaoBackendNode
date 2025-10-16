import express from "express"
import router from "./routes/op.js"
import ControllerOp from './controller/op.js'


const app = express()
app.use(express.json())

app.use('/api', router)

app.post('/soma', ControllerOp.SomaPost)
app.post('/sub', ControllerOp.SubPost)
app.post('/div', ControllerOp.DivPost)
app.post('/mult', ControllerOp.MultiPost)
app.post('/pot', ControllerOp.PotPost)





app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000")
})

