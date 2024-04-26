import { Container } from 'components/App/App.styled';
import React from 'react';
import { FooterWrap } from './Footer.styled';
import mapIcon from '../../data/images/Map.png';

export const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <div style={{ padding: '30px 0', display: 'flex', gap: '50px' }}>
          <div>
            <p>Адреса: вул. Бориспільська 9, Київ, Україна</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p>Подивитись по мапі</p>
            <img src={mapIcon} alt="map" width={20} />
          </div>
        </div>
      </Container>
    </FooterWrap>
  );
};
