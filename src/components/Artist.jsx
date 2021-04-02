const Artist = (props)=>{
    if(props.info)
    {
        return (
            <div>
            <img src = {`images/covers/${props.info.cover}.jpg`}
            className= "row"></img>
            <h4 className= "col-4 position-relative">{props.info.name}</h4>
            </div>
        )
    }

}

export default Artist;