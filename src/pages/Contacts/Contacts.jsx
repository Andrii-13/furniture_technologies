import { Container } from 'components/App/App.styled';
import React from 'react';
import { ManagerList } from 'components/ManagerList/ManagerList';
import { Title } from 'components/Title/Title';

export const Contacts = () => {
  return (
    <Container>
      <Title>Contacts</Title>
      <ManagerList />
    </Container>
  );
};
