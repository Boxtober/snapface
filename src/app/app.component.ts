import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [

      {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        imageUrl: 'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
        createdDate: new Date(),
        snaps: 155,
        location: '...'
      },
      {
        title: 'Hello',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus voluptate asperiores itaque dolores alias, rem omnis eligendi quae incidunt pariatur iste ullam nesciunt. Iste corporis dicta a omnis.',
        imageUrl: 'https://images.unsplash.com/photo-1691661485699-7e459573cb35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Titre',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus voluptate asperiores itaque dolores alias, rem omnis eligendi quae incidunt pariatur iste ullam nesciunt. Iste corporis dicta a omnis magni.Dolorem minus alias, veritatis nemo unde optio odio doloribus voluptatum dolores nulla praesentium possimus aperiam, molestias totam nam quos eligendi eius, soluta facilis commodi ad. Totam praesentium eaque temporibus sapiente.',
        imageUrl: 'https://images.unsplash.com/photo-1498329741116-4d1987b210d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Titre',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus voluptate asperiores itaque dolores alias, rem omnis eligendi quae incidunt pariatur iste ullam nesciunt. Iste corporis dicta a omnis magni.Dolorem minus alias, veritatis nemo unde optio odio doloribus voluptatum dolores nulla praesentium possimus aperiam, molestias totam nam quos eligendi eius, soluta facilis commodi ad. Totam praesentium eaque temporibus sapiente.',
        imageUrl: 'https://images.unsplash.com/photo-1498329741116-4d1987b210d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        createdDate: new Date(),
        snaps: 0
      }
    ];  
  }
}
    
