import styled from 'styled-components';

export default ({ title, description, length }) => (
  <Container>
    <Description>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Description>
    <Text>{length}</Text>
  </Container>
);

const Title = styled.h4`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const Text = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 9px 50px;
`;

const Description = styled.div``;
