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
          
          flexDirection: 'column',
          alignItems: 'space-between',
          justifyContent: 'center',
          // debug
          // bg: ['pink', 'blue', 'yellow', 'green', 'red'],
          bg: 'labsText',
          color: 'labsBg',
          border: 'none',

          transform: 'scale(1)',
          transition: 'transform ease 0.3s',

          overflow: 'hidden',
          
          '&:hover': {
            
            zIndex: '99',
            
            ".album--info": {
              bg: 'rgba(0,0,0,0.3)',
              transition: 'background ease 0.3s, opacity ease 0.3s',
              opacity: 1,
              'h2': {
                transform: 'translateY(0)',
                transition: 'transform ease 0.3s',
              },
            },

            img: {
              opacity: '0.5',
              transform: 'scale(1.125)',
              transition: 'transform ease 0.3s',

            },
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
            <div 
              className="album--info"
              sx={{
                position: 'relative',
                height: '100%',
                bg: 'rgba(0,0,0,0.15)',
                padding: ['1rem', '1.25rem'],
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'space-between',
                alignItems: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center',
                opacity: 0,
                transition: 'background ease 0.3s, opacity ease 0.3s',
                'h2': {
                  transform: 'translateY(48px)',
                  transition: 'transform ease 0.3s',
                }
              }}
            >
              <Styled.h2 className="mb">{`${j+1}`}</Styled.h2>
              <Styled.h2>{x.title}</Styled.h2>
            </div>
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