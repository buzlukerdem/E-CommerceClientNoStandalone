import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-CommerceNoStandalone';

  constructor() {

  }


  // constructor(private customToastrService: CustomToastrService) {
  //   customToastrService.message("Kayıt Başarılı", "SUCCESS", ToastrMessageType.success,{
  //     messageType: ToastrMessageType.success,
  //     position: ToastrPosition.TopCenter
  //   })
  // }
}

// cors tested jquery
// $.get("https://localhost:7137/api/products", data => {
//   console.log(data);
// });



