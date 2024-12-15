import { Link } from 'react-router-dom'
import characters from '../assets/characters.json'
import { CharacterProps } from './types'

export const Characters = () => {
    return (
        <div>
            {characters.map((character: CharacterProps) => (
                <div key={character.id}>
                    <Link to={`/categories/characters/${character.id}`}>{character.name}</Link>
                </div>
            ))}
        </div>
    )
}
