import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";



export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        loading: false,
        searchTerm: ""
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchByterm();
        }
    };

    updateTerm = event => {
        const { 
            target: {value} 
        } = event;
        this.setState({
            searchTerm: value
        });
    }


   searchByterm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading: true
        })
        try {
            const {
                data: {results:movieResults}
            } = await moviesApi.search(searchTerm);
            const {
                data:{ results: tvResults}
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
        } catch {
            this.setState({
                error: "該当する検索結果がありません。"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render () {
        const {movieResults, tvResults, searchTerm, error, loading} = this.state;
        return  (
        <SearchPresenter 
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
        />

        );
    }    
}