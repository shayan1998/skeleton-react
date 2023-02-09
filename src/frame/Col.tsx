import styled from "styled-components";

type props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  alignItems?: "center" | "start" | "end" | "baseline";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "space-around"
    | "space-between";
  children: React.ReactNode;
};

const _col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: ${(props: props) => props.alignItems || ""};
  justify-content: ${(props: props) => props.justifyContent || ""};
`;

export default function Col({
  onClick,
  children,
  alignItems,
  justifyContent,
}: props) {
  return (
    <_col
      onClick={onClick}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </_col>
  );
}
