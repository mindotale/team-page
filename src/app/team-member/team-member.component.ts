import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent {
  @Input() member!: {
    name: string,
    role: string,
    photo: string,
    color: string
  };
}
