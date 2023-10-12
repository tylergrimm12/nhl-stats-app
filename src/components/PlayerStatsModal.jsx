import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { getPlayerStats } from '../services/GetData';

export default function PlayerStatsModal({buttonText, playerId, name}) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([])
  
  React.useEffect(() => {
    const fetchData = async () => {
      const stats = await getPlayerStats(playerId)
      setData(stats)
    }
    fetchData()
  }, [])
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
              <Typography display="block"> Goals: {data?.goals} </Typography>
              <Typography display="block"> Assist: {data?.assists} </Typography>
              <Typography display="block"> Points: {data?.points} </Typography>
              <Typography display="block"> GWG: {data?.gwg} </Typography>
              <Typography display="block"> Games Played: {data?.games} </Typography>
              <Typography display="block"> Hits: {data?.hits} </Typography>
              <Typography display="block"> OT Goals: {data?.otg} </Typography>
              <Typography display="block"> PIMs: {data?.pims} </Typography>
              <Typography display="block"> PPGs: {data?.powerPlayGoals} </Typography>
              <Typography display="block"> PPPs: {data?.powerPlayPoints} </Typography>
              <Typography display="block"> +/-: {data?.plusMinus} </Typography>
              <Typography display="block"> TOI/game: {data?.timeOnIcePerGame} </Typography>
              <Typography display="block"> Total Shifts: {data?.shifts} </Typography>
            </Typography>
        </Sheet>
        </Box>
      </Modal>
    </React.Fragment>
  );
}