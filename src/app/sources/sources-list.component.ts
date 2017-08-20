import { SourcesService } from './../services/sources.service';
import { Source } from './source';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.css']
})
export class SourcesListComponent implements OnInit {
  sources: Source[];

  constructor(private sourcesService: SourcesService) { }

  ngOnInit() {
    this.sources = this.sourcesService.getSources();
  }

}
