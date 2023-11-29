import React from 'react'
import { Box, Typography,useTheme } from '@mui/material';
import HeaderSection from '../components/about/HeaderSection';
import IntroductionSection from '../components/about/IntroductionSection';
import FeaturesSection from '../components/about/FeaturesSection';
import CommitmentSection from '../components/about/CommitmentSection';
import FAQSection from '../components/about/FAQSection';
import NavBar from '../components/NavBar';


const About = () => {
    const theme = useTheme();
  return (
    <>
    <NavBar/>
    <Box
    sx={{
      bgcolor: theme.palette.background.default,
      color: theme.palette.text.primary,
      py: 8,
    }}
  >
  
    <HeaderSection />
    <IntroductionSection />
    <FeaturesSection />
    <CommitmentSection />
    <FAQSection />
    {/* You can continue adding more sections here */}
  </Box>
  </>
  )
}

export default About