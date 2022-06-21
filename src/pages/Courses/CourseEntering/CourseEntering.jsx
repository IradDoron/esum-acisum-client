import { NavLink, Outlet } from 'react-router-dom';
import courses from '../../../data/courses/courses';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';

function CourseEntering({ course }) {
  const { courseUrlName, courseTitle, courseDescription } = courses[course];
  return (
    <Grid item xs={12} md={6} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ minHeight: '300px' }}>
        <CardContent>
          <Typography variant="h3">{courseTitle}</Typography>
          <Typography variant="p">{courseDescription}</Typography>
        </CardContent>
        <CardActions>
          <NavLink
            to={`/courses/${courseUrlName}/chapter-0/lesson-0`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="contained" size="large" sx={{ fontSize: '1.5rem' }}>
              עבור לקורס
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CourseEntering;
