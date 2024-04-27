import { Container } from 'components/App/App.styled';
import { Title } from 'components/App/Title/Title';
import React from 'react';

export const Contacts = () => {
  return (
    <Container>
      <Title>Контакти</Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <div>
          <h3>Мирон Петрович Переверникрутченко</h3>
          <h4>менеджер оптової торгівлі</h4>
          <h5>тел: +380(67)123-45-67</h5>
        </div>
        <div>
          <h3>Мирон Петрович Переверникрутченко</h3>
          <h4>менеджер оптової торгівлі</h4>
          <h5>тел: +380(67)123-45-67</h5>
        </div>
        <div>
          <h3>Мирон Петрович Переверникрутченко</h3>
          <h4>менеджер оптової торгівлі</h4>
          <h5>тел: +380(67)123-45-67</h5>
        </div>
        <div>
          <h3>Мирон Петрович Переверникрутченко</h3>
          <h4>менеджер оптової торгівлі</h4>
          <h5>тел: +380(67)123-45-67</h5>
        </div>
      </div>
    </Container>
  );
};
