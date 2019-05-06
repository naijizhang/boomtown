import red from '@material-ui/core/colors/red';
const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  longItem: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 5,
    width: '100%'
  },
  shortItem: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 30,
    width: 100
  },
  heading: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
     marginTop: 30,
    marginBottom:50,
    width: '100%'
  },
  donelogo: {
    display: 'inline-flex'
  },
  errorMessage: {
    marginLeft: theme.spacing.unit
  }
});

export default styles;
