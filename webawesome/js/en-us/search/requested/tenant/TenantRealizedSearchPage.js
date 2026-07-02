Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenantRealized')?.addEventListener('change', (event) => {
    facetRangeChange('TenantRealized', event.target.value);
  });

  document.querySelector('#pageSelectSortTenantRealized_pk')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'pk', true);
  });
  document.querySelector('#pageStatsTenantRealized_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_created')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'created', true);
  });
  document.querySelector('#pageStatsTenantRealized_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'created', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_modified')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'modified', true);
  });
  document.querySelector('#pageStatsTenantRealized_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_archived')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'archived', true);
  });
  document.querySelector('#pageStatsTenantRealized_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_createdByEmail')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsTenantRealized_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_createdVia')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'createdVia', true);
  });
  document.querySelector('#pageStatsTenantRealized_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_intentState')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'intentState', true);
  });
  document.querySelector('#pageStatsTenantRealized_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'intentState', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_requestedState')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'requestedState', true);
  });
  document.querySelector('#pageStatsTenantRealized_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_realizedState')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'realizedState', true);
  });
  document.querySelector('#pageStatsTenantRealized_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_tenantName')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_tenantName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'tenantName', true);
  });
  document.querySelector('#pageStatsTenantRealized_tenantName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'tenantName', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_tenantDescription')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'tenantDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_tenantDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'tenantDescription', true);
  });
  document.querySelector('#pageStatsTenantRealized_tenantDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'tenantDescription', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_pageId')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'pageId', true);
  });
  document.querySelector('#pageStatsTenantRealized_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'pageId', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenantRealized_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_classSimpleName')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenantRealized_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenantRealized_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_sessionId')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenantRealized_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_userKey')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'userKey', true);
  });
  document.querySelector('#pageStatsTenantRealized_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_saves')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'saves', true);
  });
  document.querySelector('#pageStatsTenantRealized_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_objectTitle')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenantRealized_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_displayPage')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenantRealized_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_editPage')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'editPage', true);
  });
  document.querySelector('#pageStatsTenantRealized_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_userPage')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'userPage', true);
  });
  document.querySelector('#pageStatsTenantRealized_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_download')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'download', true);
  });
  document.querySelector('#pageStatsTenantRealized_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'download', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_objectSuggest')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenantRealized_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_objectText')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'objectText', true);
  });
  document.querySelector('#pageStatsTenantRealized_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_solrId')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'solrId', true);
  });
  document.querySelector('#pageStatsTenantRealized_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_tenantId')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'tenantId', true);
  });
  document.querySelector('#pageStatsTenantRealized_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_tenantResource')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'tenantResource', true);
  });
  document.querySelector('#pageStatsTenantRealized_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_hubId')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'hubId', true);
  });
  document.querySelector('#pageStatsTenantRealized_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'hubId', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_clusterName')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'clusterName', true);
  });
  document.querySelector('#pageStatsTenantRealized_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortTenantRealized_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('TenantRealized', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantRealized_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantRealized', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsTenantRealized_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantRealized', 'aapOrganizationId', false);
  });
          document.querySelector('#fqTenantRealized_created')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_created')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_created')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_archived')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_archived')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_archived')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_tenantName')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_tenantName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_tenantName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_tenantName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_tenantDescription')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_tenantDescription')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_tenantDescription')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_tenantDescription')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_pageId')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_displayPage')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_editPage')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_userPage')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_download')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_download')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_download')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_tenantId')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_tenantResource')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_tenantResource')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_tenantResource')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_tenantResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_tenantResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_tenantResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_hubId')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#fqTenantRealized_clusterName')?.addEventListener('change', (event) => {
            fqChange('TenantRealized', event.currentTarget, facetChangeTenantRealizedSuccess, facetChangeTenantRealizedError);
          });
          document.querySelector('#buttonFacetTenantRealized_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantRealized_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantRealized_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantRealized_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantRealized', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantRealized_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantRealized', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenantRealized')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var tenantResource =  event.currentTarget.getAttribute('data-tenantResource');
      deleteTenantRealized(
          event.currentTarget
          , tenantResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenantRealized')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenantRealized(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
