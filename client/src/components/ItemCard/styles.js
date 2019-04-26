import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  avatar: {
    //backgroundColor: red[500],
  },
  tag: {
    color: grey[600]
  },
  button: {
    margin: theme.spacing.unit
  }
});
export default styles;
