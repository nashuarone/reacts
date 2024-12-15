import { useParams } from "react-router-dom";
import { EpisodeProps } from "../pages/types"
import episodes from '../assets/episode.json'

export const Episode = () => {
    const { id } = useParams();
    const episodeObj: EpisodeProps | undefined = episodes.find(episode => episode.id === Number(id));
    const { name, air_date, episode } = episodeObj || {};
    return (
        <div>
            <h2>{name}</h2>
            <p>Air Date: {air_date}</p>
            <p>Episode: {episode}</p>
        </div>
    )
}
