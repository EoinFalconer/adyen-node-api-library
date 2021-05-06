/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import { createClient } from "../__mocks__/base";
import { disableSuccess } from "../__mocks__/recurring/disableSuccess";
import { listRecurringDetailsSuccess } from "../__mocks__/recurring/listRecurringDetailsSuccess";
import RecurringService from "../services/recurring";
import Client from "../client";
import { paymentsSuccess } from "../__mocks__/checkout/paymentsSuccess";
import { createPaymentsCheckoutRequest } from "./checkout.spec";
import Checkout from "../services/checkout";
import { PaymentRequest } from "../typings/checkout/models";
import {
    ScheduleAccountUpdaterRequest,
    ScheduleAccountUpdaterResult,
    DisableRequest,
    RecurringDetailsRequest,
    Recurring
} from "../typings/recurring/models";

const createRecurringDetailsRequest = (): RecurringDetailsRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        recurring: { contract: Recurring.ContractEnum.Recurring },
        shopperReference: "shopperReference",
    };
};
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);

let client: Client;
let recurring: RecurringService;
let checkout: Checkout;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    recurring = new RecurringService(client);
    checkout = new Checkout(client);
    scope = nock(`${client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Recurring", (): void => {
    test.each([false, true])("should test have recurring details list, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/listRecurringDetails")
            .reply(200, listRecurringDetailsSuccess);

        const request = createRecurringDetailsRequest();
        try {
            const result = await recurring.listRecurringDetails(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should disable, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments")
            .reply(200, paymentsSuccess);

        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const res = await checkout.payments(paymentsRequest);

        scope.post("/disable")
            .reply(200, disableSuccess);

        const request: DisableRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperReference",
            recurringDetailReference: res.additionalData!["recurring.recurringDetailReference"]
        };

        try {
            const result = await recurring.disable(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });


    // TODO: register account for AccountUpdater and unmock test
    test.each([true])("should schedule account updater, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const scheduleAccountUpdaterSuccess: ScheduleAccountUpdaterResult = {
            pspReference: "mocked_psp",
            result: "SUCCESS"
        };

        scope.post("/scheduleAccountUpdater")
            .reply(200, scheduleAccountUpdaterSuccess);

        const request: ScheduleAccountUpdaterRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            reference: "ref",
            card: {
                expiryMonth: "03",
                expiryYear: "2030",
                holderName: "John Smith",
                number: "4111111111111111"
            }
        };

        try {
            const result = await recurring.scheduleAccountUpdater(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });
});
