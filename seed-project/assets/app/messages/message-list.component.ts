import { OnInit } from '@angular/core/core';
import{Component, Input,Output, EventEmitter}  from "@angular/core";
import{Message}   from "./message.model";
import{MessageService}   from "./message.service";


@Component({
   selector : 'app-message',
   templateUrl: './message.component.html',
      styles: [`
           .author{
             display : inline-block;             
             font-style:italic;
             font-size:12px;
             width:80%;
           }
           .config{
               display: inline-block;
               text-align:right;
               font-size:12px;
               width:19%
           }
    `],
   

})
export class MessageListComponent implements OnInit{

   constructor(private messageService : MessageService){}
    @Output() editClicked = new EventEmitter<string>();
  
    messages : Message [];

        ngOnInit(){
            this.messages = this.messageService.getMessages();
        }
     
}