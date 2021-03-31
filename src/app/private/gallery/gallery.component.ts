import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  user: string;
  constructor() {}

  ngOnInit() {
    this.user = localStorage.getItem("username");
    console.log(this.user);
  }
  logout() {
    localStorage.clear();
  }
}
