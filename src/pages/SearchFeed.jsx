import { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromApi } from '../utils/fetchFromApi'
import Videos from "../components/Videos";
import NavBar from "../components/NavBar";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const [currentPageToken, setCurrentPageToken] = useState('');


  useEffect(() => {
    // fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    fetchFromApi(`search?part=snippet&q=${searchTerm}&pageToken=${currentPageToken}`)
      .then((data) => {
        setVideos(data.items);
        setNextPageToken(data.nextPageToken || '');
        setPrevPageToken(data.prevPageToken || '');
      })
  }, [searchTerm, currentPageToken]);

  const handleNextPage = () => {
    setCurrentPageToken(nextPageToken);
  };

  const handlePrevPage = () => {
    setCurrentPageToken(prevPageToken);
  };

  console.log("Next",nextPageToken);
  console.log("Prev",prevPageToken);
  return (
    <>
    <NavBar />
    <Box p={2} minHeight="95vh">
      
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: '#3afd17' }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
          {prevPageToken && <Button onClick={handlePrevPage}>Previous Page</Button>}
          {nextPageToken && <Button onClick={handleNextPage}>Next Page</Button>}
        </Box>
    </Box>
    </>
  );
};

export default SearchFeed;
