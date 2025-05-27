export interface LimeExplanation {
    feature: string;
    weight: number;
    side: string;
}

export interface LimeResult {
    prediction_probabilities: {
        'No PD': number;
        PD: number;
    };
    predicted_class: string;
    explanation: LimeExplanation[];
    raw_feature_values: Record<string, number>;
    sample_index: number;
}

export interface LimeResponse {
    message: string;
    result_id: number;
    lime_result: LimeResult;
}

//#region API types

//#endregion
