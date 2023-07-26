const validations = {
  cpf: {
    custom: {
      isValid: (value) => {
        const unformattedValue = value?.replaceAll('.', '')?.replace('-', '')?.replaceAll('/', '');
        const length = unformattedValue?.length;

        if (length === 11) {
          return validateCPF(unformattedValue);
        } 
          
        return (length === 14);
        
      },
      message: 'Digite um CPF/CNPJ válido',
    },
  },

  phone: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 14,
      message: 'Digite um telefone válido',
    },
  },
  birthday: {
    custom: {
      isValid: (value) => value && !isNaN(new Date(value?.split('-').join('-'))) && value !== null,
      message: 'Selecione uma data de aniversário',
    },
  },
};

function validateCPF(cpf) {
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  
  for (let j = 0, p = 10; j < 2; j++, p--) {
    let d = 0;
    for (let i = 0; i < p; i++) {
      d += cpf[i] * (p + 1 - i);
    }
    d = 11 - (d % 11);
    if (d > 9) d = 0;
    if (cpf.charAt(p) !== d.toString()) {
      return false;
    }
  }
  
  return true;
}

export default validations;
