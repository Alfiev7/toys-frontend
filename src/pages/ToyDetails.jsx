import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"


export function ToyDetails() {
    const [toy, setToy] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [toyId])

    function loadToy() {
        toyService.getById(toyId)
            .then((toy) => setToy(toy))
            .catch((err) => console.log('toy details error', err))
    }


    if (!toy) return <div>Loading...</div>
    return (
        <section className="toy-details">
            <h1>Toy name : {toy.name} </h1>
            <h5>Price: ${toy.price}</h5>
            <ul>Categories :
                {toy.labels.map(label => (
                    <li key={label}>{label}</li>
                ))}
            </ul>
            <p>Manufacture date : {toy.createdAt} </p>
            <Link to="/toy">Back</Link>
        </section>
    )
}