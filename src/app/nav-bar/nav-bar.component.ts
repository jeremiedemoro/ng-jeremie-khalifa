import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { NavBarVisibilityService } from "../services/nav-bar-visibility.service";
import { TOPNAV } from "../mock-info/nav-bar";
import { SIDENAV } from "../mock-info/nav-bar";
import { ThemeService } from "../theme/theme.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  host: {
    "(window:click)": "closeFromOutside()",
  },
})
export class NavBarComponent implements OnInit {
  topNavLinks = TOPNAV;
  sideNavLinks = SIDENAV;
  sideNavToggle: boolean;
  themeBtnToggle: boolean;
  setDark;

  constructor(
    private router: Router,
    private navBarVisibilityService: NavBarVisibilityService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {}

  statusSideNav($event) {
    $event.stopPropagation();
    this.sideNavToggle = !this.sideNavToggle;
    if (this.sideNavToggle) {
      this.navBarVisibilityService.hideOnSideNav = true;
    } else {
      this.navBarVisibilityService.hideOnSideNav = false;
    }
  }

  closeFromOutside() {
    this.navBarVisibilityService.hideOnSideNav = false;
    this.sideNavToggle = false;
  }

  goTo(url: string, section) {
    if (this.sideNavToggle) {
      this.sideNavToggle = false;
      this.navBarVisibilityService.hideOnSideNav = false;
    }
    this.router.navigate(["/" + url]);
  }

  statusTheme() {
    this.themeService.toggleTheme();
  }
}
