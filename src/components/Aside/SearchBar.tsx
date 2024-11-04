import Select from 'react-select';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/components/aside/searchbar/styles';
import { socket } from '../../service/api';
import { UserState } from '../../store/modules/user/types';
import { State } from '../../store/modules/rootReducer';

export function SearchBar() {
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState(null);
  const { user } = useSelector<State, UserState>(state => state.user);

  useEffect(() => {
    socket.emit('get_all_groups', res => {
      setOptions(
        res.map(group => ({ value: group.idChatRoom, label: group.name })),
      );
    });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (res: any) => {
    setOption(res);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleJoinGroup = () => {
    socket.emit('join_room', {
      idChatRoom: option.value,
      userId: user._id,
      userSockedId: user.socket_id,
    });
    handleCloseModal();
  };

  return (
    <Container>
      <Select
        styles={{
          container: baseStyles => ({
            ...baseStyles,
            width: '100%',
          }),
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
        options={options}
        onChange={res => handleOpenModal(res)}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Options Modal"
        style={{
          content: {
            backgroundColor: '#2a2f32',
            width: '500px',
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <button
            type="button"
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
          <h2 style={{ color: '#e9edef' }}>
            Deseja entrar no grupo {option?.label}?
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <button
            type="button"
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
            type="button"
            onClick={handleJoinGroup}
            style={{
              backgroundColor: '#00a884',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Entrar
          </button>
        </div>
      </Modal>
    </Container>
  );
}
