/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { Styled } from 'theme-ui'
import '../../labs/needledrop/reset.css';

const NeedleDropTop50Page = props => {
  const foo = 'foo';
  return (
    <div>
      <h1>hi</h1>
      <div
        sx={{
          color: "blue",
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 25vw)',
          gridTemplateRows: 'repeat(1, 25vw)',
          gridAutoRows: '25vw',
          width: '100%',
          'div': {
            bg: 'pink'
          },
        }}
      >
      <div sx={{bg: 'blue'}} />
      <div sx={{bg: 'green'}} />
      <div sx={{bg: 'red'}} />
      <div sx={{bg: 'orange'}} />
      {new Array(50).fill('empty').map((x,j) => (
        <div key={j}>
        <Styled.h2>
        {`${j+1}`}
        </Styled.h2>
        </div> 
        ))}
      </div>
    </div>
  )
}
// @DONE
// added rough content
// @WORKING
// setup the grid
// @NEXT
// add emotion
// fake 50 array
// iterate over
// style for 4 wide

export default NeedleDropTop50Page