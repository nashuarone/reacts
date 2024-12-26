import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CharacterProps } from "../types";
import { useGetNextElements } from "../../hooks/useGetNextElements";

export const Characters = () => {
    const [page, setPage] = useState(1);
    const { loading, error, elements, hasMore } = useGetNextElements(
        "character",
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
            {elements.map((character: CharacterProps, index) => {
                if (elements.length === index + 1) {
                    return (
                        <div key={character.id} ref={lastNodeRef}>
                            <Link to={`/categories/characters/${character.id}`}>
                                {character.name}
                            </Link>
                        </div>
                    );
                } else {
                    return (
                        <div key={character.id}>
                            <Link to={`/categories/characters/${character.id}`}>
                                {character.name}
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
