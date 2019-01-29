import { TestData } from "./test-data";

export interface TestReportData {
        reportId:number;
        profileName:string;
        customerName:string;
        gender:string;
        location:String;
        testList:TestData[];        
}
