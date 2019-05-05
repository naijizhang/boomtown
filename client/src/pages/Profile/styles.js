const styles = theme => ({
  layout: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 80,
    paddingTop: 144,

    [theme.breakpoints.between('xs', 'sm')]: {
      padding: 16,
      paddingTop: 96
    },
    [theme.breakpoints.up('sm')]: {
      padding: 80,
      paddingTop: 144
    }
  },
  heading:{
      color:theme.palette.primary.main,
      marginBottom:10,
      marginTop:50
  },
  itemsContainer:{
      marginTop:20
  }
});

export default styles;
