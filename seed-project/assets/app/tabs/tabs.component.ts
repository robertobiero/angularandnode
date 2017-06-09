import { Component } from '@angular/core';
import {Tab} from "../tabs/tab.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MessageService} from "../messages/message.service";

@Component({
  selector: 'tabs',
   templateUrl: './tabs.component.html',
   styles : [`
              nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}
`   ],
providers: [MessageService]
  
})
export class Tabs {

tabs: Tab[] = [];

addTab(tab:Tab) {    
   if (this.tabs.length === 0) {
     
    }
    this.tabs.push(tab);
  }
}