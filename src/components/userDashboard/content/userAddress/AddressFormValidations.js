const addressValidations = {
  addressName: {
    custom: {
      isValid: (value) => !!value,
      message: 'Por favor, insira um nome de endereço válido',
    },
  },

  cep: {
    custom: {
      isValid: (value) => (!!value && value.length === 9), // Considere que o CEP deve ter 8 dígitos
      message: 'Por favor, insira um CEP válido',
    },
  },

  street: {
    custom: {
      isValid: (value) => !!value,
      message: 'Por favor, insira uma rua válida',
    },
  },

  city: {
    custom: {
      isValid: (value) => !!value,
      message: 'Por favor, insira uma cidade válida',
    },
  },

  state: {
    custom: {
      isValid: (value) => !!value,
      message: 'Por favor, insira um estado válido',
    },
  },

  number: {
    custom: {
      isValid: (value) => !!value && !isNaN(Number(value)),
      message: 'Por favor, insira um número válido',
    },
  },

  neighborhood: {
    custom: {
      isValid: (value) => !!value,
      message: 'Por favor, insira um bairro válido',
    },
  },

  addressDetail: {
    custom: {
      isValid: (value) => !!value,
      message: 'Por favor, insira um detalhe de endereço válido',
    },
  },
};

export default addressValidations;
