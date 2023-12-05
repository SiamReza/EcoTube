// import React, { useState } from "react";
// import { Box, InputBase, Paper, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import EcoTubeLogo from "../assets/EcoTube.webp";
// import { useNavigate } from "react-router-dom";

// export default function SearchFieldHome() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const onhandleSubmit = (e) => {
//     e.preventDefault();

//     if (searchTerm) {
//       navigate(`/search/${searchTerm}`);

//       setSearchTerm("");
//     }
//   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "80vh",
//       }}
//     >
//       <img
//         src={EcoTubeLogo}
//         alt="EcoTube Logo"
//         style={{
//           maxHeight: "100px",
//           height: "99px",
//           width: "313px",
//           marginBottom: "20px",
//         }}
//       />
//       <Paper
//         component="form"
//         onSubmit={onhandleSubmit}
//         sx={{
//           p: "2px 4px",
//           display: "flex",
//           alignItems: "center",
//           width: 400,
//           borderColor: "primary.main",
//           borderWidth: "1.5px",
//           borderRadius: "8px",
//           borderStyle: "solid",
//         }}
//       >
//         <InputBase
//           sx={{ ml: 1, flex: 1 }}
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           inputProps={{ "aria-label": "search" }}
//         />
//         <IconButton
//           type="submit"
//           sx={{ p: "10px", color: "primary.main" }}
//           aria-label="search"
//         >
//           <SearchIcon />
//         </IconButton>
//       </Paper>
//     </Box>
//   );
// }


import React, { useState } from "react";
import { Box, InputBase, Paper, IconButton, useTheme, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EcoTubeLogo from "../assets/EcoTube.webp";
import { useNavigate } from "react-router-dom";

export default function SearchFieldHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100%",
        margin: "auto",
      }}
    >
      <img
        src={EcoTubeLogo}
        alt="EcoTube Logo"
        style={{
          objectFit: 'contain',
          maxHeight: isMobile ? "50px" : "100px",
          width: isMobile ? "156px" : "313px",
          marginBottom: "20px",
        }}
      />
      <Paper
        component="form"
        onSubmit={onhandleSubmit}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: isMobile ? "90%" : 400,
          borderColor: "primary.main",
          borderWidth: "1.5px",
          borderRadius: "8px",
          borderStyle: "solid",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "primary.main" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
