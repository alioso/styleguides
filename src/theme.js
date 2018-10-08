import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const primaryColors = {
  main: '#3683DC',
  light: '#4D99F1',
  dark: '#2466B3',
  text: '#606469',
  headline: '#32363C',
  divider: '#f4f4f4',
  offBlack: '#444',
}


const themeDefaults = {
  palette: {
    primary: {
      main: primaryColors.main,
    },
  },
  drawerWidth: 240,
};

export default createMuiTheme(themeDefaults);
