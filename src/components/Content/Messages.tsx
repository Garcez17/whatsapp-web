import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFillEmojiLaughingFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { IoMdMic } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

import { Message } from './Message';
import { Input } from '../Input';

import { useChat } from '../../hooks/useChat';

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

export function Messages() {
  const { user } = useChat();

  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    socket.emit('verify_connection', { id: user.id }, data => {
      setIsOnline(data);
    });
  }, [user]);

  useEffect(() => {
    socket.on('update_connection', data => {
      if (user.id === data.id) {
        setIsOnline(data.is_online);
      }
    });
  }, [socket, user.id]);

  return (
    <Container>
      <HeaderMessages>
        <Info>
          <Image src={user.avatar} alt={user.name} width={40} height={40} />
          <Text>
            <span>{user.name}</span>
            {isOnline && <p>Online</p>}
          </Text>
        </Info>
        <IconsWrapper>
          <FiSearch />
          <BsThreeDotsVertical />
        </IconsWrapper>
      </HeaderMessages>
      <Content>
        <Message />
        <Message />
        <Message />
        <Message userMessage />
        <Message userMessage />
        <Message userMessage />
        <Message />
      </Content>
      <InputBar>
        <BsFillEmojiLaughingFill />
        <AiOutlinePaperClip />
        <Input placeholder="Type a message" />
        <IoMdMic />
        {/* <input type="text" /> */}
      </InputBar>
    </Container>
  );
}
