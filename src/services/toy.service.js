import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'
const STORAGE_KEY = 'ToyDB'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter,
    getLabels
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, {filterBy})
  }
function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}
function remove(toyId) {
console.log(toyId)
    return httpService.delete(BASE_URL + toyId)
}
function save(toy) {
    if (toy._id) {
      return httpService.put(BASE_URL, toy)

    } else {
      return httpService.post(BASE_URL, toy)

    }
  }


function getEmptyToy() {
    return { 
        name: utilService.makeLorem(1),
        price: utilService.getRandomIntInclusive(10, 300),
        labels: ['Battery Powered'],
        createdAt: Date.now(),
        inStock: true
    }
}

function getDefaultFilter() {
    return { name: '', maxPrice: '', label: '' }
}


function getLabels() {
    return labels
  }

//TEST DATa

// storageService.post(STORAGE_KEY, {name: 'Tamagotchi', price: 150, labels: ['Battery Powered', 'Puzzle'], createdAt: 1695215304769, inStock: true})
// storageService.post(STORAGE_KEY, {name: 'My Little Pony', price: 90, labels: ['Doll', 'Baby', 'Battery Powered'], createdAt: 1595215304769, inStock: true})
// storageService.post(STORAGE_KEY, {name: 'Barbie', price: 120, labels: ['Doll', 'Baby'], createdAt: 1495215304769, inStock: true})