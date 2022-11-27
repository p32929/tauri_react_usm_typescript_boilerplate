import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from './utils/AppStates';
import SvgIconRenderer from './helpers/SvgIconRenderer';

interface Props {

}

const useStyles = makeStyles((theme) => ({
  // Define your styles here
}));

const App: React.FC<Props> = (props) => {
  // Hooks
  const states = useSelector(() => controller.states);
  const classes = useStyles();

  // Funcs

  // Vars

  // JSX

  return (
    <Grid style={{ padding: 32 }} container direction='column' justifyContent='center' alignContent='center' alignItems='center'>
      <Typography>counter: {states.counter}</Typography>
      <IconButton onClick={() => {
        controller.increase()
      }}>
        <SvgIconRenderer path='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
      </IconButton>

      <IconButton onClick={() => {
        controller.decrease()
      }}>
        <SvgIconRenderer path='M19,13H5V11H19V13Z' />
      </IconButton>

    </Grid>
  )

}

export default App;