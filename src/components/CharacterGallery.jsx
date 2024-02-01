import characterData from '../data/characterData.json';
import Character from './Character';

function CharacterGallery(){
    console.log(characterData)
    return(
        <div>
            {characterData.map(
                (character)=> <Character 
                    key={character.id}
                    {...character}
                    // name={character.name}
                    // img={character.imgUrl}
                    // birth={character.birth}
                    // dod={character.death}
                    // race={character.race}
                    // realm={character.realm}
                    // spouse={character.spouse}
                />
            )}
        </div>
    );
}

export default CharacterGallery;