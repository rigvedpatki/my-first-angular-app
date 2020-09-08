import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No Server was created !"
  serverName: string = 'Test Server'
  serverCreated: boolean = false

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(): void {
    this.serverCreationStatus = `Server was created ! Name is ${this.serverName}`
    this.serverCreated = true
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
