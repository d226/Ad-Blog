import React, { useState } from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { CardActionArea } from "@mui/material";
import CreateMediaAds from "./CreateMediaAds";
import CreateTextAds from "./CreateTextAds";

import { Link } from "react-router-dom";

const styles = {
  container: {
    position: "relative",
  },
  checkbox: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "grey",
  },
  label: {
    cursor: "pointer",
  },
};

function CreateAds() {
  const [isMediaChecked, setIsMediaChecked] = useState(false);
  const [isTextChecked, setIsTextChecked] = useState(false);
  const [redirect, setRedirect] = useState("");
  // const [showNextComponent, setShowNextComponent] = useState(false);

  const handleMediaCheckboxChange = () => {
    setIsMediaChecked(!isMediaChecked);
  };

  const handleMediaCardClick = () => {
    setIsMediaChecked(!isMediaChecked);
  };

  const handleTextCheckboxChange = () => {
    setIsTextChecked(!isTextChecked);
  };

  const handleTextCardClick = () => {
    setIsTextChecked(!isTextChecked);
  };

  const handleNextButtonClick = () => {
    if (isMediaChecked) {
      setRedirect("/create-media-ads");
    } else if (isTextChecked) {
      setRedirect("/create-text-ads");
    }
  };
  return (
    <div>
      <Container
        sx={{
          height: "90vh",
          width: "100vw",
          bgcolor: "#FFFFFF",
          mb: "1.5vh",
          mt: "1.5vh",
          position: "relative",
        }}
      >
        <div>
          <Typography variant="h5" sx={{ color: "black", display: "flex" }}>
            Create Ads
          </Typography>
          <Box sx={{ my: "15vh" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={10}
            >
              <Box>
                <label style={styles.label} onClick={handleTextCardClick}>
                  <Card sx={{ width: 300, height: 450 }}>
                    <CardActionArea>
                      <div style={styles.container}>
                        <Checkbox
                          checked={isTextChecked}
                          onChange={handleTextCheckboxChange}
                          style={styles.checkbox}
                        />
                        <CardMedia
                          component="img"
                          height="350"
                          image="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Text Ad"
                        />
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Create
                        </Typography>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          fontWeight="bold"
                        >
                          Text Ad
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </label>
              </Box>
              <Box>
                <label style={styles.label} onClick={handleMediaCardClick}>
                  <Card sx={{ width: 300, height: 450 }}>
                    <CardActionArea>
                      <div style={styles.container}>
                        <Checkbox
                          checked={isMediaChecked}
                          onChange={handleMediaCheckboxChange}
                          style={styles.checkbox}
                        />
                        <CardMedia
                          component="img"
                          height="350"
                          image="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                          alt="Media Ad"
                        />
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Create
                        </Typography>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          fontWeight="bold"
                        >
                          Media Ad
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </label>
              </Box>
            </Stack>
          </Box>
          <Link to={redirect}>
            <Button
              variant="contained"
              onClick={handleNextButtonClick}
              sx={{
                position: "absolute",
                bottom: "30px",
                right: "30px",
                px: "40px",
              }}
            >
              Next
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default CreateAds;
