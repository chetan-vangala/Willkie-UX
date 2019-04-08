import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'hammerjs';

import { MatterService } from '../../services/matter.service';

@Component({
  selector: 'app-matter-info',
  templateUrl: './matter-info.component.html',
  styleUrls: ['./matter-info.component.scss']
})
export class MatterInfoComponent implements OnInit {

  private routeSubscription: any;
  private matterInfo: any;
  constructor(private matterService: MatterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      let matterId = params.matterId;
      this.matterInfo = this.matterService.getMatterSpecificInfo(matterId);
    });
  }

  linkToHome(){
    this.router.navigateByUrl('/');
  }

}
