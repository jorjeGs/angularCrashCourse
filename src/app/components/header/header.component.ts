import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
//subscription is a way to subscribe to an observable different from the one we are in
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker'
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private ui: UiService, private router: Router) {
    this.subscription = this.ui.onToggle().subscribe((value) => this.showAddTask = value);
    //we are subscribing to the observable that is returned from the onToggle() method
    //and we are setting the value of showAddTask to the value that is returned from the observable
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.ui.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
