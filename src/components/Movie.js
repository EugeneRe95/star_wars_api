import React, { Component } from 'react';
import axios from 'axios'


export class Movie extends Component {
    constructor(props){
        super(props)
        this.state={
            starships: [],
            planets: [],
            vehicles: [],
            species: [],
            characters: [],
            about: ''

        }
        this.fetch=this.fetch.bind(this)
    }
    fetch(links, name){
        let items=links;
        items.map(item=>{
            return axios.get(`${item}`)
            .then(res => {
                return this.setState({[name]: this.state[name].concat(res.data)})
            })
        })
    }
    componentDidMount(){
        this.fetch(this.props.starships, 'starships');
        this.fetch(this.props.planets, 'planets');
        this.fetch(this.props.vehicles, 'vehicles');
        this.fetch(this.props.species, 'species');
        this.fetch(this.props.characters, 'characters');
        this.setState({about: this.props.about})
    }
    showDescription(){
        this.props.showDescription(this.state)
    }
    render() {
        return (
                <div className="movie animated fadeInUp">
                    <h2 onClick={this.showDescription.bind(this)}>{this.props.title}</h2>
                    <p className="animated fadeIn delay-1s"><b>Director:</b> {this.props.director}</p>
                    <p className="animated fadeIn delay-1s"><b>Producers:</b> {this.props.producer}</p>
                    <p className="animated fadeIn delay-1s"><b>Release:</b> {this.props.release}</p>
                </div>
        )
    }
}

export default Movie
