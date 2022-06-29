import {dateFormatter} from '../../util/util'

export default function CharacterItem({char}) {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={char.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{char.character}</h1>
          <ul>
            <li>
              <strong>Portrayed by:</strong> {char.portrayed}
            </li>
            {char.aka &&
              <li>
                <strong>Nickname:</strong> {char.aka}
              </li>
            }
            {char.born &&
              <li>
                <strong>Birthday:</strong> {dateFormatter(char.born)}
              </li>
            }
            {char.occupation &&
              <li>
                <strong>Occupation:</strong> {char.occupation}
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
