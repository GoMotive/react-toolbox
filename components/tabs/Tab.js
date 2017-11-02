import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { FontIcon } from '../font_icon';
import { themr } from 'react-css-themr';
import { TABS } from '../identifiers.js';

class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    gomotive: PropTypes.bool,
    hidden: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.node,
    onActive: PropTypes.func,
    onClick: PropTypes.func,
    theme: PropTypes.shape({
      active: PropTypes.string,
      disabled: PropTypes.string,
      hidden: PropTypes.string,
      label: PropTypes.string,
      withIcon: PropTypes.string,
      withText: PropTypes.string
    })
  };

  static defaultProps = {
    active: false,
    className: '',
    disabled: false,
    gomotive: false,
    hidden: false
  };

  componentDidUpdate (prevProps) {
    if (!prevProps.active && this.props.active && this.props.onActive) {
      this.props.onActive();
    }
  }

  handleClick = (event) => {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render () {
    const {
      gomotive,
      onActive, // eslint-disable-line
      active, activeClassName, className, disabled, hidden, label, icon, theme, ...other
    } = this.props;
    const _className = classnames(theme.label, {
      [theme.active]: active,
      [theme.hidden]: hidden,
      [theme.withText]: label,
      [theme.withIcon]: icon,
      [theme.disabled]: disabled,
      [activeClassName]: active
    }, className);

    return (
      <label {...other} data-react-toolbox='tab' className={_className} onClick={this.handleClick}>
        {icon && <FontIcon gomotive={gomotive} className={theme.icon} value={icon}/>}
        {label}
      </label>
    );
  }
}

export default themr(TABS)(Tab);
export { Tab };
