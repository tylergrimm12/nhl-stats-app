import React, {useEffect, useState} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { fetchTeamData, generateTeamImage, fetchTeamRankings } from '../services/GetData';
import { Grid } from '@mui/material';
import TeamDetailModal from './TeamDetailModal';

export default function TeamCard(team) {
  const [statData, setStatData] = useState([])
  const [rankingData, setRankingData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const stats = await fetchTeamData(team.team.name)
      setStatData(stats)
      const ranking = await fetchTeamRankings(team.team.name)
      setRankingData(ranking)
    }
    fetchData()
  }, [])
  return (
    <Grid item spacing={2}>
      <Box
        sx={{
          width: '275px',
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
              src={generateTeamImage(team.team.abbreviation)}
              loading="lazy"
              alt="team_image"
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {team.team.name} <br/>
              {team.team.firstYearOfPlay}
            </Typography>
            <Typography level="body-md" fontWeight="lg" textColor="text.tertiary">
              {team.team.conference.name} <br/>
              {team.team.division.name}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
              <TeamDetailModal buttonText='Stats' data={statData} name={team.team.name} numbers={true}></TeamDetailModal>
              <TeamDetailModal buttonText='Rankings' data={rankingData} name={team.team.name} numbers={false}></TeamDetailModal>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}