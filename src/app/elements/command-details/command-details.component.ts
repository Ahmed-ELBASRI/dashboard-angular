import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandDetailsService } from './command-details.service';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.css']
})
export class CommandDetailsComponent {
  lignesCommande: any = [];

  constructor(
    private route: ActivatedRoute,
    private commandDetailsService: CommandDetailsService // Utiliser CommandDetailsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.getLignesByCommandId(id);
  }

  getLignesByCommandId(commandId: number): void {
    this.commandDetailsService.getLignesByCommandId(commandId).subscribe(
      (data: any[]) => {
        this.lignesCommande = data;
        console.log(this.lignesCommande);
      },
      (error: any[]) => {
        console.error('There was an error while fetching the ligne commandes!', error);
      }
    );
  }
}
