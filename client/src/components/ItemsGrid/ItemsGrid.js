import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function ItemsGrid({ classes, items }) {
  return (
    <div className={classNames(classes.layout)}>
      <Grid container justify="flex-start" spacing={16}>
        {items
          ? items.map(item => (
              <ItemCard
                item={item}
                key={item.id}
                breakpoints={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              />
            ))
          : null}
      </Grid>
    </div>
  );
}
export default withStyles(styles)(ItemsGrid);
