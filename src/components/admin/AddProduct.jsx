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
import { Button, Input } from '@mui/material';
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

// const handleImageUpload = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append('image', file);
  
//       // Replace 'your-upload-endpoint' with the actual endpoint to handle file uploads on your server
//       const response = await fetch('your-upload-endpoint', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         console.log('Image uploaded successfully');
//         // Perform any additional actions after successful upload
//       } else {
//         console.error('Failed to upload image');
//         // Handle the error appropriately
//       }
//     } catch (error) {
//       console.error('Error uploading image', error);
//       // Handle any errors that occurred during the fetch operation
//     }
//   };
  
const defaultTheme = createTheme();

export default function AddProduct() {
    const [uploadedImage, setUploadedImage] = React.useState(null);

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
    const data = new FormData(event.currentTarget);
   
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="cover"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
