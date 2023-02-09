import styled from "styled-components";

type props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
};

const _center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Center({ onClick, children }: props) {
  return <_center onClick={onClick}>{children}</_center>;
}
