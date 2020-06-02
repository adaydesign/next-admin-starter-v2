import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    black,
    white,
    primary: {
      contrastText: white,
      dark: colors.indigo[900],
      main: colors.indigo[500],
      light: colors.indigo[100]
    },
    secondary: {
      contrastText: white,
      dark: colors.pink[900],
      main: colors.pink[400],
      light: colors.pink[100]
    },
    success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[100]
    },
    info: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[100]
    },
    warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[100]
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[100]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      link: colors.blue[600]
    },
    background: {
      default: colors.grey[100],
      paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[400]
  },
});

export default theme;