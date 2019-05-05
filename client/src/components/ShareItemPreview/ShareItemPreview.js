import React from 'react';
import ItemCard from '../../components/ItemCard';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';
const mapStateToProps = ({ shareItemPreview }) => ({
  shareItemPreview
});

function ShareItemPreview({shareItemPreview}) {
  return (
    <ViewerContext.Consumer>
    {({ loading, viewer }) => {
      return (
      <ItemCard
        item={{...shareItemPreview,
        itemowner:{
          fullname: viewer.fullname,
          email: viewer.email
        }}}
        breakpoints={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      />
     );
    }}
  </ViewerContext.Consumer>
  );
}
export default connect(mapStateToProps)(ShareItemPreview);
