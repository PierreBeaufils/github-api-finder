import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MoreResult = ({ onClick }) => (
  <Segment>
    <Button fluid onClick={onClick}>Plus de résultats</Button>
  </Segment>
);

MoreResult.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MoreResult;
