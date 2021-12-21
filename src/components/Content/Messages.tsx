import Image from 'next/image';
import { useSelector } from 'react-redux';
import { BsFillEmojiLaughingFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { IoMdMic } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

import { User } from '../../store/modules/user/types';
import { State } from '../../store/modules/rootReducer';
import { Message as MessageType } from '../../store/modules/chat/types';

import { Message } from './Message';
import { Input } from '../Input';

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
  const currentContact = useSelector<State, User>(
    state => state.contacts.currentContact,
  );

  const messages = useSelector<State, MessageType[]>(
    state => state.chat.messages,
  );

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
      </Content>
      <InputBar>
        <BsFillEmojiLaughingFill />
        <AiOutlinePaperClip />
        <Input placeholder="Type a message" />
        <IoMdMic />
      </InputBar>
    </Container>
  );
}
