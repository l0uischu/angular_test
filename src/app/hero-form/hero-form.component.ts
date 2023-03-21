import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HeroForm } from '../heroForm';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeroFormComponent implements OnInit {
  localHeroList: Hero[] | undefined;
  constructor(private heroService: HeroService) {}
  powers = ['Male', 'Female'];

  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .subscribe((hero) => (this.localHeroList = hero));
  }

  model = new HeroForm(
    Math.floor(Math.random() * 90 + 10),
    'Chan Tai Man',
    this.powers[0],
    'Tom'
  );

  onModelChange() {}
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  clicked(e: Event) {
    e.preventDefault();
    console.log(e);
    this.localHeroList?.push({ id: this.model.id, name: this.model.name });
    //then do whatever you should do here
  }
}
