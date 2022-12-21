import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'swinging-christmas-balls',
  templateUrl: './ngx-swinging-christmas-balls.component.html',
  styleUrls: ['./ngx-swinging-christmas-balls.component.scss']
})
export class NgxSwingingChristmasBallsComponent implements OnInit {
  @Input() count: number = 1;
  @Input() scale: number = 1;
  readonly defaultSize = {
    x: 53,
    y: 90
  }

  balls : Array<string> = [];

  ngOnInit(): void {
    this.balls = Array(this.count).fill('').map((x) => {
      let ballScale = this.scale;
      if (this.scale < 0) {
        const min = 0.8;
        const max = 1.2;
        ballScale = Math.random() * (max - min) + min;
      }
      return this.getBallStyle(ballScale);
    });
  }

  add_swinging_class(e: any) {
    const target = e.target;
    const targetPosX = target.offsetLeft + target.offsetWidth / 2.0;
    const dir = e.x <= targetPosX ? 'right' : 'left';

    const existedClass: any = Array.from(target.classList).find((x: any) => x.includes('swinging'));
    if (existedClass && !existedClass.includes(dir)) {
      target.style.transform = window.getComputedStyle(target).transform;
      target.classList.remove(existedClass);
    }

    target.classList.add(`swinging-${dir}`);
  }

  remove_swinging_class(e: any) {
    const target = e.target;
    const className = Array.from(target.classList).find((x: any) => x.includes('swinging'));
    target.classList.remove(className);
    target.style.transform = null;
  }

  getBallStyle(scale : number) : string {
    const size = {
      x: this.defaultSize.x * scale,
      y: this.defaultSize.y * scale
    };
    return `width: ${size.x}px; height: ${size.y}px;`;
  }
}
