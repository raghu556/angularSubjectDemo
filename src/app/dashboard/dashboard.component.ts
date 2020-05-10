import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('displayMessage') displayMessage: ElementRef;
  private i = 0;
  public arr = {
    subject: [],
    behaviourSubject: [],
    replaySubject: []
  };

  constructor(private commonService: CommonService,
    private ref: ChangeDetectorRef) { }

  counter() {
    if (this.i <= 10) {
      this.commonService.emit(this.i++);
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.counter();
    }, 1000);

    setTimeout(() => {
      this.commonService.subjectObservable$.subscribe(o => {
        this.arr.subject.push(o);
      });
      this.displayMessage.nativeElement.innerHTML = "Subject Started with counter ===>" + this.i;
    }, 10);

    setTimeout(() => {
      this.commonService.behaviourSubjectObservable$.subscribe(o => {
        this.arr.behaviourSubject.push(o);
      });
      this.displayMessage.nativeElement.innerHTML = "Behaviour Subject Started with counter ===>" + this.i;
    }, 3000)

    setTimeout(() => {
      this.commonService.replaySubjectObservable$.subscribe(o => {
        this.arr.replaySubject.push(o);
      });
      this.displayMessage.nativeElement.innerHTML = "Replay Subject Started with counter ===>" + this.i;
    }, 6000);

  }

}
