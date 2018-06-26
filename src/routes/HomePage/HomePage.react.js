import CircleLinkWithImage from '../../components/CircleLinkWithImage/CircleLinkWithImage.react';
import CircleWrapper from '../../components/CircleWrapper/CircleWrapper.react';
import mockData from './mockData';
import LayoutHomePage from '../../components/LayoutHomePage/LayoutHomePage.react';
import Logo from '../../components/Logo/Logo.react';
import React, { PureComponent } from 'react';
import { Column, Container } from '../../components/Grid';

export default class HomePage extends PureComponent {

  renderLinks({ image, text, to, color, external = false }) {
    return (
      <CircleLinkWithImage img={image} to={to} color={color} external={external}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </CircleLinkWithImage>
    )
  }

  renderColumn = ({ color, data }) => {
    return (
      <Column>
        <CircleWrapper color={color}>
          {data.map(this.renderLinks)}
        </CircleWrapper>
      </Column>
    )
  }

  render() {
    return (
      <LayoutHomePage>
        <Logo />
        <Container>
          {mockData.map(this.renderColumn)}
        </Container>
      </LayoutHomePage>
    );
  }
}
