import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constants';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean = false;
  currentRoute:string = '';
  searchResults: any[] = [];
  showDropdown: boolean = false;
  isDropdownOpen = false;

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;
      }
    });
  }

  searchServices(event: Event) {
    const query = encodeURIComponent((event.target as HTMLInputElement)?.value);
      if (query && query.length >= 3) {
        const searchUrl = `${GlobalConstants.apiURL}services/search?name=${query}`;
        this.http.get(searchUrl).subscribe((data: any) => {
          console.log(data);
          this.searchResults = data;
          if (this.searchResults.length > 0) {
            this.showDropdown = true;
          } else {
            this.showDropdown = false;
          }
        });
      } else {
        this.showDropdown = false;
      }
    }

    selectService(serviceId: number) {
      const serviceUrl = `${GlobalConstants.apiURL}getServiceInfo?serviceId=/${serviceId}`;
      this.router.navigate([serviceUrl]);
    }

    toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
