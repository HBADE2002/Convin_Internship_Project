import React, { Fragment } from 'react';
import CardComponent from './CardComponent';
import buckets from './buckets';

function App() {
  return (
    <Fragment>
      <CardComponent />
      <buckets /> 
    </Fragment>
    
  );
}

export default App;
