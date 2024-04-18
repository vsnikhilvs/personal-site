import { Divider, Grid, Text } from "@geist-ui/react";
import { Github, Linkedin, Twitter } from "@geist-ui/react-icons";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import React from "react";

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
          </Grid>
        </Grid.Container>
      </div>
    </React.Fragment>
  );
}
