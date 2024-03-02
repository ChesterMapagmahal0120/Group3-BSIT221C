import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React from "react";
import Features from "@/components/Features";
import Abouts from "@/components/Abouts";
import SearchRecipes from "@/components/SearchRecipes"
import Navbars from "@/components/Navbar";




export default function Home() {
  return(
    <>
      <Head>
        <title>The Flavor Nest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main}`}>
       
      </main>
      <Features/>
      <Abouts/>
      <SearchRecipes/>
    </>
  );
}