import { Link } from "react-router-dom";
import episodes from "../assets/episode.json";
import { EpisodeProps } from "./types";

export const Episodes = () => {
  return (
    <div>
      {episodes.map((episode: EpisodeProps) => (
        <div key={episode.id}>
          <span>{episode.episode} </span>
          <Link to={`/categories/episodes/${episode.id}`}>{episode.name}</Link>
        </div>
      ))}
    </div>
  );
};
