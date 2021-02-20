import Link from 'next/link';
import { Container, Background, Button } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
      </Container>
      <Link href="/signin">
        <Button>
          <p>Sair</p>
        </Button>
      </Link>
    </>
  );
};

export default Home;
