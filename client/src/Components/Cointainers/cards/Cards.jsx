import CardRecipe from "./cardis"
import styled from "./cards.module.css"

const Cards = (props) => {
    const pokemons = props.pokemons;
        return (
        <div className={styled.cards}>
            {
                pokemons?.map((pokemons) => {
                    return (
                        <CardRecipe
                            name={pokemons.name}
                            img={pokemons.img}
                            id={pokemons.idApi ? pokemons.idApi : pokemons.id}
                            key={pokemons.idApi ? pokemons.idApi : pokemons.id}
                            types={pokemons.types} />
                            )
                })
            }
            
        </div>
    )
}

export default Cards;

