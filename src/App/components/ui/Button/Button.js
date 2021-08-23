import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

function Button(props) {

  return (
    <button 
    className={`Button ${props.shadow ? 'shadow' : '' } ` }
    style={{...props.style, backgroundColor : props.bgColor, color : props.color} }
    onClick={(evt) => props.clickEvent(props.action)}>{props.text}
    </button>
  )
}

Button.propTypes={
  text : PropTypes.string.isRequired,
  action : PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  shadow : PropTypes.bool.isRequired,
  style : PropTypes.object,
}

Button.defaultProps = {
  bgColor : 'greenyellow',
  color : 'white',
  shadow: true,
}
export default Button;