Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenantRequested')?.addEventListener('change', (event) => {
    facetRangeChange('TenantRequested', event.target.value);
  });

  document.querySelector('#pageSelectSortTenantRequested_pk')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'pk', true);
  });
  document.querySelector('#pageStatsTenantRequested_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_created')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'created', true);
  });
  document.querySelector('#pageStatsTenantRequested_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'created', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_modified')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'modified', true);
  });
  document.querySelector('#pageStatsTenantRequested_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_archived')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'archived', true);
  });
  document.querySelector('#pageStatsTenantRequested_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantResource')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantResource', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_requestApprovals')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'requestApprovals', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_requestApprovals')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'requestApprovals', true);
  });
  document.querySelector('#pageStatsTenantRequested_requestApprovals')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'requestApprovals', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_createdByEmail')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsTenantRequested_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_createdByUserId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'createdByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_createdByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'createdByUserId', true);
  });
  document.querySelector('#pageStatsTenantRequested_createdByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'createdByUserId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_createdByFullName')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'createdByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_createdByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'createdByFullName', true);
  });
  document.querySelector('#pageStatsTenantRequested_createdByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'createdByFullName', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_createdVia')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'createdVia', true);
  });
  document.querySelector('#pageStatsTenantRequested_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_intentState')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'intentState', true);
  });
  document.querySelector('#pageStatsTenantRequested_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'intentState', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_requestedState')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'requestedState', true);
  });
  document.querySelector('#pageStatsTenantRequested_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_realizedState')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'realizedState', true);
  });
  document.querySelector('#pageStatsTenantRequested_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantName')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantName', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantName', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantDescription')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantDescription', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantDescription', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantRealized')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantRealized', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantRealized')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantRealized', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantRealized')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantRealized', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_locked')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'locked', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_locked')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'locked', true);
  });
  document.querySelector('#pageStatsTenantRequested_locked')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'locked', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_hostInventoryIds')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'hostInventoryIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_hostInventoryIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'hostInventoryIds', true);
  });
  document.querySelector('#pageStatsTenantRequested_hostInventoryIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'hostInventoryIds', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_ansibleProjectIds')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'ansibleProjectIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_ansibleProjectIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'ansibleProjectIds', true);
  });
  document.querySelector('#pageStatsTenantRequested_ansibleProjectIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'ansibleProjectIds', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenantRequested_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_classSimpleName')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenantRequested_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenantRequested_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_sessionId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenantRequested_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_userKey')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'userKey', true);
  });
  document.querySelector('#pageStatsTenantRequested_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_saves')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'saves', true);
  });
  document.querySelector('#pageStatsTenantRequested_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_objectTitle')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenantRequested_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_displayPage')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenantRequested_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_editPage')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'editPage', true);
  });
  document.querySelector('#pageStatsTenantRequested_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_userPage')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'userPage', true);
  });
  document.querySelector('#pageStatsTenantRequested_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_download')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'download', true);
  });
  document.querySelector('#pageStatsTenantRequested_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'download', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_objectSuggest')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenantRequested_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_objectText')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'objectText', true);
  });
  document.querySelector('#pageStatsTenantRequested_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_solrId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'solrId', true);
  });
  document.querySelector('#pageStatsTenantRequested_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_hubId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'hubId', true);
  });
  document.querySelector('#pageStatsTenantRequested_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'hubId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_clusterName')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'clusterName', true);
  });
  document.querySelector('#pageStatsTenantRequested_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsTenantRequested_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantId', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantRequestedNumber')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantRequestedNumber', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantRequestedNumber')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantRequestedNumber', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantRequestedNumber')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantRequestedNumber', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantRequestedId')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantRequestedId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantRequestedId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantRequestedId', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantRequestedId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantRequestedId', false);
  });

  document.querySelector('#pageSelectSortTenantRequested_tenantRequestedName')?.addEventListener('change', (event) => {
    sort('TenantRequested', 'tenantRequestedName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRequested_tenantRequestedName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRequested', 'tenantRequestedName', true);
  });
  document.querySelector('#pageStatsTenantRequested_tenantRequestedName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRequested', 'tenantRequestedName', false);
  });
          document.querySelector('#fqTenantRequested_created')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_created')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_created')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_archived')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_archived')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_archived')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_tenantName')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_tenantName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_tenantName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_tenantName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_tenantDescription')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_tenantDescription')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_tenantDescription')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_locked')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_locked')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_locked')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_locked')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_locked')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_locked')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_displayPage')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_editPage')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_userPage')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_download')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_download')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_download')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_hubId')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_clusterName')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_tenantId')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_tenantRequestedNumber')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_tenantRequestedNumber')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_tenantRequestedNumber')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_tenantRequestedNumber')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_tenantRequestedNumber')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_tenantRequestedNumber')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_tenantRequestedId')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_tenantRequestedId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_tenantRequestedId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_tenantRequestedId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_tenantRequestedId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_tenantRequestedId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#fqTenantRequested_tenantRequestedName')?.addEventListener('change', (event) => {
            fqChange('TenantRequested', event.currentTarget, facetChangeTenantRequestedSuccess, facetChangeTenantRequestedError);
          });
          document.querySelector('#buttonFacetTenantRequested_tenantRequestedName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRequested_tenantRequestedName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRequested_tenantRequestedName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRequested_tenantRequestedName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRequested_tenantRequestedName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRequested', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenantRequested')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var tenantRequestedId =  event.currentTarget.getAttribute('data-tenantRequestedId');
      deleteTenantRequested(
          event.currentTarget
          , tenantRequestedId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenantRequested')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenantRequested(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantRequestedId:' + event.currentTarget.getAttribute('data-tenantRequestedId') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
