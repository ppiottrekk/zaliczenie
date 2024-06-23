import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const RecipePopup = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const { label, image, ingredientLines, url, totalNutrients } = recipe.recipe;

  return (
    <Dialog open={Boolean(recipe)} onClose={onClose} maxWidth="md" fullWidth > 
      <DialogTitle style={{ backgroundColor: 'gray', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline'}}>{label}</DialogTitle >
      <DialogContent  style={{ backgroundColor: 'gray', textAlign: 'center'}}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={image} alt={label} style={{ width: '100%', maxHeight: '350px', objectFit: 'cover'}} />
          
          <Box display="flex" justifyContent="space-between" mt={2} width="100%">
            <Box flex="1" mr={1}>
              <Typography variant="h5">INGREDIENTS:</Typography>
              <List >
                {ingredientLines.map((line, index) => (
                  <ListItem key={index}  style={{textAlign: 'center'}}> 
                    <ListItemText primary={line} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box flex="1" mx={1}>
              <Typography variant="h5" >MACRONUTRIENT:</Typography>
              <List >
                <ListItem  style={{textAlign: 'center'}}>
                  <ListItemText primary={`CALORIES: ${totalNutrients.ENERC_KCAL.quantity.toFixed(2)} ${totalNutrients.ENERC_KCAL.unit}`} />
                </ListItem>
                <ListItem style={{textAlign: 'center'}}>
                  <ListItemText primary={`FAT: ${totalNutrients.FAT.quantity.toFixed(2)} ${totalNutrients.FAT.unit}`} />
                </ListItem>
                <ListItem  style={{textAlign: 'center'}}>
                  <ListItemText primary={`CARBOHYDRATES: ${totalNutrients.CHOCDF.quantity.toFixed(2)} ${totalNutrients.CHOCDF.unit}`} />
                </ListItem>
                <ListItem  style={{textAlign: 'center'}}>
                  <ListItemText primary={`PROTEIN: ${totalNutrients.PROCNT.quantity.toFixed(2)} ${totalNutrients.PROCNT.unit}`} />
                </ListItem>
              </List>
            </Box>

            <Box flex="1" ml={1}>
              <Typography variant="h5">STEP BY STEP INSTRUCTION:</Typography>
              <Typography variant="body1">
                <a href={url} target="_blank" rel="noopener noreferrer">CLICK HERE TO SHOW FULL RECEIPE</a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions style={{ backgroundColor: 'gray'}}>
        <Button onClick={onClose} color="primary">CLOSE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipePopup;
