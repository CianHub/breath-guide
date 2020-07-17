import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'breath';

  totalTime = 19000;
  inhaleTime = 4000;
  holdTime = 7000;

  inhale: boolean;
  exhale: boolean;
  hold: boolean;

  breathText: string;

  ngOnInit() {
    this.breathAnimation();
    setInterval(this.breathAnimation, this.totalTime);
  }

  breathAnimation = () => {
    this.breathText = 'Inhale';
    this.inhale = true;
    this.exhale = false;

    setTimeout(() => {
      this.breathText = 'Hold';

      setTimeout(() => {
        this.breathText = 'Exhale';
        this.inhale = false;
        this.exhale = true;
      }, this.holdTime);
    }, this.inhaleTime);
  };

  handleSize = (): string => {
    if (this.inhale) return 'grow';
    else if (this.exhale) return 'shrink';
  };
}
