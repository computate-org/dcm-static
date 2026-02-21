Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHostInventory')?.addEventListener('change', (event) => {
    facetRangeChange('HostInventory', event.target.value);
  });

  document.querySelector('#pageSelectSortHostInventory_pk')?.addEventListener('change', (event) => {
    sort('HostInventory', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'pk', true);
  });
  document.querySelector('#pageStatsHostInventory_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'pk', false);
  });

  document.querySelector('#pageSelectSortHostInventory_created')?.addEventListener('change', (event) => {
    sort('HostInventory', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'created', true);
  });
  document.querySelector('#pageStatsHostInventory_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'created', false);
  });

  document.querySelector('#pageSelectSortHostInventory_modified')?.addEventListener('change', (event) => {
    sort('HostInventory', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'modified', true);
  });
  document.querySelector('#pageStatsHostInventory_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'modified', false);
  });

  document.querySelector('#pageSelectSortHostInventory_archived')?.addEventListener('change', (event) => {
    sort('HostInventory', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'archived', true);
  });
  document.querySelector('#pageStatsHostInventory_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'archived', false);
  });

  document.querySelector('#pageSelectSortHostInventory_inventoryName')?.addEventListener('change', (event) => {
    sort('HostInventory', 'inventoryName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_inventoryName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'inventoryName', true);
  });
  document.querySelector('#pageStatsHostInventory_inventoryName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'inventoryName', false);
  });

  document.querySelector('#pageSelectSortHostInventory_inventoryDescription')?.addEventListener('change', (event) => {
    sort('HostInventory', 'inventoryDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_inventoryDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'inventoryDescription', true);
  });
  document.querySelector('#pageStatsHostInventory_inventoryDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'inventoryDescription', false);
  });

  document.querySelector('#pageSelectSortHostInventory_inventoryKind')?.addEventListener('change', (event) => {
    sort('HostInventory', 'inventoryKind', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_inventoryKind')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'inventoryKind', true);
  });
  document.querySelector('#pageStatsHostInventory_inventoryKind')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'inventoryKind', false);
  });

  document.querySelector('#pageSelectSortHostInventory_tenantResource')?.addEventListener('change', (event) => {
    sort('HostInventory', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'tenantResource', true);
  });
  document.querySelector('#pageStatsHostInventory_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortHostInventory_classCanonicalName')?.addEventListener('change', (event) => {
    sort('HostInventory', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsHostInventory_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortHostInventory_classSimpleName')?.addEventListener('change', (event) => {
    sort('HostInventory', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsHostInventory_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortHostInventory_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('HostInventory', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsHostInventory_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortHostInventory_sessionId')?.addEventListener('change', (event) => {
    sort('HostInventory', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'sessionId', true);
  });
  document.querySelector('#pageStatsHostInventory_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortHostInventory_userKey')?.addEventListener('change', (event) => {
    sort('HostInventory', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'userKey', true);
  });
  document.querySelector('#pageStatsHostInventory_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'userKey', false);
  });

  document.querySelector('#pageSelectSortHostInventory_saves')?.addEventListener('change', (event) => {
    sort('HostInventory', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'saves', true);
  });
  document.querySelector('#pageStatsHostInventory_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'saves', false);
  });

  document.querySelector('#pageSelectSortHostInventory_objectTitle')?.addEventListener('change', (event) => {
    sort('HostInventory', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'objectTitle', true);
  });
  document.querySelector('#pageStatsHostInventory_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortHostInventory_displayPage')?.addEventListener('change', (event) => {
    sort('HostInventory', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'displayPage', true);
  });
  document.querySelector('#pageStatsHostInventory_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortHostInventory_editPage')?.addEventListener('change', (event) => {
    sort('HostInventory', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'editPage', true);
  });
  document.querySelector('#pageStatsHostInventory_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'editPage', false);
  });

  document.querySelector('#pageSelectSortHostInventory_userPage')?.addEventListener('change', (event) => {
    sort('HostInventory', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'userPage', true);
  });
  document.querySelector('#pageStatsHostInventory_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'userPage', false);
  });

  document.querySelector('#pageSelectSortHostInventory_download')?.addEventListener('change', (event) => {
    sort('HostInventory', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'download', true);
  });
  document.querySelector('#pageStatsHostInventory_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'download', false);
  });

  document.querySelector('#pageSelectSortHostInventory_objectSuggest')?.addEventListener('change', (event) => {
    sort('HostInventory', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsHostInventory_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortHostInventory_objectText')?.addEventListener('change', (event) => {
    sort('HostInventory', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'objectText', true);
  });
  document.querySelector('#pageStatsHostInventory_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'objectText', false);
  });

  document.querySelector('#pageSelectSortHostInventory_solrId')?.addEventListener('change', (event) => {
    sort('HostInventory', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'solrId', true);
  });
  document.querySelector('#pageStatsHostInventory_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'solrId', false);
  });

  document.querySelector('#pageSelectSortHostInventory_tenantId')?.addEventListener('change', (event) => {
    sort('HostInventory', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'tenantId', true);
  });
  document.querySelector('#pageStatsHostInventory_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortHostInventory_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('HostInventory', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsHostInventory_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortHostInventory_inventoryId')?.addEventListener('change', (event) => {
    sort('HostInventory', 'inventoryId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_inventoryId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'inventoryId', true);
  });
  document.querySelector('#pageStatsHostInventory_inventoryId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'inventoryId', false);
  });

  document.querySelector('#pageSelectSortHostInventory_inventoryResource')?.addEventListener('change', (event) => {
    sort('HostInventory', 'inventoryResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_inventoryResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'inventoryResource', true);
  });
  document.querySelector('#pageStatsHostInventory_inventoryResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'inventoryResource', false);
  });

  document.querySelector('#pageSelectSortHostInventory_aapInventoryId')?.addEventListener('change', (event) => {
    sort('HostInventory', 'aapInventoryId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostInventory_aapInventoryId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostInventory', 'aapInventoryId', true);
  });
  document.querySelector('#pageStatsHostInventory_aapInventoryId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostInventory', 'aapInventoryId', false);
  });
          document.querySelector('#fqHostInventory_created')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_created')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_created')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#fqHostInventory_archived')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_archived')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_archived')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#fqHostInventory_displayPage')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#fqHostInventory_editPage')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#fqHostInventory_userPage')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#fqHostInventory_download')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_download')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_download')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#fqHostInventory_tenantId')?.addEventListener('change', (event) => {
            fqChange('HostInventory', event.currentTarget, facetChangeHostInventorySuccess, facetChangeHostInventoryError);
          });
          document.querySelector('#buttonFacetHostInventory_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostInventory_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostInventory_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostInventory_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostInventory', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostInventory_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostInventory', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteHostInventory')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var inventoryResource =  event.currentTarget.getAttribute('data-inventoryResource');
      deleteHostInventory(
          event.currentTarget
          , inventoryResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterHostInventory')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterHostInventory(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
