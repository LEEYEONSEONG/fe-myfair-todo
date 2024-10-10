"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/GlobalStyle";

interface Props {
  children: React.ReactNode;
}

const LayoutRecoil = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {children}
    </RecoilRoot>
  );
};

export default LayoutRecoil;
