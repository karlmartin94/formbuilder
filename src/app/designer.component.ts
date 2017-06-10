import {Component} from '@angular/core';
import * as data from './colors.json';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'designer',
    templateUrl: './designer.component.html',
    styleUrls: ['./designer.component.css']
})
export class DesignerComponent {
    private colorSchemes;
    private selectedColor;

    constructor(private sanitizer: DomSanitizer) {
        this.colorSchemes = (<any>data).colorSchemes;
        this.selectedColor = this.colorSchemes[0];
    }

    setSelectedColor(newSelectedColor: any): void{
        this.selectedColor = newSelectedColor;
    }

    setBackgroundColor(event: any, color: String){
        event.target.style.backgroundColor = color;
    }
}

