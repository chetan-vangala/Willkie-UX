import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  linkOnClick(url: string) {
      this.router.navigateByUrl(`${url}`);
  }

}
