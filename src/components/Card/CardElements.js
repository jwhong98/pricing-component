import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.dark
      ? "linear-gradient(to right bottom, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
      : "#fff"};
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 30px;
  gap: 20px;
`;

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  text-transform: capitalize;
  color: ${(props) => (props.dark ? "#fff" : "hsl(233, 13%, 49%)")};
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.dark ? "#fff" : "hsl(232, 13%, 33%)")};
`;

export const CardPrice = styled.h1`
  margin-bottom: 10px;
  font-size: 4rem;
`;

export const Span = styled.span`
  font-size: 2.5rem;
  margin-right: 5px;
`;

export const CardMenu = styled.ul`
  width: 100%;
  list-style: none;
  color: ${(props) => (props.dark ? "#fff" : "hsl(233, 13%, 49%)")};
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
  background: ${(props) =>
    props.dark
      ? "#fff"
      : "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"};
  padding: 15px 0;
  color: ${(props) => (props.dark ? "hsl(237, 63%, 64%)" : "#fff")};
  border-radius: 5px;
  margin-top: 10px;
`;
