import style from './CircleLinkWithImage.pcss';
import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import RPT from 'prop-types';
import { withRouter } from 'react-router';

@withRouter
export default class CircleLinkWithImage extends PureComponent {

  static propTypes = {
    img: RPT.string.isRequired,
    to: RPT.string,
    title: RPT.string,
    color: RPT.oneOf(['yellow', 'white', 'pink', 'blue', 'lightBlue']).isRequired,
    external: RPT.bool,
  }

  handleOpenPage = () => {
    const { history, to } = this.props;

    history.push(to);
  }

  render() {
    const { img, children, color, external, to } = this.props;

    const Element = external ? 'a' : 'div';

    return (
      <Element
        href={to}
        onClick={!external && this.handleOpenPage}
        className={mergeClassNames([
          style.wrapper,
          style[`border-${color}`],
        ])}>
        <div className={style.title}>{children}</div>
        <img className={style.image} src={img} alt={children} />
      </Element>
    )
  }
}
