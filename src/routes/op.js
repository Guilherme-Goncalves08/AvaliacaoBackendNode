import express from "express"
import ControllerOp from '../controller/op.js'

const router = express.Router()

router.post('/soma', ControllerOp.SomaPost)
router.post('/sub', ControllerOp.SubPost)
router.post('/div', ControllerOp.DivPost)
router.post('/mult', ControllerOp.MultiPost)
router.post('/pot', ControllerOp.PotPost)
router.post('/raiz', ControllerOp.RaizPost)





export default router 