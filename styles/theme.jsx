import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '../constants/design';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiInputLabel: {
      outlined: {
        textAlign: 'left',
      },
    },
  },
  typography: {
    fontFamily: `'Nunito Sans', sans-serif`,
  },
  palette: colors,
});

export default theme;
