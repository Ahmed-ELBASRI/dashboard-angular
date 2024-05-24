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
    this.commandsService.getCommands().subscribe(
    (response: any) => {
      this.commands = response;
      console.log(response);
      console.log("getCommands");
    },
    (error) => {
      console.error('Error fetching profile data', error);
    }
  );
  }
}
