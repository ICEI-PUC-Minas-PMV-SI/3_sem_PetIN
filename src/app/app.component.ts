import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
} from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  serverCondition$ = this.actRoute.paramMap.pipe(
    map(params => console.log(params))
);
  constructor(
    private contexts: ChildrenOutletContexts,
    private actRoute: ActivatedRoute
  ) {
  }
}
