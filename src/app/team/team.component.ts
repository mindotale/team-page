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
      photo: 'assets/team-photos/tm1.jpg',
      color: '#ffcc00'
    },
    {
      name: 'John Doe',
      role: 'Developer',
      photo: 'assets/team-photos/tm2.jpg',
      color: '#ffcc00'
    },
    {
      name: 'John Doe',
      role: 'Developer',
      photo: 'assets/team-photos/tm3.jpg',
      color: '#ffcc00'
    },
    {
      name: 'John Doe',
      role: 'Developer',
      photo: 'assets/team-photos/tm4.jpg',
      color: '#ffcc00'
    }
  ];
}
