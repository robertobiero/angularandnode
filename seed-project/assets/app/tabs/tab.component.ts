import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {Tabs} from './tabs.component'

@Component({
  selector: 'tab',
  template: `
     <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  @Input() tabTitle;

  constructor(tabs: Tabs){
    tabs.addTab(this);

  }
}