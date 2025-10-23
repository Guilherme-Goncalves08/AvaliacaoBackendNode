import { describe, it, expect } from '@jest/globals'
import ServicesSoma from '../src/services/op.js'


describe('Testando função somar',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Somar(1, 2)

        expect(resultado).toBe(3)
    })
})

describe('Testando função div',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Div(2, 2)

        expect(resultado).toBe(1)
    })
})

describe('Testando função multi',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Multi(1, 2)

        expect(resultado).toBe(2)
    })
})


describe('Testando função sub',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Sub(2, 2)

        expect(resultado).toBe(0)
    })
})



describe('Testando função pot',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Pot(2, 2)

        expect(resultado).toBe(4)
    })
})



describe('Testando função raiz',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Raiz(9)

        expect(resultado).toBe(3)
    })
})