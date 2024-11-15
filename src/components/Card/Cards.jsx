import { useNavigate } from 'react-router-dom';

import '../../data/projects.json';
import './Cards.scss';

function Card(props) {
    const navigate = useNavigate();

  const ImageClick = () => {
    navigate(`/Projects/${props.id}`);
  };

  return (
    <div className="projectDetails" onClick={ImageClick}>
      <img src={props.cover} alt="projectImg" className="projectImage" />
      <div className="projectTitle">
        <p >{props.title}</p>
      </div>
    </div>
  )
}

export default Card

