import {useEffect} from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Grid  from '@mui/material/Grid'
import AwardModal from './AwardModal'

export default function AwardCard(award) {
  
  useEffect(() => {
    const fetchData = async () => {

    }
    fetchData()
  }, [])
  return (
    <Grid item spacing={2}>
      <Box
        sx={{
          width: '325px',
          position: 'flex',
          overflow: { xs: 'auto', sm: 'initial' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            display: 'block',
            width: '1px',
            bgcolor: 'warning.300',
            left: '500px',
            top: '-24px',
          }}
        />
        <Card
          sx={{
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img
              src={award.award.imageUrl}
              loading="lazy"
              alt="team_image"
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {award.award.name} <br/>
            </Typography>
            <Typography level="body-md" fontWeight="lg" textColor="text.tertiary">
              Recipient Type: {award.award.recipientType}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
              <AwardModal buttonText='History' data={award.award.history} name={award.award.name}></AwardModal>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}