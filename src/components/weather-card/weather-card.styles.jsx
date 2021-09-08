import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  margin: 20px auto 0 auto;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightcoral;
`;

export const WeatherCardTitle = styled.h1`
  font-size: 21px;
  font-weight: bold;
`;

export const WeatherCardType = styled.span`
  font-size: 18px;
`;

export const WeatherCardDescription = styled.p`
  font-size: 16px;
`;
