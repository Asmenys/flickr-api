import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["parameterToggle", "parameters", "paramSlide", "slideSwitch"]
    initialize() {
        this.slideIndex = 0
    }
    display() {
        if (this.parametersTarget.hidden) {
            this.parametersTarget.hidden = false
        }
        else {
            this.parametersTarget.hidden = true
        }
    }

    updateSlideState(event) {
        var switchIndex = event.currentTarget.attributes["data-query-variable"].value
        this.resetActiveStates(this.slideIndex)
        this.showSlide(switchIndex)
        this.updateSwitch(switchIndex)
        this.slideIndex = switchIndex
    }
    resetActiveStates(switchIndex) {
        this.slideSwitchTargets[switchIndex].className = "w-10 border-black border-solid border-2"
        this.paramSlideTargets[switchIndex].hidden = true
    }
    showSlide(slideIndex) {
        this.paramSlideTargets[slideIndex].hidden = false
    }
    updateSwitch(switchIndex)
    {
        this.slideSwitchTargets[switchIndex].className = "w-10 border-red-900 border-solid border-2"
    }
}