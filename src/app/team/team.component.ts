import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Volodymyr Domin',
      role: '.NET Developer',
      photo: 'assets/team-photos/tm1.jpg',
      color: '#cc00ff'
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
      name: 'Volodymyr Ivasiuk',
      role: 'Blockchain Developer',
      photo: 'assets/team-photos/tm4.jpg',
      color: '#444444'
    }
  ];
}
