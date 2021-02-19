import { useCallback, useRef } from 'react';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, Background, Content } from '../styles/pages/Signin';
// import WiserImg from '../assets/wiser.png';

import Input from '../components/Input';
import Button from '../components/Button';

interface SignUpFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {}, []);

  return (
    <Container>
      <Background>
        <div className="layer" />
      </Background>

      <Content>
        <div className="fixedContent">
          <h1>Olá, seja bem vindo!</h1>

          <h3>Para acessar a plataforma, faça seu login.</h3>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <span>E-MAIL</span>
            <Input name="email" placeholder="E-mail" />

            <span>SENHA</span>
            <Input name="password" type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>
          </Form>

          <h4>
            Esqueceu seu login ou senha? Clique <Link href="/">aqui</Link>
          </h4>
        </div>
      </Content>
    </Container>
  );
};

export default Signin;
