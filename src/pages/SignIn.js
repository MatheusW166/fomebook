import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import { signIn } from "../services/user.services.js";
import { saveToken } from "../storage/user.storage.js";
import {
  ButtonStyled,
  FormStyled,
  MainStyled,
  SignTitleStyled,
  TitleH2Styled,
} from "../styled.js";
import { useContext } from "react";
import { UserContext } from "../context/user.context.js";
import InputCustom from "../components/InputCustom.js";
import { parseError } from "../utils/error.utils.js";

export default function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value?.trim();
    const password = form.password.value?.trim();

    if (!email || !password) return;

    try {
      const user = await signIn({ email, password });
      saveToken(user?.token);
      setUser(user);
      navigate(`/users/${user.id}`);
    } catch (err) {
      alert(parseError(err));
    }
  }

  return (
    <>
      <Header />
      <MainStyled>
        <SignTitleStyled>
          <TitleH2Styled>Login</TitleH2Styled>
          <p>
            Não possui cadastro? <Link to="/signup">Cadastre-se.</Link>
          </p>
        </SignTitleStyled>
        <FormStyled onSubmit={handleLogin}>
          <InputCustom
            name="email"
            placeholder="fulano@email.com"
            type="email"
            label="Email"
            required
          />
          <InputCustom
            name="password"
            placeholder="******"
            type="password"
            label="Senha"
            required
          />
          <ButtonStyled type="submit">Entrar</ButtonStyled>
        </FormStyled>
      </MainStyled>
    </>
  );
}
