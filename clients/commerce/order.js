

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client');
var constants = Client.constants;


module.exports = Client.sub({
	getOrders :Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&responseFields={responseFields}'
	}),
	getAvailableActions :Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/actions'
	}),
	getTaxableOrders :Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/taxableorders'
	}),
	getOrder :Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}?draft={draft}&responseFields={responseFields}'
	}),
	createOrderFromCart :Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/?cartId={cartId}&responseFields={responseFields}'
	}),
	createOrder :Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/?responseFields={responseFields}'
	}),
	performOrderAction :Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/{orderId}/actions?responseFields={responseFields}'
	}),
	updateOrderDiscount :Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/discounts/{discountId}?updatemode={updateMode}&version={version}&responseFields={responseFields}'
	}),
	deleteOrderDraft :Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/draft?version={version}'
	}),
	resendOrderConfirmationEmail :Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/email/resend'
	}),
	changeOrderUserId :Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/users?responseFields={responseFields}'
	}),
	updateOrder :Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}?updatemode={updateMode}&version={version}&responseFields={responseFields}'
	})	
});
