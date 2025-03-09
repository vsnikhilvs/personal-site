import { Card, Grid, Text } from "@geist-ui/react";
import classNames from "classnames";
import styles from "../styles/Portfolio.module.scss";

export default function Portfolio() {
  const handleClick = (type) => {
    switch (type) {
      case "fromthefarm":
        window.open("https://fromthefarm.io /", "_blank");
        break;
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
      case "winnow":
        window.open("https://www.winnowhealth.ai/", "_blank");
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
          Dynamic and results-driven Frontend Developer with 4+ years of experience in building innovative
          web applications using modern technologies like Next.js, React.js, and Angular. Proven expertise
          in crafting high-performance, user-centric interfaces while leading teams and managing diverse projects.
          Delivering high-quality solutions that enhance user experience and driving customer success.
          Committed to continuous learning and staying ahead of industry trends.
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
                <Text b>•	NextJS, ReactJS, Angular, Typescript, Javascript, SCSS, CSS, HTML, BabylonJS, TailwindCSS, Redux Toolkit, Jotai, Jest</Text>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card className={styles.card}>
              <Text className={styles.label}>Back-End</Text>
              <Text className={styles.cardText}>
                <Text b>•	Node.js, MongoDB (Knowledge)</Text>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card className={styles.card}>
              <Text className={styles.label}>Other</Text>
              <Text className={styles.cardText}>
                <Text b>Flutter, Figma, Storybook, Docker, AWS EC2</Text>
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
          <Text b>Senior Application Developer, EY (August 2024 - Current)</Text>
          <br />
          <p className={styles.ptext}>
            • Developed and optimized key modules for a proprietary banking product, implementing
            responsive SCSS-based UI components and enhancing data visualization using AG Grid and Chart.js,
            resulting in a 20% improvement in user interaction efficiency.
          </p>
          <p className={styles.ptext}>
            • Led performance optimizations and package upgrades, reducing bottlenecks and improving
            application speed while maintaining 80%+ test coverage with Jest and Redux Toolkit.
          </p>
          <p className={styles.ptext}>
            • Reviewed code and mentored junior developers, ensuring high-quality standards through
            peer reviews and knowledge sharing within the team.
          </p>
          <br />
          <br />
          <Text b>SDE 2, NeoITO (Sep 2022 - May 2024)</Text>
          <br />
          <p className={styles.ptext}>
            • Led and Re-architected POGR, a cutting-edge platform for real-time game performance
             analysis for game developers, with global coding standards providing clean maintainable code and peer reviewing.
          </p>
          <p className={styles.ptext}>
            •	Co-developed a fully customizable widget system for the gamers to show off their skill 
            that would result in 40% increase of their visibility.
          </p>
          <p className={styles.ptext}>
            • Collaborated with cross functional teams and clients for the continued development and 
            insights analysis of From the Farm, utilizing Google Tag Manager and Google Analytics.
          </p>
          <p className={styles.ptext}>
          •	Developed Metrics.ai, an innovative platform designed to analyze activity data sourced from version control systems 
          and project management tools, that would save the analysis time of product team by at least 25%.
          </p>
          <p className={styles.ptext}>
          •	Utilized Storybook for UI components creation which decreased the application size by 30% resulting 
          in faster loading and improved bundling.
          </p>
          <br />
          <br />
          <Text b>Software Engineer, TILTLABS (Jan 2022 - Sep 2022)</Text>
          <br />
          <p className={styles.ptext}>
          •	Solely prototyped a highly memory-optimized Proof of Concept for SITA, introducing a user interactive 
          airport interior using BabylonJS, capping the memory usage to a mere 40MB, incorporating a point cloud system.
          </p>
          <p className={styles.ptext}>
            • Implemented user-friendly interfaces for an innovative ecommerce platform allowing secure online 
            trading of marijuana using Blockchain-based trading wallets giving the customers 100% trust.
          </p>
          <p className={styles.ptext}>
          •	Built and optimized frontend features for an NFT cutting technology that adjusts market supply and 
          demand, enhancing user engagement and strategic trading within the platform.
          </p>
          <br />
          <br />
          <Text b>Front End Engineer, LogicPlum (Nov 2020 - Dec 2021)</Text>
          <br />
          <p className={styles.ptext}>
          •	Led a team of two and collaborated on the development of LogicPlum AI creating scalable AI 
          solutions, improving 100% customer engagement through interactive visualizations.
          </p>
          <p className={styles.ptext}>
          •	Architected and Developed Polaris AI for hospital staff scheduling automation and Winnow 
          AI for physician recruitment, through predictive analytics of 100+users and AI-driven insights.
          </p>
          <p className={styles.ptext}>
          •	Contributed to the development of RoadMap Live, a scoring system helping product managers 
          prioritize initiatives and take strategic decisions based on RICE score, saving about 30% of their time.
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
                src="https://vsnikhilvs.github.io/personal-site/farm.jpg"
                alt="From the Farm"
                className={styles.cardImg}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("fromthefarm")}
                style={{ cursor: "pointer" }}
              >
                From the Farm
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify " }}
              >
                <p>
                  Fresh products directly from the farm !
                </p>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="https://vsnikhilvs.github.io/personal-site/pogr.jpg"
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
                src="https://vsnikhilvs.github.io/personal-site/digitaltwin.png"
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
                src="https://vsnikhilvs.github.io/personal-site/smuggleverse.jpg"
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
                src="https://vsnikhilvs.github.io/personal-site/logicplum.jpg"
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
                src="https://vsnikhilvs.github.io/personal-site/winnow.jpg"
                alt="Winnow"
                className={styles.cardImg}
              />
              <Text
                className={styles.label}
                align="center"
                onClick={() => handleClick("winnow")}
                style={{ cursor: "pointer" }}
              >
                Winnow
              </Text>
              <Text
                className={styles.cardText}
                style={{ textAlign: "justify  " }}
              >
                <p>
                  AI enabled physician hiring platform, making use of connections of each physicians for decision making
                </p>
              </Text>
            </Card>
          </Grid>
          <Grid xs={24} md={8}>
            <Card className={styles.card}>
              <img
                src="https://vsnikhilvs.github.io/personal-site/polarishealthai.jpg"
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
