Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeProviderIntent')?.addEventListener('change', (event) => {
    facetRangeChange('ProviderIntent', event.target.value);
  });

  document.querySelector('#pageSelectSortProviderIntent_pk')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'pk', true);
  });
  document.querySelector('#pageStatsProviderIntent_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'pk', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_created')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'created', true);
  });
  document.querySelector('#pageStatsProviderIntent_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'created', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_modified')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'modified', true);
  });
  document.querySelector('#pageStatsProviderIntent_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'modified', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_archived')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'archived', true);
  });
  document.querySelector('#pageStatsProviderIntent_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'archived', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_createdByEmail')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsProviderIntent_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_createdByUserId')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'createdByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_createdByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'createdByUserId', true);
  });
  document.querySelector('#pageStatsProviderIntent_createdByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'createdByUserId', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_createdByFullName')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'createdByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_createdByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'createdByFullName', true);
  });
  document.querySelector('#pageStatsProviderIntent_createdByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'createdByFullName', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_createdVia')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'createdVia', true);
  });
  document.querySelector('#pageStatsProviderIntent_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_intentState')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'intentState', true);
  });
  document.querySelector('#pageStatsProviderIntent_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'intentState', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_requestedState')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'requestedState', true);
  });
  document.querySelector('#pageStatsProviderIntent_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_realizedState')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'realizedState', true);
  });
  document.querySelector('#pageStatsProviderIntent_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_providerName')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'providerName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_providerName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'providerName', true);
  });
  document.querySelector('#pageStatsProviderIntent_providerName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'providerName', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_description')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'description', true);
  });
  document.querySelector('#pageStatsProviderIntent_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'description', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_requested')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'requested', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_requested')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'requested', true);
  });
  document.querySelector('#pageStatsProviderIntent_requested')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'requested', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_locked')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'locked', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_locked')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'locked', true);
  });
  document.querySelector('#pageStatsProviderIntent_locked')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'locked', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_dcmDiscovered')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'dcmDiscovered', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_dcmDiscovered')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'dcmDiscovered', true);
  });
  document.querySelector('#pageStatsProviderIntent_dcmDiscovered')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'dcmDiscovered', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_dcmRealized')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'dcmRealized', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_dcmRealized')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'dcmRealized', true);
  });
  document.querySelector('#pageStatsProviderIntent_dcmRealized')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'dcmRealized', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsProviderIntent_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_classSimpleName')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsProviderIntent_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsProviderIntent_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_sessionId')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'sessionId', true);
  });
  document.querySelector('#pageStatsProviderIntent_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_userKey')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'userKey', true);
  });
  document.querySelector('#pageStatsProviderIntent_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'userKey', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_saves')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'saves', true);
  });
  document.querySelector('#pageStatsProviderIntent_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'saves', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_objectTitle')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'objectTitle', true);
  });
  document.querySelector('#pageStatsProviderIntent_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_displayPage')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'displayPage', true);
  });
  document.querySelector('#pageStatsProviderIntent_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_editPage')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'editPage', true);
  });
  document.querySelector('#pageStatsProviderIntent_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'editPage', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_userPage')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'userPage', true);
  });
  document.querySelector('#pageStatsProviderIntent_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'userPage', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_download')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'download', true);
  });
  document.querySelector('#pageStatsProviderIntent_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'download', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_objectSuggest')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsProviderIntent_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_objectText')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'objectText', true);
  });
  document.querySelector('#pageStatsProviderIntent_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'objectText', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_solrId')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'solrId', true);
  });
  document.querySelector('#pageStatsProviderIntent_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'solrId', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_providerUrl')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'providerUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_providerUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'providerUrl', true);
  });
  document.querySelector('#pageStatsProviderIntent_providerUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'providerUrl', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_providerId')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'providerId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_providerId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'providerId', true);
  });
  document.querySelector('#pageStatsProviderIntent_providerId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'providerId', false);
  });

  document.querySelector('#pageSelectSortProviderIntent_providerResource')?.addEventListener('change', (event) => {
    sort('ProviderIntent', 'providerResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProviderIntent_providerResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ProviderIntent', 'providerResource', true);
  });
  document.querySelector('#pageStatsProviderIntent_providerResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ProviderIntent', 'providerResource', false);
  });
          document.querySelector('#fqProviderIntent_created')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_created')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_created')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_archived')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_providerName')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_providerName')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_providerName')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_providerName')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_providerName')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_providerName')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_description')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_description')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_description')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_locked')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_locked')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_locked')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_locked')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_locked')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_locked')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_displayPage')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_editPage')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_userPage')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_download')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_download')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_download')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_providerId')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_providerId')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_providerId')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_providerId')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_providerId')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_providerId')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#fqProviderIntent_providerResource')?.addEventListener('change', (event) => {
            fqChange('ProviderIntent', event.currentTarget, facetChangeProviderIntentSuccess, facetChangeProviderIntentError);
          });
          document.querySelector('#buttonFacetProviderIntent_providerResource')?.addEventListener('click', (event) => {
            facetFieldChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProviderIntent_providerResource')?.addEventListener('change', (event) => {
            facetPivotChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProviderIntent_providerResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProviderIntent_providerResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('ProviderIntent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProviderIntent_providerResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('ProviderIntent', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteProviderIntent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var providerResource =  event.currentTarget.getAttribute('data-providerResource');
      deleteProviderIntent(
          event.currentTarget
          , providerResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterProviderIntent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterProviderIntent(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerResource:' + event.currentTarget.getAttribute('data-providerResource') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
