/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class AdditionalDataCommon {
    /**
    * Triggers test scenarios that allow to replicate certain communication errors.  Allowed values: * **NO_CONNECTION_AVAILABLE** – There wasn\'t a connection available to service the outgoing communication. This is a transient, retriable error since no messaging could be initiated to an issuing system (or third-party acquiring system). Therefore, the header Transient-Error: true is returned in the response. A subsequent request using the same idempotency key will be processed as if it was the first request. * **IOEXCEPTION_RECEIVED** – Something went wrong during transmission of the message or receiving the response. This is a classified as non-transient because the message could have been received by the issuing party and been acted upon. No transient error header is returned. If using idempotency, the (error) response is stored as the final result for the idempotency key. Subsequent messages with the same idempotency key not be processed beyond returning the stored response.
    */
    'requestedTestErrorResponseCode'?: string;
    /**
    * Flags a card payment request for either pre-authorisation or final authorisation. For more information, refer to [Authorisation types](https://docs.adyen.com/online-payments/adjust-authorisation#authorisation-types).  Allowed values: * **PreAuth** – flags the payment request to be handled as a pre-authorisation. * **FinalAuth** – flags the payment request to be handled as a final authorisation.
    */
    'authorisationType'?: string;
    /**
    * Allows you to determine or override the acquirer account that should be used for the transaction.  If you need to process a payment with an acquirer different from a default one, you can set up a corresponding configuration on the Adyen payments platform. Then you can pass a custom routing flag in a payment request\'s additional data to target a specific acquirer.  To enable this functionality, contact [Support](https://support.adyen.com/hc/en-us/requests/new).
    */
    'customRoutingFlag'?: string;
    /**
    * In case of [asynchronous authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#adjust-authorisation), this field denotes why the additional payment is made.  Possible values:   * **NoShow**: An incremental charge is carried out because of a no-show for a guaranteed reservation.   * **DelayedCharge**: An incremental charge is carried out to process an additional payment after the original services have been rendered and the respective payment has been processed.
    */
    'industryUsage'?: AdditionalDataCommon.IndustryUsageEnum;
    /**
    * Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain. This field is required for token-based transactions where Adyen does not tokenize the card.  Transaction identifier from card schemes, for example, Mastercard Trace ID or the Visa Transaction ID.  Submit the original transaction ID of the contract in your payment request if you are not tokenizing card details with Adyen and are making a merchant-initiated transaction (MIT) for subsequent charges.  Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardOnFile** to ensure that the transaction is classified as MIT.
    */
    'networkTxReference'?: string;
    /**
    * Boolean indicator that can be optionally used for performing debit transactions on combo cards (for example, combo cards in Brazil). This is not mandatory but we recommend that you set this to true if you want to use the `selectedBrand` value to specify how to process the transaction.
    */
    'overwriteBrand'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the city of the actual merchant\'s address. * Format: alpha-numeric. * Maximum length: 13 characters.
    */
    'subMerchantCity'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the three-letter country code of the actual merchant\'s address. * Format: alpha-numeric. * Fixed length: 3 characters.
    */
    'subMerchantCountry'?: string;
    /**
    * This field contains an identifier of the actual merchant when a transaction is submitted via a payment facilitator. The payment facilitator must send in this unique ID.  A unique identifier per submerchant that is required if the transaction is performed by a registered payment facilitator. * Format: alpha-numeric. * Fixed length: 15 characters.
    */
    'subMerchantID'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the name of the actual merchant. * Format: alpha-numeric. * Maximum length: 22 characters.
    */
    'subMerchantName'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the postal code of the actual merchant\'s address. * Format: alpha-numeric. * Maximum length: 10 characters.
    */
    'subMerchantPostalCode'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator, and if applicable to the country. This field must contain the state code of the actual merchant\'s address. * Format: alpha-numeric. * Maximum length: 3 characters.
    */
    'subMerchantState'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the street of the actual merchant\'s address. * Format: alpha-numeric. * Maximum length: 60 characters.
    */
    'subMerchantStreet'?: string;
    /**
    * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the tax ID of the actual merchant. * Format: alpha-numeric. * Fixed length: 11 or 14 characters.
    */
    'subMerchantTaxId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestedTestErrorResponseCode",
            "baseName": "RequestedTestErrorResponseCode",
            "type": "string"
        },
        {
            "name": "authorisationType",
            "baseName": "authorisationType",
            "type": "string"
        },
        {
            "name": "customRoutingFlag",
            "baseName": "customRoutingFlag",
            "type": "string"
        },
        {
            "name": "industryUsage",
            "baseName": "industryUsage",
            "type": "AdditionalDataCommon.IndustryUsageEnum"
        },
        {
            "name": "networkTxReference",
            "baseName": "networkTxReference",
            "type": "string"
        },
        {
            "name": "overwriteBrand",
            "baseName": "overwriteBrand",
            "type": "string"
        },
        {
            "name": "subMerchantCity",
            "baseName": "subMerchantCity",
            "type": "string"
        },
        {
            "name": "subMerchantCountry",
            "baseName": "subMerchantCountry",
            "type": "string"
        },
        {
            "name": "subMerchantID",
            "baseName": "subMerchantID",
            "type": "string"
        },
        {
            "name": "subMerchantName",
            "baseName": "subMerchantName",
            "type": "string"
        },
        {
            "name": "subMerchantPostalCode",
            "baseName": "subMerchantPostalCode",
            "type": "string"
        },
        {
            "name": "subMerchantState",
            "baseName": "subMerchantState",
            "type": "string"
        },
        {
            "name": "subMerchantStreet",
            "baseName": "subMerchantStreet",
            "type": "string"
        },
        {
            "name": "subMerchantTaxId",
            "baseName": "subMerchantTaxId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataCommon.attributeTypeMap;
    }
}

export namespace AdditionalDataCommon {
    export enum IndustryUsageEnum {
        NoShow = <any> 'NoShow',
        DelayedCharge = <any> 'DelayedCharge'
    }
}
