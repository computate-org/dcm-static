Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenant')?.addEventListener('change', (event) => {
    facetRangeChange('Tenant', event.target.value);
  });

  document.querySelector('#pageSelectSortTenant_pk')?.addEventListener('change', (event) => {
    sort('Tenant', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'pk', true);
  });
  document.querySelector('#pageStatsTenant_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenant_created')?.addEventListener('change', (event) => {
    sort('Tenant', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'created', true);
  });
  document.querySelector('#pageStatsTenant_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'created', false);
  });

  document.querySelector('#pageSelectSortTenant_modified')?.addEventListener('change', (event) => {
    sort('Tenant', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'modified', true);
  });
  document.querySelector('#pageStatsTenant_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenant_archived')?.addEventListener('change', (event) => {
    sort('Tenant', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'archived', true);
  });
  document.querySelector('#pageStatsTenant_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenant_tenantName')?.addEventListener('change', (event) => {
    sort('Tenant', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_tenantName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'tenantName', true);
  });
  document.querySelector('#pageStatsTenant_tenantName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'tenantName', false);
  });

  document.querySelector('#pageSelectSortTenant_tenantId')?.addEventListener('change', (event) => {
    sort('Tenant', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'tenantId', true);
  });
  document.querySelector('#pageStatsTenant_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortTenant_tenantDescription')?.addEventListener('change', (event) => {
    sort('Tenant', 'tenantDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_tenantDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'tenantDescription', true);
  });
  document.querySelector('#pageStatsTenant_tenantDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'tenantDescription', false);
  });

  document.querySelector('#pageSelectSortTenant_pageId')?.addEventListener('change', (event) => {
    sort('Tenant', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'pageId', true);
  });
  document.querySelector('#pageStatsTenant_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'pageId', false);
  });

  document.querySelector('#pageSelectSortTenant_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Tenant', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenant_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenant_classSimpleName')?.addEventListener('change', (event) => {
    sort('Tenant', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenant_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenant_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Tenant', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenant_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenant_sessionId')?.addEventListener('change', (event) => {
    sort('Tenant', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenant_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenant_userKey')?.addEventListener('change', (event) => {
    sort('Tenant', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'userKey', true);
  });
  document.querySelector('#pageStatsTenant_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenant_saves')?.addEventListener('change', (event) => {
    sort('Tenant', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'saves', true);
  });
  document.querySelector('#pageStatsTenant_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenant_objectTitle')?.addEventListener('change', (event) => {
    sort('Tenant', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenant_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenant_displayPage')?.addEventListener('change', (event) => {
    sort('Tenant', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenant_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenant_editPage')?.addEventListener('change', (event) => {
    sort('Tenant', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'editPage', true);
  });
  document.querySelector('#pageStatsTenant_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenant_userPage')?.addEventListener('change', (event) => {
    sort('Tenant', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'userPage', true);
  });
  document.querySelector('#pageStatsTenant_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenant_download')?.addEventListener('change', (event) => {
    sort('Tenant', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'download', true);
  });
  document.querySelector('#pageStatsTenant_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'download', false);
  });

  document.querySelector('#pageSelectSortTenant_objectSuggest')?.addEventListener('change', (event) => {
    sort('Tenant', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenant_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenant_objectText')?.addEventListener('change', (event) => {
    sort('Tenant', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'objectText', true);
  });
  document.querySelector('#pageStatsTenant_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenant_solrId')?.addEventListener('change', (event) => {
    sort('Tenant', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'solrId', true);
  });
  document.querySelector('#pageStatsTenant_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenant_tenantResource')?.addEventListener('change', (event) => {
    sort('Tenant', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'tenantResource', true);
  });
  document.querySelector('#pageStatsTenant_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortTenant_hubId')?.addEventListener('change', (event) => {
    sort('Tenant', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'hubId', true);
  });
  document.querySelector('#pageStatsTenant_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'hubId', false);
  });

  document.querySelector('#pageSelectSortTenant_clusterName')?.addEventListener('change', (event) => {
    sort('Tenant', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'clusterName', true);
  });
  document.querySelector('#pageStatsTenant_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortTenant_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('Tenant', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenant_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Tenant', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsTenant_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Tenant', 'aapOrganizationId', false);
  });
          document.querySelector('#fqTenant_created')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_created')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_created')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_archived')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_tenantName')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_tenantName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_tenantName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_tenantName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_tenantId')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_tenantDescription')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_tenantDescription')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_tenantDescription')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_pageId')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_displayPage')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_editPage')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_userPage')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_download')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_download')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_download')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_tenantResource')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_tenantResource')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_tenantResource')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_tenantResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_tenantResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_tenantResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_hubId')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
          document.querySelector('#fqTenant_clusterName')?.addEventListener('change', (event) => {
            fqChange('Tenant', event.currentTarget, facetChangeTenantSuccess, facetChangeTenantError);
          });
          document.querySelector('#buttonFacetTenant_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenant_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenant_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenant_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Tenant', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenant_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Tenant', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenant')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var tenantId =  event.currentTarget.getAttribute('data-tenantId');
      deleteTenant(
          event.currentTarget
          , tenantId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenant')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenant(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
