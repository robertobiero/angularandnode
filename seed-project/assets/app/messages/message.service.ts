
import{Message} from "./message.model";
import {Http,Response,Headers} from "@angular/http";
import  {Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class MessageService{

   private messages : Message[] = [] ;
   

    constructor(private http : Http){}

   addMessage(message: Message){
    this.messages.push(message);
    const body = JSON.stringify(message);
    console.log(body);
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://localhost:3000/message',body, {headers:headers})
           .map((response:Response) => response.json())
           .catch((error:Response) => Observable.throw(error.json()));
   }

   getMessages(){
       console.log("here in get messages");
       return this.http.get('http://localhost:3000/message')
                 .map((response: Response) =>{

                     const messages = response.json().obj;
                     let transformedMessages : Message[]=[];
                     for(let message of messages){

                         transformedMessages.push(new Message(message.content, 'dummy',message.id,null));
                     }
                     this.messages = transformedMessages;
                     console.log("here in get transofrm"+ transformedMessages);
                     return transformedMessages;
                 })
                 .catch((error:Response) => Observable.throw(error.json()));
        
   }

   deleteMessage(message:Message){

       this.messages.splice(this.messages.indexOf(message),1);
   }
}