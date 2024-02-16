import {Component, EventEmitter} from '@angular/core';
import {NxTreeGleComponent} from "@giolongo/nx-tree";
import {JsonPipe, NgIf} from "@angular/common";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nx-tree-gle-use',
  standalone: true,
  imports: [
    NxTreeGleComponent,
    JsonPipe,
    NgbNavModule,
    NgIf
  ],
  templateUrl: './nx-tree-gle-use.component.html',
  styleUrl: './nx-tree-gle-use.component.scss'
})
export class NxTreeGleUseComponent {
  public active = 'example';
  public openAll = new EventEmitter<void>();
  public closeAll = new EventEmitter<void>();
  public changeItemStatus: any;
  public openItemList: unknown[] = [];
  public otherFunction = {
    glossary: {
      icon: "<i class='bi bi-bell'></i>",
      click: () => console.log('Clicked on Glossary')
    }
  }

  showOpenListItem(): void {
    window.alert(this.openItemList.join("\n"));
  }
  public element = {
    "glossary": {
      "title": "example glossary",
      "GlossDiv": {
        "title": "S",
        "GlossList": {
          "GlossEntry": {
            "ID": "SGML",
            "SortAs": "SGML",
            "GlossTerm": "Standard Generalized Markup Language",
            "Acronym": "SGML",
            "Abbrev": "ISO 8879:1986",
            "GlossDef": {
              "para": "A meta-markup language, used to create markup languages such as DocBook.",
              "GlossSeeAlso": ["GML", "XML"]
            },
            "GlossSee": "markup"
          }
        }
      }
    }
  }

  public inhtml = `<nx-tree-gle [element]="element"
                        [openAll]="openAll"
                        [closeAll]="closeAll"
                        [otherFunction]="otherFunction"
                        (changeItemStatus)="changeItemStatus = $event"
                        (listOpenedItem)="openItemList = $event"
                        openDefaultIcon="<i class='bi bi-chevron-down'></i>"
                        closeDefaultIcon="<i class='bi bi-chevron-right'></i>"
           ></nx-tree-gle>`
  public install = `npm install nx-tree-gle`

  public ints = `
@Component({
  selector: 'app-nx-tree-gle-use',
  standalone: true,
  imports: [
    NxTreeGleComponent
  ],
  templateUrl: './nx-tree-gle-use.component.html',
  styleUrl: './nx-tree-gle-use.component.scss'
})
export class NxTreeGleUseComponent {
  public openAll = new EventEmitter<void>();
  public closeAll = new EventEmitter<void>();
  public changeItemStatus: any;
  public openItemList: unknown[] = [];
  public otherFunction = {
    glossary: {
      icon: "<i class='bi bi-bell'></i>",
      click: () => console.log('Clicked on Glossary')
    }
  }
  public element = {
    "glossary": {
      "title": "example glossary",
      "GlossDiv": {
        "title": "S",
        "GlossList": {
          "GlossEntry": {
            "ID": "SGML",
            "SortAs": "SGML",
            "GlossTerm": "Standard Generalized Markup Language",
            "Acronym": "SGML",
            "Abbrev": "ISO 8879:1986",
            "GlossDef": {
              "para": "A meta-markup language, used to create markup languages such as DocBook.",
              "GlossSeeAlso": ["GML", "XML"]
            },
            "GlossSee": "markup"
          }
        }
      }
    }
  }`
}
