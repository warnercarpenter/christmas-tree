const treeHeightInput = document.getElementById("treeHeight")
const treeCharacterInput = document.getElementById("treeCharacter")
const treeButton = document.getElementById("treeButton")

const tree = (treeObject) => {
    const height = treeObject.treeHeight
    const character = treeObject.treeCharacter
    let spaceNumber = height - 1
    let text = character
    for (let i = 0; i < height; i++) {
        console.log(getSpaces(spaceNumber) + text)
        text = text + character + character
        spaceNumber = spaceNumber - 1
    }
}

const createTreeObject = (treeHeight, treeCharacter) => {
    let treeObject = {}
    treeObject.treeHeight = treeHeight
    treeObject.treeCharacter = treeCharacter
    return treeObject
}

const getSpaces = (number) => {
    let space = ""
    for (let i = 0; i < number; i++) {
        space = space + " "
    }
    return space
}

treeButton.addEventListener("click", function() {
    if (treeHeightInput.value === "" || treeCharacterInput.value === "") {
        window.alert("Both fields must have a value.")
    } if (isNaN(treeHeightInput.value) === true) {
        window.alert("Height must be a number")
    } else {
        tree(createTreeObject(treeHeightInput.value, treeCharacterInput.value))
        treeHeightInput.value = ""
        treeCharacterInput.value = ""
    }
})

treeHeightInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      treeButton.click();
    }
})

treeCharacterInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      treeButton.click();
    }
})