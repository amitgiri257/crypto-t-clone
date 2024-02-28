import React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

export default function TemporaryDrawer() {
  const [open,setOpen]=useState(false)

  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className='link'/></IconButton>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='drawer-div'>
                <Link to='/'><p className='link'>Home</p></Link>
                <Link to='/Compare'><p className='link'>Compare</p></Link>
                <Link to='/Watchlist'><p className='link'>Watchlist</p></Link>
                <Link to='/Dashboard'><p className='link'>Dashboard</p></Link>
            </div>
          </Drawer>
    </div>
  );
}