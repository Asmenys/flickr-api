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
    this.photoPageTargets[this.photoPageIndex].className = "grid gap-2 grid-cols-3 auto-rows-[3] justify-items-center"
  }

  hideCurrentPage() {
    this.photoPageTargets[this.photoPageIndex].className = "hidden"
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
