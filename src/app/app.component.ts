import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC-innerHTML';
  data: {data:{content:string}} = null;
  constructor(private service: DataService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
  }
  getData() {
    this.service.getData().subscribe(res => {
      this.data = res;
      //this.data.data.content = this.data.data.content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace('\r\n','');
      this.cdr.detectChanges();
    });
  }

}

