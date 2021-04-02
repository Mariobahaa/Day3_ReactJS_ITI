import { Component } from "react";
import "bootstrap";
import Artist from "./Artist";


export default class Artists extends Component{
    Artists(){
        this.super();

        this.state = {
            artists: []
        }
    }

    render()
    {
        let o ={name:"Mario", cover:"jimi_hendrix"}
        return (
            <div className="row p-0 m-0">
            <img src="images/cover.png" className="col-12 h-25"></img>
            <Artist info={o}/>

            </div>
        )
    }
}