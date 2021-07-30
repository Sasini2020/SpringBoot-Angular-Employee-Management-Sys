import { Component } from '@angular/core';
import { faUserPlus,faBacon, faHome, faUserEdit, faUserTimes, faUserFriends, faClipboardList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Dashboard';

  faUserPlus = faUserPlus;
  faHome = faHome;
  faUserEdit =faUserEdit;
  faUserTimes =faUserTimes;
  faUserFriends = faUserFriends;
  faClipboardList = faClipboardList;
  faBacon = faBacon;
  
}
