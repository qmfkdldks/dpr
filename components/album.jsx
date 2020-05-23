import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';

const container = {
  visible: {
    y: '-20%',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 5,
    },
  },
  hidden: {
    y: '0%',
  },
};

const Album = ({
  title, date, img, href,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <Container
      ref={ref}
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      href={href}
      whileHover={{
        scale: 1.1,
        transition: { type: 'spring', stiffness: 100, damping: 10 },
      }}
    >
      <Image src={img} />
      <Title>{title}</Title>
      <Text>{date}</Text>
    </Container>
  );
};

const Container = styled(motion.a)`
  min-width: 291px;
  width: 33.33333%;
  padding: 0 55px;
  text-decoration: none;
  transform: translate3d(0px, -13.36%, 0px);

  ${down('tablet')} {
    width: 100vw;
  }
`;

const Image = styled(motion.img)`
  border-radius: 5px;
  transition: color 0.2s ease-out;

  width: 100%;
`;

const Title = styled.h4`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export default Album;
