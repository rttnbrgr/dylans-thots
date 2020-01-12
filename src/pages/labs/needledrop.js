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
          gridTemplateColumns: ['repeat(2, calc(50vw - 5px))', 'repeat(3, calc(33.3333vw - 4px))', 'repeat(3, calc(33.3333vw - 4px))', 'repeat(4, 25vw)'],
          // gridTemplateRows: 'repeat(1, 25vw)',
          gridAutoRows: ['calc(50vw - 5px)', 'calc(33.3333vw - 4px)', 'calc(33.3333vw - 4px)', '25vw'],
          width: '100%',
          gridGap: ['10px', '12px']
        }}
      >
      {DATA.map((x,j) => (
        <a key={j} href={x.link} sx={{
          textDecoration: 'none',
          color: 'initial',
          display: 'flex',
          padding: ['1rem', '1.25rem'],
          flexDirection: 'column',
          alignItems: 'space-between',
          justifyContent: 'center',
          // justifyContent: 'space-between',
          bg: () => `${j % 3 ? ( j % 2 ? 'red' : 'green' ) : 'blue'}`,
          bg: ['pink', 'blue', 'yellow', 'green', 'red'],
          transform: 'scale(1)',
          transition: 'transform ease 0.3s',
          
          '&:hover': {
            transform: 'scale(1.2)',
            zIndex: '99'
          },

          'h2': {
            fontFamily: 'sans-serif',
            fontSize: ['16px', '24px', '24px', '36px'],
            fontWeight: 'normal',
            color: 'white',
            mb: '0',
            lineHeight: 1.3,
            '&.mb': {
              mb: '1rem'
            }
          }

        }}>
            <Styled.h2 className="mb">{`${j+1}`}</Styled.h2>
            <Styled.h2>{x.title}</Styled.h2>
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