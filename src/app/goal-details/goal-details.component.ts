import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal} from '../goal';
import {GoalService} from '../goal-service/goal.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  goal:Goal;

  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
