import { TestData } from "./test-data";

export interface TestReportData {
        testProfileName:string;
        name:string;
        gender:string;
        issuedData:string;
        location:String;
        testResult:TestData[];        
}
