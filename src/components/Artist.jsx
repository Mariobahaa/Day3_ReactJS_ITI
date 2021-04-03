import { Link } from "react-router-dom";

const Artist = (props)=>{
    if(props.info)
    {
        return (
            <div >
            <Link to={`/artists/${props.info.id}`}>
            <img src = {`images/covers/${props.info.cover}.jpg`}
            className= "col-12 col-md-6 offset-md-3  Cover"></img>
          
            <h4 className= " offset-3 col-6 col-md-4 offset-md-4 position-relative Name">{props.info.name}</h4>
            </Link>
            </div>
        )
    }

}

export default Artist;