const styles = theme => ({
  layout: {
    //for 1280px width
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 80,
    paddingTop: 144,

    //for0-600px width
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: 16,
      paddingTop: 96
    },
    //for600-1280px width
    [theme.breakpoints.up('sm')]: {
      padding: 80,
      paddingTop: 144
    }
  }
});

export default styles;
