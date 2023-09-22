
import { Link } from "react-router-dom";
import { ToyPreview } from "./ToyPreview.jsx";

export function ToyList({ toys, onRemoveToy, onEditToy }) {

    return (
        <ul >
        {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div className="toy-buttons">
                    <button onClick={() => onRemoveToy(toy._id)}>x</button>
                    <button onClick={() => onEditToy(toy)}>Edit</button>
                    
                    </div>
                </li>
            )}
        </ul>
    )
}

