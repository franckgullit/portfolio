import { useNavigate } from 'react-router-dom';

import '../../data/projects.json';
import './Cards.scss';

function Card(props) {
    const navigate = useNavigate();

  const ImageClick = () => {
    navigate(`/Projects/${props.id}`);
  };

  return (
    <div className='cardInfo' onClick={ImageClick}>
      <img src={props.cover} alt='cardImg' className='cardImage' />
      <div className='cardTitle'>
        <p >{props.title}</p>
      </div>
    </div>
  )
}

export default Card

