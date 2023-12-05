import React from "react";
import { Typography, Box } from "@mui/material";

const Comments = ({ comments }) => {
  if (!comments || comments.length === 0) return <p>No comments found.</p>;

  return (
    <Box sx={{ padding: "20px" }}>
      {comments.map((comment, index) => {
        const topLevelComment = comment?.snippet?.topLevelComment?.snippet;
        if (!topLevelComment) return null; // Skips rendering if data is incomplete

        const displayName = topLevelComment.authorDisplayName;
        const cleanedDisplayName = displayName?.startsWith('@') ? displayName.substring(1) : displayName;
        const commentText = topLevelComment.textOriginal;

        console.log(commentText);
        console.log(cleanedDisplayName);
        return (
          <Box key={index} sx={{ marginBottom: "10px" }}>
            <Typography variant="subtitle2" color="gray">
              {cleanedDisplayName}
            </Typography>
            <Typography variant="body2">{commentText}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Comments;
