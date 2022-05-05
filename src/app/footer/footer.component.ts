import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  varieties(){
    this.router.navigate(['/varieties']);
  }
  preparation(){
    this.router.navigate(['/preparation']);
  }
  pricing(){
    this.router.navigate(['/pricing']);
  }
  home(){
    this.router.navigate(['/home']);
  }

}
