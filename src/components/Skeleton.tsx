// import "../styles/index.scss";
import React from "react";

type props = {
  children: React.ReactNode;
  enable?: boolean;
  dir?: "rtl" | "ltr";
};

export default function ({ children, enable = true, dir = "rtl" }: props) {
  return enable ? <div dir={dir}>{children}</div> : <></>;
}
