import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() FaceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private FaceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.FaceSnapsService.snapFaceSnapById(this.FaceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.FaceSnapsService.snapFaceSnapById(this.FaceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
