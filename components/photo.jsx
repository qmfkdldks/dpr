import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const Photo = ({
  title, description, img, inverted,
}) => (
  <Container inverted={inverted}>
    <Image src={img} />
    <Description>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Description>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.inverted ? 'row-reverse' : 'row')};
  margin: 150px auto;
  align-items: center;

  ${down('tablet')} {
  }
`;

const Image = styled.img`
  max-width: 576px;
  border-radius: 5px;
  transition: color 0.2s ease-out;
  width: 100%;
`;

const Description = styled.div`
  padding: 0% 3% 0% 13%;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 44px;
`;

const Text = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export default Photo;
