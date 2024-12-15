import { Link } from 'react-router-dom'
import locations from '../assets/location.json'
import { LocationProps } from './types'

export const Locations = () => {
    return (
        <div>
            {locations.map((location: LocationProps) => (
                <div key={location.id}>
                    <Link to={`/categories/locations/${location.id}`}>{location.name}</Link>
                </div>
            ))}
        </div>
    )
}
