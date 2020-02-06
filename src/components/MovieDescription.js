import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';


export class MovieDescription extends Component {
    constructor(props) {
        super(props)
        this.state = { content: this.props.content }
    }
    render() {
        return (
            <div className="movie-description" style={{ display: this.props.display }}>
                <div className="description-container animated fadeInUp">
                <Button onClick={this.props.close} variant="contained" color="secondary" size="small">Close</Button>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            // expandIcon={}
                            aria-controls="panel1a-content"
                        // id="panel1a-header"
                        >
                            About film
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="film-content about">
                                <p>{this.state.content.about}</p>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            // expandIcon={}
                            aria-controls="panel1a-content"
                        // id="panel1a-header"
                        >
                            Characters
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="film-content">
                                {this.state.content.characters.map(item => {
                                    return (
                                        <div key={item.name}>
                                            <h3>{item.name}</h3>
                                            <ul>
                                                <li>Birth year: {item.birth_year}</li>
                                                <li>Eye color: {item.eye_color}</li>
                                                <li>Height: {item.height}</li>
                                                <li>Mass: {item.mass}</li>
                                                <li>Hair color: {item.hair_color}</li>
                                                <li>Skin color: {item.skin_color}</li>
                                                <li>Gender: {item.gender}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            // expandIcon={}
                            aria-controls="panel1a-content"
                        // id="panel1a-header"
                        >
                            Planets
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="film-content">
                                {this.state.content.planets.map(item => {
                                    return (
                                        <div key={item.name}>
                                            <h3>{item.name}</h3>
                                            <ul>
                                                <li>climate: {item.climate}</li>
                                                <li>diameter: {item.diameter}</li>
                                                <li>created: {item.created}</li>
                                                <li>gravity: {item.gravity}</li>
                                                <li>Orbital period: {item.orbital_period}</li>
                                                <li>population: {item.population}</li>
                                                <li>Rotation period: {item.rotation_period}</li>
                                                <li>Rotation period: {item.terrain}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            // expandIcon={}
                            aria-controls="panel1a-content"
                        // id="panel1a-header"
                        >
                            Vehicles
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="film-content">
                                {this.state.content.vehicles.map(item => {
                                    return (
                                        <div key={item.name}>
                                            <h3>{item.name}</h3>
                                            <ul>
                                                <li>manufacturer: {item.manufacturer}</li>
                                                <li>Max speed: {item.max_atmosphering_speed}</li>
                                                <li>model: {item.model}</li>
                                                <li>passengers: {item.passengers}</li>
                                                <li>vehicle class: {item.vehicle_class}</li>
                                                <li>length: {item.length}</li>
                                                <li>crew: {item.crew}</li>
                                                <li>cost in credits: {item.cost_in_credits}</li>
                                                <li>cargo capacity: {item.cargo_capacity}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            // expandIcon={}
                            aria-controls="panel1a-content"
                        // id="panel1a-header"
                        >
                            Species
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="film-content">
                                {this.state.content.species.map(item => {
                                    return (
                                        <div key={item.name}>
                                            <h3>{item.name}</h3>
                                            <ul>
                                                <li>language: {item.language}</li>
                                                <li>hair colors: {item.hair_colors}</li>
                                                <li>eye colors: {item.eye_colors}</li>
                                                <li>classification: {item.classification}</li>
                                                <li>average lifespan: {item.average_lifespan}</li>
                                                <li>average height: {item.average_height}</li>
                                                <li>designation: {item.designation}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            // expandIcon={}
                            aria-controls="panel1a-content"
                        // id="panel1a-header"
                        >
                            Starships
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="film-content">
                                {this.state.content.starships.map(item => {
                                    return (
                                        <div key={item.name}>
                                            <h3>{item.name}</h3>
                                            <ul>
                                                <li>model: {item.model}</li>
                                                <li>passengers: {item.passengers}</li>
                                                <li>starship class: {item.starship_class}</li>
                                                <li>manufacturer: {item.manufacturer}</li>
                                                <li>length: {item.length}</li>
                                                <li>hyperdrive rating: {item.hyperdrive_rating}</li>
                                                <li>crew: {item.crew}</li>
                                                <li>cost in credits: {item.cost_in_credits}</li>
                                                <li>consumables: {item.consumables}</li>
                                                <li>cargo capacity: {item.cargo_capacity}</li>
                                                <li>MGLT: {item.MGLT}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    
                </div>
            </div>
        )
    }
}

export default MovieDescription
