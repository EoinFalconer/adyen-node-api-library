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

export class AdditionalDataOpenInvoice {
    /**
    * Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.  The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.  Since the field is optional, if it\'s not included it does not impact computing the merchant signature.  Applies only to Klarna.  You can contact Klarna for the format and structure of the string.
    */
    'openinvoicedataMerchantData'?: string;
    /**
    * The number of invoice lines included in `openinvoicedata`.  There needs to be at least one line, so `numberOfLines` needs to be at least 1.
    */
    'openinvoicedataNumberOfLines'?: string;
    /**
    * The three-character ISO currency code.
    */
    'openinvoicedataLineItemNrCurrencyCode'?: string;
    /**
    * A text description of the product the invoice line refers to.
    */
    'openinvoicedataLineItemNrDescription'?: string;
    /**
    * The price for one item in the invoice line, represented in minor units.  The due amount for the item, VAT excluded.
    */
    'openinvoicedataLineItemNrItemAmount'?: string;
    /**
    * A unique id for this item. Required for RatePay if the description of each item is not unique.
    */
    'openinvoicedataLineItemNrItemId'?: string;
    /**
    * The VAT due for one item in the invoice line, represented in minor units.
    */
    'openinvoicedataLineItemNrItemVatAmount'?: string;
    /**
    * The VAT percentage for one item in the invoice line, represented in minor units.  For example, 19% VAT is specified as 1900.
    */
    'openinvoicedataLineItemNrItemVatPercentage'?: string;
    /**
    * The number of units purchased of a specific product.
    */
    'openinvoicedataLineItemNrNumberOfItems'?: string;
    /**
    * Name of the shipping company handling the the return shipment.
    */
    'openinvoicedataLineItemNrReturnShippingCompany'?: string;
    /**
    * The tracking number for the return of the shipment.
    */
    'openinvoicedataLineItemNrReturnTrackingNumber'?: string;
    /**
    * URI where the customer can track the return of their shipment.
    */
    'openinvoicedataLineItemNrReturnTrackingUri'?: string;
    /**
    * Name of the shipping company handling the delivery.
    */
    'openinvoicedataLineItemNrShippingCompany'?: string;
    /**
    * Shipping method.
    */
    'openinvoicedataLineItemNrShippingMethod'?: string;
    /**
    * The tracking number for the shipment.
    */
    'openinvoicedataLineItemNrTrackingNumber'?: string;
    /**
    * URI where the customer can track their shipment.
    */
    'openinvoicedataLineItemNrTrackingUri'?: string;
    /**
    * Required for AfterPay. The country-specific VAT category a product falls under.  Allowed values: * High * Low * None.
    */
    'openinvoicedataLineItemNrVatCategory'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "openinvoicedataMerchantData",
            "baseName": "openinvoicedata.merchantData",
            "type": "string"
        },
        {
            "name": "openinvoicedataNumberOfLines",
            "baseName": "openinvoicedata.numberOfLines",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrCurrencyCode",
            "baseName": "openinvoicedataLine[itemNr].currencyCode",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrDescription",
            "baseName": "openinvoicedataLine[itemNr].description",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrItemAmount",
            "baseName": "openinvoicedataLine[itemNr].itemAmount",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrItemId",
            "baseName": "openinvoicedataLine[itemNr].itemId",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrItemVatAmount",
            "baseName": "openinvoicedataLine[itemNr].itemVatAmount",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrItemVatPercentage",
            "baseName": "openinvoicedataLine[itemNr].itemVatPercentage",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrNumberOfItems",
            "baseName": "openinvoicedataLine[itemNr].numberOfItems",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrReturnShippingCompany",
            "baseName": "openinvoicedataLine[itemNr].returnShippingCompany",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrReturnTrackingNumber",
            "baseName": "openinvoicedataLine[itemNr].returnTrackingNumber",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrReturnTrackingUri",
            "baseName": "openinvoicedataLine[itemNr].returnTrackingUri",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrShippingCompany",
            "baseName": "openinvoicedataLine[itemNr].shippingCompany",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrShippingMethod",
            "baseName": "openinvoicedataLine[itemNr].shippingMethod",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrTrackingNumber",
            "baseName": "openinvoicedataLine[itemNr].trackingNumber",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrTrackingUri",
            "baseName": "openinvoicedataLine[itemNr].trackingUri",
            "type": "string"
        },
        {
            "name": "openinvoicedataLineItemNrVatCategory",
            "baseName": "openinvoicedataLine[itemNr].vatCategory",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataOpenInvoice.attributeTypeMap;
    }
}

