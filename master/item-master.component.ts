import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-item',
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule],
    templateUrl: '../master/item-master.component.html',
    providers:[]
  })
  export class ItemMaster {

    HideLoginPage: boolean = true;
    
    constructor(private route: ActivatedRoute, private router: Router){
      this.route.url.subscribe(() => {
        if(!this.router.url.includes("/login") && !this.router.url.includes("")){
          this.HideLoginPage = true;
        }
        else{
          this.HideLoginPage = false;
        }
      });
    }
  }
