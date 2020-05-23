import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Play } from '@styled-icons/fa-solid';
import { Youtube, Facebook, Instagram } from '@styled-icons/entypo-social';
import { down } from 'styled-breakpoints';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import Album from '../components/album';
import Photo from '../components/photo';
import PlayList from '../components/playlist';

export default function Home() {
  let audio = null;

  useEffect(() => {
    audio = new Audio('sfx.mp3');
    audio.loop = true;
  }, []);

  return (
    <>
      <Head>
        <title>DPR - Dream Perfect Regime</title>
      </Head>
      <Navbar>
        <SocialLink href="/">
          <img src="logo.png" width="150" alt="DPR" />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/channel/UCtG5oKSlksz-QmD_2uI4WBw">
          <Youtube width={36} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/dpr_official">
          <Instagram width={36} />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/officialregime">
          <Facebook width={36} />
        </SocialLink>
      </Navbar>
      <Main>
        <Video
          href="https://www.youtube.com/watch?v=cZGMbmYNkWI"
          whileHover={{
            x: 1,
            y: -1,
            transition: { type: 'spring', stiffness: 1000, damping: 0.5 },
          }}
          onMouseEnter={() => {
            audio && audio.play();
          }}
          onMouseLeave={() => {
            audio && audio.pause();
          }}
        >
          <Blur>
            <PlayIcon />
          </Blur>
        </Video>

        <Header style={{ marginTop: '110px' }}>
          <Title>Dream Perfect Regime</Title>
          <Description>
            Dream Perfect Regime (DPR) is an independent, multi-genre music and
            video group. We create, direct, and edit all types of visual work as
            well as curate artists stemming from a wide array of musical
            backgrounds and influences. Currently based in seoul, our primary
            focus is to engage viewers by producing a unique and dynamic
            experience of both visual and audio output
          </Description>
        </Header>

        <Header style={{ marginTop: '210px' }}>
          <Title>Art / Music Works</Title>
          <Description>
            그냥 크게 봐서, 예술을 너무 좋아하는 사람들의 집합체라고 생각하면
            돼요
          </Description>
        </Header>

        <AlbumList>
          <Album
            img="album2.jpg"
            title="IS ANYBODY OUT THERE?"
            date="2020.03.03"
            href="https://www.youtube.com/watch?v=d-Z0Td5KEXA&list=OLAK5uy_nY9vJNOiFsuUe4vsinqpgy3lnk8ykB7lE"
          />
          <Album
            img="album3.jpeg"
            title="HER"
            date="2017.12.07"
            href="https://www.youtube.com/watch?v=-aigq0tYcok&list=OLAK5uy_lxaPJOUyQJfZWfoI2fG9sLNsYhEjq7EFw"
          />
          <Album
            img="album1.jpg"
            title="Coming To You Live"
            date="2017.03.15"
            href="https://www.youtube.com/watch?v=kFDg7HoLXyI&list=OLAK5uy_nsWJf9-fYtZpkffYVHOXNqxsiC-YKxlEE"
          />
        </AlbumList>

        <Photo
          img="concert1.jpg"
          title="다음 목표는 무엇인가요?"
          description="지금 준비하는 게 있긴 있어요. 그냥 저희가 했던 거로 계속 돌아온다는 게 중요한 포인트인 거 같아요. 우리를 계속 보여주는 것에 집중하면 넥스트 레벨에 자연스럽게 도착할 것 같아요.
        "
        />
        <Photo
          img="concert2.jpg"
          title="DPR을 응원하는 팬들에게 한마디 부탁드릴게요"
          description="정말로 사랑하고, 저희의 색깔이나 저희가 추구하는 방향은 절대 타협하지 않을 거니까 계속 서포트만 해주신다면 그걸로 족합니다. DPR we gang gang."
          inverted
        />

        <PlayList />
      </Main>

      <SliderContainer>
        <Title>Visual Works</Title>

        <Slider dots infinite slidesToShow={5}>
          <Tile src="art1.png" />
          <Tile src="art2.png" />
          <Tile src="art3.png" />
          <Tile src="art4.jpg" />
          <Tile src="art5.jpg" />
          <Tile src="art6.png" />
          <Tile src="art7.png" />
          <Tile src="art8.png" />
        </Slider>
      </SliderContainer>

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Poppins, sans-serif;
            background-color: #060608;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
}

const Navbar = styled.nav`
  width: 100px;
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #343841;

  ${down('tablet')} {
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    width: 100%;
    height: 80px;
  }
`;

const Main = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 120px;
  padding-right: 20px;

  ${down('tablet')} {
    padding-left: 20px;
  }
`;

const SliderContainer = styled.div`
  padding-left: 150px;
  padding-right: 50px;

  ${down('tablet')} {
    padding-left: 50px;
  }
`;

const PlayIcon = styled(Play)`
  color: #fff;
  width: 36px;
`;

const Blur = styled.span`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  height: 130px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-out;

  ${down('tablet')} {
    height: 50px;
    width: 50px;

    ${PlayIcon} {
      width: 15px;
    }
  }
`;

const Video = styled(motion.a)`
  max-width: 1200px;
  height: 675px;
  background-image: url("legacy.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    ${Blur} {
      transform: scale(1.12);
    }
  }

  ${down('tablet')} {
    height: 320px;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 5px;
`;

const AlbumList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
`;

const Tile = styled.img`
  max-width: 256px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: Poppins, sans-serif;
  color: #fff;
  font-size: 44px;
  font-weight: 700;
`;

const Description = styled.h1`
  font-family: Poppins, sans-serif;
  color: #a2a3c5;
  font-size: 16px;
`;
