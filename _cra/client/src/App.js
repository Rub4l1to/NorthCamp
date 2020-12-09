import React,{Fragment} from 'react';
import Persona from './components/Persona/Persona';

function App() {
  return (
    <Fragment>
      <h2>Bienvenidos!</h2>
      <Persona nombre="Adrian" edad="25" direccion="Madrid" foto="https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g"/>
      <Persona nombre="Pablo" edad="25" direccion="Madrid" foto="https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g"/>
      <Persona nombre="Norberto" edad="25" direccion="Madrid" foto="https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g"/>
    </Fragment>
  );
}

export default App;
