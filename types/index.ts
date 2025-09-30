export interface User {
  id: string;
  skinType: string;
  concerns: string[];
  preferences: { vegan: boolean };
}

export interface SkinAnalysis {
  user_id: string;
  analysis_date: string;
  results: any;
  image_url: string;
}