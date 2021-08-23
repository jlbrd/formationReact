import React from 'react';
import style from './TemplateName.module.css'
import PropTypes from 'prop-types'
import { styles } from 'ansi-colors';

class TemplateName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.TemplateName}>templateName</div>
  }
}

TemplateName.propTypes = {
}

TemplateName.defaultProps = {
}

export default TemplateName;
