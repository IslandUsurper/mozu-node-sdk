

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		getTreeDocumentContent :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/content'
		}),
		getTreeDocument :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}?responseFields={responseFields}'
		}),
		updateTreeDocumentContent :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/content?folderPath={folderPath}&folderId={folderId}'
		}),
		deleteTreeDocumentContent :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/content?folderPath={folderPath}&folderId={folderId}'
		})	
	});
};