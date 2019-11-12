import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const fontFamily = '"MuseoSansCyrl"';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F37E78',
    },
    secondary: {
      main: '#1a1a1a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fcfcfc',
    },
  },
  typography: {
    fontFamily,
    h1: {
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.3,
      fontFamily,
    },
    h2: {
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.3,
      fontFamily,
    },
    h3: {
      textTransform: 'uppercase',
      lineHeight: 1.4,
      fontFamily,
      fontSize: '2.8rem',
      fontWeight: 500,
    },
    h4: {
      fontWeight: 300,
      textTransform: 'uppercase',
      fontFamily,
    },
    subtitle1: {
      lineHeight: 1.4,
      fontFamily,
      fontSize: '2.9rem',
      fontWeight: 100
    },
    body1: {
      lineHeight: 1.4,
      fontFamily,
      fontSize: '2.9rem',
      fontWeight: 100
    },
    body2: {
      textTransform: 'uppercase',
      lineHeight: 1.4,
      fontFamily,
      fontSize: '2.9rem',
      fontWeight: 500
    },
    button: {
      fontFamily
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        '&$disabled': {
          backgroundColor: '#f39c9c',
          color: '#fff'
        },
        color: '#fff',
        boxShadow: '0px 5px 5px 0 rgba(0, 0, 0, .1)',
        '&:hover': {
          backgroundColor: '#F37E78',
          boxShadow: '0 0 0 0 #fff !important'
        },
      },
      containedPrimary: {
        color: '#fff',
      },
      containedSecondary: {
        color: '#fff'
      },
      outlined: {
        border: '1px solid #F37E78',
      },
      sizeSmall: {
        padding: '15px 25px',
        textTransform: 'none',
        fontSize: '2.5rem'
      },
      sizeLarge: {
        padding: '25px 75px',
        textTransform: 'none',
        fontSize: '2.5rem'
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: '0 2px 13px 0 rgba(0,0,0,0.05)'
      },
      rounded: {
        borderRadius: 50
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '3.5rem'
      }
    }
  },
  bodyFontFamily: {
    fontFamily,
  }
});
