// src/features/BillPage/BillPage.jsx
import React, { useState } from "react";
import { Button, Typography, Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HomeFooter from '../HomePage/home-footer';
const BillPage = ({ items, onCancel }) => {
  const [cartItems, setCartItems] = useState(items);

  const handleRemoveItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleBuy = () => {
    // Implement buy logic here
    alert("Items purchased!");
  };

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <Card sx={{ width: '80%', maxWidth: 600, padding: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Music Electronics pvt LTD
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">{item.description || 'N/A'}</TableCell>
                  <TableCell align="right">
                    <IconButton color="secondary" onClick={() => handleRemoveItem(index)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleBuy}>
            Buy
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Card>
    </Box>
    <HomeFooter/>
    </>
  );
};

export default BillPage;