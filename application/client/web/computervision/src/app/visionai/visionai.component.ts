import { Component, OnInit, ViewChild } from '@angular/core';
import { VisionaiService } from './visionai.service';





@Component({
  selector: 'app-visionai',
  templateUrl: './visionai.component.html',
  styleUrls: ['./visionai.component.scss'],
})

export class VisionaiComponent implements OnInit {
    public visionai:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }




    constructor (
        private visionaiService: VisionaiService,
    ) { }

    ngOnInit() {
        this.visionai.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}