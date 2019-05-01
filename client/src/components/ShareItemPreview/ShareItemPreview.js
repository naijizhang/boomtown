import React from 'react';
import ItemCard from '../../components/ItemCard';
import { connect } from 'react-redux';
const mapStateToProps = ({ shareItemPreview }) => ({
  shareItemPreview
});

function ShareItemPreview({shareItemPreview}) {
  return (
    <div>
      <ItemCard
        item={shareItemPreview}
        breakpoints={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      />
    </div>
  );
}
export default connect(mapStateToProps)(ShareItemPreview);
