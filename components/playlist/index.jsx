import styled from 'styled-components';
import Item from './item';

const PlayList = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}
  >
    <Card>
      <Header>
        <Title>SINGLE</Title>
      </Header>
      <Item title="Till I Die" description="2015.8.23" length="4:13" />
      <Item title="God Bless" description="2016.6.2" length="2:18" />
      <Item title="갈증" description="2016.6.29" length="2:41" />
      <Item title="Dream Prefect" description="2016.6.22" length="3:35" />
      <Item title="Know Me (Feat. Dean)" description="2017.3.2" length="3:26" />
    </Card>
    <Card>
      <Item title="Please" description="2017.3.8" length="3:02" />
      <Item title="Jasmine" description="2017.10.8" length="3:25" />
      <Item title="Action!" description="2018.3.13" length="3:12" />
      <Item title="Playlist" description="2018.6.12" length="2:58" />
      <Item title="Gravity" description="2019.7.27" length="2:15" />
    </Card>
  </div>
);

const Card = styled.div`
  max-width: 467px;
  min-width: 320px;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 7px 17.82px 0.18px rgba(56, 33, 74, 0.4);
  padding: 30px 0;
  border-radius: 5px;
  margin-bottom: 49px;
  padding-top: 0;
`;

const Header = styled.div`
  background-image: url("artist-bg.jpg");
  display: flex;
  align-items: center;
  padding: 25px 50px;
  margin-bottom: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0 0;
`;

const Title = styled.h4`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

export default PlayList;
