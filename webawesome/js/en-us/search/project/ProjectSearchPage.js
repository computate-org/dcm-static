Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeProject')?.addEventListener('change', (event) => {
    facetRangeChange('Project', event.target.value);
  });

  document.querySelector('#pageSelectSortProject_pk')?.addEventListener('change', (event) => {
    sort('Project', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'pk', true);
  });
  document.querySelector('#pageStatsProject_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'pk', false);
  });

  document.querySelector('#pageSelectSortProject_created')?.addEventListener('change', (event) => {
    sort('Project', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'created', true);
  });
  document.querySelector('#pageStatsProject_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'created', false);
  });

  document.querySelector('#pageSelectSortProject_modified')?.addEventListener('change', (event) => {
    sort('Project', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'modified', true);
  });
  document.querySelector('#pageStatsProject_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'modified', false);
  });

  document.querySelector('#pageSelectSortProject_archived')?.addEventListener('change', (event) => {
    sort('Project', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'archived', true);
  });
  document.querySelector('#pageStatsProject_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'archived', false);
  });

  document.querySelector('#pageSelectSortProject_projectName')?.addEventListener('change', (event) => {
    sort('Project', 'projectName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_projectName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'projectName', true);
  });
  document.querySelector('#pageStatsProject_projectName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'projectName', false);
  });

  document.querySelector('#pageSelectSortProject_description')?.addEventListener('change', (event) => {
    sort('Project', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'description', true);
  });
  document.querySelector('#pageStatsProject_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'description', false);
  });

  document.querySelector('#pageSelectSortProject_gpuEnabled')?.addEventListener('change', (event) => {
    sort('Project', 'gpuEnabled', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_gpuEnabled')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'gpuEnabled', true);
  });
  document.querySelector('#pageStatsProject_gpuEnabled')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'gpuEnabled', false);
  });

  document.querySelector('#pageSelectSortProject_podRestartCount')?.addEventListener('change', (event) => {
    sort('Project', 'podRestartCount', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_podRestartCount')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'podRestartCount', true);
  });
  document.querySelector('#pageStatsProject_podRestartCount')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'podRestartCount', false);
  });

  document.querySelector('#pageSelectSortProject_podsRestarting')?.addEventListener('change', (event) => {
    sort('Project', 'podsRestarting', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_podsRestarting')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'podsRestarting', true);
  });
  document.querySelector('#pageStatsProject_podsRestarting')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'podsRestarting', false);
  });

  document.querySelector('#pageSelectSortProject_podTerminatingCount')?.addEventListener('change', (event) => {
    sort('Project', 'podTerminatingCount', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_podTerminatingCount')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'podTerminatingCount', true);
  });
  document.querySelector('#pageStatsProject_podTerminatingCount')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'podTerminatingCount', false);
  });

  document.querySelector('#pageSelectSortProject_podsTerminating')?.addEventListener('change', (event) => {
    sort('Project', 'podsTerminating', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_podsTerminating')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'podsTerminating', true);
  });
  document.querySelector('#pageStatsProject_podsTerminating')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'podsTerminating', false);
  });

  document.querySelector('#pageSelectSortProject_fullPvcsCount')?.addEventListener('change', (event) => {
    sort('Project', 'fullPvcsCount', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_fullPvcsCount')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'fullPvcsCount', true);
  });
  document.querySelector('#pageStatsProject_fullPvcsCount')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'fullPvcsCount', false);
  });

  document.querySelector('#pageSelectSortProject_fullPvcs')?.addEventListener('change', (event) => {
    sort('Project', 'fullPvcs', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_fullPvcs')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'fullPvcs', true);
  });
  document.querySelector('#pageStatsProject_fullPvcs')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'fullPvcs', false);
  });

  document.querySelector('#pageSelectSortProject_namespaceTerminating')?.addEventListener('change', (event) => {
    sort('Project', 'namespaceTerminating', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_namespaceTerminating')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'namespaceTerminating', true);
  });
  document.querySelector('#pageStatsProject_namespaceTerminating')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'namespaceTerminating', false);
  });

  document.querySelector('#pageSelectSortProject_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Project', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsProject_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortProject_classSimpleName')?.addEventListener('change', (event) => {
    sort('Project', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsProject_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortProject_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Project', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsProject_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortProject_sessionId')?.addEventListener('change', (event) => {
    sort('Project', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'sessionId', true);
  });
  document.querySelector('#pageStatsProject_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortProject_userKey')?.addEventListener('change', (event) => {
    sort('Project', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'userKey', true);
  });
  document.querySelector('#pageStatsProject_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'userKey', false);
  });

  document.querySelector('#pageSelectSortProject_saves')?.addEventListener('change', (event) => {
    sort('Project', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'saves', true);
  });
  document.querySelector('#pageStatsProject_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'saves', false);
  });

  document.querySelector('#pageSelectSortProject_objectTitle')?.addEventListener('change', (event) => {
    sort('Project', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'objectTitle', true);
  });
  document.querySelector('#pageStatsProject_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortProject_displayPage')?.addEventListener('change', (event) => {
    sort('Project', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'displayPage', true);
  });
  document.querySelector('#pageStatsProject_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortProject_editPage')?.addEventListener('change', (event) => {
    sort('Project', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'editPage', true);
  });
  document.querySelector('#pageStatsProject_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'editPage', false);
  });

  document.querySelector('#pageSelectSortProject_userPage')?.addEventListener('change', (event) => {
    sort('Project', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'userPage', true);
  });
  document.querySelector('#pageStatsProject_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'userPage', false);
  });

  document.querySelector('#pageSelectSortProject_download')?.addEventListener('change', (event) => {
    sort('Project', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'download', true);
  });
  document.querySelector('#pageStatsProject_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'download', false);
  });

  document.querySelector('#pageSelectSortProject_objectSuggest')?.addEventListener('change', (event) => {
    sort('Project', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsProject_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortProject_objectText')?.addEventListener('change', (event) => {
    sort('Project', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'objectText', true);
  });
  document.querySelector('#pageStatsProject_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'objectText', false);
  });

  document.querySelector('#pageSelectSortProject_solrId')?.addEventListener('change', (event) => {
    sort('Project', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'solrId', true);
  });
  document.querySelector('#pageStatsProject_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'solrId', false);
  });

  document.querySelector('#pageSelectSortProject_projectResource')?.addEventListener('change', (event) => {
    sort('Project', 'projectResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_projectResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'projectResource', true);
  });
  document.querySelector('#pageStatsProject_projectResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'projectResource', false);
  });

  document.querySelector('#pageSelectSortProject_projectDisplayName')?.addEventListener('change', (event) => {
    sort('Project', 'projectDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_projectDisplayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'projectDisplayName', true);
  });
  document.querySelector('#pageStatsProject_projectDisplayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'projectDisplayName', false);
  });
          document.querySelector('#fqProject_created')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_created')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_created')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_archived')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_projectName')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_projectName')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_projectName')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_projectName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_projectName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_projectName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_description')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_description')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_description')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_gpuEnabled')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_gpuEnabled')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_gpuEnabled')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_gpuEnabled')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_gpuEnabled')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_gpuEnabled')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_podRestartCount')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_podRestartCount')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_podRestartCount')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_podRestartCount')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_podRestartCount')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_podRestartCount')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_podsRestarting')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_podsRestarting')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_podsRestarting')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_podsRestarting')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_podsRestarting')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_podsRestarting')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_podTerminatingCount')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_podTerminatingCount')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_podTerminatingCount')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_podTerminatingCount')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_podTerminatingCount')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_podTerminatingCount')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_podsTerminating')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_podsTerminating')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_podsTerminating')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_podsTerminating')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_podsTerminating')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_podsTerminating')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_fullPvcsCount')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_fullPvcsCount')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_fullPvcsCount')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_fullPvcsCount')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_fullPvcsCount')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_fullPvcsCount')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_fullPvcs')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_fullPvcs')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_fullPvcs')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_fullPvcs')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_fullPvcs')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_fullPvcs')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_namespaceTerminating')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_namespaceTerminating')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_namespaceTerminating')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_namespaceTerminating')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_namespaceTerminating')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_namespaceTerminating')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_displayPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_editPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_userPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_download')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_download')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_download')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_projectResource')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget, facetChangeProjectSuccess, facetChangeProjectError);
          });
          document.querySelector('#buttonFacetProject_projectResource')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_projectResource')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_projectResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartProject_projectResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndProject_projectResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('Project', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var projectResource =  event.currentTarget.getAttribute('data-projectResource');
      deleteProject(
          event.currentTarget
          , projectResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterProject(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
