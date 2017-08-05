import { Component, OnInit } from '@angular/core';
import { WorkingRecord } from "../core/models/working-record";
import { Http } from "@angular/http";


@Component({
  selector: 'appc-working-records',
  templateUrl: './working-records.component.html',
  styleUrls: ['./working-records.component.scss']
})
export class WorkingRecordsComponent implements OnInit {

    workingRecords: WorkingRecord[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.workingRecords = [];
    }

    clockIn() {
        this.http.post("./api/WorkingRecords/ClockIn",JSON.stringify("")).subscribe(re => this.workingRecords = re.json());
    }
    clockOut() {
        this.http.post("./api/WorkingRecords/ClockOut", JSON.stringify("")).subscribe(re => this.workingRecords = re.json());
    }

}
