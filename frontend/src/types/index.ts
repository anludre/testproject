export interface AnalysisJob {
  id: string;
  status: "pending" | "processing" | "completed" | "failed";
}

export interface HandAnalysis {
  majorLines: Record<string, any>;
  minorLines: Record<string, any>;
}

export interface Recommendation {
  domain: "health" | "career" | "personal";
  text: string;
}

export interface Report {
  id: string;
  leftHandAnalysis: HandAnalysis;
  rightHandAnalysis: HandAnalysis;
  recommendations: Recommendation[];
}

export type AnalysisMode = "fast" | "deep";

export interface UploadData {
  leftHand?: File;
  rightHand?: File;
  mode: AnalysisMode;
}
