import { ReportTest } from "./report-test";

export interface Report {
    reportId:number;
	profileId:number;
	testResultList:ReportTest[];
}
