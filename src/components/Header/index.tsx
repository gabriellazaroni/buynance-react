import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>Buynance</h1>
        <button type="button" onClick={onOpenNewTransactionModal}>
          nova transacao
        </button>
      </Content>
    </Container>
  );
}
