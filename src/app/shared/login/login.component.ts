import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}
  uname: string;
  ngOnInit() {}
  usersDB = [
    { userid: "abc@media.com", password: "abc123", username: "tom" },
    { userid: "def@media.com", password: "def123", username: "dick" },
  ];

  Register(regForm: any) {
    if (regForm.invalid) {
      return;
    }

    for (let i = 0; i < this.usersDB.length; i++) {
      if (
        this.usersDB[i].userid == regForm.controls.userid.value &&
        this.usersDB[i].password == regForm.controls.password.value
      ) {
        console.log("match");

        this._router.navigate(["gallery"]);
        this.uname = this.usersDB[i].username;
        localStorage.setItem("username", this.uname);
      }
    }
    this.uname = localStorage.getItem("username");
    console.log(this.uname);

    regForm.resetForm();
  }
}
