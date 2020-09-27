import React from 'react';
import './repos.scss';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Repo = ({
  name, creator, description, image, redirect }) => (
    <Card
      href={redirect}
      image={image}
      header={name}
      meta={creator}
      description={description}
    />
  );

Repo.defaultProps = {
  description: null,
};

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default Repo;
