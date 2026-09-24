import Input from '../Forms/Input.jsx';
import Button from '../Forms/Button.jsx';
import useForm from '../../Hooks/useForm.jsx';
import useFetch from '../../Hooks/useFetch.jsx';
import { PASSWORD_LOST } from '../../api.jsx';
import Error from '../Helper/Error.jsx';
import Head from '../Helper/Head.jsx';

const LoginPasswordLost = () => {
  const login = useForm();
  const { request, data, loading, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });

      const { json, response } = await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />

      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: "#4c1"}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
