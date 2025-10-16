import ServicesSoma from '../services/op.js'

class ControllerOp {

 
     SomaPost(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = num1+num2
            console.log(req.params)
            res.status(200).send({
                msg: "Resultado da soma:" + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: null
            })
        }
    }

     SubPost(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = num1 - num2
            console.log(req.params)
            res.status(200).send({
                msg: "Resultado da subtração:" + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: null
            })


            
            
            
        }
    }
    DivPost(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = num1 / num2
            console.log(req.params)
            res.status(200).send({
                msg: "Resultado da Divisão:" + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: null
            })


            
            
            
        }
    }
     MultiPost(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = num1 * num2
            console.log(req.params)
            res.status(200).send({
                msg: "Resultado da Divisão:" + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: null
            })


            
            
            
        }
    }
    PotPost(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = num1 ** num2
            console.log(req.params)
            res.status(200).send({
                msg: "Resultado da Potencia:" + result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: null
            })


            
            
            
        }
    }
    // RaizPost(req, res) {
    //     try {
    //         const num1 = req.body.num1
    //         const num2 = req.body.num2
    //         const result = num1 / num2
    //         console.log(req.params)
    //         res.status(200).send({
    //             msg: "Resultado da Raiz quadrada:" + result,
    //             data: result,
    //             error: null
    //         })
    //     } catch (error) {
    //         res.status(400).send({
    //             msg: error.message,
    //             data: null,
    //             error: null
    //         })


            
            
            
    //     }
    // }
}

export default new ControllerOp()

