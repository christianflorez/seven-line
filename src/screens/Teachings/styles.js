import styled from "styled-components";
import { colors } from "common/constants";

export const PageHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const TeachingsLink = styled.div`
  display: list-item;
  margin-left: 1.2rem;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  > a {
    color: ${colors.primary};
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
