import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const result = (
          await axios.get(`${process.env.REACT_APP_API_URL}/pokemon/gyarados`)
        ).data;
        setPokemon({
          name: result.name,
          pic: result.sprites.front_shiny,
        });
      } catch (error) {
        console.info("> error: ", error.message);
      }
    };

    getPokemon();
  }, []);

  return (
    <section>
      <h2>Página principal</h2>
      <section>
        {pokemon ? (
          <section>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.pic} alt="pokemon pic" />
          </section>
        ) : (
          <h3>Loading...</h3>
        )}
      </section>
    </section>
  );
};

export default Main;
