/**
 * Adyen Recurring API
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.  For more information, refer to our [Tokenization documentation](https://docs.adyen.com/online-payments/tokenization). ## Authentication To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/development-resources/api-credentials). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Recurring/v49/disable ```
 *
 * The version of the OpenAPI document: 49
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class Recurring {
    /**
    * The type of recurring contract to be used. Possible values: * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid). * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp). * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not. * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).
    */
    'contract'?: Recurring.ContractEnum;
    /**
    * A descriptive name for this detail.
    */
    'recurringDetailName'?: string;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: Date;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * The name of the token service.
    */
    'tokenService'?: Recurring.TokenServiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contract",
            "baseName": "contract",
            "type": "Recurring.ContractEnum"
        },
        {
            "name": "recurringDetailName",
            "baseName": "recurringDetailName",
            "type": "string"
        },
        {
            "name": "recurringExpiry",
            "baseName": "recurringExpiry",
            "type": "Date"
        },
        {
            "name": "recurringFrequency",
            "baseName": "recurringFrequency",
            "type": "string"
        },
        {
            "name": "tokenService",
            "baseName": "tokenService",
            "type": "Recurring.TokenServiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return Recurring.attributeTypeMap;
    }
}

export namespace Recurring {
    export enum ContractEnum {
        Oneclick = <any> 'ONECLICK',
        Recurring = <any> 'RECURRING',
        Payout = <any> 'PAYOUT'
    }
    export enum TokenServiceEnum {
        Visatokenservice = <any> 'VISATOKENSERVICE',
        Mctokenservice = <any> 'MCTOKENSERVICE'
    }
}
