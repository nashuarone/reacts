import { useParams } from "react-router-dom";
import { CharacterProps } from "../pages/types";
import { useGetOneElement } from "../hooks/useGetOneElement";

export const Character = () => {
    const { id } = useParams();

    const { loading, error, element } = useGetOneElement(
        "character",
        Number(id)
    );

    const { name, status, species, gender, image } = element as CharacterProps;
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : (
                <div>
                    <div>
                        <img src={image} alt={name} />
                    </div>
                    <h2>{name}</h2>
                    <div>
                        <p>Status: {status}</p>
                        <p>Species: {species}</p>
                        <p>Gender: {gender}</p>
                    </div>
                </div>
            )}
        </>
    );
};
