Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenantDiscovered')?.addEventListener('change', (event) => {
    facetRangeChange('TenantDiscovered', event.target.value);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_pk')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'pk', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_created')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'created', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'created', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_modified')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'modified', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_archived')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'archived', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_requestedId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'requestedId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_requestedId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'requestedId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_requestedId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'requestedId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_discoveredByEmail')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'discoveredByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_discoveredByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredByEmail', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_discoveredByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredByEmail', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_discoveredByUserId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'discoveredByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_discoveredByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredByUserId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_discoveredByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredByUserId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_discoveredByFullName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'discoveredByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_discoveredByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredByFullName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_discoveredByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredByFullName', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_createdByEmail')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_createdVia')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'createdVia', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_intentState')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'intentState', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'intentState', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_requestedState')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'requestedState', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_realizedState')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'realizedState', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_discoveredState')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'discoveredState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_discoveredState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredState', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_discoveredState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredState', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_tenantName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_tenantName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_tenantName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantName', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_tenantDescription')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'tenantDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_tenantDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantDescription', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_tenantDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantDescription', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_hostInventoryIds')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'hostInventoryIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_hostInventoryIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'hostInventoryIds', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_hostInventoryIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'hostInventoryIds', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_ansibleProjectIds')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'ansibleProjectIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_ansibleProjectIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'ansibleProjectIds', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_ansibleProjectIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'ansibleProjectIds', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_classSimpleName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_sessionId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_userKey')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'userKey', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_saves')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'saves', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_objectTitle')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_displayPage')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_editPage')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'editPage', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_userPage')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'userPage', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_download')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'download', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'download', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_objectSuggest')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_objectText')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'objectText', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_solrId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'solrId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_hubId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'hubId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'hubId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_clusterName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'clusterName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_tenantId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_tenantResource')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantResource', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_discoveredName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'discoveredName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_discoveredName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_discoveredName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'discoveredName', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_createdByUserId')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'createdByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_createdByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'createdByUserId', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_createdByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'createdByUserId', false);
  });

  document.querySelector('#pageSelectSortTenantDiscovered_createdByFullName')?.addEventListener('change', (event) => {
    sort('TenantDiscovered', 'createdByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantDiscovered_createdByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantDiscovered', 'createdByFullName', true);
  });
  document.querySelector('#pageStatsTenantDiscovered_createdByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantDiscovered', 'createdByFullName', false);
  });
          document.querySelector('#fqTenantDiscovered_created')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_created')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_created')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_archived')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_archived')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_archived')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_tenantName')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_tenantName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_tenantName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_tenantName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_tenantDescription')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_tenantDescription')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_tenantDescription')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_displayPage')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_editPage')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_userPage')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_download')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_download')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_download')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_hubId')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_clusterName')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_tenantId')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#fqTenantDiscovered_discoveredName')?.addEventListener('change', (event) => {
            fqChange('TenantDiscovered', event.currentTarget, facetChangeTenantDiscoveredSuccess, facetChangeTenantDiscoveredError);
          });
          document.querySelector('#buttonFacetTenantDiscovered_discoveredName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantDiscovered_discoveredName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantDiscovered_discoveredName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantDiscovered_discoveredName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantDiscovered', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantDiscovered_discoveredName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantDiscovered', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenantDiscovered')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var tenantResource =  event.currentTarget.getAttribute('data-tenantResource');
      deleteTenantDiscovered(
          event.currentTarget
          , tenantResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenantDiscovered')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenantDiscovered(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
