import React from 'react';
import { compose, withState, setDisplayName } from 'recompose';
import Name from './name-component';

export default compose(
  setDisplayName(__filename),
  withState('test','setTest'),
  withState('test2','setTest2'),
  withState('test3','setTest3'),
)(
  ({ name })=>(<div className="hello">
  Hello  
  <Name name={name} />
</div>)
);