import React from 'react';
import ItemsGrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.layout}>
      <ItemsGrid items={items} />
    </div>
  );
};

export default Items;
