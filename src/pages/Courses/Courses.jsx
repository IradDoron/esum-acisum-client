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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CourseNav from './CourseNav/CourseNav';
import { styled } from '@mui/material/styles';

// import data
import courses from '../../data/courses/courses';

const ResponsiveContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

function Courses() {
  const [coursesList, setCoursesList] = useState(Object.keys(courses));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  // style={{ paddingRight: `${isMenuOpen ? '480px' : '0'}` }}
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down('lg')]: {
          padding: '0',
        },
        [theme.breakpoints.up('lg')]: {
          paddingRight: `${isMenuOpen ? '480px' : '0'}`,
        },
      })}
    >
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
      <ResponsiveContainer>
        <Outlet />
        {isMenuOpen ? (
          <Box
            sx={(theme) => ({
              position: 'fixed',
              width: '480px',
              height: 'calc(100vh - 44px)',
              top: '44px',
              right: '0',
              overflow: 'scroll',
              [theme.breakpoints.down('lg')]: {
                position: 'static',
                width: '100%',
              },
            })}
          >
            <CourseNav handleToggleMenu={handleToggleMenu} isOpen={isMenuOpen} />
          </Box>
        ) : (
          <Button
            sx={{ position: 'fixed', zIndex: 1500, top: '44px' }}
            variant="outlined"
            endIcon={<ArrowBackIcon />}
            onClick={handleToggleMenu}
          >
            <Typography sx={{ margin: '0 10px', zIndex: 1100 }}>הצג תפריט</Typography>
          </Button>
        )}
      </ResponsiveContainer>
    </Box>
  );
}

export default Courses;
