import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'John Doe',
      role: 'Developer',
      photo: 'path/to/photo.jpg',
      color: '#ffcc00'
    }
  ];
}
