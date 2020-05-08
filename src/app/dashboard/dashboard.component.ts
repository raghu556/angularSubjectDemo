import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private i = 0;
  public subjectConst: number;
  public behaviourSubjectConst: number;
  public replaySubjectConst: number;

  constructor(private commonService: CommonService) {
    setInterval(this.counter, 1000);
  }

  counter() {
    this.commonService.emit(this.i++);
  }

  ngOnInit(): void {
    this.commonService.subjectObservable$.subscribe(o => {
      this.subjectConst = o;
    });
    this.commonService.behaviourSubjectObservable$.subscribe(o => {
      this.behaviourSubjectConst = o;
    });
    this.commonService.replaySubjectObservable$.subscribe(o => {
      this.replaySubjectConst = o;
    });
  }

}
