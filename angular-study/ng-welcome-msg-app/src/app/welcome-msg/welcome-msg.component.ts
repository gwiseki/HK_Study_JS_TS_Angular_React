import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  userName= "";
  welcomeMsg = "";
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor(public i18nSupporter: I18nSupportService){  }

  showWelcomeMsg(){
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
    //this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName, 'ko');
  }
  
  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      alert('please enter your name');
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }
}



/*
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class AppComponent implements AfterViewInit {
  userName= "";
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  ngAfterViewInit(){
    const checkTouchedFn = () => {
      if(this.valid) return;
      alert('please enter your name');
    };

    setTimeout(checkTouchedFn, AppComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name){
    this.valid = name.length > 0;
  }

  setName(name) {
    this.userName = name;
  }
}
*/






/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/