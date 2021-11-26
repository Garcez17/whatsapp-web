import Image from 'next/image';
import { BsFillEmojiLaughingFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { IoMdMic } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

import { Message } from './Message';

import {
  Container,
  HeaderMessages,
  Info,
  Text,
  IconsWrapper,
  Content,
  InputBar,
} from '../../styles/components/content/Messages/styles';
import { Input } from '../Input';

export function Messages() {
  return (
    <Container>
      <HeaderMessages>
        <Info>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={40}
            height={40}
          />
          <Text>
            <span>Gabriel Garcez</span>
            <p>Online</p>
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
