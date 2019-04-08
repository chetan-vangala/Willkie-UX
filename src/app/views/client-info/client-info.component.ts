import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import 'hammerjs';

import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  private routeSubscription: any;
  private clientName: string;
  private clientBillingInfo: any[];
  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      let clientId = params.clientId;
      this.clientName = this.clientService.getClientName(clientId);
      this.clientBillingInfo = this.clientService.getClientBillingInfo(clientId);
    });
  }

  linkToHome(){
    this.router.navigateByUrl('/');
  }

  public labelContent(e: any): string {
    return '';
  }
}
