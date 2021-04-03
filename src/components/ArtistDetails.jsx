import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const ArtistDetails = ({match})=>{
    console.error(match);
    let [artist, setArtist] = useState({});
    let [reload, setReload] = useState(false);
    

    


    useEffect(()=>{
    fetch(`http://localhost:1998/artists/`+match.params.id).then(
        (data)=>{
            return data.json();
        }).then((d)=>{

            setArtist(d); setReload(true)}).catch((e)=> console.error(e));
        //forceUpdate();
    },[]);

    let LoadAlbums= ()=>{
       
        if(reload)
        {
            
           console.log(artist);
            return artist.albums.map((alb)=> 
            
            (<img src={`/images/albums/${alb.cover}.jpg`} className= "col-5 h-50" alt={alb.cover}/>))
        
        }

        
    }


    if(reload)
    return(
        <div >
            
           <Link to= "/artists/"> 
            <div className="row">
            
            <h1 className= "text-center col-12">Music DB</h1>
            </div>       
           </Link>
            <div className = "row text-center">
            <img src = {`/images/covers/${artist.cover}.jpg`}
            className = "col-4 offset-4" alt="img"></img>
            <h5>{artist.name}</h5>
            <p>{artist.bio}</p>
            <div className= "row">
            
              <div className="offset-1 col-10">  
                {LoadAlbums()}
                </div>
            
            </div>
            </div>
            

        </div>
    );
   else return <h1>No Data</h1>
}

export default ArtistDetails



// import { Component } from "react";
// import { Link } from "react-router-dom";

// export default class ArtistDetails extends Component{
//     constructor(){
//         super();
//         this.state ={
//             artist : {},
//             loaded : false,
//         }
//     }

//     componentDidMount(){
//         fetch(`http://localhost:1998/artists/`+this.props.match.params.id).then(
//             (data)=>{
//                 return data.json();
//             }).then((d)=>
    
//                 this.setState({artist:d, loaded:true})).catch((e)=> console.error(e));
//     }

//     LoadAlbums(){
//         if(this.state.loaded)
//         return this.state.artist.albums.map((alb)=>
//         (<img src={`/images/albums/${alb.cover}.jpg`} className= " offset-1 col-5 h-50" alt={alb.cover}/>))
//         else return;
//     }


//     // eslint-disable-next-line react/require-render-return
//     render(){
//         if(this.state.loaded)
//         return(
//         <div >
//         <Link to= "/artists/"> 
//         <div className="row">
            
//             <h1 className= "text-center col-12">Music DB</h1>
//         </div>
//         </Link>
//         <div className = "row text-center">
//         <img src = {`/images/covers/${this.state.artist.cover??""}.jpg`}
//         className = "col-4 offset-4" alt={this.state.artist.cover}></img>
//         <h5>{this.state.artist.name??""}</h5>
//         <p>{this.state.artist.bio??""}</p>
//         <div className="row">
//         {
            
//             this.LoadAlbums()
//         }
//         </div>
//         </div>
        

//     </div>
//         )
//     else return <h1>No Data</h1>
//     }
// }
