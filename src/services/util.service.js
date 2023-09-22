export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    loadFromStorage,
    saveToStorage,
    debounce

}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['ToyBot', 'RacerX', 'FairyWings', 'CuddleBear', 'ZoomCar', 'MagicCube', 'SkyRocket', 'DinoRoar', 'BuzzyBee', 'PixelPuzzle', 'ActionFig', 'PrincessDoll', 'KittyPlush', 'FireTruck', 'SpaceGun', 'WackyWorm', 'FidgetSpinner', 'ClayKit', 'SpyGoggles', 'MoonWalker', 'TrainSet', 'PirateShip', 'NinjaStars', 'RetroArcade', 'SillySlime', 'JumboJet', 'CraftBox', 'MegaBlocks', 'TinyTunes', 'TeddyBear'];

    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}