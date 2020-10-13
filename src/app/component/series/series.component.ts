import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  repetitionMax = 40;
  repetition: number;
  chrono = 30;

  constructor() {}

  ngOnInit(): void {}
}