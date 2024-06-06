// App.jsx
import React from "react";
import RecipeList from "./RecipeList";

export const App = () => {
  const recipes = [
    {
      title: "Pieczone ziemniaki",
      description: "Pieczone ziemniaki z przyprawami, idealne jako dodatek do obiadu.",
    },
    {
      title: "Spaghetti Carbonara",
      description: "Klasyczne spaghetti z sosem carbonara z jajek, bekonu i sera parmezan.",
    },
    {
      title: "Sałatka Cezar",
      description: "Klasyczna sałatka Cezar z sosem na bazie majonezu, cytryny i parmezanu.",
    },
  ];

  return (
    <div className="app">
      <h1>Przepisy Kulinarnie</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
