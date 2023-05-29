import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import {
  ButtonStyled,
  FormStyled,
  MainStyled,
  SignTitleStyled,
  TitleH2Styled,
} from "../styled.js";
import { signUp } from "../services/user.services.js";
import InputCustom, {
  InputCustomLabel,
  TextAreaCustomStyled,
} from "../components/InputCustom.js";
import { parseError } from "../utils/error.utils.js";

export default function SignUp() {
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value?.trim();
    const email = form.email.value?.trim();
    const photoUrl = form.photo.value?.trim();
    const bio = form.bio.value?.trim();
    const password = form.password.value?.trim();
    const confirmPassword = form["password-confirm"].value?.trim();

    if (password !== confirmPassword) {
      alert("passwords are not equal");
      return;
    }

    try {
      await signUp({ name, photoUrl, bio, email, password });
      navigate("/");
    } catch (err) {
      alert(parseError(err));
    }
  }

  return (
    <>
      <Header />
      <MainStyled>
        <SignTitleStyled>
          <TitleH2Styled>Cadastro</TitleH2Styled>
          <p>
            Já possui cadastro? <Link to="/">Faça login.</Link>
          </p>
        </SignTitleStyled>
        <FormStyled onSubmit={handleRegister}>
          <InputCustom
            name="name"
            placeholder="Digite aqui..."
            type="text"
            label="Nome"
            required
          />
          <InputCustom
            name="photo"
            placeholder="Cole a url da foto..."
            type="url"
            label="Foto de perfil"
            required
          />
          <InputCustomLabel>
            <span>Biografia (até 200 caracteres)</span>
            <TextAreaCustomStyled
              name="bio"
              required
              maxLength={200}
              rows={4}
              placeholder="Digite aqui..."
            />
          </InputCustomLabel>
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
          <InputCustom
            name="password-confirm"
            placeholder="******"
            type="password"
            label="Repita a senha"
            required
          />
          <ButtonStyled type="submit">Cadastrar</ButtonStyled>
        </FormStyled>
      </MainStyled>
    </>
  );
}
