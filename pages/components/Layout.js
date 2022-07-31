import React from 'react'
import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { unstable_styleFunctionSx } from '@mui/system';
import useStyles from '../utils/styles';

export default function Layout({children}) {
  return (
    <div>
        <Head>
        <AppBar position='static' className='classes.navbar'>
          <Toolbar>
            <Typography>bikroy.com</Typography>
          </Toolbar>
        </AppBar>   
        <Container>
          {children}
          </Container> 
          <footer>
            <Typography>
              All rights reserved in bikroy.com
            </Typography>
          </footer>
        </Head>
    </div>
  )
}
