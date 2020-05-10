import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private subject$: Subject<number> = new Subject();
  private behaviourSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  private replaySubject$: ReplaySubject<number> = new ReplaySubject();

  public subjectObservable$: Observable<number> = this.subject$.asObservable();
  public behaviourSubjectObservable$: Observable<number> = this.behaviourSubject$.asObservable();
  public replaySubjectObservable$: Observable<number> = this.replaySubject$.asObservable();

  constructor() { }

  public emit(value: number) {
    this.subject$.next(value);
    this.behaviourSubject$.next(value);
    this.replaySubject$.next(value);
  }
}
