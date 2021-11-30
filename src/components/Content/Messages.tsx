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
import { useRoom } from '../../hooks/useRoom';

export function Messages() {
  const { currentUserChat } = useChat();
  const { messages } = useRoom();

  return (
    <Container>
      <HeaderMessages>
        <Info>
          <Image
            src={currentUserChat.avatar}
            alt={currentUserChat.name}
            width={40}
            height={40}
          />
          <Text>
            <span>{currentUserChat.name}</span>
            {currentUserChat.is_online && <p>Online</p>}
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
