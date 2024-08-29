import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  totalNumber: number = 0;
  numberOfRow: number = 0;
  numberOfPill: number = 0;
    
  getTriangleNumber(row: number) {
    return (row * (row + 1)) / 2
  }

  getNumberOfRow(totalCount: number) {
    return (Math.sqrt(8 * totalCount + 1) - 1) / 2
  }

  setTotalNumber() {
    this.totalNumber = this.getTriangleNumber(this.numberOfRow) + this.numberOfPill
  }

  onNumberOfPillChange() {
    this.setTotalNumber();
  }

  onTotalNumberChange() {
    this.numberOfRow = this.getNumberOfRow(this.totalNumber)
    if (!Number.isInteger(this.numberOfRow)) {
      this.numberOfRow = Math.floor(this.numberOfRow)
      this.numberOfPill = this.totalNumber - this.getTriangleNumber(this.numberOfRow)
      return
    } else {
      this.numberOfPill = 0
      return
    }
  }

  onNumberOfRowChange() {
    this.setTotalNumber();
  }
}
