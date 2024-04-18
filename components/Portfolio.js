import { Card, Grid, Text } from "@geist-ui/react";
import classNames from "classnames";
import styles from "../styles/Portfolio.module.scss";

export default function Portfolio() {
  const handleClick = (type) => {
    switch (type) {
      case "pogr":
        window.open("https://pogr.gg/", "_blank");
        break;
      case "digitaltwin":
        window.open("https://d22p7lebuwxghf.cloudfront.net/", "_blank");
        break;
      case "smuggleverse":
        window.open("https://www.smuggleverse.com/", "_blank");
        break;
      case "logicplum":
        window.open("https://logicplum.com/", "_blank");
        break;
      case "polarishealthai":
        window.open("https://polarishealth.ai/", "_blank");
        break;

      default:
        break;
    }
  };
  return (
    <Grid.Container gap={2}>
      <Grid xs={24} md={8}>
        <Text className={styles.label}>Bio</Text>
      </Grid>
      <Grid xs={24} md={16}>
        <Text className={styles.text}>
          Dedicated front-end web developer with over three years of hands-on
          experience specializing in crafting responsive websites utilizing
          ReactJS and NextJS frameworks. Known for consistently delivering
          superior user experiences across various devices and browsers. Seeking
          to leverage expertise and proven track record to contribute to
          innovative projects and drive impactful results within a dynamic team
          environment.
        </Text>
      </Grid>
      <Grid xs={24} md={8}>
        <Text className={styles.label}>Skills</Text>
      </Grid>
      <Grid xs={24} md={16}>
        <Grid.Container gap={2}>
          <Grid xs={24} md={12}>
            <Card className={styles.card}>
              <Text className={styles.label}>Front-End</Text>
              <Text className={styles.cardText}>
                <Text b>NextJS, ReactJS, Angular</Text>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card className={styles.card}>
              <Text className={styles.label}>Back-End</Text>
              <Text className={styles.cardText}>
                <Text b>NestJS, Fastify (Knowledge)</Text>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card className={styles.card}>
              <Text className={styles.label}>Other</Text>
              <Text className={styles.cardText}>
                <Text b>BabylonJS, TailwindCSS, PrimeNG, D3JS</Text>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card className={styles.card}>
              <Text className={styles.label}>Professional</Text>
              <Text className={styles.cardText}>
                <Text b>
                  Communication, Team Leading, Problem solving, Client
                  Interaction
                </Text>
              </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={24} md={8}>
        <Text className={styles.label}>Experience</Text>
      </Grid>
      <Grid xs={24} md={16}>
        <Text className={styles.text}>
          <Text b>SDE 2, NeoITO (Sep 2022 - Current)</Text>
          <br />
          <p className={styles.ptext}>
            • Overseeing the successful completion of various projects by
            coordinating tasks, providing guidance on coding best practices, and
            conducting regular code reviews
          </p>
          <p className={styles.ptext}>
            • Actively involved in the ongoing development of POGR, a
            cutting-edge platform with the primary objective of real-time game
            performance analysis for game developers, using NextJS
          </p>
          <p className={styles.ptext}>
            • Create APIs in Fastify linked with SQLite for the process of going
            fullstack
          </p>
          <br />
          <br />
          <Text b>Software Engineer, TILTLABS (Jan 2022 - Sep 2022)</Text>
          <br />
          <p className={styles.ptext}>
            • Conceptualized and developed a Proof of Concept (POC) for SITA,
            showcasing an innovative airport interior interaction system
          </p>
          <p className={styles.ptext}>
            • Leveraged BabylonJS and React to create a dynamic and immersive
            environment that allowed users to navigate and interact within the
            airport’s interior virtually
          </p>
          <p className={styles.ptext}>
            • Achieved high levels of modularity and memory optimization through
            meticulous architectural design, resulting in smooth performance and
            enhanced user satisfaction
          </p>
          <br />
          <br />
          <Text b>Front End Engineer, LogicPlum (Nov 2020 - Dec 2021)</Text>
          <br />
          <p className={styles.ptext}>
            • Led a team of 4 talented front-end developers in executing
            innovative and responsive web design projects, ensuring optimal user
            experiences and seamless cross-browser compatibility
          </p>
          <p className={styles.ptext}>
            • Played a key role in the design, development, and enhancement of
            the LogicPlum.ai platform and Roadmap.ai, an intelligent scoring
            system designed to enhance product management prioritization
          </p>
          <p className={styles.ptext}>
            • Collaborated with cross-functional teams to update the user
            interface (UI) and functionalities, improving user experience and
            overall platform performance
          </p>
          <br />
          <br />
          <Text b>
            Software Engineer Trainee, Eye Net Labs (Aug 2020 - Oct 2020)
          </Text>
          <br />
          <p className={styles.ptext}>
            • Developing responsive web applications with Reactjs, Redux, Thunk
            and Axios
          </p>
          <br />
          <br />
          <Text b>
            Customer Relationship Management Lead, Ecorgy Solutions Pvt Ltd (Aug
            2019 - Jul 2020)
          </Text>
          <br />
          <p className={styles.ptext}>
            • Handling business processing for 10 home health services including
            AVATAR Healthcare based on Richardson, Texas and NEOGENCARE Home
            health services, California
          </p>
          <p className={styles.ptext}>• Spearheading business communication</p>
          <p className={styles.ptext}>
            • Undertaking onshore and offshore process coordination for in house
            and client projects and documenting pro- cesses for effectively
            training newbies
          </p>
          <p className={styles.ptext}>
            • Day to day analysis of the project and preparing detailed weekly
            reports to the leadership
          </p>
          <br />
          <br />
        </Text>
      </Grid>
      <Grid xs={24} md={8}>
        <Text className={styles.label}>Education</Text>
      </Grid>
      <Grid xs={24} md={16}>
        <Text className={styles.text}>
          <Text b>
            B.Tech Mechanical Engineering, Lourdes Matha College of Science and
            Technology (2014 - 2018)
          </Text>
          <br />
        </Text>
      </Grid>
      <Grid xs={24} md={8}>
        <Text className={styles.label}>Featured Projects</Text>
      </Grid>
      <Grid xs={24} md={16}>
        <Grid.Container gap={2}>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="/pogr.jpg"
                alt="Play Of the Game Rating"
                className={styles.cardImg}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("pogr")}
                style={{ cursor: "pointer" }}
              >
                Play Of the Game Rating
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify " }}
              >
                <p>
                  A fully loaded platform built with gamers and developers in
                  mind. Built in NextJS with custom components and icon
                  libraries with highly optimized codebase, just so you know, we
                  need ultra-low latency
                </p>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="/digitaltwin.png"
                alt="Digital Twin"
                className={styles.cardImg}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("digitaltwin")}
                style={{ cursor: "pointer" }}
              >
                Digital Twin
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify " }}
              >
                <p>
                  Leveraged BabylonJS and React to create a dynamic and
                  immersive environment that allowed users to navigate and
                  interact within the airport’s interior virtually
                </p>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="/smuggleverse.jpg"
                alt="Smuggleverse"
                className={classNames(styles.cardImg, styles.darkInvert)}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("smuggleverse")}
                style={{ cursor: "pointer" }}
              >
                Smuggleverse
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify" }}
              >
                <p>
                  SMUGGLEVERSE collaborates with top-tier celebrities and brands
                  to create and distribute custom digital cannabis strains that
                  can be CUT and STACKED
                </p>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="/logicplum.jpg"
                alt="LogicPlum"
                className={styles.cardImg}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("logicplum")}
                style={{ cursor: "pointer" }}
              >
                LogicPlum
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify " }}
              >
                <p>
                  LogicPlum combinesthe power of advanced AIsystems with some of
                  the best technologistsin existence to design, code, and create
                  your AI application
                </p>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="/polarishealthai.jpg"
                alt="PolarisHealth"
                className={styles.cardImg}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("polarishealthai")}
                style={{ cursor: "pointer" }}
              >
                PolarisHealth
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify  " }}
              >
                <p>
                  Our AI solution can predict your patient volume to the hour
                </p>
              </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}
