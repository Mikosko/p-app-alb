import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import style from './Title.pcss';

export default class Title extends PureComponent {

  getIconColor = (color) => {
    const colorPalette = {
      white: 'blue',
      yellow: 'blue',
    };

    return colorPalette[color] || 'white';
  }

  render() {
    const { children, color } = this.props;

    return (
      <div className={mergeClassNames([
        style.wrapper,
        style[`color-${this.getIconColor(color)}`],
      ])}>
        <h1 className={style.title}>{children}</h1>
      </div>
    )
  }
}
