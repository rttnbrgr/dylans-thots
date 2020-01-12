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
    <div sx={{
      bg: 'labsBg'
      }}
      >
      <div sx={{
        fontFamily: 'sans-serif',
        fontSize: ['16px', '24px', '24px', '24px'],
        height: ['50vh', '25vh', '25vh', ],
        display: 'flex',
        padding: ['1rem', '1.25rem'],
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        'p': {
          mt: '1rem',
        },
        color: 'labsText',
      }}>
        <h1>The Needle Drop</h1>
        <h2>Top 50 Ablums of 2019</h2>
        <p>Click album to watch the review.</p>
      </div>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['repeat(2, calc(50vw - 5px))', 'repeat(3, calc(33.3333vw - 8px))', 'repeat(3, calc(33.3333vw - 8px))', 'repeat(4, calc(25vw - 12px))'],
          // gridTemplateRows: 'repeat(1, 25vw)',
          gridAutoRows: ['calc(50vw - 5px)', 'calc(33.3333vw - 8px)', 'calc(33.3333vw - 8px)', 'calc(25vw - 12px)'],
          // refactor
          gridTemplateColumns: ['repeat(2, 50vw)', 'repeat(3, 33.3333vw)', 'repeat(3, 33.3333vw)', 'repeat(4, 25vw)'],
          gridAutoRows: ['50vw', '33.3333vw', '33.3333vw', '25vw'],
          width: '100%',
          gridGap: 0
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
          // debug
          bg: ['pink', 'blue', 'yellow', 'green', 'red'],
          bg: 'labsText',
          color: 'labsBg',
          border: 'none',

          transform: 'scale(1)',
          transition: 'transform ease 0.3s',
          
          '&:hover': {
            transform: 'scale(1.075)',
            zIndex: '99'
          },

          

          'h2': {
            fontFamily: 'sans-serif',
            fontSize: ['16px', '24px', '24px', '24px'],
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
            {x.images && 
            <img 
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: '0',
            }} 
            src={x.images[0]["url"]} 
            /> 
            }
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