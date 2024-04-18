import {
  Text,
  Spacer,
  Grid,
  Card,
  Description,
  Link,
  Tooltip,
} from "@geist-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Portfolio from "../components/Portfolio";
import NextLink from "next/link";

export default function Home({ allPosts, contributions }) {
  const bubble = useRef(null);
  const name = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    const setFromEvent = (e) => {
      if (bubble.current == null) return;
      const el = bubble.current;
      const x = e.clientX / 5 - window.innerWidth / 10;
      const y = e.clientY / 5 - window.innerHeight / 10;
      el.style.transform = `translate(${x}px, ${y}px )`;
    };
    window.addEventListener("mousemove", setFromEvent);

    const rect = name.current.getBoundingClientRect();
    const animationFromEvent = (e) => {
      if (text.current == null || name.current == null) return;
      const el = name.current;
      el.style.position = "fixed";
      const rect = text.current.getBoundingClientRect();
      let percent = window.scrollY / 100;
      if (percent < 0) {
        percent = 0;
      }
      if (percent > 1) {
        percent = 1;
      }
      let top = (rect.top - 75) * (1 - percent);
      if (top < 0) {
        top = 0;
      }
      let fontSize = 48 * (1 - percent);
      if (fontSize < 16) {
        fontSize = 16;
      }
      let fontWeight = 200 * percent + 400;
      if (fontWeight < 400) {
        fontWeight = 400;
      }
      el.style.top = `${top}px`;
      el.style.left = `${rect.left}px`;
      el.style.fontSize = `${fontSize}px`;
      el.style.fontWeight = `${fontWeight}`;
    };
    window.addEventListener("scroll", animationFromEvent);
    window.addEventListener("resize", animationFromEvent);
    animationFromEvent();
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("scroll", animationFromEvent);
      window.removeEventListener("resize", animationFromEvent);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Nikhil Vikraman</title>
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <header className={styles.header}>
        <NextLink href="/" style={{ zIndex: 1000 }}>
          <h1 className={styles.logo} ref={name}>
            Nikhil <Text b>Vikraman</Text>
          </h1>
        </NextLink>
        <p className={styles.text} ref={text}>
          I'm a Frontend Developer at{" "}
          <a
            href="https://www.neoito.com/"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <strong>NeoITO</strong>
          </a>
          . I'm a passionate programmer, and I love to build things. Have fun
          learning about me!
        </p>
        <div className={styles.bubble} ref={bubble} />
      </header>
      <Spacer y={3} />
      <div className={styles.portfolioWrapper}>
        <Portfolio />
      </div>
      <Footer />
    </React.Fragment>
  );
}
