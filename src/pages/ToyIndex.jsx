import { useSelector, useDispatch } from "react-redux";
import { ToyList } from "../cmps/ToyList.jsx";
import { loadToys, removeToy, saveToy } from '../store/actions/toy.action.js'
import { useEffect } from 'react'
import { toyService } from "../services/toy.service.js";
import { SET_FILTER_BY } from "../store/reducers/toy.reducer.js";
import { ToyFilter } from "../cmps/ToyFilter.jsx";


export function ToyIndex() {

    const dispatch = useDispatch()
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)

    useEffect(() => {
        loadToys()
            .catch(err => {
                console.log('err:', err)
            })
    }, [filterBy])


    function onRemoveToy(toyId) {
        removeToy(toyId)
            .then(() => {
                console.log('toy removed')
            })
            .catch(err => {
                console.log('Cannot remove toy', err)
            })
    }

    function onAddToy() {
        const toyToSave = toyService.getEmptyToy()
        saveToy(toyToSave)
            .then(savedToy => {
                console.log('Toy added')
            })
            .catch(err => {
                console.log('Cannot add toy', err)
            })
    }

    function onEditToy(toy) {
        const price = +prompt('New price?', toy.price)
        const toyToSave = { ...toy, price }
        saveToy(toyToSave)
            .then(savedToy => {
                console.log(`Toy updated to price: $${savedToy.price}`)
            })
            .catch(err => {
                console.log('Cannot edit the price', err)
            })
    }

    function onSetFilter(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }



    return (
        <div>
            <h3>Toys for sale!</h3>
            <main>
                <button onClick={onAddToy}>Add Toy</button>
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                {!isLoading && <ToyList
                    toys={toys}
                    onRemoveToy={onRemoveToy}
                    onEditToy={onEditToy}
                />
                }

                {isLoading && <div>Loading...</div>}
                <hr />
            </main>
        </div>
    )
}




