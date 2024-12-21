import { useParams } from "react-router-dom";
import { EpisodeProps } from "../pages/types";
import { useGetOneElement } from "../hooks/useGetOneElement";

export const Episode = () => {
    const { id } = useParams();

    const { loading, error, element } = useGetOneElement("episode", Number(id));

    const { name, air_date, episode } = element as EpisodeProps;
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : (
                <div>
                    <h2>{name}</h2>
                    <p>Air Date: {air_date}</p>
                    <p>Episode: {episode}</p>
                </div>
            )}
        </>
    );
};
