const styles = theme => ({
  layout: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 80,
    paddingTop:144,

    [theme.breakpoints.between('xs', 'sm')]: {
      padding: 16,
      paddingTop:96,
    },
    [theme.breakpoints.up('sm')]: {
      padding: 80,
      paddingTop:144,
    },
    
  },

});
export default styles;
