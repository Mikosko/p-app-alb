import CircleLinkWithImage from '../../components/CircleLinkWithImage/CircleLinkWithImage.react';
import LayoutPage from '../../components/LayoutPage/LayoutPage.react';
import mockData from './mockData';
import React, { PureComponent } from 'react';
import Title from '../../components/Title/Title.react';
import { Column, Container } from '../../components/Grid';
import { matchColorByUrl } from '../../lib/colors';

export default class Page extends PureComponent {

  renderLinks({ image, text, to, color, external = false }) {
    return (
      <CircleLinkWithImage img={image} to={to} color={color} external={external}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </CircleLinkWithImage>
    )
  }

  renderColumn = ({ data }) => {
    return (
      <Column>
        {data.map(this.renderLinks)}
      </Column>
    )
  }

  render() {
    const { match: { params: { color, id } } } = this.props;
    const getMockData = mockData[color - 1][id - 1];

    console.log(getMockData);
    return (
      <LayoutPage color={matchColorByUrl[color]} withCloseButton zIndex={5}>
        <Title color={matchColorByUrl[color]}>{getMockData.title}</Title>
        <Container isPage>
          {getMockData.data.map(this.renderColumn)}
        </Container>
      </LayoutPage>
    )
  }
}
