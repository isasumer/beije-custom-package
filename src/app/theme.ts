
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#0009",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      paper: '#262626',
      default: '#f9f5f2',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffffb2',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688',
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '',
          boxShadow: 'none',
          padding: '16px 0',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {

          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#0009',
          '&.Mui-selected': {
            color: '#000000',
          },
        },

      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          color: '#000000e6',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
        },

      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: '16px 0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: '#343131',
          textTransform: 'none',
          height: "fit-content",
          letterSpacing: "-0.01em",
        },
        sizeMedium: {
          borderRadius: "24px",
        },
        sizeSmall: {
          borderRadius: "24px",
          padding: "2px 6px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#000000',
          backgroundColor: '#e7e7e7',
        },
      },
    },
  },
});

export default theme;
