const validations = {
  cardNumber: {
    custom: {
      isValid: (value) => {
        const unformattedValue = value?.replaceAll(' ', '');
        return unformattedValue?.length >= 13; // Verificar se o número do cartão contém pelo menos 15 dígitos
      },
      message: 'Número de cartão inválido',
    },
  },

  expirationMonth: {
    custom: {
      isValid: (value) => parseInt(value, 10) >= 1 && parseInt(value, 10) <= 12,
      message: 'Mês inválido',
    },
  },

  expirationYear: {
    custom: {
      isValid: (value) => {
        const currentYear = new Date().getFullYear();
        const shortYear = currentYear % 100; // Obtendo os dois últimos dígitos do ano atual
        return parseInt(value, 10) >= shortYear; // Verificar se o ano de expiração é maior ou igual ao ano atual
      },
      message: 'Ano inválido',
    },
  },

  securityCode: {
    custom: {
      isValid: (value) => value?.length === 3,
      message: 'Código de segurança inválido',
    },
  },

  cardholderName: {
    custom: {
      isValid: (value) => value?.trim()?.length > 0, // Verificar se o nome do titular do cartão foi fornecido
      message: 'Digite o nome do titular do cartão',
    },
  },

  identificationNumberUnformated: {
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

  cardholderEmail: {
    custom: {
      isValid: (value) => {
        // eslint-disable-next-line no-useless-escape
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return emailRegex.test(String(value).toLowerCase());
      },
      message: 'Digite um email válido',
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
