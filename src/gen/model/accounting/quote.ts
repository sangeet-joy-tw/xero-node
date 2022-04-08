import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineItem } from '././lineItem';
import { QuoteLineAmountTypes } from '././quoteLineAmountTypes';
import { QuoteStatusCodes } from '././quoteStatusCodes';
import { ValidationError } from '././validationError';

export class Quote {
    /**
    * QuoteID GUID is automatically generated and is returned after create or GET.
    */
    'quoteID'?: string;
    /**
    * Unique alpha numeric code identifying a quote (Max Length = 255)
    */
    'quoteNumber'?: string;
    /**
    * Additional reference number
    */
    'reference'?: string;
    /**
    * Terms of the quote
    */
    'terms'?: string;
    'contact'?: Contact;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    /**
    * Date quote was issued – YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation
    */
    'date'?: string;
    /**
    * Date the quote was issued (YYYY-MM-DD)
    */
    'dateString'?: string;
    /**
    * Date the quote expires – YYYY-MM-DD.
    */
    'expiryDate'?: string;
    /**
    * Date the quote expires – YYYY-MM-DD.
    */
    'expiryDateString'?: string;
    'status'?: QuoteStatusCodes;
    'currencyCode'?: CurrencyCode;
    /**
    * The currency rate for a multicurrency quote
    */
    'currencyRate'?: number;
    /**
    * Total of quote excluding taxes.
    */
    'subTotal'?: number;
    /**
    * Total tax on quote
    */
    'totalTax'?: number;
    /**
    * Total of Quote tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts
    */
    'total'?: number;
    /**
    * Total of discounts applied on the quote line items
    */
    'totalDiscount'?: number;
    /**
    * Title text for the quote
    */
    'title'?: string;
    /**
    * Summary text for the quote
    */
    'summary'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    'lineAmountTypes'?: QuoteLineAmountTypes;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "quoteID",
            "baseName": "QuoteID",
            "type": "string"
        },
        {
            "name": "quoteNumber",
            "baseName": "QuoteNumber",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "Reference",
            "type": "string"
        },
        {
            "name": "terms",
            "baseName": "Terms",
            "type": "string"
        },
        {
            "name": "contact",
            "baseName": "Contact",
            "type": "Contact"
        },
        {
            "name": "lineItems",
            "baseName": "LineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "dateString",
            "baseName": "DateString",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "ExpiryDate",
            "type": "string"
        },
        {
            "name": "expiryDateString",
            "baseName": "ExpiryDateString",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "QuoteStatusCodes"
        },
        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "CurrencyCode"
        },
        {
            "name": "currencyRate",
            "baseName": "CurrencyRate",
            "type": "number"
        },
        {
            "name": "subTotal",
            "baseName": "SubTotal",
            "type": "number"
        },
        {
            "name": "totalTax",
            "baseName": "TotalTax",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "Total",
            "type": "number"
        },
        {
            "name": "totalDiscount",
            "baseName": "TotalDiscount",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        },
        {
            "name": "summary",
            "baseName": "Summary",
            "type": "string"
        },
        {
            "name": "brandingThemeID",
            "baseName": "BrandingThemeID",
            "type": "string"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "lineAmountTypes",
            "baseName": "LineAmountTypes",
            "type": "QuoteLineAmountTypes"
        },
        {
            "name": "statusAttributeString",
            "baseName": "StatusAttributeString",
            "type": "string"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return Quote.attributeTypeMap;
    }
}

