//import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';
//import store, { initialRessourceState, initialState } from '../../store/store';

const MemeViewer = (props) => {
  console.log(props);
  return (
    <div className={styles.MemeViewer} data-testid="MemeViewer">
      <svg viewBox={props.image ? `0 0 ${props.image.w} ${props.image.h}` : '0 0 100 500'}>
        {props.image && <image href={'/images/' + props.image.filename} x='0' y='0'></image>}
        <text
          x={props.meme.x}
          y={props.meme.y}
          fill={props.meme.color}
          fontSize={props.meme.fontsize}
          textDecoration={props.meme.underline ? "underline" : ""}
          fontStyle={props.meme.italic ? "italic" : ""}
        >
          {props.meme.text}
        </text>
      </svg>


    </div>
  );
}

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
