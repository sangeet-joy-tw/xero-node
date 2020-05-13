/**
 * Bank Feeds API
 * This specifing endpoints Xero Bank feeds API
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CountryCode } from '././countryCode';
import { CurrencyCode } from '././currencyCode';

export class FeedConnection {
    /**
    * GUID used to identify the Account.
    */
    'id'?: string;
    /**
    * This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.
    */
    'accountToken'?: string;
    /**
    * String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.
    */
    'accountNumber'?: string;
    /**
    * The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.
    */
    'accountName'?: string;
    /**
    * Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified.
    */
    'accountId'?: string;
    /**
    * High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards.
    */
    'accountType'?: FeedConnection.AccountTypeEnum;
    'currency'?: CurrencyCode;
    'country'?: CountryCode;
    /**
    * the current status of the feed connection
    */
    'status'?: FeedConnection.StatusEnum;
    'error'?: Error;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "accountToken",
            "baseName": "accountToken",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "accountName",
            "baseName": "accountName",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "FeedConnection.AccountTypeEnum"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CurrencyCode"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "CountryCode"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FeedConnection.StatusEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "Error"
        }    ];

    static getAttributeTypeMap() {
        return FeedConnection.attributeTypeMap;
    }
}

export namespace FeedConnection {
    export enum AccountTypeEnum {
        BANK = <any> 'BANK',
        CREDITCARD = <any> 'CREDITCARD'
    }
    export enum StatusEnum {
        PENDING = <any> 'PENDING',
        REJECTED = <any> 'REJECTED'
    }
}
