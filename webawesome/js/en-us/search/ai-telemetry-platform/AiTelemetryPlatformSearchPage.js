Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiTelemetryPlatform')?.addEventListener('change', (event) => {
    facetRangeChange('AiTelemetryPlatform', event.target.value);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_created')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'created', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'created', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_modified')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'modified', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'modified', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_archived')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'archived', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'archived', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_name')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'name', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'name', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_description')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'description', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'description', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_authorName')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'authorName', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'authorName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_authorUrl')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'authorUrl', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_pageImageUri')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_pageId')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageId', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageId', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_displayPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'displayPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_classSimpleName')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_saves')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'saves', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'saves', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_objectTitle')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_editPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'editPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_userPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'userPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'userPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_download')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'download', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'download', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_objectSuggest')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_objectText')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'objectText', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'objectText', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_solrId')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'solrId', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'solrId', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_hubResource')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'hubResource', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_courseNum')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'courseNum', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_lessonNum')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'lessonNum', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_pageImageWidth')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_pageImageHeight')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_pageImageType')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageType', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_pageImageAlt')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_nextArticleIds')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_labelsString')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'labelsString', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_labels')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'labels', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'labels', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryPlatform_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('AiTelemetryPlatform', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryPlatform_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsAiTelemetryPlatform_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryPlatform', 'relatedArticleIds', false);
  });
          document.querySelector('#fqAiTelemetryPlatform_created')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_name')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_name')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_name')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_description')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_description')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_description')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_authorName')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_authorUrl')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_pageId')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_editPage')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_userPage')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_download')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_download')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_download')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_hubResource')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_hubResource')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_hubResource')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_hubResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_hubResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_hubResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_courseNum')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryPlatform_lessonNum')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryPlatform', event.currentTarget, facetChangeAiTelemetryPlatformSuccess, facetChangeAiTelemetryPlatformError);
          });
          document.querySelector('#buttonFacetAiTelemetryPlatform_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryPlatform_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryPlatform_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryPlatform_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryPlatform', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryPlatform_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryPlatform', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteAiTelemetryPlatform')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteAiTelemetryPlatform(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterAiTelemetryPlatform')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiTelemetryPlatform(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
