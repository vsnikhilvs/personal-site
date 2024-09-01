import { Divider, Grid, Text } from "@geist-ui/react";
import { Image, Instagram, Linkedin } from "@geist-ui/react-icons";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import React from "react";
import MediumIcon from "./MediumIcon";
import DevtoIcon from "./DevtoIcon";
import HashNodeIcon from "./HashNodeIcon";

export default function Footer() {
  return (
    <React.Fragment>
      <div className={styles.row}>
        <Grid.Container
          gap={2}
          className={styles.footer}
          justify="space-evenly"
        >
          <Grid xs={24} md={5}>
            <Link href="/">
              <div className={styles.logo}>
                <Text style={{ fontSize: "24px", marginLeft: "10px" }}>
                  Nikhil <Text b>Vikraman</Text>
                </Text>
              </div>
            </Link>
          </Grid>
          <Grid xs={24} md={7}>
            <Divider />
            <Text h3>Contact</Text>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/sknikhilvs5/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin /> LinkedIn
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://dev.to/vsnikhilvs"
                target="_blank"
                rel="noreferrer"
              >
                <DevtoIcon /> Dev.to
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://vsnikhilvs.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <MediumIcon /> Medium
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://vsnikhilvs.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <HashNodeIcon /> Hashnode
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://www.instagram.com/vs_nikhil_vs/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram /> Instagram
              </a>
            </div>
          </Grid>
          <Grid xs={24} md={7}>
            <Divider />
            <Text h3>Websites</Text>
            <div className={styles.social}>
              <a
                href="https://my-portfolio-258025.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image /> Photography
              </a>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </React.Fragment>
  );
}
