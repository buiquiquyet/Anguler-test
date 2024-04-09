import { DataService } from './../data/data.service';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestPipe } from '../test.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            TestPipe,
            HttpClientModule,
            ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent   {
  title = 'hello quyết';
  public name  = 'quyết'
  public age  = 18
  public arrUsers: any;
  public arr = [
    {name: 'quyết', age: 18},
    {name: 'hâng', age: 14},
    {name: 'hoang', age: 19},
  ]
  private salary = 20000
  constructor( private http: HttpClient) {}

  // constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchData()
  }
  // ngDoCheck(): void {

  // }
  // ngAfterContentChecked(): void {

  // }
  // fetchData(): void {
  //   this.dataService.fetchData().subscribe(data => {
  //     this.arrUsers = data

  //   })
  // }
  fetchData(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/').subscribe(
      data => {
        this.arrUsers = data;
      },
      error => {
        console.error(error);
      }
    );
  }
  getSalary(): number {
    return this.salary
  }
  public changeName(): void {
    this.name = 'quyết'

  }
}
