import React, { Fragment } from 'react'
import { Container } from '@mui/joy';
import ViewTeam from './components/ViewTeam';
import Selector from './components/Selector';
import ViewDivisions from './components/ViewDivisions';
import ViewAwards from './components/ViewAwards';

const App = () => {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <ViewTeam/>
      break
    case '/players': 
      component = <ViewTeam />
      break
    case '/teams': 
      component = <ViewDivisions />
      break
    case '/awards': 
      component = <ViewAwards />
      break

  }
  return (
   <Container>
    <Selector></Selector>
    {component}
  </Container>
  );
}

export default App