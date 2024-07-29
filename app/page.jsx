"use client";

import Header from "../app/header/page";
import Body from "../app/body/page";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Footer from "./Footer/footer"

export default function Home() {
  useEffect(() => {
     AOS.init();

  });
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
        
  )
}
