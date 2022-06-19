import { NavLink, Outlet } from 'react-router-dom';
import courses from '../../../data/courses/courses';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

function CourseEntering({ course }) {
  const { courseUrlName, courseTitle, courseDescription } = courses[course];
  return (
    <Card sx={{ width: '400px', margin: '50px' }}>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: '3rem' }}>
          {courseTitle}
        </Typography>
        <Typography variant="h1" sx={{ fontSize: '1.5rem' }}>
          {courseDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/courses/${courseUrlName}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="contained" size="large" sx={{ fontSize: '1.5rem' }}>
            עבור לקורס
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default CourseEntering;
