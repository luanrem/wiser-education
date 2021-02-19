import { Container } from '../styles/pages/Home';

import WiserImg from '../assets/wiser.png';

const Home: React.FC = () => {
  return (
    <Container>
      <img src={WiserImg} alt="wiser" />
      <h1>Hello World</h1>
    </Container>
  );
};

export default Home;
