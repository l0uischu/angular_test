import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  totalNumber: number = 0;
  numberOfRow: number = 0;
  numberOfPill: number = 0;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
   // this.getHeroes();
  }
  
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
      return
    }
  }

  onNumberOfRowChange() {
    this.setTotalNumber();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 4)));
  }
}