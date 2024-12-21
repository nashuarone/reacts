import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LocationProps } from "./types";
import { useGetNextElements } from "../hooks/useGetNextElements";

export const Locations = () => {
    const [page, setPage] = useState(1);
    const { loading, error, elements, hasMore } = useGetNextElements(
        "location",
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
            {elements.map((location: LocationProps, index) => {
                if (elements.length === index + 1) {
                    return (
                        <div key={location.id} ref={lastNodeRef}>
                            <Link to={`/categories/characters/${location.id}`}>
                                {location.name}
                            </Link>
                        </div>
                    );
                } else {
                    return (
                        <div key={location.id}>
                            <Link to={`/categories/locations/${location.id}`}>
                                {location.name}
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
