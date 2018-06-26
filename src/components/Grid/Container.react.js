import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import style from './Grid.pcss';

export default class Container extends PureComponent {

  render() {
    const { isPage, children } = this.props;

    return (
      <div className={mergeClassNames([
        style.container,
        isPage && style.offsetTop
      ])}>
        {children}
      </div>
    )
  }
}
