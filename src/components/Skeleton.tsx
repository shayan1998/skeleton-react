// import "../styles/index.scss";
import React from "react";
import styled from "styled-components";

type props = {
  children: React.ReactNode;
  enable?: boolean;
  dir?: "rtl" | "ltr";
};

const _skeleton = styled.div`
  display: block;
  border: 2px solid #eee;
  border-radius: $border-radius;
  padding: 10px;
`;

export default function ({ children, enable = true, dir = "rtl" }: props) {
  return enable ? <_skeleton dir={dir}>{children}</_skeleton> : <></>;
}
