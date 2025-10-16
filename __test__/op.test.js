import { describe, it, expect } from '@jest/globals'
import ServicesSoma from '../src/services/op.js'
describe('Testando função somar',() => {
    it('Testando função somar',() => {
        const resultado = ServicesSoma.Somar(1, 2)

        expect(resultado).toBe(3)
    })
})