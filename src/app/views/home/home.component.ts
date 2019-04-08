import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'hammerjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientService } from '../../services/client.service';
import { MatterService } from '../../services/matter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public clientSearchBox: FormControl = new FormControl();
  public clientInfo: any;
  public showClientInfo: boolean = false;

  public matterSearchBox: FormControl = new FormControl();
  public matterInfo: any;
  public showMatterInfo: boolean = false;
  constructor(
      private clientService: ClientService,
      private matterInfoService: MatterService,
      private router: Router) {
    this.clientInfo = this.clientService.getClientBillables();
    this.matterInfo = this.matterInfoService.getMatterInfo();
  }

  ngOnInit() {

  }

  onClientSearchChange(searchValue : string ) {
    if(searchValue.length > 0){
      this.clientInfo = this.clientService.getFilteredClientBillables(searchValue);
    } else{
      this.clientInfo = this.clientService.getClientBillables();
    }
  }

  clientSelectionChange(clientId: any) {
    this.router.navigateByUrl('/clients/' + clientId);
  }
  matterSelectionChange(matterId: number) {
    this.router.navigateByUrl('/matters/' + matterId);
  }

  onMatterSearchChange(searchValue : string ) {
    if(searchValue.length > 0){
      this.matterInfo = this.matterInfoService.getFilteredMatterInfo(searchValue);
    } else{
      this.matterInfo = this.matterInfoService.getMatterInfo();
    }
  }

  toggleGridSelection(clientInfoClicked: boolean){
    if(clientInfoClicked){
      this.showMatterInfo = false;
      this.showClientInfo = true;
    } else {
      this.showClientInfo = false;
      this.showMatterInfo = true;
    }
  }
}
