import React from 'react';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function ItemsGrid({items}) {
  return (
    <Grid container spacing={40}>
      {items? items.map(item=>(
        <ItemCard item={item} key={item.id}/>
      )): null}
        
    </Grid>
  );
}
export default withStyles(styles)(ItemsGrid);
