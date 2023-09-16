export interface dataCategory {
    status:  boolean;
    data:    category[];
    message: string;
}

export interface category {
    cat_id:          string;
    cat_name:        string;
    cat_description: string;
    cat_situacion:   string;
    cat_image:       string;
}
