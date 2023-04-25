import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { GlobalConstants } from 'src/app/common/global-constants';
import { flatMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from './blog.model';
import { Comment } from './comment.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any[] = [];
  comments: any[] = [];
  imageURL = GlobalConstants.imageURL;

  constructor(private http: HttpClient, private router: Router) { }

  readBlogs(service: any) {
    if (localStorage.getItem('isLoggedIn') == 'false') {
      alert('Please log-in to book to a service.')
    } else {
      this.router.navigate(['/blogs'])  ;
    }
  }

  ngOnInit(): void {
    this.http.get<any>(GlobalConstants.apiURL + 'getAllBlogs')
      .subscribe(data => {
        console.log(data);
        this.posts = data;
      }, err => {
        console.log(err);
      });

    // Add this line to call the getAllComments() method
    this.getAllComments();
  }

  getAllComments() {
    this.http.get<any>(GlobalConstants.apiURL + 'getAllComments')
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      }, err => {
        console.log(err);
      });
  }

  goToBlogDetails(id: number): void {
    this.router.navigate(['/blog', id]);
  }

}
