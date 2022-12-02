/**
 * Xero AppStore API
 * These endpoints are for Xero Partners to interact with the App Store Billing platform
 *
 * The version of the OpenAPI document: 2.33.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');
import fs = require('fs');

/* tslint:disable:no-unused-locals */
import { CreateUsageRecord } from '../model/appstore/createUsageRecord';
import { ProblemDetails } from '../model/appstore/problemDetails';
import { Subscription } from '../model/appstore/subscription';
import { UpdateUsageRecord } from '../model/appstore/updateUsageRecord';
import { UsageRecord } from '../model/appstore/usageRecord';
import { UsageRecordsList } from '../model/appstore/usageRecordsList';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/appstore/models';
import { OAuth } from '../model/appstore/models';

let defaultBasePath = 'https://api.xero.com/appstore/2.0';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AppStoreApiApiKeys {
}

export class AppStoreApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {'user-agent': 'xero-node-4.31.0'};
    protected _useQuerystring : boolean = false;
    protected binaryHeaders : any = {};

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AppStoreApiApiKeys, value: string) {
        (this.authentications as any)[AppStoreApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @summary Retrieves a subscription for a given subscriptionId
     * @param subscriptionId Unique identifier for Subscription object
     */     
    public async getSubscription (subscriptionId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Subscription;  }> {
        const localVarPath = this.basePath + '/subscriptions/{subscriptionId}'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling getSubscription.');
        }


        (<any>Object).assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Subscription;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Subscription");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets all usage records related to the subscription
     * @param subscriptionId Unique identifier for Subscription object
     */     
    public async getUsageRecords (subscriptionId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UsageRecordsList;  }> {
        const localVarPath = this.basePath + '/subscriptions/{subscriptionId}/usage-records'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling getUsageRecords.');
        }


        (<any>Object).assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: UsageRecordsList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UsageRecordsList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Send metered usage belonging to this subscription and subscription item
     * @param subscriptionId Unique identifier for Subscription object
     * @param subscriptionItemId The unique identifier of the subscriptionItem
     * @param createUsageRecord Contains the quantity for the usage record to create
     */     
    public async postUsageRecords (subscriptionId: string, subscriptionItemId: string, createUsageRecord: CreateUsageRecord, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UsageRecord;  }> {
        const localVarPath = this.basePath + '/subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
            .replace('{' + 'subscriptionItemId' + '}', encodeURIComponent(String(subscriptionItemId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling postUsageRecords.');
        }

        // verify required parameter 'subscriptionItemId' is not null or undefined
        if (subscriptionItemId === null || subscriptionItemId === undefined) {
            throw new Error('Required parameter subscriptionItemId was null or undefined when calling postUsageRecords.');
        }

        // verify required parameter 'createUsageRecord' is not null or undefined
        if (createUsageRecord === null || createUsageRecord === undefined) {
            throw new Error('Required parameter createUsageRecord was null or undefined when calling postUsageRecords.');
        }


        (<any>Object).assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createUsageRecord, "CreateUsageRecord")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: UsageRecord;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UsageRecord");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Update and existing metered usage belonging to this subscription and subscription item
     * @param subscriptionId Unique identifier for Subscription object
     * @param subscriptionItemId The unique identifier of the subscriptionItem
     * @param usageRecordId The unique identifier of the usage record
     * @param updateUsageRecord Contains the quantity for the usage record to update
     */     
    public async putUsageRecords (subscriptionId: string, subscriptionItemId: string, usageRecordId: string, updateUsageRecord: UpdateUsageRecord, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UsageRecord;  }> {
        const localVarPath = this.basePath + '/subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records/{usageRecordId}'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
            .replace('{' + 'subscriptionItemId' + '}', encodeURIComponent(String(subscriptionItemId)))
            .replace('{' + 'usageRecordId' + '}', encodeURIComponent(String(usageRecordId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling putUsageRecords.');
        }

        // verify required parameter 'subscriptionItemId' is not null or undefined
        if (subscriptionItemId === null || subscriptionItemId === undefined) {
            throw new Error('Required parameter subscriptionItemId was null or undefined when calling putUsageRecords.');
        }

        // verify required parameter 'usageRecordId' is not null or undefined
        if (usageRecordId === null || usageRecordId === undefined) {
            throw new Error('Required parameter usageRecordId was null or undefined when calling putUsageRecords.');
        }

        // verify required parameter 'updateUsageRecord' is not null or undefined
        if (updateUsageRecord === null || updateUsageRecord === undefined) {
            throw new Error('Required parameter updateUsageRecord was null or undefined when calling putUsageRecords.');
        }


        (<any>Object).assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateUsageRecord, "UpdateUsageRecord")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: UsageRecord;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UsageRecord");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
