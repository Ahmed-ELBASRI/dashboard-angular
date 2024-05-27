import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashboardStore';

  constructor(private authService : AuthService) {


  }

  getAdminId(){
    console.log(localStorage.getItem('token'));
    const authToken: any = localStorage.getItem('token');
    this.authService.getAdminId(authToken).subscribe(
      Response => {
        console.log(Response);
        const idAsString: string = Response.toString();
        console.log(idAsString);  // i need to extract also the roles
        localStorage.setItem('id', idAsString);

      },
      Error => {
        console.log("error is here");
      }
    );


  }

  getRole(){
    console.log("get role");
    console.log(localStorage.getItem('token'));
    const authToken : string |null = localStorage.getItem('token');
    console.log("get role",authToken);
    this.authService.getRole(authToken).subscribe(
      Response => {
        console.log(Response);
        localStorage.setItem('role','admin');

        console.log(Response); // Access the role property directly



        // Assuming the response is an object containing a JSON string in the "role" property
        const responseObject = Response as { role: string }; // Define the structure of the object

        // Parse the JSON string in the "role" property
        const roleObject = JSON.parse(responseObject.role);

        // Access properties of the parsed JSON object
        console.log(roleObject.propertyName);

        // Or directly access properties of the parsed JSON object
        console.log(JSON.parse(responseObject.role).propertyName);


        // const roleObject = JSON.parse(Response.toString()); // Parse the JSON string into an object
       //const role = roleObject.role;
       //console.log(role);
     //   const roleAsString: string = Response.toString();
      //  console.log(roleAsString);  // i need to extract also the roles
       // localStorage.setItem('role', roleAsString);


      },
      Error => {
        //
        localStorage.setItem('role','user');
        //
        console.log("error is here");
        console.log("Error occurred:", Error);


      }
    );




  }


  // get id of the admin and put in the local storage for usage


  getCookieData(): any {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)sharedData\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue ? JSON.parse(cookieValue) : null;
  }
  ngOnInit() {

    //test
    const sharedData = this.getCookieData();
    if (sharedData) {
      console.log('Received data:', sharedData);
      localStorage.setItem('token',sharedData);
      // Use the sharedData in your component
    }

    //
    this.getAdminId();
    this.getRole();
  }

  sharedData: any;
  handleMessageEvent(event: MessageEvent) {
    this.sharedData = event.data;
    console.log('Received data:', this.sharedData);
  }


}
