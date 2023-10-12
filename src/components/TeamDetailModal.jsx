import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function TeamDetailModal({ buttonText, data, name, numbers}) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="solid" color="primary" onClick={() => setOpen(true)}>
        {buttonText}
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: 400 }}>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              {name}
            </Typography>
            <Divider />
            <Typography className='flex justify-between gap-5 w-full text-right'>
              <Typography display="block">Games Played: {data.games} </Typography>
              <Typography display="block">Wins: {data.wins} </Typography>
              <Typography display="block">Losses: {data.losses} </Typography>
              <Typography display="block">OT Wins: {data.ot} </Typography>
              <Typography display="block">Total Points: {data.pts} </Typography>
              <Typography display="block">Goals Per Game: {data.goalPerGame} </Typography>
              <Typography display="block">Goals Against Per Game: {data.goalsAgainst} </Typography>
              <Typography display="block">Power Play Percentage: {data.powerPlayPct} </Typography>
              <Typography display="block">Power Play Goals: {data.powerPlayGoals} </Typography>
              <Typography display="block">Power Play Goals Againts: {data.powerPlayGoalsAgaints} </Typography>
              <Typography display="block">Number of Power Plays: {data.powerPlays} </Typography>
              <Typography display="block">Pentalty Kill Percentage: {data.penaltyKill} </Typography>
            </Typography>
          </Sheet>
        </Box>
      </Modal>
    </React.Fragment>
  );
}