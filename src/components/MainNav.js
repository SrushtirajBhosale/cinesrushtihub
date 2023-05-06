import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import TvSharpIcon from '@mui/icons-material/TvSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box >
      <BottomNavigation 
        sx={{ width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100, }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: "white" }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Movies" icon={<MovieSharpIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="TV Series" icon={<TvSharpIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Search" icon={<SearchSharpIcon />} />
      </BottomNavigation>
    </Box>
  );
}