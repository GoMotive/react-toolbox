import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const FontIcon = ({gomotive, children, className, value, ...other}) => {
  let classNames = classnames({'material-icons': typeof value === 'string' || typeof children === 'string'}, className);
  if (gomotive){
    classNames = classnames({'gomotive-icons': typeof value === 'string' || typeof children === 'string'}, className);
  }
  return (
      <span
        data-react-toolbox='font-icon'
        className={classNames}
        {...other}
      >
        {value}
        {children}
      </span>
  );
};

FontIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  gomotive: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

FontIcon.defaultProps = {
  className: '',
  gomotive: false
};

export default FontIcon;
export { FontIcon };
