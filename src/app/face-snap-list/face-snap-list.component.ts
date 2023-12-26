import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Subject, interval, tap, takeUntil, Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapsService: FaceSnapsService) { }
  
  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }


}



/*
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) { }
  
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps =  this.faceSnapsService.getAllFaceSnaps();
    interval(1000).pipe(
    tap(console.log),
    takeUntil(this.destroy$)
  ).subscribe();
  
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
*/