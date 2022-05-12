import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {

  @Input() img: string = 'https://via.placeholder.com/50x30';
  @Input() imgWidth: number = 50;
  @Input() alt: string = '';

}
