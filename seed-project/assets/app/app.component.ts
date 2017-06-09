import { Component } from '@angular/core';
import{MessageService}   from "./messages/message.service";
import {Message} from "./messages/message.model";


@Component({
    selector: 'my-app',
    providers: [MessageService],
    templateUrl: './app.component.html',
    
 
})
export class AppComponent {  
                                                
    message: Message = new Message('Some message', 'Robert');
}