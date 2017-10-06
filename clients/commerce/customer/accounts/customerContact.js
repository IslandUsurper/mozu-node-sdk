

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getAccountContact: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts/{contactId}?responseFields={responseFields}'
	}),
	getAccountContacts: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	addAccountContact: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts?responseFields={responseFields}'
	}),
	updateAccountContact: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts/{contactId}?responseFields={responseFields}'
	}),
	addAccountContactList: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts?responseFields={responseFields}'
	}),
	deleteAccountContact: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts/{contactId}'
	})
});
