import styled from "styled-components";
import img from "../../images/bg-top.svg";

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(240, 78%, 98%);
  background-image: url(${img});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 190px -30px;
  padding: 20px;
`;

export const PageTitle = styled.h1`
  text-transform: capitalize;
  color: hsl(233, 13%, 49%);
  margin-bottom: 30px;
  margin-top: 50px;
`;

export const PlanOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;

export const Option = styled.p`
  color: hsl(234, 14%, 74%);
  text-transform: capitalize;
`;

export const Switch = styled.button`
  margin: 0 10px;
`;
