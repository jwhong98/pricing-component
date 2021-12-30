import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 30px;
  gap: 20px;
`;

export const CardTitle = styled.h2`
  color: hsl(233, 13%, 49%);
  margin-bottom: 10px;
`;

export const CardPrice = styled.h1`
  color: hsl(232, 13%, 33%);
  margin-bottom: 10px;
  font-size: 4rem;
`;

export const Span = styled.span`
  font-size: 2.5rem;
`;

export const CardMenu = styled.ul`
  width: 100%;
  list-style: none;
  color: hsl(233, 13%, 49%);
  text-transform: capitalize;
  border-top: 1px solid rgba(179, 181, 198, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  border-bottom: 1px solid rgba(179, 181, 198, 0.5);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const CardButton = styled.button`
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  outline: none;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  padding: 15px 0;
  color: #fff;
  border-radius: 5px;
  margin-top: 10px;
`;
