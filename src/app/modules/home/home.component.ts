import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/modules/header/header.component";

import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/modules/footer/footer.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent]
})
export class HomeComponent {

}
