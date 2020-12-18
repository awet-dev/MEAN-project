import { Component } from '@angular/core';
import { User} from './user';
import { AddUserService} from './add-user.service';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-data';
  jobs = ['Developer', 'Manager', 'Teacher'];
  users = [];
  private addUserService = AddUserService;
// @ts-ignore
  userModule = new User(null, null, null);


  constructor(addUserService: AddUserService) {
    // @ts-ignore
    this.addUserService = addUserService;
  }

  ngOnInit(): void {
        console.log('ng_component_template');
  }

  public submit(): void {
    // @ts-ignore
    const observable = this.addUserService.addUser(this.userModule);
    const myObservable = {
      next: (x: string) => {
        // @ts-ignore
        this.users = x;
        console.log(this.users)
      },
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('it is add')
    };
    observable.subscribe(myObservable);
  }

  public display(): any {
    // @ts-ignore
    const observable = this.addUserService.getUsers(this.userModule);
    const myObservable = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('it is add')
    };
    observable.subscribe(myObservable)
  }
}
