import React from 'react';
import ItemCard from '../../components/ItemCard';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';
const mapStateToProps = ({ shareItemPreview }) => ({
  shareItemPreview
});
import PropTypes from 'prop-types';
function ShareItemPreview({ shareItemPreview }) {
  return (
    <ViewerContext.Consumer>
      {({ loading, viewer }) => {
        return (
          <ItemCard
            item={{
              ...shareItemPreview,
              itemowner: {
                id: viewer.id,
                fullname: viewer.fullname,
                email: viewer.email
              }
            }}
            breakpoints={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          />
        );
      }}
    </ViewerContext.Consumer>
  );
}
ShareItemPreview.propTypes = {
  shareItemPreview: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(ShareItemPreview);
