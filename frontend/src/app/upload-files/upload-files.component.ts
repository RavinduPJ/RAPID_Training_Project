import { Component } from '@angular/core';
import { FileRestrictions, FileInfo } from "@progress/kendo-angular-upload";

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {

  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint

  myRestrictions: FileRestrictions = {
    allowedExtensions: [".xlsx"],
  };

}
