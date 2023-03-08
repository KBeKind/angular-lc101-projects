import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  left = 0;
  bottom = 0;
  leftPx = '0px';
  bottomPx = '0px';
  takeOffEnabled: boolean = true;
  currentEdgeWarning: string = "";
  upDis = false;
  bottomDis = false;
  leftDis = false;
  rightDis = false;

  takeOff(): void {
    if (this.takeOffEnabled) {
      let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
      if (confirmation) {
        this.color = 'blue';
        this.message = 'Shuttle in flight.';
        this.height = 10000;
        this.takeOffEnabled = false;
      }
    }
  }

  land(): void {
    if (!this.takeOffEnabled) {
      alert('The shuttle is landing. Landing gear engaged.');
      this.message = 'The shuttle has landed.';
      this.color = 'green';
      this.height = 0;
    }
  }

  abort(): void {
    if (!this.takeOffEnabled) {
      if (confirm('Are you sure you want to abort?')) {
        this.message = 'Mission aborted.';
        this.color = 'red';
        this.height = 0;

      }
    }
  }

  edgeWarning(edge: string): void {
    this.color = 'orange';
    this.message = `Warning the rocket is at the ${edge} edge!`;
    this.currentEdgeWarning = edge;
  }

  removeWarning(): void {
    this.color = 'blue';
    this.message = 'Shuttle in flight.';
    this.currentEdgeWarning = 'none';
  }


  moveRocket(rocketImage, dir: string): void {

    switch (dir) {
      case "up":
        if (this.height >= 10000 && this.height < 290000) {
          this.height += 10000;
          this.bottom += 10;
          rocketImage.style.bottom = (this.bottom) + 'px';
          if (this.currentEdgeWarning === 'bottom') {
            this.removeWarning();
            this.bottomDis = false;
          }
        } else if (this.height === 290000) {
          this.edgeWarning('top');
          this.upDis=true;
        }
        break;
      case "down":
        if (this.height > 10000) {
          this.height -= 10000;
          this.bottom -= 10;
          rocketImage.style.bottom = (this.bottom) + 'px';
          if (this.currentEdgeWarning === 'top') {
            this.removeWarning();
            this.upDis = false;
          }
        } else {
          this.edgeWarning("bottom");
          this.bottomDis = true;
        }
        break;

      case "left":
        if (this.height >= 10000 && this.left > 0) {
          this.left -= 10;
          rocketImage.style.left = (this.left) + 'px';
          if (this.currentEdgeWarning === 'right') {
            this.removeWarning();
            this.rightDis = false;
          }
        } else if (this.left <= 0) {
          this.edgeWarning('left');
          this.leftDis = true;
        }
        break;

      case "right":
        if (this.height >= 10000 && this.left < 460) {
          this.left += 10;
          rocketImage.style.left = (this.left) + 'px';
          if (this.currentEdgeWarning === 'left') {
            this.removeWarning();
            this.leftDis = false;
          }
        } else if (this.left >= 460) {
          this.edgeWarning('right');
          this.rightDis = true;
        }

        break;
    }


  }

}
