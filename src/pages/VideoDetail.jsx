import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from "../components/Videos";
import Loader from "../components/Loader";
import { fetchFromApi } from "../utils/fetchFromApi";
import NavBar from "../components/NavBar";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [showRelatedVideos, setShowRelatedVideos] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  const fetchRelatedVideos = () => {
    if (!showRelatedVideos) {
      fetchFromApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => {
        setVideos(data.items);
        setShowRelatedVideos(true);
      });
    }
  };

  const truncateDescription = (desc, maxLength = 100) => {
    if (desc.length <= maxLength) return desc;
    return showFullDescription ? desc : `${desc.substring(0, maxLength)}...`;
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
    <NavBar/>
    <Box minHeight="95vh" marginTop={1}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              loading="lazy"
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Box p={2}>
          <Typography variant="body1" color="#fff">
            {truncateDescription(description)}
          </Typography>
          <Button onClick={toggleDescription} color="primary">
            {showFullDescription ? 'Show Less' : 'Show More'}
          </Button>
        </Box>
          </Box>
          
        </Box>
  
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {!showRelatedVideos && (
            <Button variant="outlined" onClick={fetchRelatedVideos}>
              Show Related Videos
            </Button>
          )}
          {showRelatedVideos && <Videos videos={videos} direction="column" />}
        </Box>
      </Stack>
    </Box>
    </>
  );
};

export default VideoDetail;
