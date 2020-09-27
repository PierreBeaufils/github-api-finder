import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message as MessageSUI } from 'semantic-ui-react';
import './message.scss';

const Message = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message]);

  if (!visible) {
    return null;
  }
  return (
    <div className="message">
      <MessageSUI floating>
        {message}
      </MessageSUI>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
