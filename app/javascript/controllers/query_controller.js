import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["switch", "parameters"]

    display() {
        if (this.parametersTarget.hidden) {
            this.parametersTarget.hidden = false;
        }
        else {
            this.parametersTarget.hidden = true;
        }
    }
}