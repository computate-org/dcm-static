Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeProviderRequested')?.addEventListener('change', (event) => {
    facetRangeChange('ProviderRequested', event.target.value);
  });

  document.querySelector('#pageSelectSortProviderRequested_pk')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'pk', true);
  });
  document.querySelector('#pageStatsProviderRequested_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'pk', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_created')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'created', true);
  });
  document.querySelector('#pageStatsProviderRequested_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'created', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_modified')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'modified', true);
  });
  document.querySelector('#pageStatsProviderRequested_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'modified', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_archived')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'archived', true);
  });
  document.querySelector('#pageStatsProviderRequested_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'archived', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerResource')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerResource', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerResource', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestApprovals')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestApprovals', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestApprovals')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestApprovals', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestApprovals')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestApprovals', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_createdByEmail')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsProviderRequested_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_createdByUserId')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'createdByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_createdByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'createdByUserId', true);
  });
  document.querySelector('#pageStatsProviderRequested_createdByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'createdByUserId', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_createdByFullName')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'createdByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_createdByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'createdByFullName', true);
  });
  document.querySelector('#pageStatsProviderRequested_createdByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'createdByFullName', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_createdVia')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'createdVia', true);
  });
  document.querySelector('#pageStatsProviderRequested_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_intentState')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'intentState', true);
  });
  document.querySelector('#pageStatsProviderRequested_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'intentState', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestedState')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestedState', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_realizedState')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'realizedState', true);
  });
  document.querySelector('#pageStatsProviderRequested_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerName')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerName', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerName', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_description')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'description', true);
  });
  document.querySelector('#pageStatsProviderRequested_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'description', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerRequestInstructions')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerRequestInstructions', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerRequestInstructions')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerRequestInstructions', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerRequestInstructions')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerRequestInstructions', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerUrl')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerUrl', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerUrl', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestedClientId')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestedClientId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestedClientId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestedClientId', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestedClientId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestedClientId', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestedEnvironmentVariable')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestedEnvironmentVariable', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestedEnvironmentVariable')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestedEnvironmentVariable', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestedEnvironmentVariable')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestedEnvironmentVariable', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_locked')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'locked', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_locked')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'locked', true);
  });
  document.querySelector('#pageStatsProviderRequested_locked')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'locked', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerDiscovered')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerDiscovered', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerDiscovered')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerDiscovered', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerDiscovered')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerDiscovered', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerRealized')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerRealized', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerRealized')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerRealized', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerRealized')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerRealized', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsProviderRequested_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_classSimpleName')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsProviderRequested_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsProviderRequested_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_sessionId')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'sessionId', true);
  });
  document.querySelector('#pageStatsProviderRequested_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_userKey')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'userKey', true);
  });
  document.querySelector('#pageStatsProviderRequested_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'userKey', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_saves')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'saves', true);
  });
  document.querySelector('#pageStatsProviderRequested_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'saves', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_objectTitle')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'objectTitle', true);
  });
  document.querySelector('#pageStatsProviderRequested_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_displayPage')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'displayPage', true);
  });
  document.querySelector('#pageStatsProviderRequested_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_editPage')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'editPage', true);
  });
  document.querySelector('#pageStatsProviderRequested_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'editPage', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_userPage')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'userPage', true);
  });
  document.querySelector('#pageStatsProviderRequested_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'userPage', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_download')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'download', true);
  });
  document.querySelector('#pageStatsProviderRequested_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'download', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_objectSuggest')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsProviderRequested_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_objectText')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'objectText', true);
  });
  document.querySelector('#pageStatsProviderRequested_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'objectText', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_solrId')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'solrId', true);
  });
  document.querySelector('#pageStatsProviderRequested_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'solrId', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_providerId')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'providerId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_providerId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'providerId', true);
  });
  document.querySelector('#pageStatsProviderRequested_providerId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'providerId', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestedNumber')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestedNumber', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestedNumber')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestedNumber', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestedNumber')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestedNumber', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestedId')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestedId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestedId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestedId', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestedId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestedId', false);
  });

  document.querySelector('#pageSelectSortProviderRequested_requestedName')?.addEventListener('change', (event) => {
    sort('ProviderRequested', 'requestedName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderRequested_requestedName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderRequested', 'requestedName', true);
  });
  document.querySelector('#pageStatsProviderRequested_requestedName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderRequested', 'requestedName', false);
  });
          document.querySelector('#fqProviderRequested_created')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_created')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_created')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_archived')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_providerName')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_providerName')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_providerName')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_providerName')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_providerName')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_providerName')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_description')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_description')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_description')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_locked')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_locked')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_locked')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_locked')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_locked')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_locked')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_displayPage')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_editPage')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_userPage')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_download')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_download')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_download')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_providerId')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_providerId')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_providerId')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_providerId')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_providerId')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_providerId')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_requestedNumber')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_requestedNumber')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_requestedNumber')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_requestedNumber')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_requestedNumber')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_requestedNumber')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_requestedId')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_requestedId')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_requestedId')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_requestedId')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_requestedId')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_requestedId')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#fqProviderRequested_requestedName')?.addEventListener('change', (event) => {
            fqChange('ProviderRequested', event.currentTarget, facetChangeProviderRequestedSuccess, facetChangeProviderRequestedError);
          });
          document.querySelector('#buttonFacetProviderRequested_requestedName')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderRequested_requestedName')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderRequested_requestedName')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderRequested_requestedName')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderRequested', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderRequested_requestedName')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderRequested', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteProviderRequested')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var requestedId =  event.currentTarget.getAttribute('data-requestedId');
      deleteProviderRequested(
          event.currentTarget
          , requestedId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterProviderRequested')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterProviderRequested(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
