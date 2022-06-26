import { useState } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import CourseEntering from './CourseEntering/CourseEntering';
import CourseHeader from './CourseHeader/CourseHeader';

import {
  Stack,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CourseNav from './CourseNav/CourseNav';
import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';

// import data
import courses from '../../data/courses/courses';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));

function Courses() {
  const [coursesList, setCoursesList] = useState(Object.keys(courses));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div style={{ paddingRight: `${isMenuOpen ? '480px' : '0'}` }}>
      <CourseHeader />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">קורסים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {coursesList.map((course) => {
              return <CourseEntering key={course} course={course} />;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Outlet />
      {isMenuOpen ? (
        <Box
          sx={{
            position: 'fixed',
            width: '480px',
            height: 'calc(100vh - 44px)',
            top: '44px',
            right: '0',
            overflow: 'scroll',
          }}
        >
          <IconButton sx={{ position: 'absolute', right: '426px', top: '22px' }} onClick={handleToggleMenu}>
            <CloseIcon />
          </IconButton>
          <CourseNav isOpen={isMenuOpen} />
        </Box>
      ) : (
        <Box
          sx={{
            position: 'fixed',
            width: '0px',
            height: 'calc(100vh - 44px)',
            top: '44px',
            overflow: 'scroll',
          }}
        >
          <Button
            sx={{ position: 'fixed', zIndex: 7 }}
            variant="outlined"
            endIcon={<ArrowBackIcon />}
            onClick={handleToggleMenu}
          >
            <Typography sx={{ margin: '0 10px' }}>הצג תפריט</Typography>
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Courses;
