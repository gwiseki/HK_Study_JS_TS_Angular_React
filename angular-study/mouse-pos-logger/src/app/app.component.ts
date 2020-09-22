import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!'; 

  constructor(private logger: MySpecialLoggerService) {
    this.logger = new MySpecialLoggerService(LogLevel.INFO);
    // this.testLoggerLevel();
  }
/*
  testLoggerLevel(){
    console.log("default- info log level");
    this.logger.debug("d");
    this.logger.info("i");
    this.logger.warn("w");
    this.logger.error("e");

    this.logger.logLevel = LogLevel.DEBUG;
    console.log("debug log level");
    this.logger.debug("d");
    this.logger.info("i");
    this.logger.warn("w");
    this.logger.error("e");


  }*/
}


