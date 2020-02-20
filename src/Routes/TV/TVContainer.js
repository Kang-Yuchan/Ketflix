import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

const TV = () => {
    const [topRated, setTopRated] = useState(null);
    const [popular, setPopular] = useState(null);
    const [airingToday, setAiringToday] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTvApi = async () => {
            try {
                const {
                    data: { results: topRated }
                } = await tvApi.topRated();
                const {
                    data: { results: airingToday}
                } = await tvApi.airingToday();
                const {
                    data: { results: popular}
                } = await tvApi.popular();
                setTopRated(topRated);
                setAiringToday(airingToday);
                setPopular(popular);
            } catch {
                setError("該当するTVの検索結果がありません。");
            } finally {
                setLoading(false);
            }
        }
        fetchTvApi();
    })

    return  (
        <TVPresenter 
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
    );
}

export default TV;