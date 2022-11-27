import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from './urils/AppStates';

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
    <Grid container>
      <button onClick={() => {
        controller.increase()
      }}>{states.counter}</button>
    </Grid>
  )

}

export default App;