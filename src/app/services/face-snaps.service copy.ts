import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}
/*
  faceSnaps: FaceSnap[] = [];
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
            createdDate: new Date(),
            snaps: 155,
            location: '...'
          }
    ];
  */
    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

/*
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }


    getFaceSnapById(FaceSnapId: number): FaceSnap {
        const FaceSnap = this.faceSnaps.find(FaceSnap => FaceSnap.id === FaceSnapId);
        if (!FaceSnap) {
            throw new Error('FaceSnap not found.');
        } else {
            return FaceSnap;
        }
    }
*/
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }
    snapFaceSnapById(faceSnapId: number, snapType: string): void {
        /*const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;*/
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
      const faceSnap: FaceSnap = {
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
      };
      this.faceSnaps.push(faceSnap);
  }
}