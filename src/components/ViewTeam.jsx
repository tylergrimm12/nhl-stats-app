import React, { useState } from 'react'
import { fetchTeam, fetchTeamData } from '../services/GetData'
import PlayerCard from '../components/PlayerCard'
import { 
  CssBaseline,
  Container,
  Select,
  Option 
} from '@mui/joy'
import Grid  from '@mui/material/Grid'
import Button from '@mui/joy/Button'
import { nhlTeams, years } from '../utils'

export default function ViewTeam() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const fetchData = async (value) => {
    const team = await fetchTeam(value)
    setData(team)
    const stats = await fetchTeamData(value)
    console.log(stats)
  }

  const handleChange = (event, value) => {
    setInput(value)
    fetchData(value)
  }

  const reset = () => {
    setInput(null)
    setData(null)
  }
  
  return (
    <Container>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <h2>Select Team to View Players:</h2>
        <Select
          placeholder="Choose team"
          variant="outlined"
          onChange={handleChange}
          value={input}
        > 
          {nhlTeams.map((option) => (
            <Option value={option}> {option} </Option>
          ))}
        </Select>
        <Button variant="solid" color="primary" onClick={() => reset()}>
          Reset
        </Button>
      </Container>
      <CssBaseline />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start">
          {data?.map((item) => (
            <PlayerCard player={item}></PlayerCard>
          ))}
        </Grid>
    </Container>
  )
}