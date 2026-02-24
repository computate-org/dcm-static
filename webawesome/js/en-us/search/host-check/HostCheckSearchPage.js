Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHostCheck')?.addEventListener('change', (event) => {
    facetRangeChange('HostCheck', event.target.value);
  });

  document.querySelector('#pageSelectSortHostCheck_pk')?.addEventListener('change', (event) => {
    sort('HostCheck', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'pk', true);
  });
  document.querySelector('#pageStatsHostCheck_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'pk', false);
  });

  document.querySelector('#pageSelectSortHostCheck_created')?.addEventListener('change', (event) => {
    sort('HostCheck', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'created', true);
  });
  document.querySelector('#pageStatsHostCheck_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'created', false);
  });

  document.querySelector('#pageSelectSortHostCheck_modified')?.addEventListener('change', (event) => {
    sort('HostCheck', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'modified', true);
  });
  document.querySelector('#pageStatsHostCheck_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'modified', false);
  });

  document.querySelector('#pageSelectSortHostCheck_archived')?.addEventListener('change', (event) => {
    sort('HostCheck', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'archived', true);
  });
  document.querySelector('#pageStatsHostCheck_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'archived', false);
  });

  document.querySelector('#pageSelectSortHostCheck_tenantResource')?.addEventListener('change', (event) => {
    sort('HostCheck', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'tenantResource', true);
  });
  document.querySelector('#pageStatsHostCheck_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortHostCheck_jobTemplateResource')?.addEventListener('change', (event) => {
    sort('HostCheck', 'jobTemplateResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_jobTemplateResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'jobTemplateResource', true);
  });
  document.querySelector('#pageStatsHostCheck_jobTemplateResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'jobTemplateResource', false);
  });

  document.querySelector('#pageSelectSortHostCheck_checkName')?.addEventListener('change', (event) => {
    sort('HostCheck', 'checkName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_checkName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'checkName', true);
  });
  document.querySelector('#pageStatsHostCheck_checkName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'checkName', false);
  });

  document.querySelector('#pageSelectSortHostCheck_checkDescription')?.addEventListener('change', (event) => {
    sort('HostCheck', 'checkDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_checkDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'checkDescription', true);
  });
  document.querySelector('#pageStatsHostCheck_checkDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'checkDescription', false);
  });

  document.querySelector('#pageSelectSortHostCheck_checkNamespace')?.addEventListener('change', (event) => {
    sort('HostCheck', 'checkNamespace', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_checkNamespace')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'checkNamespace', true);
  });
  document.querySelector('#pageStatsHostCheck_checkNamespace')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'checkNamespace', false);
  });

  document.querySelector('#pageSelectSortHostCheck_checkCommand')?.addEventListener('change', (event) => {
    sort('HostCheck', 'checkCommand', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_checkCommand')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'checkCommand', true);
  });
  document.querySelector('#pageStatsHostCheck_checkCommand')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'checkCommand', false);
  });

  document.querySelector('#pageSelectSortHostCheck_checkInterval')?.addEventListener('change', (event) => {
    sort('HostCheck', 'checkInterval', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_checkInterval')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'checkInterval', true);
  });
  document.querySelector('#pageStatsHostCheck_checkInterval')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'checkInterval', false);
  });

  document.querySelector('#pageSelectSortHostCheck_checkPublished')?.addEventListener('change', (event) => {
    sort('HostCheck', 'checkPublished', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_checkPublished')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'checkPublished', true);
  });
  document.querySelector('#pageStatsHostCheck_checkPublished')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'checkPublished', false);
  });

  document.querySelector('#pageSelectSortHostCheck_eventSubscriptions')?.addEventListener('change', (event) => {
    sort('HostCheck', 'eventSubscriptions', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_eventSubscriptions')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'eventSubscriptions', true);
  });
  document.querySelector('#pageStatsHostCheck_eventSubscriptions')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'eventSubscriptions', false);
  });

  document.querySelector('#pageSelectSortHostCheck_eventHandlers')?.addEventListener('change', (event) => {
    sort('HostCheck', 'eventHandlers', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_eventHandlers')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'eventHandlers', true);
  });
  document.querySelector('#pageStatsHostCheck_eventHandlers')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'eventHandlers', false);
  });

  document.querySelector('#pageSelectSortHostCheck_classCanonicalName')?.addEventListener('change', (event) => {
    sort('HostCheck', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsHostCheck_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortHostCheck_classSimpleName')?.addEventListener('change', (event) => {
    sort('HostCheck', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsHostCheck_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortHostCheck_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('HostCheck', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsHostCheck_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortHostCheck_sessionId')?.addEventListener('change', (event) => {
    sort('HostCheck', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'sessionId', true);
  });
  document.querySelector('#pageStatsHostCheck_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortHostCheck_userKey')?.addEventListener('change', (event) => {
    sort('HostCheck', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'userKey', true);
  });
  document.querySelector('#pageStatsHostCheck_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'userKey', false);
  });

  document.querySelector('#pageSelectSortHostCheck_saves')?.addEventListener('change', (event) => {
    sort('HostCheck', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'saves', true);
  });
  document.querySelector('#pageStatsHostCheck_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'saves', false);
  });

  document.querySelector('#pageSelectSortHostCheck_objectTitle')?.addEventListener('change', (event) => {
    sort('HostCheck', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'objectTitle', true);
  });
  document.querySelector('#pageStatsHostCheck_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortHostCheck_displayPage')?.addEventListener('change', (event) => {
    sort('HostCheck', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'displayPage', true);
  });
  document.querySelector('#pageStatsHostCheck_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortHostCheck_editPage')?.addEventListener('change', (event) => {
    sort('HostCheck', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'editPage', true);
  });
  document.querySelector('#pageStatsHostCheck_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'editPage', false);
  });

  document.querySelector('#pageSelectSortHostCheck_userPage')?.addEventListener('change', (event) => {
    sort('HostCheck', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'userPage', true);
  });
  document.querySelector('#pageStatsHostCheck_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'userPage', false);
  });

  document.querySelector('#pageSelectSortHostCheck_download')?.addEventListener('change', (event) => {
    sort('HostCheck', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'download', true);
  });
  document.querySelector('#pageStatsHostCheck_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'download', false);
  });

  document.querySelector('#pageSelectSortHostCheck_objectSuggest')?.addEventListener('change', (event) => {
    sort('HostCheck', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsHostCheck_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortHostCheck_objectText')?.addEventListener('change', (event) => {
    sort('HostCheck', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'objectText', true);
  });
  document.querySelector('#pageStatsHostCheck_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'objectText', false);
  });

  document.querySelector('#pageSelectSortHostCheck_solrId')?.addEventListener('change', (event) => {
    sort('HostCheck', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'solrId', true);
  });
  document.querySelector('#pageStatsHostCheck_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'solrId', false);
  });

  document.querySelector('#pageSelectSortHostCheck_tenantId')?.addEventListener('change', (event) => {
    sort('HostCheck', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'tenantId', true);
  });
  document.querySelector('#pageStatsHostCheck_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortHostCheck_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('HostCheck', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsHostCheck_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortHostCheck_jobTemplateId')?.addEventListener('change', (event) => {
    sort('HostCheck', 'jobTemplateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_jobTemplateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'jobTemplateId', true);
  });
  document.querySelector('#pageStatsHostCheck_jobTemplateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'jobTemplateId', false);
  });

  document.querySelector('#pageSelectSortHostCheck_aapTemplateId')?.addEventListener('change', (event) => {
    sort('HostCheck', 'aapTemplateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheck_aapTemplateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheck', 'aapTemplateId', true);
  });
  document.querySelector('#pageStatsHostCheck_aapTemplateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheck', 'aapTemplateId', false);
  });
          document.querySelector('#fqHostCheck_created')?.addEventListener('change', (event) => {
            fqChange('HostCheck', event.currentTarget, facetChangeHostCheckSuccess, facetChangeHostCheckError);
          });
          document.querySelector('#buttonFacetHostCheck_created')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheck_created')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheck_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheck_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheck_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#fqHostCheck_archived')?.addEventListener('change', (event) => {
            fqChange('HostCheck', event.currentTarget, facetChangeHostCheckSuccess, facetChangeHostCheckError);
          });
          document.querySelector('#buttonFacetHostCheck_archived')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheck_archived')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheck_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheck_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheck_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#fqHostCheck_displayPage')?.addEventListener('change', (event) => {
            fqChange('HostCheck', event.currentTarget, facetChangeHostCheckSuccess, facetChangeHostCheckError);
          });
          document.querySelector('#buttonFacetHostCheck_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheck_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheck_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheck_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheck_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#fqHostCheck_editPage')?.addEventListener('change', (event) => {
            fqChange('HostCheck', event.currentTarget, facetChangeHostCheckSuccess, facetChangeHostCheckError);
          });
          document.querySelector('#buttonFacetHostCheck_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheck_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheck_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheck_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheck_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#fqHostCheck_userPage')?.addEventListener('change', (event) => {
            fqChange('HostCheck', event.currentTarget, facetChangeHostCheckSuccess, facetChangeHostCheckError);
          });
          document.querySelector('#buttonFacetHostCheck_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheck_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheck_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheck_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheck_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#fqHostCheck_download')?.addEventListener('change', (event) => {
            fqChange('HostCheck', event.currentTarget, facetChangeHostCheckSuccess, facetChangeHostCheckError);
          });
          document.querySelector('#buttonFacetHostCheck_download')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheck_download')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheck_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheck_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheck', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheck_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheck', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteHostCheck')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var checkName =  event.currentTarget.getAttribute('data-checkName');
      deleteHostCheck(
          event.currentTarget
          , checkName
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterHostCheck')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterHostCheck(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
