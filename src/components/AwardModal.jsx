import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function AwardModal({ buttonText, data, name}) {
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
            <Typography paragraph={true} className='flex justify-between gap-5 w-full text-right'>
              {data}
            </Typography>
          </Sheet>
        </Box>
      </Modal>
    </React.Fragment>
  );
}