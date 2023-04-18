import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/Service/data-share/data-share.service';
import { UserService } from 'src/app/Service/user/user.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{

  accData:any;

  key:any;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  
  constructor(private dataShareService:DataShareService, private userService:UserService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener)
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  ngOnInit()
  {
    // this.dataShareService.subPoint.subscribe((dataIn) => {
    //   console.log("in dashboard",dataIn);
    //   this.accData=dataIn;
    // })    

    

     this.key = localStorage.getItem("loginId");
     

    this.userService.GetAccDetails(this.key).subscribe((userData) => {

      // console.log("dash",userData);
      this.accData = userData;
      this.dataShareService.dataInToUnrelated(this.accData.email)

    })

  }
}  