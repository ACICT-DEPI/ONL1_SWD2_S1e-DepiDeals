import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function Aside() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        minWidth: "30%",
        maxWidth: "32%",
        bgcolor: "primary.main",
        alignItems: "start",
        justifyContent: "start",
        minheight: "100%",
      }}>
      <List
        sx={{
          display: { xs: "none", md: "flex" },
          minWidth: "100%",
          maxWidth: "100%",
          bgcolor: "primary.main",
          color: "white",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minheight: "50000000px",
          maxheight: "50px",
        }}>
        <ListItem sx={{ mb: 3 }}>
          <Box
            sx={{
              py: "10px",
              minHeight: "40px",
              minWidth: "210px",
              maxHeight: "60px",
              maxWidth: "246px",
            }}>
            <img height={"100%"} width={"100%"} src="/name.png" alt="" />
          </Box>
        </ListItem>
        <ListItem>
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                About Me
              </Typography>
              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "10px",
                  color: "secondary.main",
                  fontWeight: "300",
                }}>
                My name is Seif El-Islam, and as a 22-year-old MERN full-stack
                expert and UI/UX visionary, I weave code and design into
                captivating digital experiences. With a mastery of the MERN
                stack and an eye for striking visuals, I bring ideas to life
                through intuitive web applications. From the backend's robust
                infrastructure to the frontend's alluring interfaces, I
                seamlessly blend function and form. Equipped with a diverse
                toolkit of programming languages, frameworks, and design tools,
                I'm a creative problem-solver, always seeking to push the
                boundaries of what's possible..
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Experience
              </Typography>
              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "14px",
                  color: "#5C8FF3",
                  fontWeight: "600",
                }}>
                Figma UI/UX Designer{" "}
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "secondary.main",
                    fontSize: "11px",
                  }}>
                  ( Freelancer )
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: "10px",
                }}>
                Jan. 2022 - Until. now
              </Typography>
              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "10px",
                  color: "secondary.main",
                  fontWeight: "300",
                }}>
                A experienced ui/ux designer, I've utilized Figma to design both
                web and mobile applications. this has allowed me to create
                visually appealing and user-friendly interfaces that provide an
                optimal user experience.
              </Typography>
              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "14px",
                  color: "#5C8FF3",
                  fontWeight: "600",
                }}>
                MERN Full-stack Developer{" "}
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "secondary.main",
                    fontSize: "11px",
                  }}>
                  ( Freelancer )
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: "10px",
                }}>
                Jan. 2022 - Until. now
              </Typography>
              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "10px",
                  color: "secondary.main",
                  fontWeight: "300",
                }}>
                As a MERN full-stack developer, I've developed a quite good
                number of applications, either focusing on the backend using
                Express.js or the frontend using React.js. however, i have more
                experience as a backend developer, building full-stack web
                applications with the MERN stack - Mongodb, Express.js,
                React.js, and Node.js.
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Education
              </Typography>

              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "14px",
                  color: "#5C8FF3",
                  fontWeight: "600",
                }}>
                Bachelor of Computer Science and Artificial intelligence
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "secondary.main",
                    fontSize: "11px",
                  }}>
                  ( Sohag University )
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: "10px",
                }}>
                Sep. 2020 - June. 2024
              </Typography>
              <Typography
                sx={{
                  maxWidth: "85%",
                  fontSize: "10px",
                  color: "secondary.main",
                  fontWeight: "300",
                }}>
                Studied at Sohag University, Faculty of Computer Science and
                Artificial Intelligence, Department of Information Technology
                (IT) .
              </Typography>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Footer />
        </ListItem>
      </List>
    </Box>
  );
}
