import { computed} from "vue";

export function useVerifyNumber(number) {

    const regexNumber = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    
    const validator = new RegExp(regexNumber);
    
    const mensagemErro = computed(() => {
        if(number.value.trim() === ""){
            return '';
        }else if(validator.test(number.value) === false){
            return 'Numero invalido';
        }else{
            return 'Seu numero esta correto Para um telefone';
        }
        
        
    });

    return {mensagemErro}

}