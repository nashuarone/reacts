import { useParams } from "react-router-dom";
import { CharacterProps } from "../pages/types"
import characters from '../assets/characters.json'

export const Character = () => {
    const { id } = useParams();
    const character: CharacterProps | undefined = characters.find(character => character.id === Number(id));
    const { name, status, species, gender, image } = character || {};
    return (
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
    )
}
