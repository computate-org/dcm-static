Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHost')?.addEventListener('change', (event) => {
    facetRangeChange('Host', event.target.value);
  });

  document.querySelector('#pageSelectSortHost_pk')?.addEventListener('change', (event) => {
    sort('Host', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'pk', true);
  });
  document.querySelector('#pageStatsHost_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'pk', false);
  });

  document.querySelector('#pageSelectSortHost_created')?.addEventListener('change', (event) => {
    sort('Host', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'created', true);
  });
  document.querySelector('#pageStatsHost_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'created', false);
  });

  document.querySelector('#pageSelectSortHost_modified')?.addEventListener('change', (event) => {
    sort('Host', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'modified', true);
  });
  document.querySelector('#pageStatsHost_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'modified', false);
  });

  document.querySelector('#pageSelectSortHost_archived')?.addEventListener('change', (event) => {
    sort('Host', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'archived', true);
  });
  document.querySelector('#pageStatsHost_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'archived', false);
  });

  document.querySelector('#pageSelectSortHost_inventoryResource')?.addEventListener('change', (event) => {
    sort('Host', 'inventoryResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_inventoryResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'inventoryResource', true);
  });
  document.querySelector('#pageStatsHost_inventoryResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'inventoryResource', false);
  });

  document.querySelector('#pageSelectSortHost_hostName')?.addEventListener('change', (event) => {
    sort('Host', 'hostName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_hostName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'hostName', true);
  });
  document.querySelector('#pageStatsHost_hostName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'hostName', false);
  });

  document.querySelector('#pageSelectSortHost_ipAddress')?.addEventListener('change', (event) => {
    sort('Host', 'ipAddress', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_ipAddress')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'ipAddress', true);
  });
  document.querySelector('#pageStatsHost_ipAddress')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'ipAddress', false);
  });

  document.querySelector('#pageSelectSortHost_hostDescription')?.addEventListener('change', (event) => {
    sort('Host', 'hostDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_hostDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'hostDescription', true);
  });
  document.querySelector('#pageStatsHost_hostDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'hostDescription', false);
  });

  document.querySelector('#pageSelectSortHost_eventSubscriptions')?.addEventListener('change', (event) => {
    sort('Host', 'eventSubscriptions', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_eventSubscriptions')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'eventSubscriptions', true);
  });
  document.querySelector('#pageStatsHost_eventSubscriptions')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'eventSubscriptions', false);
  });

  document.querySelector('#pageSelectSortHost_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Host', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsHost_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortHost_classSimpleName')?.addEventListener('change', (event) => {
    sort('Host', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsHost_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortHost_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Host', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsHost_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortHost_sessionId')?.addEventListener('change', (event) => {
    sort('Host', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'sessionId', true);
  });
  document.querySelector('#pageStatsHost_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortHost_userKey')?.addEventListener('change', (event) => {
    sort('Host', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'userKey', true);
  });
  document.querySelector('#pageStatsHost_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'userKey', false);
  });

  document.querySelector('#pageSelectSortHost_saves')?.addEventListener('change', (event) => {
    sort('Host', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'saves', true);
  });
  document.querySelector('#pageStatsHost_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'saves', false);
  });

  document.querySelector('#pageSelectSortHost_objectTitle')?.addEventListener('change', (event) => {
    sort('Host', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'objectTitle', true);
  });
  document.querySelector('#pageStatsHost_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortHost_displayPage')?.addEventListener('change', (event) => {
    sort('Host', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'displayPage', true);
  });
  document.querySelector('#pageStatsHost_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortHost_editPage')?.addEventListener('change', (event) => {
    sort('Host', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'editPage', true);
  });
  document.querySelector('#pageStatsHost_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'editPage', false);
  });

  document.querySelector('#pageSelectSortHost_userPage')?.addEventListener('change', (event) => {
    sort('Host', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'userPage', true);
  });
  document.querySelector('#pageStatsHost_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'userPage', false);
  });

  document.querySelector('#pageSelectSortHost_download')?.addEventListener('change', (event) => {
    sort('Host', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'download', true);
  });
  document.querySelector('#pageStatsHost_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'download', false);
  });

  document.querySelector('#pageSelectSortHost_objectSuggest')?.addEventListener('change', (event) => {
    sort('Host', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsHost_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortHost_objectText')?.addEventListener('change', (event) => {
    sort('Host', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'objectText', true);
  });
  document.querySelector('#pageStatsHost_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'objectText', false);
  });

  document.querySelector('#pageSelectSortHost_solrId')?.addEventListener('change', (event) => {
    sort('Host', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'solrId', true);
  });
  document.querySelector('#pageStatsHost_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'solrId', false);
  });

  document.querySelector('#pageSelectSortHost_tenantResource')?.addEventListener('change', (event) => {
    sort('Host', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'tenantResource', true);
  });
  document.querySelector('#pageStatsHost_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortHost_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('Host', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsHost_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortHost_aapHostId')?.addEventListener('change', (event) => {
    sort('Host', 'aapHostId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_aapHostId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'aapHostId', true);
  });
  document.querySelector('#pageStatsHost_aapHostId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'aapHostId', false);
  });

  document.querySelector('#pageSelectSortHost_hostId')?.addEventListener('change', (event) => {
    sort('Host', 'hostId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_hostId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'hostId', true);
  });
  document.querySelector('#pageStatsHost_hostId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'hostId', false);
  });

  document.querySelector('#pageSelectSortHost_hostResource')?.addEventListener('change', (event) => {
    sort('Host', 'hostResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_hostResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'hostResource', true);
  });
  document.querySelector('#pageStatsHost_hostResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'hostResource', false);
  });

  document.querySelector('#pageSelectSortHost_aapInventoryId')?.addEventListener('change', (event) => {
    sort('Host', 'aapInventoryId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_aapInventoryId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'aapInventoryId', true);
  });
  document.querySelector('#pageStatsHost_aapInventoryId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'aapInventoryId', false);
  });

  document.querySelector('#pageSelectSortHost_inventoryName')?.addEventListener('change', (event) => {
    sort('Host', 'inventoryName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHost_inventoryName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Host', 'inventoryName', true);
  });
  document.querySelector('#pageStatsHost_inventoryName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Host', 'inventoryName', false);
  });
          document.querySelector('#fqHost_created')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_created')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_created')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
          document.querySelector('#fqHost_archived')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
          document.querySelector('#fqHost_displayPage')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
          document.querySelector('#fqHost_editPage')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
          document.querySelector('#fqHost_userPage')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
          document.querySelector('#fqHost_download')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_download')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_download')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
          document.querySelector('#fqHost_inventoryName')?.addEventListener('change', (event) => {
            fqChange('Host', event.currentTarget, facetChangeHostSuccess, facetChangeHostError);
          });
          document.querySelector('#buttonFacetHost_inventoryName')?.addEventListener('click', (event) => {
            facetFieldChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHost_inventoryName')?.addEventListener('change', (event) => {
            facetPivotChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHost_inventoryName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHost_inventoryName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Host', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHost_inventoryName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Host', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteHost')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var hostResource =  event.currentTarget.getAttribute('data-hostResource');
      deleteHost(
          event.currentTarget
          , hostResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterHost')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterHost(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
