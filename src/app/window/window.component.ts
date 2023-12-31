import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})

export class WindowComponent implements OnInit {

  total: number;

  ngOnInit() {
    this.total = 0;
  }

  addOne(): void {
    this.total += 1;
    console.log(this.total)
  }
}
