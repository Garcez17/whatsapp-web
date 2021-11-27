import styled from 'styled-components';
// import DiscordIcon from '../../../../public/discord.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--black);
`;

export const Header = styled.header`
  height: 14rem;
  background: var(--green-400);
  padding: 2rem 12rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    margin-left: 1rem;
    font-size: 0.875rem;
  }
`;

export const Wrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  width: 57rem;
  top: -15%;
  padding: 3.5rem;

  display: flex;

  position: absolute;
  background: var(--white);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Info = styled.div`
  flex: 1;

  h1 {
    font-size: 1.75rem;
    color: var(--gray-450);
    font-weight: 400;
  }

  p {
    margin-top: 1rem;
    font-size: 1.125rem;
    color: var(--gray-350);
  }
`;

export const ButtonsContainer = styled.div`
  width: 20rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

type ButtonProps = {
  color: string;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 3rem;
  background: ${props => props.color};
  border-radius: 0.25rem;
  border: 0;
  padding: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  font-size: 1.15rem;
  color: ${props =>
    props.color === 'var(--white-100)' ? 'var(--black)' : 'var(--white-100)'};

  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    color: white;
    width: 1.5rem;
    height: 1.5rem;
  }

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.95);
  }
`;

export const InstagramButton = styled.div``;

export const DiscordButton = styled.div``;
