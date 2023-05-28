import styled from "styled-components";
import { ButtonStyled } from "../styled.js";
import { InputCustomStyled, TextAreaCustomStyled } from "./InputCustom.js";

export default function CreatePost() {
  return (
    <CreatePostContainerStyled>
      <CreatePostFormStyled>
        <CreatePostInputStyled
          placeholder="Insira a URL da imagem"
          type="url"
          required
        />
        <CreatePostTextAreaStyled
          rows={5}
          placeholder="Escreva uma nova publicação"
          required
        />
        <CreatePostButtonStyled>Publicar</CreatePostButtonStyled>
      </CreatePostFormStyled>
    </CreatePostContainerStyled>
  );
}

const CreatePostFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CreatePostButtonStyled = styled(ButtonStyled)`
  width: 100%;
  border-radius: 16px;
`;

const CreatePostInputStyled = styled(InputCustomStyled)`
  background: #1c1917;
  padding: 16px, 24px, 16px, 24px;
  border-radius: 16px;
  width: 100%;
`;

const CreatePostTextAreaStyled = styled(TextAreaCustomStyled)`
  background: #1c1917;
  padding: 16px, 24px, 16px, 24px;
  border-radius: 16px;
  width: 100%;
`;

const CreatePostContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 8px;
  background: #24211f;
  border-radius: 0px 0px 24px 24px;
  border-top: 1px solid #3c342f;
  width: 100%;
`;
