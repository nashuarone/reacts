import { useParams } from "react-router-dom";
import { LocationProps } from "../pages/types";
import { useGetOneElement } from "../hooks/useGetOneElement";

export const Location = () => {
    const { id } = useParams();

    const { loading, error, element } = useGetOneElement(
        "location",
        Number(id)
    );

    const { name, type, dimension } = element as LocationProps;
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : (
                <div>
                    <h2>{name}</h2>
                    <p>Type: {type}</p>
                    <p>Dimension: {dimension}</p>
                </div>
            )}
        </>
    );
};
