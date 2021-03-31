import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  user: string;
  constructor() {}

  ngOnInit() {
    this.user = localStorage.getItem("username");
    console.log(this.user);
  }
}
