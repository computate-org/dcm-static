Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenantIntent')?.addEventListener('change', (event) => {
    facetRangeChange('TenantIntent', event.target.value);
  });

  document.querySelector('#pageSelectSortTenantIntent_pk')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'pk', true);
  });
  document.querySelector('#pageStatsTenantIntent_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_created')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'created', true);
  });
  document.querySelector('#pageStatsTenantIntent_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'created', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_modified')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'modified', true);
  });
  document.querySelector('#pageStatsTenantIntent_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_archived')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'archived', true);
  });
  document.querySelector('#pageStatsTenantIntent_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_createdByEmail')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsTenantIntent_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_createdVia')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'createdVia', true);
  });
  document.querySelector('#pageStatsTenantIntent_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_intentState')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'intentState', true);
  });
  document.querySelector('#pageStatsTenantIntent_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'intentState', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_requestedState')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'requestedState', true);
  });
  document.querySelector('#pageStatsTenantIntent_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_realizedState')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'realizedState', true);
  });
  document.querySelector('#pageStatsTenantIntent_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_tenantName')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_tenantName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'tenantName', true);
  });
  document.querySelector('#pageStatsTenantIntent_tenantName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'tenantName', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_tenantDescription')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'tenantDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_tenantDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'tenantDescription', true);
  });
  document.querySelector('#pageStatsTenantIntent_tenantDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'tenantDescription', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_hostInventoryIds')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'hostInventoryIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_hostInventoryIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'hostInventoryIds', true);
  });
  document.querySelector('#pageStatsTenantIntent_hostInventoryIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'hostInventoryIds', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_ansibleProjectIds')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'ansibleProjectIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_ansibleProjectIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'ansibleProjectIds', true);
  });
  document.querySelector('#pageStatsTenantIntent_ansibleProjectIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'ansibleProjectIds', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_pageId')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'pageId', true);
  });
  document.querySelector('#pageStatsTenantIntent_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'pageId', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenantIntent_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_classSimpleName')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenantIntent_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenantIntent_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_sessionId')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenantIntent_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_userKey')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'userKey', true);
  });
  document.querySelector('#pageStatsTenantIntent_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_saves')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'saves', true);
  });
  document.querySelector('#pageStatsTenantIntent_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_objectTitle')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenantIntent_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_displayPage')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenantIntent_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_editPage')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'editPage', true);
  });
  document.querySelector('#pageStatsTenantIntent_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_userPage')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'userPage', true);
  });
  document.querySelector('#pageStatsTenantIntent_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_download')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'download', true);
  });
  document.querySelector('#pageStatsTenantIntent_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'download', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_objectSuggest')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenantIntent_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_objectText')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'objectText', true);
  });
  document.querySelector('#pageStatsTenantIntent_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_solrId')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'solrId', true);
  });
  document.querySelector('#pageStatsTenantIntent_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_tenantId')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'tenantId', true);
  });
  document.querySelector('#pageStatsTenantIntent_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_tenantResource')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'tenantResource', true);
  });
  document.querySelector('#pageStatsTenantIntent_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_hubId')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'hubId', true);
  });
  document.querySelector('#pageStatsTenantIntent_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'hubId', false);
  });

  document.querySelector('#pageSelectSortTenantIntent_clusterName')?.addEventListener('change', (event) => {
    sort('TenantIntent', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantIntent_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantIntent', 'clusterName', true);
  });
  document.querySelector('#pageStatsTenantIntent_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantIntent', 'clusterName', false);
  });
          document.querySelector('#fqTenantIntent_created')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_created')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_created')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_archived')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_archived')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_archived')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_tenantName')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_tenantName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_tenantName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_tenantName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_tenantDescription')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_tenantDescription')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_tenantDescription')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_pageId')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_displayPage')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_editPage')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_userPage')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_download')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_download')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_download')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_tenantId')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_tenantResource')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_tenantResource')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_tenantResource')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_tenantResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_tenantResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_tenantResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_hubId')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#fqTenantIntent_clusterName')?.addEventListener('change', (event) => {
            fqChange('TenantIntent', event.currentTarget, facetChangeTenantIntentSuccess, facetChangeTenantIntentError);
          });
          document.querySelector('#buttonFacetTenantIntent_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantIntent_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantIntent_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantIntent_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantIntent_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantIntent', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenantIntent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var tenantResource =  event.currentTarget.getAttribute('data-tenantResource');
      deleteTenantIntent(
          event.currentTarget
          , tenantResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenantIntent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenantIntent(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
