export interface dataProduct {
    status:  boolean;
    data:    product[];
    message: string;
}

export interface product {
    pro_id:             string;
    pro_category:       string;
    pro_subcategory:    string;
    pro_name:           string;
    pro_description:    string;
    pro_stock:          string;
    pro_price:          string;
    pro_situation:      string;
    cat_id:             string;
    cat_name:           string;
    cat_description:    string;
    cat_situacion:      string;
    subcat_id:          string;
    subcat_category:    string;
    subcat_name:        string;
    subcat_description: string;
    subcat_situation:   string;
    pro_image:          string;
}
