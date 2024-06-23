import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeItem = ({ recipe, onSelect }) => (
  <Card 
    onClick={() => onSelect(recipe)} 
    sx={{ 
      cursor: 'not-allowed', 
      border: '10px double black',
      padding: '0px',
      borderRadius: '20px', 
      textAlign: 'center',
      backgroundColor: 'gray' ,
      textDecoration: 'underline' ,
      fontWeight: 'bold'
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        alt={recipe.recipe.label}
        height="150"
        image={recipe.recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div" style={{fontWeight: 'bold'}}>
          {recipe.recipe.label}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RecipeItem;
