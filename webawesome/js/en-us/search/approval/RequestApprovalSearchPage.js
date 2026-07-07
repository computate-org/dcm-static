Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeRequestApproval')?.addEventListener('change', (event) => {
    facetRangeChange('RequestApproval', event.target.value);
  });

  document.querySelector('#pageSelectSortRequestApproval_pk')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'pk', true);
  });
  document.querySelector('#pageStatsRequestApproval_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'pk', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_created')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'created', true);
  });
  document.querySelector('#pageStatsRequestApproval_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'created', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_modified')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'modified', true);
  });
  document.querySelector('#pageStatsRequestApproval_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'modified', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_archived')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'archived', true);
  });
  document.querySelector('#pageStatsRequestApproval_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'archived', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvedByEmail')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvedByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvedByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvedByEmail', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvedByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvedByEmail', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvedByUserId')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvedByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvedByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvedByUserId', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvedByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvedByUserId', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvedByFullName')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvedByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvedByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvedByFullName', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvedByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvedByFullName', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approved')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approved', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approved')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approved', true);
  });
  document.querySelector('#pageStatsRequestApproval_approved')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approved', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvalNote')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvalNote', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvalNote')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvalNote', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvalNote')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvalNote', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_classCanonicalName')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsRequestApproval_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_classSimpleName')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsRequestApproval_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsRequestApproval_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_sessionId')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'sessionId', true);
  });
  document.querySelector('#pageStatsRequestApproval_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_userKey')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'userKey', true);
  });
  document.querySelector('#pageStatsRequestApproval_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'userKey', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_saves')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'saves', true);
  });
  document.querySelector('#pageStatsRequestApproval_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'saves', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_objectTitle')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'objectTitle', true);
  });
  document.querySelector('#pageStatsRequestApproval_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_displayPage')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'displayPage', true);
  });
  document.querySelector('#pageStatsRequestApproval_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_editPage')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'editPage', true);
  });
  document.querySelector('#pageStatsRequestApproval_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'editPage', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_userPage')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'userPage', true);
  });
  document.querySelector('#pageStatsRequestApproval_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'userPage', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_download')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'download', true);
  });
  document.querySelector('#pageStatsRequestApproval_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'download', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_objectSuggest')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsRequestApproval_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_objectText')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'objectText', true);
  });
  document.querySelector('#pageStatsRequestApproval_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'objectText', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_solrId')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'solrId', true);
  });
  document.querySelector('#pageStatsRequestApproval_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'solrId', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_modelType')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'modelType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_modelType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'modelType', true);
  });
  document.querySelector('#pageStatsRequestApproval_modelType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'modelType', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_modelResource')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'modelResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_modelResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'modelResource', true);
  });
  document.querySelector('#pageStatsRequestApproval_modelResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'modelResource', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvalName')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvalName', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvalName', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvalId')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvalId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvalId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvalId', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvalId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvalId', false);
  });

  document.querySelector('#pageSelectSortRequestApproval_approvalTitle')?.addEventListener('change', (event) => {
    sort('RequestApproval', 'approvalTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsRequestApproval_approvalTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('RequestApproval', 'approvalTitle', true);
  });
  document.querySelector('#pageStatsRequestApproval_approvalTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('RequestApproval', 'approvalTitle', false);
  });
          document.querySelector('#fqRequestApproval_created')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_created')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_created')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_archived')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_archived')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_archived')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_approved')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_approved')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_approved')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_approved')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_approved')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_approved')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_approvalNote')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_approvalNote')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_approvalNote')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_approvalNote')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_approvalNote')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_approvalNote')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_displayPage')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_editPage')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_userPage')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_download')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_download')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_download')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_modelType')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_modelType')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_modelType')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_modelType')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_modelType')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_modelType')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_modelResource')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_modelResource')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_modelResource')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_modelResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_modelResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_modelResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_approvalName')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_approvalName')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_approvalName')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_approvalName')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_approvalName')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_approvalName')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_approvalId')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_approvalId')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_approvalId')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_approvalId')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_approvalId')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_approvalId')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#fqRequestApproval_approvalTitle')?.addEventListener('change', (event) => {
            fqChange('RequestApproval', event.currentTarget, facetChangeRequestApprovalSuccess, facetChangeRequestApprovalError);
          });
          document.querySelector('#buttonFacetRequestApproval_approvalTitle')?.addEventListener('click', (event) => {
            facetFieldChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotRequestApproval_approvalTitle')?.addEventListener('change', (event) => {
            facetPivotChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapRequestApproval_approvalTitle')?.addEventListener('change', (event) => {
            facetRangeGapChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartRequestApproval_approvalTitle')?.addEventListener('change', (event) => {
            facetRangeStartChange('RequestApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndRequestApproval_approvalTitle')?.addEventListener('change', (event) => {
            facetRangeEndChange('RequestApproval', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteRequestApproval')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var approvalId =  event.currentTarget.getAttribute('data-approvalId');
      deleteRequestApproval(
          event.currentTarget
          , approvalId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterRequestApproval')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterRequestApproval(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
