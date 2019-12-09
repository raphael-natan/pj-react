import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Link } from 'react-router-dom'
import Replica from './component/Replica'
import Estatistica from './component/Estatistica'
import Usuarios from './component/Usuarios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Toolbar';
import SimpleMenu from './component/SimpleMenu';
import ButtonAppBar from './component/ButtonAppBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkMenu: {
    textDecoration: "none",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonAppBar />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Karyon React
          </Typography>
          <Grid >
            <Link to="/replica" className={classes.linkMenu}><SimpleMenu name="Painel de Réplica"></SimpleMenu></Link>
          </Grid>
          <Grid >
            <Link to="/estatistica" >Estatística</Link>
          </Grid>
          <Grid >
            <Link to="/usuarios" >Usuários</Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className="main">
        <Switch>
          <Route path="/replica" component={Replica} />
          <Route path="/estatistica" ><Estatistica /></Route>
          <Route path="/usuarios" ><Usuarios /></Route>
        </Switch>
      </div>
    </div>
  );
}
