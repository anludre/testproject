import { AnalysisJob, Report, UploadData } from "../types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const api = {
  async uploadForAnalysis(data: UploadData): Promise<AnalysisJob> {
    const formData = new FormData();

    if (data.leftHand) {
      formData.append("leftHand", data.leftHand);
    }
    if (data.rightHand) {
      formData.append("rightHand", data.rightHand);
    }
    formData.append("mode", data.mode);

    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new ApiError(response.status, "Failed to upload images");
    }

    return response.json();
  },

  async getReport(jobId: string): Promise<Report> {
    const response = await fetch(`${API_BASE_URL}/report/${jobId}`);

    if (!response.ok) {
      throw new ApiError(response.status, "Failed to get report");
    }

    return response.json();
  },

  async healthCheck(): Promise<{ status: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
      throw new ApiError(response.status, "Health check failed");
    }

    return response.json();
  },
};
