const styles = theme => ({
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width:'100%',
    height:'100%',
    padding: 80,
    paddingLeft: '10%',
    paddingRight: '10%',
    background: 'white',
    justifyContent:'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    
  },
  leftColumn: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '0%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '50%',
      height: '100%',
      paddingLeft: 0,
      paddingRight: 15,
      paddingTop:30,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth:480,
      width: '50%',
      height: '100%',
      paddingLeft: 40,
      paddingRight: 50,
      paddingTop:30,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth:480,
      width: '50%',
      height: '100%',
      paddingLeft: 50,
      paddingRight: 0,
      paddingTop:40,
    },
  },
  rightColumn: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
      height: '100%',
      paddingLeft: 0,
      paddingRight: 10,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '50%',
      height: '100%',
      paddingLeft: 15,
      paddingRight: 0,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth:480,
      width: '50%',
      height: '100%',
      paddingLeft: 0,
      paddingRight: 40,
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      height: '100%',
      paddingLeft: 50,
      paddingRight: 50,
    }
  },
  
});

export default styles;
