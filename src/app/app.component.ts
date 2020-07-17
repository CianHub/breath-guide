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
  count = 0;
  rounds = 1;

  breathText: string;

  ngOnInit() {
    this.breathAnimation();
    setInterval(this.breathAnimation, this.totalTime);
  }

  breathAnimation = () => {
    this.breathText = 'Inhale';
    this.inhale = true;
    this.exhale = false;
    this.hold = false;
    this.count = this.count + 1;
    this.rounds = this.count % 3 === 0 ? this.count / 3 + 1 : this.rounds;

    setTimeout(() => {
      this.breathText = 'Hold';
      this.hold = true;

      setTimeout(() => {
        this.breathText = 'Exhale';
        this.inhale = false;
        this.exhale = true;
        this.hold = false;
      }, this.holdTime);
    }, this.inhaleTime);
  };

  handleSize = (): string => {
    if (this.inhale) return 'grow';
    else if (this.exhale) return 'shrink';
  };

  handleColor = (): string => {
    if (this.hold) {
      return 'hold-animation';
    } else if (this.inhale) {
      return 'inhale-animation';
    } else {
      return 'exhale-animation';
    }
  };
}
