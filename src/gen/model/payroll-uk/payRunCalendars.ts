import { Pagination } from '././pagination';
import { PayRunCalendar } from '././payRunCalendar';
import { Problem } from '././problem';

export class PayRunCalendars {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payRunCalendars'?: Array<PayRunCalendar>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "payRunCalendars",
            "baseName": "payRunCalendars",
            "type": "Array<PayRunCalendar>"
        }    ];

    static getAttributeTypeMap() {
        return PayRunCalendars.attributeTypeMap;
    }
}

