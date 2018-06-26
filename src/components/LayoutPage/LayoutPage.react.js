import CloseButton from '../CloseButton/CloseButton.react';
import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import style from './LayoutPage.pcss';

export default class LayoutPage extends PureComponent {

  getIconColor = (color) => {
    const colorPalette = {
      white: 'blue',
      yellow: 'blue',
    };

    return colorPalette[color] || 'white';
  }

  render() {
    const { children, color, withCloseButton } = this.props;

    return (
      <div
        className={mergeClassNames([
          style.wrapper,
          style[`background-${color}`],
        ])}>
        {withCloseButton && <CloseButton color={this.getIconColor(color)} />}
        <div>
          {children}
        </div>
      </div>
    )
  }
}
