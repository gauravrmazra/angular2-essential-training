import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service' 

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;
  
  constructor(private mediaItemService: MediaItemService) {}

  onMediaItemDelete(mediaItem) { 
    this.mediaItemService.delete(mediaItem);
  }

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }
}
