import './Card.css';
import { Link } from 'react-router-dom';

export default function Card(arg) {
    return (
        <Link to={arg.moduleURL}>
            <div className="card">
                <h3>Module {arg.num}</h3>
                <p>{arg.desc}</p>
                <img src={arg.imageURL} />
            </div>
        </Link>
    );
}