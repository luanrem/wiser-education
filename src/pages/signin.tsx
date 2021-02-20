import { useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Background, Content } from '../styles/pages/Signin';
// import WiserImg from '../assets/wiser.png';

import Input from '../components/Input';
import Button from '../components/Button';

import getValidationErrors from '../utils/getValidationErrors';
import { useAuth } from '../hooks/auth';

interface SignUpFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha Obrigatoria'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        router.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [router, signIn],
  );

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
