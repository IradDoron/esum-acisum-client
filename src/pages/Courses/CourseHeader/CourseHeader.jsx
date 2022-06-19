import { Stack, Typography } from '@mui/material';

function CourseHeader() {
  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap', margin: '50px 0' }}>
      <Typography variant="h2">תבחרו את הקורס המתאים לכם וקדימה לעבודה!</Typography>
    </Stack>
  );
}

export default CourseHeader;
