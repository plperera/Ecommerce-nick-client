import { createTheme } from "@material-ui/core";

export const datePickerTheme = createTheme({
    palette: {
        primary: {
          main: "#02131B",  // cor do botão de seleção de data e do mês/ano selecionado no calendário
        },
        secondary: {
          main: "#E70000", // cor da data selecionada no calendário
        },
      },
      overrides: {
        MuiPickersDay: { 
          day: { 
            color: "#02131B", // cor das datas não selecionadas
          },
          daySelected: {
            backgroundColor: "#009395ff", // cor de fundo da data selecionada
          },
          dayDisabled: {
            color: "#02131B3B", // cor das datas desativadas
          },
          current: {
            color: "#009395ff", // cor da data atual
          },
        },
      },
    });