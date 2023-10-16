import {
  Typography,
  Box,
  TextField,
  Stack,
  Autocomplete,
  Button,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CreateMediaAds() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
      navigate("/create-ads");
    }, 600);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Box sx={{ height: "30vh", width: "90vw", bgcolor: "white", mx: "5vw" }}>
        <Modal
          open={isModalOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack alignItems="center" spacing={3}>
              <CheckCircleIcon />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Submitted
              </Typography>
            </Stack>
          </Box>
        </Modal>
        <Typography variant="h5" sx={{ color: "black", display: "flex" }}>
          Create Media Ads
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack>
            <Box sx={{ width: 1000, mt: 5, mx: 10 }}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ width: 500 }}>
                  <Typography variant="h6" fontSize={15} mt={2}>
                    Heading 01
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Write Something"
                  />

                  <Typography variant="h6" fontSize={15} mt={2}>
                    Heading 02
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Write Something"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: 15, width: 500, mt: 2 }}
                  >
                    Description 01
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Write Something"
                    sx={{ lineHeight: 10 }}
                  />
                </Box>
              </Stack>
            </Box>

            <Box sx={{ width: 1000, mt: 5, mx: 10 }}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ width: 500 }}>
                  <Typography variant="h6" fontSize={15}>
                    Bussiness Name
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Write Something"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" fontSize={15}>
                    Button Label
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={category}
                    sx={{ width: 500 }}
                    renderInput={(params) => (
                      <TextField
                        placeholder="Write Something"
                        fullWidth
                        {...params}
                      />
                    )}
                  />
                </Box>
              </Stack>
            </Box>
            <Box sx={{ width: 1000, mt: 5, mx: 10 }}>
              <Typography variant="h6" fontSize={15}>
                Website URL
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                placeholder="Write Something"
              />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ width: "87.5%", height: "100%", mx: 10, mt: 10 }}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={3}
          >
            <Button
              variant="contained"
              sx={{ px: 5, bgcolor: "grey", "&:hover": { bgcolor: "grey" } }}
              onClick={handleGoBack}
            >
              Back
            </Button>
            <Button variant="contained" sx={{ px: 5 }} onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default CreateMediaAds;

const category = [1, 2, 3, 4, 5, 6, 7, 8];
