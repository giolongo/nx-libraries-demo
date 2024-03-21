import {Component} from '@angular/core';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NxDraggableCarouselComponent} from "@giolongo/nx-draggable-carousel";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-nx-draggable-carousel-use',
  standalone: true,
  imports: [
    NxDraggableCarouselComponent,
    NgbNavModule,
    FormsModule
  ],
  templateUrl: './nx-draggable-carousel-use.component.html',
  styleUrl: './nx-draggable-carousel-use.component.scss'
})
export class NxDraggableCarouselUseComponent {
  public active = 'example';
  public automoveDebounce = 0;

  public elements = [
    '<div class="card text-white bg-info mb-3" style="max-width: 18rem;">\n' +
    '  <div class="card-header">Header</div>\n' +
    '  <div class="card-body">\n' +
    '    <h5 class="card-title">Info card title</h5>\n' +
    '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
    '  </div>\n' +
    '</div>',
    '<div class="card mx-2 text-white bg-primary mb-3" style="max-width: 18rem;">\n' +
    '  <div class="card-header">Header</div>\n' +
    '  <div class="card-body">\n' +
    '    <h5 class="card-title">Primary card title</h5>\n' +
    '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
    '  </div>\n' +
    '</div>',
    '<div class="card mx-2 text-white bg-danger mb-3" style="max-width: 18rem;">\n' +
    '  <div class="card-header">Header</div>\n' +
    '  <div class="card-body">\n' +
    '    <h5 class="card-title">Danger card title</h5>\n' +
    '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
    '  </div>\n' +
    '</div>'
  ];

  public inhtml = `<nx-draggable-carousel
                [debounceAutoMove]="automoveDebounce"
                [maxHeight]="'100%'"
                [maxWidth]="'100%'"
                [elementHeight]="'100%'"
                [elementWidth]="'50%'"
                [elements]="elements"
              ></nx-draggable-carousel>`;
  public install = `npm i @giolongo/nx-draggable-carousel`;
  public ints = `@Component({
  selector: 'app-nx-draggable-carousel-use',
  standalone: true,
  imports: [
    NxDraggableCarouselComponent,
    NgbNavModule,
    FormsModule
  ],
  templateUrl: './nx-draggable-carousel-use.component.html',
  styleUrl: './nx-draggable-carousel-use.component.scss'
})
export class NxDraggableCarouselUseComponent {
  public automoveDebounce = 0;

  public elements = [
    '<div class="card text-white bg-info mb-3" style="max-width: 18rem;">\\n' +
    '  <div class="card-header">Header</div>\\n' +
    '  <div class="card-body">\\n' +
    '    <h5 class="card-title">Info card title</h5>\\n' +
    '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\\'s content.</p>\\n' +
    '  </div>\\n' +
    '</div>',
    '<div class="card mx-2 text-white bg-primary mb-3" style="max-width: 18rem;">\\n' +
    '  <div class="card-header">Header</div>\\n' +
    '  <div class="card-body">\\n' +
    '    <h5 class="card-title">Primary card title</h5>\\n' +
    '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\\'s content.</p>\\n' +
    '  </div>\\n' +
    '</div>',
    '<div class="card mx-2 text-white bg-danger mb-3" style="max-width: 18rem;">\\n' +
    '  <div class="card-header">Header</div>\\n' +
    '  <div class="card-body">\\n' +
    '    <h5 class="card-title">Danger card title</h5>\\n' +
    '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\\'s content.</p>\\n' +
    '  </div>\\n' +
    '</div>'
  ];
                `;
}
