import styled from "styled-components";
import { Base } from "../styles";

type props = {
  width?: string;
  margin?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type squareProps = { width: string; margin: string };
const Square = styled(Base)`
  width: ${(props: props) => props.width || "50px"};
  height: ${(props: props) => props.width || "50px"};
  margin: ${(props: props) => props.margin || ""};
`;

export default function ({
  width = "",
  margin = "",
  onClick = () => {},
}: props) {
  return (
    <Square
      className="square"
      margin={margin}
      width={width}
      onClick={onClick}
    />
  );
}
