function Type(props){
    return(
        <div>
            <p>Type:</p> 
            {props.types.map((data, index) => 
              <div key={index}>{data.type.name}</div> 
            )}
          </div>
    );
}

export default Type;