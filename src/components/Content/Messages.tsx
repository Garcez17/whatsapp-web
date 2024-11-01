import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { IoMdMic, IoMdSend } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEmojiLaughingFill, BsThreeDotsVertical } from 'react-icons/bs';

import { User } from '../../store/modules/user/types';
import { State } from '../../store/modules/rootReducer';
import { Message as MessageType } from '../../store/modules/chat/types';
import {
  updateContactLastMessage,
  updateContactNotifications,
  updateContactStatus,
} from '../../store/modules/contacts/actions';
import {
  addMessageToChat,
  updateUnreadMessages,
} from '../../store/modules/chat/actions';

import { Message } from './Message';
import { Input } from '../Input';

import { socket } from '../../service/api';

import {
  Container,
  HeaderMessages,
  Info,
  Text,
  IconsWrapper,
  Content,
  InputBar,
} from '../../styles/components/content/Messages/styles';
import { Contact } from '../../store/modules/contacts/types';

export function Messages() {
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();

  const user = useSelector<State, User>(state => state.user.user);
  const roomId = useSelector<State, string>(state => state.chat.roomId);

  const currentContact = useSelector<State, Contact>(
    state => state.contacts.currentContact,
  );

  const messages = useSelector<State, MessageType[]>(
    state => state.chat.messages,
  );

  useEffect(() => {
    socket.on('update_connection', data => {
      dispatch(updateContactStatus(data));
    });

    if (roomId) {
      socket.on('message', data => {
        if (data.message.roomId === roomId) {
          dispatch(addMessageToChat(data.message));

          if (currentContact._id !== data.message.to) {
            dispatch(updateContactLastMessage(currentContact._id, data.message));
          }

          if (data.message.to !== user._id) {
            socket.emit('read_messages', { idUser: data?.userLogged?._id }, () => {
              dispatch(updateContactNotifications(currentContact, 0));
            })
          }
        }
      });
    }

    socket.on('updated_messages', data => {
      const lastMessage = data.updatedMessages.slice(-1)[0];

      dispatch(updateContactLastMessage(data.contact._id, lastMessage));

      dispatch(updateUnreadMessages(data.updatedMessages));
    });
  }, [socket, roomId]);

  const handleSubmit = (message: string) => {
    const data = {
      message,
      roomId,
      user_id: user.id,
    };

    socket.emit('message', data);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Container>
      <HeaderMessages>
        <Info>
          <Image
            src={currentContact.avatar}
            alt={currentContact.name}
            width={40}
            height={40}
          />
          <Text>
            <span>{currentContact.name}</span>
            {currentContact.is_online && <p>Online</p>}
          </Text>
        </Info>
        <IconsWrapper>
          <FiSearch />
          <BsThreeDotsVertical />
        </IconsWrapper>
      </HeaderMessages>
      <Content>
        {messages.map(msg => (
          <Message content={msg} key={msg._id} />
        ))}
        <div ref={messagesEndRef} />
      </Content>
      <InputBar>
        <BsFillEmojiLaughingFill />
        <AiOutlinePaperClip />
        <Formik
          initialValues={{ message: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values.message);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values, handleChange, handleBlur }) => (
            <Form>
              <Input
                placeholder="Type a message"
                name="message"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {values.message ? (
                <button type="submit" disabled={isSubmitting}>
                  <IoMdSend />
                </button>
              ) : (
                <button type="button">
                  <IoMdMic />
                </button>
              )}
            </Form>
          )}
        </Formik>
      </InputBar>
    </Container>
  );
}
