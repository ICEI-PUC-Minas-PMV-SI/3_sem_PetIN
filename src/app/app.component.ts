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
    // for direct comparison
    map(params => console.log(params))
    // or for a network request result
);
  constructor(
    private contexts: ChildrenOutletContexts,
    private actRoute: ActivatedRoute
  ) {
  }
}
