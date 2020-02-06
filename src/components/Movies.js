import React, { Component } from 'react';
import axios from 'axios';
import '../animate.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Movie from './Movie';
import MovieDescription from './MovieDescription'

export class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            search: '',
            sort: false,
            showModal: 'none',
            modalContent: {},
            spinner: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.sort = this.sort.bind(this)
        this.showDescription = this.showDescription.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    //Display modal
    showDescription(state) {
        this.setState({ showModal: 'flex', modalContent: state })
    }
    closeModal() {
        this.setState({ showModal: 'none' })
    }
    //Sorting films by name
    sort() {
        this.setState({ sort: !this.state.sort })
        const sorted = this.state.movies.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return (this.state.sort) ? 1 : -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return (this.state.sort) ? -1 : 1;
            }
            return 0;
        });
        this.setState({ movies: sorted })
    }
    //Fetching all films
    componentDidMount() {
        axios.get('https://swapi.co/api/films/')
            .then(res => {
                const films = res.data.results;
                this.setState({ movies: films, spinner: false });
            })
    }
    render() {
        const title = "Star Wars Movies guide";
        return (
            <React.Fragment>
                <h1>{title.split(' ').map((item, index)=>{
                return <span className="animated rotateInDownLeft" style={{animationDelay: index*200+'ms', display: 'inline-block'}}>{item}&nbsp;</span>
                    })} <i className="fab fa-old-republic animated fadeIn delay-1s"></i></h1>
                <div id="controllers">
                    <TextField id="search" label="Movie Title" variant="filled" name="search" size="small" onChange={this.handleChange} value={this.state.search} />
                    <Button variant="contained" color="primary" size="large" onClick={this.sort} style={{ backgroundColor: 'rgb(255, 208, 0)', color: '#000' }}>Sort</Button>
                </div>
                {/* Displaying movies */}
                <div id="movies">
                    {(this.state.spinner) ? <h1 style={{ color: "rgb(255, 208, 0)", fontSize: "60px" }}>Loading <i className="fas fa-spinner fa-spin"></i></h1> : null}
                    {this.state.movies.map((item) => {
                        return (this.state.search !== '') ? ((item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) ?
                            <Movie showDescription={this.showDescription} key={item.episode_id} title={item.title} director={item.director} producer={item.producer} release={item.release_date} about={item.opening_crawl} planets={item.planets} starships={item.starships} vehicles={item.vehicles} characters={item.characters} species={item.species} /> : null) :
                            <Movie showDescription={this.showDescription} key={item.episode_id} title={item.title} director={item.director} producer={item.producer} release={item.release_date} about={item.opening_crawl} planets={item.planets} starships={item.starships} vehicles={item.vehicles} characters={item.characters} species={item.species} />;
                    })}
                </div>
                {/* Displaying Modal window with relative film info (content)*/}
                {(this.state.showModal === 'flex') ? <MovieDescription content={this.state.modalContent} display={this.state.showModal} close={this.closeModal.bind(this)} /> : null}
            </React.Fragment>
        )
    }
}

export default Movies
