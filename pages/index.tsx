import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";

import Footer from "@/components/footer/Footer";
import MainSection from "@/components/mainSection/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Header/>
        <MainSection/>
        <Footer/>
    </>
  );
}
