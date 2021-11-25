import Image from 'next/image';
import { Container, WppInfo } from '../styles/components/content/styles';

export function Content() {
  return (
    <Container>
      <WppInfo>
        <Image
          src="/wpp_img_dark.jpg"
          alt="Gabriel Garcez"
          width={356}
          height={355}
        />

        <span>Keep you phone connected</span>
        <p>
          WhatsApp connects to your phone to sync messages. To reduce data
          usage, connect your phone to Wi-Fi.
        </p>
      </WppInfo>
    </Container>
  );
}
