
// todo: DOM selectors
const TRANSLATE_INPUT = document.getElementById('translate-input')
const TRANSLATE_OUTPUT = document.getElementById('translate-output')
const SPEAKER_BTN = document.getElementsByClassName('speaker-btn')
const CLEAR_BTN = document.getElementById('clear-btn')
const COPY_BTN  = document.getElementById('copy-btn')

// todo: Create the state of the main input
let translateState = ""

function setTranslateState(value) {
    translateState = value
    //console.log(translateState)
}

function setSpeakerBtns(value, isRemoving = false) {
    [...SPEAKER_BTN].forEach(e => isRemoving ? e.classList.remove(value) : e.classList.add(value))
}

// todo: Handle events
TRANSLATE_INPUT.addEventListener('keyup', e => {
    setTranslateState(e.target.value)
    TRANSLATE_OUTPUT.value = translateState
    if (translateState.length !== 0) {
        console.log(translateState)

        setSpeakerBtns('invisible', true)
        CLEAR_BTN.classList.remove('invisible')
        COPY_BTN.classList.remove('invisible')
    } else {
        setSpeakerBtns('invisible')
        CLEAR_BTN.classList.add('invisible')
        COPY_BTN.classList.add('invisible')
    }
})
