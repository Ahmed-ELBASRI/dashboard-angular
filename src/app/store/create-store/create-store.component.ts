import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { StoreResponseModel } from 'src/app/models/response/store-response-model';
import { StoreRequestModel } from 'src/app/models/request/store-request-model';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  storeForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private storeService: StoreService) {
    this.storeForm = this.fb.group({
      id_store: [0, Validators.required],
      dateCreation: [new Date(), Validators.required],
      nom_store: ['', Validators.required],
      description: ['', Validators.required],
      urlstore: ['', Validators.required],
      UrlLogo: ['', Validators.required],
      VendeurId: [0, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile !== null){
        this.storeForm.patchValue({
          UrlLogo: this.selectedFile.name
        });
      }
    }
  }

  onSubmit() {
    if (this.storeForm.valid) {
      const storeData = this.storeForm.value;
      if (this.selectedFile !== null) {
        const storeRequest: StoreRequestModel = {
          // dateCreation: storeData.dateCreation,
          nom_store: storeData.nom_store,
          description: storeData.description,
          urlstore: storeData.urlstore,
          UrlLogo: storeData.UrlLogo,
          VendeurId: 1
        };
        console.log(storeRequest);
        this.storeService.createStore(storeRequest, this.selectedFile!).subscribe(
          response => {
            console.log('Store created successfully', response);
          },
          error => {
            console.error('Error creating store', error);
          }
        );
      }
    }
  }
}
