const styles = theme => ({
  layout: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 80,

    [theme.breakpoints.between('xs', 'sm')]: {
      padding: 16
    },
    [theme.breakpoints.up('sm')]: {
      padding: 80
    }
  },

});
export default styles;
