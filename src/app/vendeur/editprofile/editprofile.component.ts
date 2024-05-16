import {Component, OnInit} from '@angular/core';
import {ProfileServiceService} from "../profile-service.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent  implements OnInit {

  constructor(private profileService: ProfileServiceService , private router: Router) {
  }

  password: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {
    this.getDataWithTokenAuthorization();
  }

  getDataWithTokenAuthorization() {
    const authToken: any = localStorage.getItem('token');
    console.log("hello");
    console.log(authToken);
    this.profileService.getProfileData(authToken).subscribe(
      (response: any) => {
        console.log(response);
        //add id in the local storage
        localStorage.setItem('id',response);
        this.getVendeurData(response, authToken);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  profile : any = {};

  getVendeurData(id: number, token: string) {
    this.profileService.getVendeurData(id, token).subscribe(
      (response: any) => {
        this.profile = response;
        console.log(this.profile);
        console.log("getVendeurData");
      },
      (error) => {
        console.error('Error fetching profile data', error);
      }
    );
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const authToken: any = localStorage.getItem('token');
      const id =localStorage.getItem('id');
      const userId =Number(id);
      this.profileService.updateVendeurData(userId ,this.profile, authToken ).subscribe(
        (response: any) => {
          console.log('Profile updated successfully', response);
          this.router.navigate(['']);  // Redirect to the home component
        },
        (error) => {
          console.error('Error updating profile', error);
        }
      );
    }
  }

  onSubmitPassword(form : NgForm) {
    if (form.valid) {
      const authToken = localStorage.getItem('token');
      const userId = localStorage.getItem('id');
      if (authToken && userId) {
        const id = Number(userId);
        const updatePasswordDto = {
          password: this.password,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        };

        this.profileService.updatePassword(id, updatePasswordDto, authToken).subscribe(
          response => {
            console.log('Password updated successfully', response);
            this.router.navigate(['']);
          },
          error => {
            console.error('Error updating password', error);
          }
        );
      } else {
        console.error('Token or user ID not found in local storage');
      }
    }
  }

}
