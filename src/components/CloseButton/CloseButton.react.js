import createCloseIcon from './createCloseIcon';
import mergeClassNames from '../../lib/mergeClassNames';
import React, { PureComponent } from 'react';
import style from './CloseButton.pcss';
import { withRouter } from 'react-router';

@withRouter
export default class CloseButton extends PureComponent {

  handleClose = () => {
    const { history } = this.props;

    history.push('/');
  }

  render() {
    const { color } = this.props;

    return (
      <div className={style.wrapper}>
        <div onClick={this.handleClose} className={style.button}>
          {createCloseIcon(color, style.icon)}
          <div className={mergeClassNames([
            style.hoverDecorator,
            style[`color-${color}`]
          ])} />
        </div>
      </div>
    )
  }
}
