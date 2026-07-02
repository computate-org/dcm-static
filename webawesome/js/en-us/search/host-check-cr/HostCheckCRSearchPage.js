Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHostCheckCR')?.addEventListener('change', (event) => {
    facetRangeChange('HostCheckCR', event.target.value);
  });

  document.querySelector('#pageSelectSortHostCheckCR_pk')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'pk', true);
  });
  document.querySelector('#pageStatsHostCheckCR_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'pk', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_created')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'created', true);
  });
  document.querySelector('#pageStatsHostCheckCR_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'created', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_modified')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'modified', true);
  });
  document.querySelector('#pageStatsHostCheckCR_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'modified', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_archived')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'archived', true);
  });
  document.querySelector('#pageStatsHostCheckCR_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'archived', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_changeRequestId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'changeRequestId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_changeRequestId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'changeRequestId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_changeRequestId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'changeRequestId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_createdByEmail')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'createdByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_createdByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'createdByEmail', true);
  });
  document.querySelector('#pageStatsHostCheckCR_createdByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'createdByEmail', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_createdVia')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'createdVia', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_createdVia')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'createdVia', true);
  });
  document.querySelector('#pageStatsHostCheckCR_createdVia')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'createdVia', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_ownedByEmail')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'ownedByEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_ownedByEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'ownedByEmail', true);
  });
  document.querySelector('#pageStatsHostCheckCR_ownedByEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'ownedByEmail', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_lifecycleState')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'lifecycleState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_lifecycleState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'lifecycleState', true);
  });
  document.querySelector('#pageStatsHostCheckCR_lifecycleState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'lifecycleState', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_intentState')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'intentState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_intentState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'intentState', true);
  });
  document.querySelector('#pageStatsHostCheckCR_intentState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'intentState', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_requestedState')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'requestedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_requestedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'requestedState', true);
  });
  document.querySelector('#pageStatsHostCheckCR_requestedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'requestedState', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_realizedState')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'realizedState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_realizedState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'realizedState', true);
  });
  document.querySelector('#pageStatsHostCheckCR_realizedState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'realizedState', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_jobTemplateResourceChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'jobTemplateResourceChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_jobTemplateResourceChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateResourceChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_jobTemplateResourceChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateResourceChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkNameChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkNameChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkNameChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkNameChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkNameChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkNameChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkDescriptionChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkDescriptionChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkDescriptionChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkDescriptionChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkDescriptionChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkDescriptionChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkNamespaceChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkNamespaceChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkNamespaceChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkNamespaceChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkNamespaceChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkNamespaceChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkCommandChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkCommandChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkCommandChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkCommandChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkCommandChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkCommandChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkIntervalChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkIntervalChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkIntervalChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkIntervalChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkIntervalChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkIntervalChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkPublishedChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkPublishedChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkPublishedChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkPublishedChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkPublishedChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkPublishedChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_eventSubscriptionsChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'eventSubscriptionsChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_eventSubscriptionsChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'eventSubscriptionsChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_eventSubscriptionsChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'eventSubscriptionsChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_eventHandlersChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'eventHandlersChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_eventHandlersChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'eventHandlersChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_eventHandlersChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'eventHandlersChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_tenantResource')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'tenantResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_tenantResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'tenantResource', true);
  });
  document.querySelector('#pageStatsHostCheckCR_tenantResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'tenantResource', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_jobTemplateResource')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'jobTemplateResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_jobTemplateResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateResource', true);
  });
  document.querySelector('#pageStatsHostCheckCR_jobTemplateResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateResource', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkName')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkName', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkName', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkDescription')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkDescription', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkDescription')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkDescription', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkDescription')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkDescription', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkNamespace')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkNamespace', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkNamespace')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkNamespace', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkNamespace')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkNamespace', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkCommand')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkCommand', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkCommand')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkCommand', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkCommand')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkCommand', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkInterval')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkInterval', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkInterval')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkInterval', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkInterval')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkInterval', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkPublished')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkPublished', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkPublished')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkPublished', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkPublished')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkPublished', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_eventSubscriptions')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'eventSubscriptions', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_eventSubscriptions')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'eventSubscriptions', true);
  });
  document.querySelector('#pageStatsHostCheckCR_eventSubscriptions')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'eventSubscriptions', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_eventHandlers')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'eventHandlers', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_eventHandlers')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'eventHandlers', true);
  });
  document.querySelector('#pageStatsHostCheckCR_eventHandlers')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'eventHandlers', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_classCanonicalName')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsHostCheckCR_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_classSimpleName')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsHostCheckCR_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsHostCheckCR_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_sessionId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'sessionId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_userKey')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'userKey', true);
  });
  document.querySelector('#pageStatsHostCheckCR_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'userKey', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_saves')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'saves', true);
  });
  document.querySelector('#pageStatsHostCheckCR_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'saves', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_objectTitle')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'objectTitle', true);
  });
  document.querySelector('#pageStatsHostCheckCR_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_displayPage')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'displayPage', true);
  });
  document.querySelector('#pageStatsHostCheckCR_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_editPage')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'editPage', true);
  });
  document.querySelector('#pageStatsHostCheckCR_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'editPage', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_userPage')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'userPage', true);
  });
  document.querySelector('#pageStatsHostCheckCR_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'userPage', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_download')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'download', true);
  });
  document.querySelector('#pageStatsHostCheckCR_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'download', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_objectSuggest')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsHostCheckCR_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_objectText')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'objectText', true);
  });
  document.querySelector('#pageStatsHostCheckCR_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'objectText', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_solrId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'solrId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'solrId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_tenantId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'tenantId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_aapOrganizationId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'aapOrganizationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_aapOrganizationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'aapOrganizationId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_aapOrganizationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'aapOrganizationId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_jobTemplateId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'jobTemplateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_jobTemplateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_jobTemplateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_aapTemplateId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'aapTemplateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_aapTemplateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'aapTemplateId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_aapTemplateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'aapTemplateId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_checkResource')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'checkResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_checkResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'checkResource', true);
  });
  document.querySelector('#pageStatsHostCheckCR_checkResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'checkResource', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_createdByUserId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'createdByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_createdByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'createdByUserId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_createdByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'createdByUserId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_createdByFullName')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'createdByFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_createdByFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'createdByFullName', true);
  });
  document.querySelector('#pageStatsHostCheckCR_createdByFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'createdByFullName', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_ownedByUserId')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'ownedByUserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_ownedByUserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'ownedByUserId', true);
  });
  document.querySelector('#pageStatsHostCheckCR_ownedByUserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'ownedByUserId', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_ownedByDisplayName')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'ownedByDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_ownedByDisplayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'ownedByDisplayName', true);
  });
  document.querySelector('#pageStatsHostCheckCR_ownedByDisplayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'ownedByDisplayName', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_aapOrganizationIdChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'aapOrganizationIdChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_aapOrganizationIdChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'aapOrganizationIdChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_aapOrganizationIdChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'aapOrganizationIdChange', false);
  });

  document.querySelector('#pageSelectSortHostCheckCR_jobTemplateIdChange')?.addEventListener('change', (event) => {
    sort('HostCheckCR', 'jobTemplateIdChange', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHostCheckCR_jobTemplateIdChange')?.addEventListener('wa-show', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateIdChange', true);
  });
  document.querySelector('#pageStatsHostCheckCR_jobTemplateIdChange')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('HostCheckCR', 'jobTemplateIdChange', false);
  });
          document.querySelector('#fqHostCheckCR_created')?.addEventListener('change', (event) => {
            fqChange('HostCheckCR', event.currentTarget, facetChangeHostCheckCRSuccess, facetChangeHostCheckCRError);
          });
          document.querySelector('#buttonFacetHostCheckCR_created')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheckCR_created')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheckCR_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheckCR_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheckCR_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#fqHostCheckCR_archived')?.addEventListener('change', (event) => {
            fqChange('HostCheckCR', event.currentTarget, facetChangeHostCheckCRSuccess, facetChangeHostCheckCRError);
          });
          document.querySelector('#buttonFacetHostCheckCR_archived')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheckCR_archived')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheckCR_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheckCR_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheckCR_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#fqHostCheckCR_displayPage')?.addEventListener('change', (event) => {
            fqChange('HostCheckCR', event.currentTarget, facetChangeHostCheckCRSuccess, facetChangeHostCheckCRError);
          });
          document.querySelector('#buttonFacetHostCheckCR_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheckCR_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheckCR_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheckCR_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheckCR_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#fqHostCheckCR_editPage')?.addEventListener('change', (event) => {
            fqChange('HostCheckCR', event.currentTarget, facetChangeHostCheckCRSuccess, facetChangeHostCheckCRError);
          });
          document.querySelector('#buttonFacetHostCheckCR_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheckCR_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheckCR_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheckCR_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheckCR_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#fqHostCheckCR_userPage')?.addEventListener('change', (event) => {
            fqChange('HostCheckCR', event.currentTarget, facetChangeHostCheckCRSuccess, facetChangeHostCheckCRError);
          });
          document.querySelector('#buttonFacetHostCheckCR_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheckCR_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheckCR_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheckCR_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheckCR_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#fqHostCheckCR_download')?.addEventListener('change', (event) => {
            fqChange('HostCheckCR', event.currentTarget, facetChangeHostCheckCRSuccess, facetChangeHostCheckCRError);
          });
          document.querySelector('#buttonFacetHostCheckCR_download')?.addEventListener('click', (event) => {
            facetFieldChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHostCheckCR_download')?.addEventListener('change', (event) => {
            facetPivotChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHostCheckCR_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHostCheckCR_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('HostCheckCR', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHostCheckCR_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('HostCheckCR', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteHostCheckCR')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var changeRequestId =  event.currentTarget.getAttribute('data-changeRequestId');
      deleteHostCheckCR(
          event.currentTarget
          , changeRequestId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterHostCheckCR')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterHostCheckCR(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
