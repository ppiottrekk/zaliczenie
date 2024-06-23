const APP_ID = 'f4a72eac';
const APP_KEY = 'fe78c9a1935ee86e8c25490d1dcc262f';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
}; 
