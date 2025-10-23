class ServicesSoma{
    Somar(num1,num2){
        if(isNaN(num1)||isNaN(num2)){
            throw new Error("não é um numero")
        }
         const result = num1+num2
         return result;


    }
    Sub(num1,num2){
        if(isNaN(num1)||isNaN(num2)){
            throw new Error("não é um numero")
        }
         const result = num1-num2
         return result;


    }
    Div(num1,num2){
        if(isNaN(num1)||isNaN(num2)){
            throw new Error("não é um numero")
        }
         const result = num1/num2
         return result;


    }
    Multi(num1,num2){
        if(isNaN(num1)||isNaN(num2)){
            throw new Error("não é um numero")
        }
         const result = num1*num2
         return result;


        
    }
    Pot(num1,num2){
        if(isNaN(num1)||isNaN(num2)){
            throw new Error("não é um numero")
        }
         const result = num1**num2
         return result;


    }
    Raiz(num1){
        if(isNaN(num1)){
            throw new Error("não é um numero")
        }
         const result = num1**0.5
         return result;


    }
}
export default new ServicesSoma()