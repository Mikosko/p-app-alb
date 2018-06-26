import LogoImage from './Logo.png';
import style from './Logo.pcss';
import React, { PureComponent } from 'react';

export default class Logo extends PureComponent {

  render() {
    return (
      <div className={style.wrapper}>
        <img className={style.logo} src={LogoImage} alt="Logo Albi.cz" />
      </div>
    )
  }
}
