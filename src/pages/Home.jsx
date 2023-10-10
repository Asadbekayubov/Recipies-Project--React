import React from "react";
import { useFetch } from "../hooks/useFetch";
import RecipeList from "../components/RecipeList";
function Home() {
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("https://recipies-api.glitch.me/recipes");
  if (recipies === null) {
    return (
      <div>
        <h1 className="text-center text-3xl">Loading...</h1>
      </div>
    );
  }
  return <>{recipies && <RecipeList recipies={recipies} />}</>;
}

export default Home;
