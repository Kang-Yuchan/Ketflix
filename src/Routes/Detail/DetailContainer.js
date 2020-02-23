import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";


//export default class extends React.Component {
//    constructor(props) {
//        super(props);
//        const {
//            location: { pathname }
//        } = props;
//        this.state = {
//            result: null,
//            error: null,
//            loading: true,
//            isMovie: pathname.includes("/movie/")
//        };
//    }
//
//    async componentDidMount() {
//        const { 
//            match: {
//                params: { id }
//            },
//            history: { push }
//        } = this.props;
//        const { isMovie } = this.state;
//        const parsedId = parseInt(id);
//        if(isNaN(parsedId)) {
//            return push("/");
//        }
//        let result = null;
//        try {
//            if(isMovie) {
//                ({ data: result } = await moviesApi.movieDetail(parsedId));
//            } else {
//                ({ data: result } = await tvApi.showDetail(parsedId));
//            }
//          
//        } catch {
//            this.setState({error: "該当する検索結果がありません。"})
//        } finally {
//            this.setState({ loading: false, result });
//        }
//    }
//    
//
//    render () {
//        const {result, error, loading} = this.state;
//        return  (
//        <DetailPresenter 
//            result={result}
//            error={error}
//            loading={loading}
//        />
//
//        );
//    }    
//}

const Detail = (props) => {
    const { location : { pathname } } = props;
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));

    useEffect(() => {
        const fetchDetailApi = async () => {
            const { match: { params: { id }}, history: { push } } = props;
            const parsedId = parseInt(id);
            if(isNaN(parsedId)) {
                return push("/");
            }
            let result = null;

            try {
                if(isMovie) {
                    ({ data: result } = await moviesApi.movieDetail(parsedId));
                } else {
                    ({ data: result } = await tvApi.showDetail(parsedId));
                }
              
            } catch {
                setError("該当する検索結果がありません。");
            } finally {
                setLoading(false);
                setResult(result);
            }
        }
        fetchDetailApi();
    } )

    return  (
        <DetailPresenter 
            result={result}
            error={error}
            loading={loading}
        />

    );
}

export default Detail;