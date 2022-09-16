import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = (props) => {
  return (
    <>
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};
