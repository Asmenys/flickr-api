import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["photoPage", "photoPageIndex"]


  connect() {
    this.photoPageIndex = 0
    this.displayCurrentPage()
  }

  photoPageTargetConnected(photoPage) {
    photoPage.className = "hidden"
  }

  displayCurrentPage() {
    this.photoPageTargets[this.photoPageIndex].className = "grid grid-flow-row-dense grid-rows-3 grid-cols-3 gap-2"
    this.photoPageIndexTargets[this.photoPageIndex].className = "select-none w-6 h-6 border-solid border-2 border-gray-200 bg-sky-600 flex justify-center items-center"
  }

  hideCurrentPage() {
    this.photoPageTargets[this.photoPageIndex].className = "hidden"
    this.photoPageIndexTargets[this.photoPageIndex].className = "select-none w-6 h-6 border-solid border-2 border-gray-200 bg-white flex justify-center items-center"
  }

  prevPage() {
    this.hideCurrentPage()
    if (this.photoPageIndex == 0) {
      this.photoPageIndex = this.photoPageTargets.length-1
    }
    else {
      this.photoPageIndex--
    }
    this.displayCurrentPage()
  }

  nextPage() {
    this.hideCurrentPage()
    if(this.photoPageIndex == 12)
    {
      this.photoPageIndex = 0
    }
    else
    {
      this.photoPageIndex++
    }
    this.displayCurrentPage()
  }
}
