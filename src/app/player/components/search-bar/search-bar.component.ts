import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  onQueryChange(value: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(
      () => {
        this.searchValue.emit(value);
      }, 350);
  }
}
