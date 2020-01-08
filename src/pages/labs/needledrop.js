/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { Styled } from 'theme-ui'
import DATA from '../../labs/needledrop/albums'
import '../../labs/needledrop/reset.css';

const NeedleDropTop50Page = props => {
  const foo = 'foo';

  console.log('DATA', DATA);

  return (
    <div>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 25vw)',
          gridTemplateRows: 'repeat(1, 25vw)',
          gridAutoRows: '25vw',
          width: '100%',
        }}
      >
      {DATA.map((x,j) => (
        <a key={j} href={x.link} sx={{
          textDecoration: 'none',
          color: 'initial',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bg: () => `${j % 3 ? ( j % 2 ? 'red' : 'green' ) : 'blue'}`,
          transform: 'scale(1)',
          transition: 'transform ease 0.3s',
          '&:hover': {
            transform: 'scale(1.2)',
            zIndex: '99'
          }
        }}>
            <Styled.h2>{`${j+1}`}</Styled.h2>
            <Styled.p>{x.title}</Styled.p>
        </a> 
      ))}
      </div>


      
      
    </div>
  )
}
// @DONE
// added rough content
// setup the grid
// fake 50 array
// iterate over
// style for 4 wide
// @WORKING
// add basic typography
// @NEXT
// add emotion

export default NeedleDropTop50Page