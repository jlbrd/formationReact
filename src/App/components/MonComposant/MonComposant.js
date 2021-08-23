import React from 'react';
import style from './MonComposant.module.css'
import PropTypes from 'prop-types'
import { styles } from 'ansi-colors';

class MonComposant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.MonComposant}>monComposant</div>
  }
}

MonComposant.propTypes = {
}

MonComposant.defaultProps = {
}

export default MonComposant;
