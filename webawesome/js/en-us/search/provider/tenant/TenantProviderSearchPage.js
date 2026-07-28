Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenantProvider')?.addEventListener('change', (event) => {
    facetRangeChange('TenantProvider', event.target.value);
  });

  document.querySelector('#pageSelectSortTenantProvider_pk')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'pk', true);
  });
  document.querySelector('#pageStatsTenantProvider_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_created')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'created', true);
  });
  document.querySelector('#pageStatsTenantProvider_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'created', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_modified')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'modified', true);
  });
  document.querySelector('#pageStatsTenantProvider_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_archived')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'archived', true);
  });
  document.querySelector('#pageStatsTenantProvider_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_providerName')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'providerName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_providerName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'providerName', true);
  });
  document.querySelector('#pageStatsTenantProvider_providerName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'providerName', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenantProvider_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_classSimpleName')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenantProvider_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenantProvider_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_sessionId')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenantProvider_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_userKey')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'userKey', true);
  });
  document.querySelector('#pageStatsTenantProvider_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_saves')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'saves', true);
  });
  document.querySelector('#pageStatsTenantProvider_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_objectTitle')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenantProvider_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_displayPage')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenantProvider_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_editPage')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'editPage', true);
  });
  document.querySelector('#pageStatsTenantProvider_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_userPage')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'userPage', true);
  });
  document.querySelector('#pageStatsTenantProvider_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_download')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'download', true);
  });
  document.querySelector('#pageStatsTenantProvider_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'download', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_objectSuggest')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenantProvider_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_objectText')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'objectText', true);
  });
  document.querySelector('#pageStatsTenantProvider_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_solrId')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'solrId', true);
  });
  document.querySelector('#pageStatsTenantProvider_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_providerId')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'providerId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_providerId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'providerId', true);
  });
  document.querySelector('#pageStatsTenantProvider_providerId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'providerId', false);
  });

  document.querySelector('#pageSelectSortTenantProvider_providerUrl')?.addEventListener('change', (event) => {
    sort('TenantProvider', 'providerUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantProvider_providerUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantProvider', 'providerUrl', true);
  });
  document.querySelector('#pageStatsTenantProvider_providerUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantProvider', 'providerUrl', false);
  });
          document.querySelector('#fqTenantProvider_created')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_created')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_created')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_archived')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_archived')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_archived')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_providerName')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_providerName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_providerName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_providerName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_providerName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_providerName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_displayPage')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_editPage')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_userPage')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_download')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_download')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_download')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#fqTenantProvider_providerId')?.addEventListener('change', (event) => {
            fqChange('TenantProvider', event.currentTarget, facetChangeTenantProviderSuccess, facetChangeTenantProviderError);
          });
          document.querySelector('#buttonFacetTenantProvider_providerId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantProvider_providerId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantProvider_providerId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantProvider_providerId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantProvider', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantProvider_providerId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantProvider', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenantProvider')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var providerId =  event.currentTarget.getAttribute('data-providerId');
      deleteTenantProvider(
          event.currentTarget
          , providerId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenantProvider')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenantProvider(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
