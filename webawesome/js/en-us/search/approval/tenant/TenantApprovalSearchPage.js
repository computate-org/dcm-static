Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTenantApproval')?.addEventListener('change', (event) => {
    facetRangeChange('TenantApproval', event.target.value);
  });

  document.querySelector('#pageSelectSortTenantApproval_pk')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'pk', true);
  });
  document.querySelector('#pageStatsTenantApproval_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'pk', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_created')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'created', true);
  });
  document.querySelector('#pageStatsTenantApproval_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'created', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_modified')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'modified', true);
  });
  document.querySelector('#pageStatsTenantApproval_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'modified', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_archived')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'archived', true);
  });
  document.querySelector('#pageStatsTenantApproval_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'archived', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_requestedId')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'requestedId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_requestedId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'requestedId', true);
  });
  document.querySelector('#pageStatsTenantApproval_requestedId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'requestedId', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approvedByEmail')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approvedByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approvedByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approvedByEmail', true);
  });
  document.querySelector('#pageStatsTenantApproval_approvedByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approvedByEmail', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approvedByUserId')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approvedByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approvedByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approvedByUserId', true);
  });
  document.querySelector('#pageStatsTenantApproval_approvedByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approvedByUserId', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approvedByFullName')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approvedByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approvedByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approvedByFullName', true);
  });
  document.querySelector('#pageStatsTenantApproval_approvedByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approvedByFullName', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approved')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approved', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approved')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approved', true);
  });
  document.querySelector('#pageStatsTenantApproval_approved')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approved', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approvalNote')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approvalNote', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approvalNote')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approvalNote', true);
  });
  document.querySelector('#pageStatsTenantApproval_approvalNote')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approvalNote', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTenantApproval_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_classSimpleName')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTenantApproval_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTenantApproval_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_sessionId')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'sessionId', true);
  });
  document.querySelector('#pageStatsTenantApproval_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_userKey')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'userKey', true);
  });
  document.querySelector('#pageStatsTenantApproval_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_saves')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'saves', true);
  });
  document.querySelector('#pageStatsTenantApproval_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'saves', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_objectTitle')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTenantApproval_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_displayPage')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'displayPage', true);
  });
  document.querySelector('#pageStatsTenantApproval_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_editPage')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'editPage', true);
  });
  document.querySelector('#pageStatsTenantApproval_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_userPage')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'userPage', true);
  });
  document.querySelector('#pageStatsTenantApproval_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_download')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'download', true);
  });
  document.querySelector('#pageStatsTenantApproval_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'download', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_objectSuggest')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTenantApproval_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_objectText')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'objectText', true);
  });
  document.querySelector('#pageStatsTenantApproval_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_solrId')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'solrId', true);
  });
  document.querySelector('#pageStatsTenantApproval_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_tenantName')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_tenantName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'tenantName', true);
  });
  document.querySelector('#pageStatsTenantApproval_tenantName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'tenantName', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_tenantId')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'tenantId', true);
  });
  document.querySelector('#pageStatsTenantApproval_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_tenantResource')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'tenantResource', true);
  });
  document.querySelector('#pageStatsTenantApproval_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approvalName')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approvalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approvalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approvalName', true);
  });
  document.querySelector('#pageStatsTenantApproval_approvalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approvalName', false);
  });

  document.querySelector('#pageSelectSortTenantApproval_approvalId')?.addEventListener('change', (event) => {
    sort('TenantApproval', 'approvalId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTenantApproval_approvalId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TenantApproval', 'approvalId', true);
  });
  document.querySelector('#pageStatsTenantApproval_approvalId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TenantApproval', 'approvalId', false);
  });
          document.querySelector('#fqTenantApproval_created')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_created')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_created')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_archived')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_archived')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_archived')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_approved')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_approved')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_approved')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_approved')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_approved')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_approved')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_approvalNote')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_approvalNote')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_approvalNote')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_approvalNote')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_approvalNote')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_approvalNote')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_displayPage')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_editPage')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_userPage')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_download')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_download')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_download')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_tenantName')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_tenantName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_tenantName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_tenantName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_tenantId')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_approvalName')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_approvalName')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_approvalName')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_approvalName')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_approvalName')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_approvalName')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#fqTenantApproval_approvalId')?.addEventListener('change', (event) => {
            fqChange('TenantApproval', event.currentTarget, facetChangeTenantApprovalSuccess, facetChangeTenantApprovalError);
          });
          document.querySelector('#buttonFacetTenantApproval_approvalId')?.addEventListener('click', (event) => {
            facetFieldChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTenantApproval_approvalId')?.addEventListener('change', (event) => {
            facetPivotChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTenantApproval_approvalId')?.addEventListener('change', (event) => {
            facetRangeGapChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTenantApproval_approvalId')?.addEventListener('change', (event) => {
            facetRangeStartChange('TenantApproval', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTenantApproval_approvalId')?.addEventListener('change', (event) => {
            facetRangeEndChange('TenantApproval', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTenantApproval')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var approvalId =  event.currentTarget.getAttribute('data-approvalId');
      deleteTenantApproval(
          event.currentTarget
          , approvalId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTenantApproval')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTenantApproval(
          [{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
          , event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
