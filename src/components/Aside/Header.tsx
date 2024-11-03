import Image from 'next/image';
import { BsThreeDotsVertical, BsFillChatLeftDotsFill } from 'react-icons/bs';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { State } from '../../store/modules/rootReducer';
import { UserState } from '../../store/modules/user/types';

import {
  Container,
  IconsWrapper,
} from '../../styles/components/aside/header/styles';
import { Contact } from '../../store/modules/contacts/types';
import { socket } from '../../service/api';

export function Header() {
  const { user } = useSelector<State, UserState>(state => state.user);
  const { register, handleSubmit, watch, control } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contacts = useSelector<State, Contact[]>(
    state => state.contacts.contacts,
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = data => {
    socket.emit('create_group', data);
  };

  const options = contacts.map(contact => {
    return {
      value: contact._id,
      label: contact.name,
    };
  });

  return (
    <Container>
      {user && (
        <Image src={user.avatar} alt={user.name} width={40} height={40} />
      )}
      <IconsWrapper>
        <BsFillChatLeftDotsFill />
        <BsThreeDotsVertical
          onClick={handleOpenModal}
          style={{ cursor: 'pointer', background: 'none', border: 'none' }}
        />
      </IconsWrapper>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Options Modal"
        style={{
          content: {
            backgroundColor: '#2a2f32', // cor padrão do fundo da aplicação
            width: '400px', // aumentando o tamanho do modal para ser semelhante à imagem fornecida
            height: 'fit-content', // ajustando altura para conteúdo
            margin: 'auto', // centralizando o modal
            borderRadius: '8px',
            padding: '20px',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <button
            onClick={handleCloseModal}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#e9edef',
              marginRight: '10px',
            }}
          >
            <IoArrowBackSharp size={24} />
          </button>
          <h2 style={{ color: '#e9edef' }}>Novo grupo</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <label style={{ color: '#e9edef' }}>
            Pessoas
            <Controller
              control={control}
              defaultValue={options.map(c => c.value)}
              name="idUsers"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  options={options}
                  isMulti
                  styles={{
                    control: baseStyles => ({
                      ...baseStyles,
                      backgroundColor: '#3b4a54',
                      border: 0,
                    }),
                    option: baseStyles => ({
                      ...baseStyles,
                      backgroundColor: '#1f272c',
                      border: 0,
                    }),
                  }}
                  inputRef={ref}
                  onChange={val => onChange(val.map(c => c.value))}
                />
              )}
            />
          </label>
          <label style={{ color: '#e9edef' }}>
            Nome:
            <input
              {...register('name')}
              type="text"
              placeholder="Nome"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#3b4a54',
                color: '#e9edef',
              }}
            />
          </label>
          <label style={{ color: '#e9edef' }}>
            Tempo de Ociosidade:
            <input
              {...register('idleTime')}
              type="text"
              placeholder="Tempo de Ociosidade"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#3b4a54',
                color: '#e9edef',
              }}
            />
          </label>
          <label style={{ color: '#e9edef' }}>
            Quantidade maxima de pessoas:
            <input
              {...register('userLimit')}
              type="text"
              placeholder="Quantidade de membros"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#3b4a54',
                color: '#e9edef',
              }}
            />
          </label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#00a884',
                fontWeight: 'bold',
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: '#00a884',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Criar
            </button>
          </div>
        </form>
      </Modal>
    </Container>
  );
}

Modal.setAppElement('#__next');
