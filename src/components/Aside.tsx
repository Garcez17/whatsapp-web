import Image from 'next/image';
import { BsThreeDotsVertical, BsFillChatLeftDotsFill } from 'react-icons/bs';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { FaBellSlash } from 'react-icons/fa';
import { RiInboxArchiveLine } from 'react-icons/ri';
import {
  Container,
  Header,
  IconsWrapper,
  Notification,
  ContainerBell,
  ContainerInfoNotification,
  SubTitleNotification,
  SearchBar,
  Input,
  ChatsContainer,
  ArchivedContainer,
  IconContainer,
  ArchivedContent,
  Chat,
  ChatContent,
  TitleAndMessage,
  TimeAndMessages,
  MessageCounter,
} from '../styles/components/aside/styles';

export function Aside() {
  const message = true;

  return (
    <Container>
      <Header>
        <Image
          src="/profile.jpeg"
          alt="Gabriel Garcez"
          width={40}
          height={40}
        />
        <IconsWrapper>
          <BsFillChatLeftDotsFill />
          <BsThreeDotsVertical />
        </IconsWrapper>
      </Header>
      <Notification>
        <ContainerBell>
          <FaBellSlash />
        </ContainerBell>

        <ContainerInfoNotification>
          <span>Get notified of new messages</span>
          <SubTitleNotification>
            <p>Turn on desktop notifications</p>
            <FiChevronRight />
          </SubTitleNotification>
        </ContainerInfoNotification>
      </Notification>
      <SearchBar>
        <Input>
          <FiSearch />
          <input type="text" placeholder="Search or start new chat" />
        </Input>
      </SearchBar>
      <ChatsContainer>
        <ArchivedContainer>
          <IconContainer>
            <RiInboxArchiveLine />
          </IconContainer>
          <ArchivedContent>
            <span>Archived</span>
          </ArchivedContent>
        </ArchivedContainer>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages hasMessage>
              <span>21:08</span>
              {message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages hasMessage>
              <span>21:08</span>
              {message && (
                <MessageCounter>
                  <span>123</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages>
              <span>21:08</span>
              {!message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages>
              <span>21:08</span>
              {!message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages>
              <span>21:08</span>
              {!message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages>
              <span>21:08</span>
              {!message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages>
              <span>21:08</span>
              {!message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages>
              <span>21:08</span>
              {!message && (
                <MessageCounter>
                  <span>86</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
        <Chat>
          <Image
            src="/profile.jpeg"
            alt="Gabriel Garcez"
            width={50}
            height={50}
          />
          <ChatContent>
            <TitleAndMessage>
              <span>Gabriel Garcez</span>
              <p>vsf corno fudido kkkkkkkkkj</p>
            </TitleAndMessage>
            <TimeAndMessages hasMessage>
              <span>21:08</span>
              {message && (
                <MessageCounter>
                  <span>7</span>
                </MessageCounter>
              )}
            </TimeAndMessages>
          </ChatContent>
        </Chat>
      </ChatsContainer>
    </Container>
  );
}
