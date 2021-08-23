import styled from 'styled-components';
import {themes} from "../../Theme";

export const Container = styled.div`
  max-width: 245px;
  min-width: 245px;
`;

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LabelStyle = styled.label`
  color: ${() => themes.secondary.background};
`;

export const InputStyle = styled.input`
  background: ${() => themes.secondary.color};
  margin-right: 10px;
  margin-bottom: 8px;
`;