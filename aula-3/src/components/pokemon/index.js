import Img from "./img.js";
import Name from "./name.js";
import Type from "./type.js";
import Abilitie from "./abilitie.js";


function CardPokemon(props){

    return (
        <div className="row">

            <Img image={props.image} />
            <Name name={props.name} />
            <Type type={props.type} />
            <Abilitie abilities={props.abilitie} />

        </div>

    )
}

export default CardPokemon;