import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailViewer.module.css';

const ThumbnailViewer = (props) => (
  <div className={styles.ThumbnailViewer} data-testid="ThumbnailViewer">
    {props.children}
  </div>
);

ThumbnailViewer.propTypes = {};

ThumbnailViewer.defaultProps = {};

export default ThumbnailViewer;
