import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"
import { toyService } from "../services/toy.service.js"


export function ToyFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const labels = toyService.getLabels()


    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? (+value || '') : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }



    return (
        <section className="toy-filter">
            <h2>Toys filter</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="name"
                    name="name"
                    placeholder="By Name"
                    value={filterByToEdit.name}
                    onChange={handleChange}
                />

                <label htmlFor="maxPrice">Max Price</label>
                <input type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="By Max Price"
                    value={filterByToEdit.maxPrice}
                    onChange={handleChange}
                />

                <label htmlFor='label'>By Label</label>
                <select name='label' id='label' onChange={handleChange}>
                    <option value=''>Choose Label</option>
                    {labels.map(label => (
                        <option key={label} value={filterByToEdit.label}>
                            {label}
                        </option>
                    ))}
                </select>

            </form>
        </section>


    )




}