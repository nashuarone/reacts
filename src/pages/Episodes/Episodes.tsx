import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EpisodeProps } from "../types";
import { useGetNextElements } from "../../hooks/useGetNextElements";

export const Episodes = () => {
    const [page, setPage] = useState(1);
    const { loading, error, elements, hasMore } = useGetNextElements(
        "episode",
        page
    );

    const observer = useRef<IntersectionObserver | null>(null);
    const lastNodeRef = useCallback(
        (node: HTMLElement | null) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <div>
            {elements.map((episode: EpisodeProps, index: number) => {
                if (elements.length === index + 1) {
                    return (
                        <div key={episode.id} ref={lastNodeRef}>
                            <Link to={`/categories/characters/${episode.id}`}>
                                {episode.name}
                            </Link>
                        </div>
                    );
                } else {
                    return (
                        <div key={episode.id}>
                            <span>{episode.episode} </span>
                            <Link to={`/categories/episodes/${episode.id}`}>
                                {episode.name}
                            </Link>
                        </div>
                    );
                }
            })}
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
        </div>
    );
};
