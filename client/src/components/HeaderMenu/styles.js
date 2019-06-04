const styles = theme => ({
  root: {
    flexGrow: 1
  },
  topToolBar: {
    padding: 0
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    width: 40,
    marginLeft: 5
  },
  buttonLeft: {
    margin: theme.spacing.unit,
    borderRadius: 50,
    boxShadow: '0 0px 0px 0px',
    color: 'black',
    height: 45,
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)'
    }
  },
  buttonRight: {
    margin: theme.spacing.unit,
    borderRadius: 50,
    boxShadow: '0 0px 0px 0px',
    color: 'black',
    height: 45,
    width: 45,
    minWidth: 45,
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)'
    },
    padding: 0
  },
  leftAddIcon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.primary.main,
    borderRadius: 100,
    background: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    padding: 1
  },
  menuLogo:{
   marginRight:15
  }
});
export default styles;
