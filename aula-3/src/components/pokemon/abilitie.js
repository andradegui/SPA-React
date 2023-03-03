function Abilitie(props){
    return(
        <div className="col-5">
            <p>Abilities:</p>
            {props.abilities.map((data, index) => (
                <div key={index}>{data.ability.name}</div>
            ))}
        </div>

    );
}

export default Abilitie;