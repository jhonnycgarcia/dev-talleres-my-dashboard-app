import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-options-button-sheet',
  standalone: true,
  imports: [ MatListModule ],
  templateUrl: './options-button-sheet.component.html'
})
export class OptionsButtonSheetComponent {

  private _bottomSheetRef = inject<MatBottomSheetRef<OptionsButtonSheetComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
