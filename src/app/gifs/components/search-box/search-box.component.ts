import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar: </h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs.."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >`

})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  // searchTag(newTag: string) {
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTags(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
