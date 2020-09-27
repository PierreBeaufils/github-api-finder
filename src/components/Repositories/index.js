import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import './repos.scss';
import Repo from './repo';

const Repositories = ({ repositories }) => {
  const repositoriesList = repositories.map((repo) => (
    <Repo
      key={repo.id}
      creator={repo.owner.login}
      image={repo.owner.avatar_url}
      redirect={repo.html_url}
      {...repo}
    />
  ));

  return (
    <>
      <Card.Group centered repositories={repositoriesList} itemsPerRow={3} stackable>
        {repositoriesList}
      </Card.Group>
    </>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Repositories;
