import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";


const Detail = (props) => {
    const { location : { pathname } } = props;
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetailApi = async () => {
            const { match: { params: { id }}, history: { push } } = props;
            const parsedId = parseInt(id);
            const isMovie = pathname.includes('/movie/')
            if(isNaN(parsedId)) {
                return push("/");
            }
            try {
                if (id) {
					if (isMovie) {
						const { data: result } = await moviesApi.movieDetail(parsedId);
						setResult(result);
					} else {
						const { data: result } = await tvApi.showDetail(parsedId);
						setResult(result);
					}
				} else {
					throw Error("該当するidがありません。");
				}
            } catch {
                setError("該当する検索結果がありません。");
            } finally {
                setLoading(false);
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