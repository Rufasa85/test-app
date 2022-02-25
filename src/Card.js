function Card (props){
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.description || "no description provided"}</p>
            <hr/>
        </div>
    )
}

export default Card;