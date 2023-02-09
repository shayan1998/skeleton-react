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

const _row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: "row";
  align-items: ${(props: props) => props.alignItems || ""};
  justify-content: ${(props: props) => props.justifyContent || ""};
`;

export default function Row({
  onClick,
  children,
  alignItems,
  justifyContent,
}: props) {
  return (
    <_row
      onClick={onClick}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </_row>
  );
}
