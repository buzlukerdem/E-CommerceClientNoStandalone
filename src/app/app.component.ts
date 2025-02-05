import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
// declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-CommerceNoStandalone';
  constructor(private customToastrService: CustomToastrService) {
    customToastrService.message("Kayıt Başarılı", "SUCCESS", ToastrMessageType.success,{
      messageType: ToastrMessageType.success,
      position: ToastrPosition.TopCenter
    })
  }
}



