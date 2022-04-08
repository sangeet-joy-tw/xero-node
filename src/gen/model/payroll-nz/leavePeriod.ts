
export class LeavePeriod {
    /**
    * The Pay Period Start Date (YYYY-MM-DD)
    */
    'periodStartDate'?: string;
    /**
    * The Pay Period End Date (YYYY-MM-DD)
    */
    'periodEndDate'?: string;
    /**
    * The Number of Units for the leave
    */
    'numberOfUnits'?: number;
    /**
    * Period Status
    */
    'periodStatus'?: LeavePeriod.PeriodStatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "periodStartDate",
            "baseName": "periodStartDate",
            "type": "string"
        },
        {
            "name": "periodEndDate",
            "baseName": "periodEndDate",
            "type": "string"
        },
        {
            "name": "numberOfUnits",
            "baseName": "numberOfUnits",
            "type": "number"
        },
        {
            "name": "periodStatus",
            "baseName": "periodStatus",
            "type": "LeavePeriod.PeriodStatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return LeavePeriod.attributeTypeMap;
    }
}

export namespace LeavePeriod {
    export enum PeriodStatusEnum {
        Approved = <any> 'Approved',
        Completed = <any> 'Completed'
    }
}
