Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSiteUser')?.addEventListener('change', (event) => {
    facetRangeChange('SiteUser', event.target.value);
  });

  document.querySelector('#pageSelectSortSiteUser_pk')?.addEventListener('change', (event) => {
    sort('SiteUser', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'pk', true);
  });
  document.querySelector('#pageStatsSiteUser_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'pk', false);
  });

  document.querySelector('#pageSelectSortSiteUser_created')?.addEventListener('change', (event) => {
    sort('SiteUser', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'created', true);
  });
  document.querySelector('#pageStatsSiteUser_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'created', false);
  });

  document.querySelector('#pageSelectSortSiteUser_modified')?.addEventListener('change', (event) => {
    sort('SiteUser', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'modified', true);
  });
  document.querySelector('#pageStatsSiteUser_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'modified', false);
  });

  document.querySelector('#pageSelectSortSiteUser_archived')?.addEventListener('change', (event) => {
    sort('SiteUser', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'archived', true);
  });
  document.querySelector('#pageStatsSiteUser_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'archived', false);
  });

  document.querySelector('#pageSelectSortSiteUser_seeArchived')?.addEventListener('change', (event) => {
    sort('SiteUser', 'seeArchived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_seeArchived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'seeArchived', true);
  });
  document.querySelector('#pageStatsSiteUser_seeArchived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'seeArchived', false);
  });

  document.querySelector('#pageSelectSortSiteUser_siteFontSize')?.addEventListener('change', (event) => {
    sort('SiteUser', 'siteFontSize', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_siteFontSize')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'siteFontSize', true);
  });
  document.querySelector('#pageStatsSiteUser_siteFontSize')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'siteFontSize', false);
  });

  document.querySelector('#pageSelectSortSiteUser_siteTheme')?.addEventListener('change', (event) => {
    sort('SiteUser', 'siteTheme', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_siteTheme')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'siteTheme', true);
  });
  document.querySelector('#pageStatsSiteUser_siteTheme')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'siteTheme', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userProfileUrl')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userProfileUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userProfileUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userProfileUrl', true);
  });
  document.querySelector('#pageStatsSiteUser_userProfileUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userProfileUrl', false);
  });

  document.querySelector('#pageSelectSortSiteUser_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSiteUser_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_classSimpleName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSiteUser_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SiteUser', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSiteUser_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSiteUser_sessionId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'sessionId', true);
  });
  document.querySelector('#pageStatsSiteUser_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userKey')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userKey', true);
  });
  document.querySelector('#pageStatsSiteUser_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userKey', false);
  });

  document.querySelector('#pageSelectSortSiteUser_saves')?.addEventListener('change', (event) => {
    sort('SiteUser', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'saves', true);
  });
  document.querySelector('#pageStatsSiteUser_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'saves', false);
  });

  document.querySelector('#pageSelectSortSiteUser_objectTitle')?.addEventListener('change', (event) => {
    sort('SiteUser', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSiteUser_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSiteUser_displayPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'displayPage', true);
  });
  document.querySelector('#pageStatsSiteUser_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSiteUser_editPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'editPage', true);
  });
  document.querySelector('#pageStatsSiteUser_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userPage')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userPage', true);
  });
  document.querySelector('#pageStatsSiteUser_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSiteUser_download')?.addEventListener('change', (event) => {
    sort('SiteUser', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'download', true);
  });
  document.querySelector('#pageStatsSiteUser_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'download', false);
  });

  document.querySelector('#pageSelectSortSiteUser_objectSuggest')?.addEventListener('change', (event) => {
    sort('SiteUser', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSiteUser_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSiteUser_objectText')?.addEventListener('change', (event) => {
    sort('SiteUser', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'objectText', true);
  });
  document.querySelector('#pageStatsSiteUser_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSiteUser_solrId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'solrId', true);
  });
  document.querySelector('#pageStatsSiteUser_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userKeys')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userKeys', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userKeys')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userKeys', true);
  });
  document.querySelector('#pageStatsSiteUser_userKeys')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userKeys', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userId', true);
  });
  document.querySelector('#pageStatsSiteUser_userId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userId', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userName', true);
  });
  document.querySelector('#pageStatsSiteUser_userName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userEmail')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userEmail', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userEmail')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userEmail', true);
  });
  document.querySelector('#pageStatsSiteUser_userEmail')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userEmail', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userFirstName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userFirstName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userFirstName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userFirstName', true);
  });
  document.querySelector('#pageStatsSiteUser_userFirstName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userFirstName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userLastName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userLastName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userLastName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userLastName', true);
  });
  document.querySelector('#pageStatsSiteUser_userLastName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userLastName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_userFullName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'userFullName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_userFullName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'userFullName', true);
  });
  document.querySelector('#pageStatsSiteUser_userFullName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'userFullName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_displayName')?.addEventListener('change', (event) => {
    sort('SiteUser', 'displayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_displayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'displayName', true);
  });
  document.querySelector('#pageStatsSiteUser_displayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'displayName', false);
  });

  document.querySelector('#pageSelectSortSiteUser_customerProfileId')?.addEventListener('change', (event) => {
    sort('SiteUser', 'customerProfileId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSiteUser_customerProfileId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SiteUser', 'customerProfileId', true);
  });
  document.querySelector('#pageStatsSiteUser_customerProfileId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SiteUser', 'customerProfileId', false);
  });
          document.querySelector('#fqSiteUser_created')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget, facetChangeSiteUserSuccess, facetChangeSiteUserError);
          });
          document.querySelector('#buttonFacetSiteUser_created')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_created')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSiteUser_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSiteUser_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSiteUser_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_archived')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget, facetChangeSiteUserSuccess, facetChangeSiteUserError);
          });
          document.querySelector('#buttonFacetSiteUser_archived')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_archived')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSiteUser_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSiteUser_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSiteUser_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_displayPage')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget, facetChangeSiteUserSuccess, facetChangeSiteUserError);
          });
          document.querySelector('#buttonFacetSiteUser_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSiteUser_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSiteUser_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSiteUser_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_editPage')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget, facetChangeSiteUserSuccess, facetChangeSiteUserError);
          });
          document.querySelector('#buttonFacetSiteUser_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSiteUser_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSiteUser_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSiteUser_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_userPage')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget, facetChangeSiteUserSuccess, facetChangeSiteUserError);
          });
          document.querySelector('#buttonFacetSiteUser_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSiteUser_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSiteUser_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSiteUser_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#fqSiteUser_download')?.addEventListener('change', (event) => {
            fqChange('SiteUser', event.currentTarget, facetChangeSiteUserSuccess, facetChangeSiteUserError);
          });
          document.querySelector('#buttonFacetSiteUser_download')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSiteUser_download')?.addEventListener('change', (event) => {
            facetPivotChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSiteUser_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSiteUser_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SiteUser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSiteUser_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SiteUser', event.currentTarget);
          });
});

  document.querySelector('#htmButton_patchSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#patchSiteUserDialog').open = true;
  });

  document.querySelector('#htmButton_postSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#postSiteUserDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSiteUserDialog').open = true;
  });
