import React, { useState, useEffect } from 'react';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
import axios from 'axios';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Repositories from 'src/components/Repositories';
import Loaders from 'src/components/Loaders';
import MoreResult from 'src/components/MoreResults';

const App = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentPage, setPagination] = useState(1);
  const [message, setMessage] = useState('Veuillez saisir une recherche');

  const reset = () => {
    setDatas([]);
    setPagination(1);
  };

  const makeResearch = (search) => {
    reset();
    setCurrentSearch(search);
  };

  const fetchRepos = () => {
    setLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${currentSearch}&sort=stars&order=desc&page=${currentPage}&per_page=9`)
      .then((response) => {
        setDatas([...datas, ...response.data.items]);
        setMessage(`La recherche a donné ${response.data.total_count} résultats`);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (currentSearch !== '') {
      fetchRepos();
    }
  }, [currentSearch]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchRepos();
    }
  }, [currentPage]);

  return (
    <div className="app">
      <img src={githubLogo} alt="github logo" />
      <SearchBar
        search={makeResearch}
      />
      <Message message={message} />
      {loading && <Loaders />}
      {!loading
        && <Repositories repositories={datas} />}
      <MoreResult onClick={() => setPagination(currentPage + 1)} />
    </div>
  );
};

export default App;
