import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Configuration } from '../../app/app.constants';


/*
  Generated class for the VideosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

class SearchResult {

  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {

    this.videoId = obj && obj.id || null; 
    this.title = obj && obj.title || null; 
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.videoId}`;
  }

}

@Injectable()
export class VideosProvider {

  private apiKey: string;
  private apiUrl: string;

  constructor(public http: Http, private configuration: Configuration) {
    
    this.apiKey = this.configuration.YOUTUBE_API_KEY;
    this.apiUrl = this.configuration.YOUTUBE_API_URL;
  }


  getVideosBySkill(skill: string): Observable<SearchResult[]> {

	  let params: string = [
      `part=snippet`,
      `order=relevance`,
      `q=${skill}`,
      `type=video`,
      `videoCaption=any`,
      `videoDefinition=standard`,
      `videoDimension=2d`,
      `videoDuration=medium`,
      `videoType=any`,
      `maxResults=40`,
      `key=${this.apiKey}`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          console.log(item)
          return new SearchResult({
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }

}
