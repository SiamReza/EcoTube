// FAQSection.jsx
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is EcoTube?',
    answer: 'EcoTube is a sustainable video streaming service that reduces energy consumption and utilizes eco-friendly practices to minimize digital carbon footprint.'
  },
  {
    question: 'How does EcoTube work?',
    answer: 'EcoTube optimizes video streaming to be energy-efficient, running on servers powered by 100% renewable energy sources and employing low-data modes without sacrificing video quality.'
  },
  {
    question: 'Is there a difference in video quality on EcoTube?',
    answer: 'EcoTube is committed to providing high-quality streaming experiences while maintaining environmental sustainability. Our platform uses advanced algorithms to ensure that you can enjoy high-definition content with minimal buffering, all with a lower carbon footprint.'
  },
  {
    question: 'Can I upload my own content to EcoTube?',
    answer: 'Absolutely! EcoTube supports creators who are passionate about sustainability. If you have content that aligns with our eco-friendly values, we encourage you to become part of our community and share your videos on our platform.'
  },
  {
    question: 'Will the video quality be affected when using EcoTube?',
    answer: 'EcoTube defaults to 480p resolution for streaming, which balances quality with energy efficiency. Users who wish to view content in higher resolution can easily adjust their settings. Our platform ensures that, even at standard definition, the viewing experience remains clear and enjoyable.'
  },
  
  {
    question: 'How does EcoTube contribute to sustainability?',
    answer: 'EcoTube\'s sustainability efforts are multifaceted. We invest in renewable energy to power our servers, optimize our streaming technology to minimize energy use, and participate in carbon offset programs. Furthermore, we actively engage in environmental initiatives and educational campaigns to raise awareness about digital carbon footprints.'
  },
  {
    question: 'Can users contribute content to EcoTube?',
    answer: 'While EcoTube currently doesn\'t offer a direct upload feature for users, we\'re always looking to collaborate with eco-conscious content creators. If you\'re interested in featuring your content on EcoTube, please contact us for potential partnerships.'
  },
  {
    question: 'What makes EcoTube environmentally friendly?',
    answer: 'EcoTube\'s environmental friendliness is not just about our operations running on renewable energy; it\'s also about our commitment to reducing data transfer wherever possible, using energy-efficient coding practices, and continuously seeking ways to minimize our overall impact on the environment.'
  },
];

const FAQSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 8, py: 8, px: { xs: 3, sm: 6, md: 8 }, bgcolor: theme.palette.grey[900], borderRadius: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ bgcolor: 'black', color: 'white', my: 1, borderRadius: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography color={'primary.main'} gutterBottom>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
