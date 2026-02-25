Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeJobTemplate')?.addEventListener('change', (event) => {
    facetRangeChange('JobTemplate', event.target.value);
  });

  document.querySelector('#pageSelectSortJobTemplate_pk')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'pk', true);
  });
  document.querySelector('#pageStatsJobTemplate_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'pk', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_created')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'created', true);
  });
  document.querySelector('#pageStatsJobTemplate_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'created', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_modified')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'modified', true);
  });
  document.querySelector('#pageStatsJobTemplate_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'modified', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_archived')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'archived', true);
  });
  document.querySelector('#pageStatsJobTemplate_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'archived', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_inventoryResource')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'inventoryResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_inventoryResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'inventoryResource', true);
  });
  document.querySelector('#pageStatsJobTemplate_inventoryResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'inventoryResource', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_ansibleProjectResource')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'ansibleProjectResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_ansibleProjectResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'ansibleProjectResource', true);
  });
  document.querySelector('#pageStatsJobTemplate_ansibleProjectResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'ansibleProjectResource', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_ansiblePlaybook')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'ansiblePlaybook', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_ansiblePlaybook')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'ansiblePlaybook', true);
  });
  document.querySelector('#pageStatsJobTemplate_ansiblePlaybook')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'ansiblePlaybook', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_jobTemplateName')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'jobTemplateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_jobTemplateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateName', true);
  });
  document.querySelector('#pageStatsJobTemplate_jobTemplateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateName', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_jobTemplateDescription')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'jobTemplateDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_jobTemplateDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateDescription', true);
  });
  document.querySelector('#pageStatsJobTemplate_jobTemplateDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateDescription', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_jobType')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'jobType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_jobType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'jobType', true);
  });
  document.querySelector('#pageStatsJobTemplate_jobType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'jobType', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_extraVars')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'extraVars', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_extraVars')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'extraVars', true);
  });
  document.querySelector('#pageStatsJobTemplate_extraVars')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'extraVars', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_classCanonicalName')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsJobTemplate_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_classSimpleName')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsJobTemplate_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsJobTemplate_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_sessionId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'sessionId', true);
  });
  document.querySelector('#pageStatsJobTemplate_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_userKey')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'userKey', true);
  });
  document.querySelector('#pageStatsJobTemplate_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'userKey', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_saves')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'saves', true);
  });
  document.querySelector('#pageStatsJobTemplate_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'saves', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_objectTitle')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'objectTitle', true);
  });
  document.querySelector('#pageStatsJobTemplate_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_displayPage')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'displayPage', true);
  });
  document.querySelector('#pageStatsJobTemplate_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_editPage')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'editPage', true);
  });
  document.querySelector('#pageStatsJobTemplate_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'editPage', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_userPage')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'userPage', true);
  });
  document.querySelector('#pageStatsJobTemplate_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'userPage', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_download')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'download', true);
  });
  document.querySelector('#pageStatsJobTemplate_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'download', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_objectSuggest')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsJobTemplate_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_objectText')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'objectText', true);
  });
  document.querySelector('#pageStatsJobTemplate_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'objectText', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_solrId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'solrId', true);
  });
  document.querySelector('#pageStatsJobTemplate_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'solrId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_tenantResource')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'tenantResource', true);
  });
  document.querySelector('#pageStatsJobTemplate_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_tenantId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'tenantId', true);
  });
  document.querySelector('#pageStatsJobTemplate_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsJobTemplate_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_aapInventoryId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'aapInventoryId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_aapInventoryId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'aapInventoryId', true);
  });
  document.querySelector('#pageStatsJobTemplate_aapInventoryId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'aapInventoryId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_aapProjectId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'aapProjectId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_aapProjectId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'aapProjectId', true);
  });
  document.querySelector('#pageStatsJobTemplate_aapProjectId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'aapProjectId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_jobTemplateId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'jobTemplateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_jobTemplateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateId', true);
  });
  document.querySelector('#pageStatsJobTemplate_jobTemplateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateId', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_jobTemplateResource')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'jobTemplateResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_jobTemplateResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateResource', true);
  });
  document.querySelector('#pageStatsJobTemplate_jobTemplateResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'jobTemplateResource', false);
  });

  document.querySelector('#pageSelectSortJobTemplate_aapTemplateId')?.addEventListener('change', (event) => {
    sort('JobTemplate', 'aapTemplateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsJobTemplate_aapTemplateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('JobTemplate', 'aapTemplateId', true);
  });
  document.querySelector('#pageStatsJobTemplate_aapTemplateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('JobTemplate', 'aapTemplateId', false);
  });
          document.querySelector('#fqJobTemplate_created')?.addEventListener('change', (event) => {
            fqChange('JobTemplate', event.currentTarget, facetChangeJobTemplateSuccess, facetChangeJobTemplateError);
          });
          document.querySelector('#buttonFacetJobTemplate_created')?.addEventListener('click', (event) => {
            facetFieldChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotJobTemplate_created')?.addEventListener('change', (event) => {
            facetPivotChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapJobTemplate_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartJobTemplate_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndJobTemplate_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#fqJobTemplate_archived')?.addEventListener('change', (event) => {
            fqChange('JobTemplate', event.currentTarget, facetChangeJobTemplateSuccess, facetChangeJobTemplateError);
          });
          document.querySelector('#buttonFacetJobTemplate_archived')?.addEventListener('click', (event) => {
            facetFieldChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotJobTemplate_archived')?.addEventListener('change', (event) => {
            facetPivotChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapJobTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartJobTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndJobTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#fqJobTemplate_displayPage')?.addEventListener('change', (event) => {
            fqChange('JobTemplate', event.currentTarget, facetChangeJobTemplateSuccess, facetChangeJobTemplateError);
          });
          document.querySelector('#buttonFacetJobTemplate_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotJobTemplate_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapJobTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartJobTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndJobTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#fqJobTemplate_editPage')?.addEventListener('change', (event) => {
            fqChange('JobTemplate', event.currentTarget, facetChangeJobTemplateSuccess, facetChangeJobTemplateError);
          });
          document.querySelector('#buttonFacetJobTemplate_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotJobTemplate_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapJobTemplate_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartJobTemplate_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndJobTemplate_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#fqJobTemplate_userPage')?.addEventListener('change', (event) => {
            fqChange('JobTemplate', event.currentTarget, facetChangeJobTemplateSuccess, facetChangeJobTemplateError);
          });
          document.querySelector('#buttonFacetJobTemplate_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotJobTemplate_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapJobTemplate_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartJobTemplate_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndJobTemplate_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#fqJobTemplate_download')?.addEventListener('change', (event) => {
            fqChange('JobTemplate', event.currentTarget, facetChangeJobTemplateSuccess, facetChangeJobTemplateError);
          });
          document.querySelector('#buttonFacetJobTemplate_download')?.addEventListener('click', (event) => {
            facetFieldChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotJobTemplate_download')?.addEventListener('change', (event) => {
            facetPivotChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapJobTemplate_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartJobTemplate_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('JobTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndJobTemplate_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('JobTemplate', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteJobTemplate')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var jobTemplateResource =  event.currentTarget.getAttribute('data-jobTemplateResource');
      deleteJobTemplate(
          event.currentTarget
          , jobTemplateResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterJobTemplate')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterJobTemplate(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
