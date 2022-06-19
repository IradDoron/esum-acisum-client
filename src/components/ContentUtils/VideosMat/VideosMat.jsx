import { Card, Typography, Grid, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function VideosMat({ value }) {
  const { videos, title } = value;
  return (
    <Accordion sx={{ marginBottom: 3 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ maxWidth: '700px' }}>
          <Grid container justifyContent="center">
            {videos.map((video, index) => {
              return (
                <Grid key={index} item>
                  <Card sx={{ display: 'flex', flexDirection: 'column', margin: '15px', padding: '5px' }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>
                      {video.title}
                    </Typography>
                    <iframe
                      src={video.url}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default VideosMat;

// deom

// videosMat: {
//   videos: [
//     {
//       title: 'this is the title',
//       url: 'https://www.youtube.com/watch?v=ApPqABr9-1U&ab_channel=Let%27sGameItOut',
//     },
//   ],
// },
