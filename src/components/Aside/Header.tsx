import Image from 'next/image';
import { useState } from 'react';
import { BsFillChatLeftDotsFill, BsThreeDotsVertical } from 'react-icons/bs';
import { IoArrowBackSharp } from 'react-icons/io5';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { State } from '../../store/modules/rootReducer';
import { UserState } from '../../store/modules/user/types';

import {
  Container,
  IconsWrapper,
} from '../../styles/components/aside/header/styles';

export function Header() {
  const { user } = useSelector<State, UserState>(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      {user && (
        <Image src={user.avatar} alt={user.name} width={40} height={40} />
      )}
      <IconsWrapper>
        <BsFillChatLeftDotsFill />
        <BsThreeDotsVertical onClick={handleOpenModal} style={{ cursor: 'pointer', background: 'none', border: 'none' }} />
      </IconsWrapper>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Options Modal"
        style={{
          content: {
            backgroundColor: '#2a2f32', 
            width: '400px', 
            height: 'fit-content', 
            margin: 'auto', 
            borderRadius: '8px',
            padding: '20px',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          },
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <button onClick={handleCloseModal} 
          style={{ background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#e9edef',
          marginRight: '10px' }}>
            <IoArrowBackSharp size={24} />
          </button>
          <h2 style={{ color: '#e9edef' }}>Pesquisar Usuário</h2>
        </div>
        <div 
        style={{ display: 'flex',
        flexDirection: 'column',
        gap: '16px' }}>
          <label style={{ color: '#e9edef' }}>
            Nome:
            <input type="text" placeholder="Nome" 
            style={{ width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #333',
            backgroundColor: '#3b4a54', 
            color: '#e9edef' }} />
          </label>
          <label style={{ color: '#e9edef' }}>
            Descrição:
            <input type="text" placeholder="Descrição"
            style={{ 
            width: '100%',
            padding: '10px', 
            borderRadius: '8px', 
            border: '1px solid #333', 
            backgroundColor: '#3b4a54', 
            color: '#e9edef' }} />
          </label>
          <label style={{ color: '#e9edef' }}>
            Tempo de Ociosidade:
            <input type="text" placeholder="Tempo de Ociosidade" 
            style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '8px', 
            border: '1px solid #333', 
            backgroundColor: '#3b4a54', 
            color: '#e9edef' }} />
          </label>
        </div>
        <div 
        style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '20px' }}>
          <button onClick={handleCloseModal} 
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#00a884', 
            fontWeight: 'bold' }}>
            Cancelar
          </button>
          <button 
          style={{ 
            backgroundColor: '#00a884', 
            color: '#ffffff', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            border: 'none', 
            cursor: 'pointer' }}>
            Salvar
          </button>
        </div>
      </Modal>
    </Container>
  );
}

Modal.setAppElement('#__next');
