import React, { PureComponent } from 'react';
import style from './Grid.pcss';

export default class Column extends PureComponent {

  render() {
    const { children } = this.props;
    return (
      <div className={style.column}>
        {children}
      </div>
    )
  }
}
