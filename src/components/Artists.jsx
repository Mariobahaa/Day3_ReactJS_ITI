import { Component } from "react";
import "bootstrap";
import Artist from "./Artist";


export default class Artists extends Component{
    constructor(){
        super();

        this.state = {
            artists: []
        }
    }

    render()
    {
        
        return (
            <div className="row p-0 m-0">
    
            <img src="/images/cover.png" className="row p-0 m-0 h-25"></img>
            <h1 className= "offset-4 col-4 text-center">Artists</h1>
            <br/> <br/>
             {this.renderArtists(this.state)}
             
            </div>
        )
    }

    renderArtists(stateData)
    {
        if(stateData.artists.length > 0)
        {
           let artistsData = stateData.artists;
           return artistsData.map((art)=><Artist key={art.id} info={art}/>);
        }

    }

    componentDidMount(){
        fetch("http://localhost:1998/artists").then((data)=>{
            return data.json()
        }).then(d =>{
            console.log(d);
            this.setState({
                artists : d
            })
        }).catch(e=>{console.error(e)})
    }
}