import { Component, OnInit } from '@angular/core';
import { CommandService } from '../commands-service.service';
@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit{
  commands:  any = [];
  constructor(private commandsService: CommandService){}
  ngOnInit(): void{
    this.loadCommands();
  }
  loadCommands(): void{
    let idVendeur =localStorage.getItem('id');
    //get store name
    this.commandsService.getStoreName(Number(idVendeur)).subscribe(
      Response => {
        console.log(Response);
        this.commandsService.getCommands(Response).subscribe(
          (response: any) => {
            this.commands = response;
            console.log(response);
            console.log("getCommands");
          },
          (error) => {
            console.error('Error fetching profile data', error);
          }
        );

      },
      Error => {
        console.log(Error);
      }
    );
    //get command from that name store

  }
}
