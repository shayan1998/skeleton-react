import styled from "styled-components";
import { Base } from "../styles";

type props = {
  radius?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  margin?: string;
};

const _circle = styled(Base)`
  border-radius: 50%;
  width: ${(props: props) => props.radius || "50px"};
  height: ${(props: props) => props.radius || "50px"};
  margin: ${(props: props) => props.margin || ""};
`;

export default function ({
  radius = "",
  margin = "",
  onClick = () => {},
}: props) {
  return <_circle radius={radius} margin={margin} onClick={onClick} />;
}
