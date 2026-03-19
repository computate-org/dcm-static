Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHostCredential')?.addEventListener('change', (event) => {
    facetRangeChange('HostCredential', event.target.value);
  });

  document.querySelector('#pageSelectSortHostCredential_pk')?.addEventListener('change', (event) => {
    sort('HostCredential', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'pk', true);
  });
  document.querySelector('#pageStatsHostCredential_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'pk', false);
  });

  document.querySelector('#pageSelectSortHostCredential_created')?.addEventListener('change', (event) => {
    sort('HostCredential', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'created', true);
  });
  document.querySelector('#pageStatsHostCredential_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'created', false);
  });

  document.querySelector('#pageSelectSortHostCredential_modified')?.addEventListener('change', (event) => {
    sort('HostCredential', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'modified', true);
  });
  document.querySelector('#pageStatsHostCredential_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'modified', false);
  });

  document.querySelector('#pageSelectSortHostCredential_archived')?.addEventListener('change', (event) => {
    sort('HostCredential', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'archived', true);
  });
  document.querySelector('#pageStatsHostCredential_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'archived', false);
  });

  document.querySelector('#pageSelectSortHostCredential_tenantResource')?.addEventListener('change', (event) => {
    sort('HostCredential', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'tenantResource', true);
  });
  document.querySelector('#pageStatsHostCredential_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortHostCredential_credentialName')?.addEventListener('change', (event) => {
    sort('HostCredential', 'credentialName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_credentialName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'credentialName', true);
  });
  document.querySelector('#pageStatsHostCredential_credentialName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'credentialName', false);
  });

  document.querySelector('#pageSelectSortHostCredential_credentialDescription')?.addEventListener('change', (event) => {
    sort('HostCredential', 'credentialDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_credentialDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'credentialDescription', true);
  });
  document.querySelector('#pageStatsHostCredential_credentialDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'credentialDescription', false);
  });

  document.querySelector('#pageSelectSortHostCredential_userName')?.addEventListener('change', (event) => {
    sort('HostCredential', 'userName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_userName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'userName', true);
  });
  document.querySelector('#pageStatsHostCredential_userName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'userName', false);
  });

  document.querySelector('#pageSelectSortHostCredential_becomePassword')?.addEventListener('change', (event) => {
    sort('HostCredential', 'becomePassword', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_becomePassword')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'becomePassword', true);
  });
  document.querySelector('#pageStatsHostCredential_becomePassword')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'becomePassword', false);
  });

  document.querySelector('#pageSelectSortHostCredential_password')?.addEventListener('change', (event) => {
    sort('HostCredential', 'password', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_password')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'password', true);
  });
  document.querySelector('#pageStatsHostCredential_password')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'password', false);
  });

  document.querySelector('#pageSelectSortHostCredential_becomeMethod')?.addEventListener('change', (event) => {
    sort('HostCredential', 'becomeMethod', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_becomeMethod')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'becomeMethod', true);
  });
  document.querySelector('#pageStatsHostCredential_becomeMethod')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'becomeMethod', false);
  });

  document.querySelector('#pageSelectSortHostCredential_classCanonicalName')?.addEventListener('change', (event) => {
    sort('HostCredential', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsHostCredential_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortHostCredential_classSimpleName')?.addEventListener('change', (event) => {
    sort('HostCredential', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsHostCredential_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortHostCredential_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('HostCredential', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsHostCredential_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortHostCredential_sessionId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'sessionId', true);
  });
  document.querySelector('#pageStatsHostCredential_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortHostCredential_userKey')?.addEventListener('change', (event) => {
    sort('HostCredential', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'userKey', true);
  });
  document.querySelector('#pageStatsHostCredential_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'userKey', false);
  });

  document.querySelector('#pageSelectSortHostCredential_saves')?.addEventListener('change', (event) => {
    sort('HostCredential', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'saves', true);
  });
  document.querySelector('#pageStatsHostCredential_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'saves', false);
  });

  document.querySelector('#pageSelectSortHostCredential_objectTitle')?.addEventListener('change', (event) => {
    sort('HostCredential', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'objectTitle', true);
  });
  document.querySelector('#pageStatsHostCredential_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortHostCredential_displayPage')?.addEventListener('change', (event) => {
    sort('HostCredential', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'displayPage', true);
  });
  document.querySelector('#pageStatsHostCredential_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortHostCredential_editPage')?.addEventListener('change', (event) => {
    sort('HostCredential', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'editPage', true);
  });
  document.querySelector('#pageStatsHostCredential_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'editPage', false);
  });

  document.querySelector('#pageSelectSortHostCredential_userPage')?.addEventListener('change', (event) => {
    sort('HostCredential', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'userPage', true);
  });
  document.querySelector('#pageStatsHostCredential_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'userPage', false);
  });

  document.querySelector('#pageSelectSortHostCredential_download')?.addEventListener('change', (event) => {
    sort('HostCredential', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'download', true);
  });
  document.querySelector('#pageStatsHostCredential_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'download', false);
  });

  document.querySelector('#pageSelectSortHostCredential_objectSuggest')?.addEventListener('change', (event) => {
    sort('HostCredential', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsHostCredential_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortHostCredential_objectText')?.addEventListener('change', (event) => {
    sort('HostCredential', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'objectText', true);
  });
  document.querySelector('#pageStatsHostCredential_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'objectText', false);
  });

  document.querySelector('#pageSelectSortHostCredential_solrId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'solrId', true);
  });
  document.querySelector('#pageStatsHostCredential_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'solrId', false);
  });

  document.querySelector('#pageSelectSortHostCredential_tenantId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'tenantId', true);
  });
  document.querySelector('#pageStatsHostCredential_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortHostCredential_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsHostCredential_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortHostCredential_credentialId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'credentialId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_credentialId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'credentialId', true);
  });
  document.querySelector('#pageStatsHostCredential_credentialId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'credentialId', false);
  });

  document.querySelector('#pageSelectSortHostCredential_credentialResource')?.addEventListener('change', (event) => {
    sort('HostCredential', 'credentialResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_credentialResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'credentialResource', true);
  });
  document.querySelector('#pageStatsHostCredential_credentialResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'credentialResource', false);
  });

  document.querySelector('#pageSelectSortHostCredential_aapCredentialId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'aapCredentialId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_aapCredentialId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'aapCredentialId', true);
  });
  document.querySelector('#pageStatsHostCredential_aapCredentialId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'aapCredentialId', false);
  });

  document.querySelector('#pageSelectSortHostCredential_aapCredentialTypeId')?.addEventListener('change', (event) => {
    sort('HostCredential', 'aapCredentialTypeId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCredential_aapCredentialTypeId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCredential', 'aapCredentialTypeId', true);
  });
  document.querySelector('#pageStatsHostCredential_aapCredentialTypeId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCredential', 'aapCredentialTypeId', false);
  });
          document.querySelector('#fqHostCredential_created')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_created')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_created')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#fqHostCredential_archived')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_archived')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_archived')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#fqHostCredential_displayPage')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#fqHostCredential_editPage')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#fqHostCredential_userPage')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#fqHostCredential_download')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_download')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_download')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#fqHostCredential_tenantId')?.addEventListener('change', (event) => {
            fqChange('HostCredential', event.currentTarget, facetChangeHostCredentialSuccess, facetChangeHostCredentialError);
          });
          document.querySelector('#buttonFacetHostCredential_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCredential_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCredential_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCredential_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCredential', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCredential_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCredential', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteHostCredential')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var credentialResource =  event.currentTarget.getAttribute('data-credentialResource');
      deleteHostCredential(
          event.currentTarget
          , credentialResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterHostCredential')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterHostCredential(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
