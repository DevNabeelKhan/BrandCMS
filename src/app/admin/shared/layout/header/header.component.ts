import { Component, OnInit } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../../auth/auth.service';
import { StorageService } from '../../../../../services/local-storage.service';
import { SignalrService } from '../../../../../services/NotificationSignalR';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports:[NgFor,NgIf,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[SignalrService]
})
export class HeaderComponent implements OnInit {
  User:any;
  EnrollmentId:any;
  ReadCount:any = 0; 
  Notifications:any[]=[];
  StudentEnrollments:any[]=[];
constructor(private store:StorageService,private websocketService:SignalrService,private rouer:Router,private auth: AuthService){
  this.User = store.getItem("User");  
  this.StudentEnrollments = this.User?.studentEnrollment; 
  this.EnrollmentId = parseInt(this.User?.enrollmentId);
 if(this.User?.ReadCount) this.ReadCount = this.User?.ReadCount; 
}
ngOnInit(): void {  
}
ChangeEnrollment($event:any){ 
  this.User.enrollmentId = $event?.target?.value;
  this.store.setItem("User",this.User); 
  window.location.reload();
}
ngOnDestroy() {
 
}
GetToaster(selectedToaster:any){   
  setTimeout(() => {
      this.Notifications.splice(this.Notifications[this.Notifications.findIndex((x:any)=>x.Title == selectedToaster.Title && x.description == selectedToaster.description)],1);
  }, 3600);
}
ReceivedMessage(): void { 
  this.websocketService.messages$.subscribe((x:any)=>{    
    if (x) {  
      this.Notifications.push(x);
      this.GetToaster(x); 
      this.ReadCount = this.ReadCount + 1;
      this.User.ReadCount = this.ReadCount; 
      this.store.setItem("User",this.User); 
    }
  }); 
  }
  closePopup(){
    const button = document.getElementById('closerightpopup');
    button?.click();
  }
  ChangePassword(){ 
    this.rouer.navigate(['/admin/change-password']); 
    this.closePopup();
  }
  Logout() {
    this.auth.logout();
  }
  TargetNotification(){
    if(this.User?.userTypeId == 1)  this.rouer.navigate(['/admin/notification']);
    else if(this.User?.userTypeId == 2) this.rouer.navigate(['/faculty/notification']);
    else if(this.User?.userTypeId == 3) this.rouer.navigate(['/student/notification']); 
    this.closePopup();
  }
  Profile(){
    if(this.User?.userTypeId == 1) this.rouer.navigate(['/admin/profile']);
    else if(this.User?.userTypeId == 2) this.rouer.navigate(['/faculty/profile']);
    else if(this.User?.userTypeId == 3) this.rouer.navigate(['/student/profile']);   
    this.closePopup();
  }
}
