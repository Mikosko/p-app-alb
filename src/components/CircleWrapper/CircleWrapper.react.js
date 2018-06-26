import style from './CircleWrapper.pcss';
import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import RPT from 'prop-types';

export default class CircleWrapper extends PureComponent {

  static propTypes = {
    color: RPT.oneOf(['yellow', 'white', 'pink', 'blue', 'lightBlue']).isRequired,
  }

  render() {
    const { color, children, isTransparent } = this.props;
    return (
      <div
        className={mergeClassNames([
          style.wrapper,
          style[`background-${color}`],
          isTransparent && style.transparent
        ])}>
        {children}
      </div>
    )
  }
}
