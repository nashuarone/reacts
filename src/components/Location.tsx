import { useParams } from "react-router-dom";
import { LocationProps } from "../pages/types"
import locations from '../assets/location.json'

export const Location = () => {
    const { id } = useParams();
    const location: LocationProps | undefined = locations.find(location => location.id === Number(id));
    const { name, type, dimension } = location || {};
    return (
        <div>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
        </div>
    )
}
