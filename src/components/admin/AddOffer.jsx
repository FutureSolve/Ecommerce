import * as React from 'react';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const defaultTheme = createTheme();

export default function AddOffer() {
  const [uploadedImage, setUploadedImage] = React.useState(null);
  const [offerTitle, setOfferTitle] = React.useState(""); // Changed from Title to offerTitle
  const [offerDescription, setOfferDescription] = React.useState(""); // Changed from Description to offerDescription

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('offerTitle', offerTitle); // Changed from Title to offerTitle
    formData.append('offerDescription', offerDescription); // Changed from Description to offerDescription
    formData.append('cover', uploadedImage);

    fetch("http://localhost:5000/api/v1/offer/create", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Successful");
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Error uploading offer");
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="offerTitle"
                  required
                  fullWidth
                  id="offerTitle"
                  label="Offer Title"
                  autoFocus
                  onChange={(e) => setOfferTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="offerDescription"
                  label="Offer Description"
                  name="offerDescription"
                  autoComplete="family-name"
                  aria-label="Demo input"
                  multiline
                  onChange={(e) => setOfferDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component="label"
                >
                  <ListItemIcon>
                    <CloudUploadIcon />
                  </ListItemIcon>
                  <ListItemText primary="Upload Image" />
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </ListItemButton>
              </Grid>
              {uploadedImage && (
                <Grid item xs={12}>
                  <img src={uploadedImage} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />
                </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Offer
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
