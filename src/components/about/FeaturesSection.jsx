import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import lowDataMode from "../../assets/low_data_mode.webp";
import greenHosting from "../../assets/green_hosting.webp";
import efficientCoding from "../../assets/efficient_coding.webp";

const features = [
  {
    title: "Low-Data Mode",
    description:
      "Stream videos in energy-efficient low-data modes without compromising quality.",
    img: lowDataMode,
  },
  {
    title: "Green Hosting",
    description: "Our servers run on 100% renewable energy sources.",
    img: greenHosting, // Replace with the path to the generated green hosting image
  },
  {
    title: "Efficient Coding",
    description:
      "Optimized algorithms for faster load times and reduced energy use.",
    img: efficientCoding, // Replace with the path to the generated efficient coding image
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ px: { xs: 3, sm: 6, md: 8 } }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "background.paper", color: "text.primary" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%", // auto will ensure the image scales with its height
                  maxWidth: "100%", // maximum width of the image is the full width of its container
                  maxHeight: '330', // adjust these values as needed for different screen sizes
                  height: "auto", // maintain aspect ratio
                  margin: "auto", // this will center the image within the card
                  display: "block", // maximum height of the image
                }}
                image={feature.img}
                alt={feature.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
