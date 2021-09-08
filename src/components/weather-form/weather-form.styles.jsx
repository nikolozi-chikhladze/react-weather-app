import styled from "styled-components";

export const WeatherFormContainer = styled.div`
  width: 60%;
`;

export const WeatherForm = styled.form``;

export const WeatherFormInput = styled.input`
  padding: 15px 10px;
  font-size: 18px;
`;

export const WeatherFormSubmit = styled.button`
  margin-top: 10px;
  border: none;
  padding: 15px 20px;
  background-color: #748386;
  font-weight: bold;
  font-size: 21px;
  color: #fff;
  transition: background-color 0.3s;

  :hover {
    cursor: pointer;
    background-color: #9dc7c8;
  }
`;
