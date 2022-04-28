import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Pages = () => {
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  // Tabs End //
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Web3 Projects" {...a11yProps(0)} />
        <Tab label="Skills" {...a11yProps(1)} />
      </Tabs>
    <TabPanel value={value} index={0}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Crypto Wallet
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          The easier way to interact with a Smart Contract. On this project you can check your balance and exchange BRLC an erc20 token create by me and deployed on rinekby network
        </Typography>
        <Typography variant="body2">
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://cryptowallet.netlify.app/"><Button size="small">Go to the Project</Button></a>
      </CardActions>
    </Card>
    <div style={{paddingTop: '20px'}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          NFT Market
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          This is a project of an NFT market where you can create, sell and buy nfts, also deployed on rinkeby network and with instructions to run in the readme.md of the project
        </Typography>
        <Typography variant="body2">
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/lucasdcoutinh0/nft-market"><Button size="small">Go to the Project Code</Button></a>
      </CardActions>
    </Card>
    </div>
    <div style={{paddingTop: '20px'}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Solid World DAO
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Solid World is a dao that aims stop the climate change, pre-funding carbom projects. I work on this company as a FrontEnd and BlockChain Developer. 
        </Typography>
        <Typography variant="body2">
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://www.solid.world/"><Button size="small">Go to the Project</Button></a>
      </CardActions>
    </Card>
    </div>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormGroup>
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="HTML5" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="CSS" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="JavaScript" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="CSS" />
          </FormGroup>   
        </Grid>
        <Grid item xs={4}>
          <FormGroup>
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="MongoDB" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Express" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="React" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Angular" />
          </FormGroup> 
        </Grid>
        <Grid item xs={4}>
          <FormGroup>
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Node" />
          <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Solidity" />
          </FormGroup> 
        </Grid>
    </Grid>
    </TabPanel>
    </Box>
  )
}
export default Pages;