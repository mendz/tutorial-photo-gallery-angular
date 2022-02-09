import { Injectable } from '@angular/core';
import { Chooser, ChooserResult } from '@awesome-cordova-plugins/chooser/ngx';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private chooser: Chooser) { }

  public async takeFile() {
    const file: ChooserResult = await this.chooser.getFile(
      'application/pdf'
    );
    console.log({ file });

  }
}
