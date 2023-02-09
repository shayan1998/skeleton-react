import styled from "styled-components";
import { Base } from "../styles/index";

type props = {
  height?: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  margin?: string;
  full?: boolean;
};

const _rect = styled(Base)`
  ${(props: props) => props.width && { width: props.width }};
  ${(props: props) => props.full && { flex: 1 }}
  height: ${(props: props) => props.height || "1.5rem"};
  margin: ${(props: props) => props.margin || ""};
`;

export default function ({
  height = "",
  width = "",
  margin = "",
  full = false,
  onClick = () => {},
}: props) {
  return (
    <_rect
      height={height}
      width={width}
      margin={margin}
      full={full}
      onClick={onClick}
    />
  );
}
