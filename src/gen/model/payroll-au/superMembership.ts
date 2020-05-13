/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SuperMembership {
    /**
    * Xero unique identifier for Super membership
    */
    'superMembershipID'?: string;
    /**
    * Xero identifier for super fund
    */
    'superFundID': string;
    /**
    * The memberhsip number assigned to the employee by the super fund.
    */
    'employeeNumber': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "superMembershipID",
            "baseName": "SuperMembershipID",
            "type": "string"
        },
        {
            "name": "superFundID",
            "baseName": "SuperFundID",
            "type": "string"
        },
        {
            "name": "employeeNumber",
            "baseName": "EmployeeNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SuperMembership.attributeTypeMap;
    }
}

