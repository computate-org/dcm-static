Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSitePage')?.addEventListener('change', (event) => {
    facetRangeChange('SitePage', event.target.value);
  });

  document.querySelector('#pageSelectSortSitePage_created')?.addEventListener('change', (event) => {
    sort('SitePage', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'created', true);
  });
  document.querySelector('#pageStatsSitePage_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'created', false);
  });

  document.querySelector('#pageSelectSortSitePage_modified')?.addEventListener('change', (event) => {
    sort('SitePage', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'modified', true);
  });
  document.querySelector('#pageStatsSitePage_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'modified', false);
  });

  document.querySelector('#pageSelectSortSitePage_archived')?.addEventListener('change', (event) => {
    sort('SitePage', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'archived', true);
  });
  document.querySelector('#pageStatsSitePage_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'archived', false);
  });

  document.querySelector('#pageSelectSortSitePage_authorName')?.addEventListener('change', (event) => {
    sort('SitePage', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'authorName', true);
  });
  document.querySelector('#pageStatsSitePage_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'authorName', false);
  });

  document.querySelector('#pageSelectSortSitePage_authorUrl')?.addEventListener('change', (event) => {
    sort('SitePage', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'authorUrl', true);
  });
  document.querySelector('#pageStatsSitePage_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortSitePage_pageImageUri')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsSitePage_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortSitePage_pageId')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'pageId', true);
  });
  document.querySelector('#pageStatsSitePage_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'pageId', false);
  });

  document.querySelector('#pageSelectSortSitePage_displayPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'displayPage', true);
  });
  document.querySelector('#pageStatsSitePage_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSitePage_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SitePage', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSitePage_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSitePage_classSimpleName')?.addEventListener('change', (event) => {
    sort('SitePage', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSitePage_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSitePage_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SitePage', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSitePage_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSitePage_saves')?.addEventListener('change', (event) => {
    sort('SitePage', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'saves', true);
  });
  document.querySelector('#pageStatsSitePage_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'saves', false);
  });

  document.querySelector('#pageSelectSortSitePage_objectTitle')?.addEventListener('change', (event) => {
    sort('SitePage', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSitePage_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSitePage_editPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'editPage', true);
  });
  document.querySelector('#pageStatsSitePage_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSitePage_userPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'userPage', true);
  });
  document.querySelector('#pageStatsSitePage_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSitePage_download')?.addEventListener('change', (event) => {
    sort('SitePage', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'download', true);
  });
  document.querySelector('#pageStatsSitePage_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'download', false);
  });

  document.querySelector('#pageSelectSortSitePage_objectSuggest')?.addEventListener('change', (event) => {
    sort('SitePage', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSitePage_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSitePage_objectText')?.addEventListener('change', (event) => {
    sort('SitePage', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'objectText', true);
  });
  document.querySelector('#pageStatsSitePage_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSitePage_solrId')?.addEventListener('change', (event) => {
    sort('SitePage', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'solrId', true);
  });
  document.querySelector('#pageStatsSitePage_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSitePage_courseNum')?.addEventListener('change', (event) => {
    sort('SitePage', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'courseNum', true);
  });
  document.querySelector('#pageStatsSitePage_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortSitePage_lessonNum')?.addEventListener('change', (event) => {
    sort('SitePage', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'lessonNum', true);
  });
  document.querySelector('#pageStatsSitePage_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortSitePage_name')?.addEventListener('change', (event) => {
    sort('SitePage', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'name', true);
  });
  document.querySelector('#pageStatsSitePage_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'name', false);
  });

  document.querySelector('#pageSelectSortSitePage_description')?.addEventListener('change', (event) => {
    sort('SitePage', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'description', true);
  });
  document.querySelector('#pageStatsSitePage_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'description', false);
  });

  document.querySelector('#pageSelectSortSitePage_h1')?.addEventListener('change', (event) => {
    sort('SitePage', 'h1', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_h1')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'h1', true);
  });
  document.querySelector('#pageStatsSitePage_h1')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'h1', false);
  });

  document.querySelector('#pageSelectSortSitePage_h2')?.addEventListener('change', (event) => {
    sort('SitePage', 'h2', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_h2')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'h2', true);
  });
  document.querySelector('#pageStatsSitePage_h2')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'h2', false);
  });

  document.querySelector('#pageSelectSortSitePage_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsSitePage_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortSitePage_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsSitePage_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortSitePage_pageImageType')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'pageImageType', true);
  });
  document.querySelector('#pageStatsSitePage_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortSitePage_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsSitePage_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortSitePage_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('SitePage', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsSitePage_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortSitePage_nextArticleIds')?.addEventListener('change', (event) => {
    sort('SitePage', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsSitePage_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortSitePage_labelsString')?.addEventListener('change', (event) => {
    sort('SitePage', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'labelsString', true);
  });
  document.querySelector('#pageStatsSitePage_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortSitePage_labels')?.addEventListener('change', (event) => {
    sort('SitePage', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'labels', true);
  });
  document.querySelector('#pageStatsSitePage_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'labels', false);
  });

  document.querySelector('#pageSelectSortSitePage_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SitePage', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSitePage_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SitePage', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsSitePage_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SitePage', 'relatedArticleIds', false);
  });
          document.querySelector('#fqSitePage_created')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_created')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_created')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_authorName')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageId')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_displayPage')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_editPage')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_userPage')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_download')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_download')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_download')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_courseNum')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget, facetChangeSitePageSuccess, facetChangeSitePageError);
          });
          document.querySelector('#buttonFacetSitePage_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSitePage_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSitePage_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSitePage_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SitePage', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteSitePage')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteSitePage(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterSitePage')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSitePage(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
