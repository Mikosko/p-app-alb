import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import style from './LayoutHomePage.pcss';
import { withRouter } from 'react-router';

@withRouter
export default class LayoutHomePage extends PureComponent {

  isPageOpen = () => {
    const { location: { pathname } } = this.props;

    return ~pathname.indexOf('page');
  }

  render() {
    const { children } = this.props;

    return (
      <div className={mergeClassNames([
        style.wrapper,
        this.isPageOpen() && style.isOpen,
      ])}>
        {children}
      </div>
    )
  }
}
