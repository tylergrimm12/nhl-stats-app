import React, { useEffect, useState } from 'react'
import { fetchTeams } from '../services/GetData';
import { 
  CssBaseline,
  Container,
} from '@mui/joy'
import Grid from '@mui/material/Grid';
import TeamCard from './TeamCard';

export default function ViewDivisions() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const teams = await fetchTeams()
      setData(teams)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <h2>View  a Team Stats and Rankings:</h2>
      </Container>
      <CssBaseline />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start">
          {data.map((item) => (
            <TeamCard team={item}></TeamCard>
          ))}
        </Grid>
    </Container>
  )
}

