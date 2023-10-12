import React, {useEffect, useState} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import PlayerDetailsModal from './PlayerDetailsModal';
import PlayerStatsModal from './PlayerStatsModal';
import Grid  from '@mui/material/Grid';
import { getPlayerStats } from '../services/GetData';
import { generatePlayerImage } from '../services/GetData';

export default function PlayerCard(player) {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const stats = await getPlayerStats(player.player.id)
      setData(stats)
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
              src={generatePlayerImage(player.player.id)}
              loading="lazy"
              alt="player_headshot"
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {player.player.name}
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              {player.player.position}
            </Typography>
            <Sheet
              sx={{
                bgcolor: 'background.level1',
                borderRadius: 'lg',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                gap: 2,
                '& > div': { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Goals
                </Typography>
                <Typography fontWeight="lg">{data.goals}</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Assists
                </Typography>
                <Typography fontWeight="lg">{data.assists}</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Points
                </Typography>
                <Typography fontWeight="lg">{data.points}</Typography>
              </div>
            </Sheet>
            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
              <PlayerDetailsModal buttonText="Info" playerId={player.player.id} name={player.player.name}></PlayerDetailsModal>
              <PlayerStatsModal buttonText="Stats" playerId={player.player.id} name={player.player.name}></PlayerStatsModal>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}