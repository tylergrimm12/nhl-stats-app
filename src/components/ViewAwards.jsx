import React, { useEffect, useState } from 'react'
import { CssBaseline, Container } from '@mui/joy'
import Grid from '@mui/material/Grid'
import AwardCard from './AwardsCard'
import { fetchAwards } from '../services/GetData'

export default function ViewAwards() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const awards = await fetchAwards()
      setData(awards)
    }
    fetchData()
    console.log('data', data)
  }, [])

  return (
    <Container>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <h2>View Awards and Their History: </h2>
      </Container>
      <CssBaseline />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start">
          {data.map((item) => (
            <AwardCard award={item}></AwardCard>
          ))}
        </Grid>
    </Container>
  )
}