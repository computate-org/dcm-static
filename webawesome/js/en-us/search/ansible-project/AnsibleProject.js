
async function websocketAnsibleProject(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketAnsibleProject', function (error, message) {
      var json = JSON.parse(message['body']);
      var ansibleProjectId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + ansibleProjectId + ' ');
      $box.setAttribute('id', 'box-' + ansibleProjectId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + ansibleProjectId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + ansibleProjectId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + ansibleProjectId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-excavator"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify ansible projects in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + ansibleProjectId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + ansibleProjectId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + ansibleProjectId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + ansibleProjectId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + ansibleProjectId);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + ansibleProjectId);
      } else {
        document.querySelector('.box-' + ansibleProjectId)?.remove();
      }
      if(ansibleProjectId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketAnsibleProjectInner(apiRequest) {
  var ansibleProjectId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(ansibleProjectId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputTenantResource = null;
        var inputOrganizationId = null;
        var inputSourceControlType = null;
        var inputSourceControlUrl = null;
        var inputAnsibleProjectDescription = null;
        var inputSourceControlBranch = null;
        var inputJobTemplateIds = null;
        var inputAnsibleProjectName = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputAapOrganizationId = null;
        var inputAnsibleProjectId = null;
        var inputAapProjectId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('tenantResource'))
          inputTenantResource = $response.querySelector('.Page_tenantResource');
        if(vars.includes('organizationId'))
          inputOrganizationId = $response.querySelector('.Page_organizationId');
        if(vars.includes('sourceControlType'))
          inputSourceControlType = $response.querySelector('.Page_sourceControlType');
        if(vars.includes('sourceControlUrl'))
          inputSourceControlUrl = $response.querySelector('.Page_sourceControlUrl');
        if(vars.includes('ansibleProjectDescription'))
          inputAnsibleProjectDescription = $response.querySelector('.Page_ansibleProjectDescription');
        if(vars.includes('sourceControlBranch'))
          inputSourceControlBranch = $response.querySelector('.Page_sourceControlBranch');
        if(vars.includes('jobTemplateIds'))
          inputJobTemplateIds = $response.querySelector('.Page_jobTemplateIds');
        if(vars.includes('ansibleProjectName'))
          inputAnsibleProjectName = $response.querySelector('.Page_ansibleProjectName');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('aapOrganizationId'))
          inputAapOrganizationId = $response.querySelector('.Page_aapOrganizationId');
        if(vars.includes('ansibleProjectId'))
          inputAnsibleProjectId = $response.querySelector('.Page_ansibleProjectId');
        if(vars.includes('aapProjectId'))
          inputAapProjectId = $response.querySelector('.Page_aapProjectId');

        jsWebsocketAnsibleProject(ansibleProjectId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listAnsibleProject = JSON.parse($response.querySelector('.pageForm .listAnsibleProject')?.value);


        if(inputPk) {
          document.querySelectorAll('.Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Page_archived'));
        }

        if(inputTenantResource) {
          document.querySelectorAll('.Page_tenantResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTenantResource.getAttribute('value');
            else
              item.textContent = inputTenantResource.textContent;
          });
          addGlow(document.querySelector('.Page_tenantResource'));
        }

        if(inputOrganizationId) {
          document.querySelectorAll('.Page_organizationId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOrganizationId.getAttribute('value');
            else
              item.textContent = inputOrganizationId.textContent;
          });
          addGlow(document.querySelector('.Page_organizationId'));
        }

        if(inputSourceControlType) {
          document.querySelectorAll('.Page_sourceControlType').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSourceControlType.getAttribute('value');
            else
              item.textContent = inputSourceControlType.textContent;
          });
          addGlow(document.querySelector('.Page_sourceControlType'));
        }

        if(inputSourceControlUrl) {
          document.querySelectorAll('.Page_sourceControlUrl').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSourceControlUrl.getAttribute('value');
            else
              item.textContent = inputSourceControlUrl.textContent;
          });
          addGlow(document.querySelector('.Page_sourceControlUrl'));
        }

        if(inputAnsibleProjectDescription) {
          document.querySelectorAll('.Page_ansibleProjectDescription').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAnsibleProjectDescription.getAttribute('value');
            else
              item.textContent = inputAnsibleProjectDescription.textContent;
          });
          addGlow(document.querySelector('.Page_ansibleProjectDescription'));
        }

        if(inputSourceControlBranch) {
          document.querySelectorAll('.Page_sourceControlBranch').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSourceControlBranch.getAttribute('value');
            else
              item.textContent = inputSourceControlBranch.textContent;
          });
          addGlow(document.querySelector('.Page_sourceControlBranch'));
        }

        if(inputJobTemplateIds) {
          document.querySelectorAll('.Page_jobTemplateIds').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateIds.getAttribute('value');
            else
              item.textContent = inputJobTemplateIds.textContent;
          });
          addGlow(document.querySelector('.Page_jobTemplateIds'));
        }

        if(inputAnsibleProjectName) {
          document.querySelectorAll('.Page_ansibleProjectName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAnsibleProjectName.getAttribute('value');
            else
              item.textContent = inputAnsibleProjectName.textContent;
          });
          addGlow(document.querySelector('.Page_ansibleProjectName'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Page_solrId'));
        }

        if(inputAapOrganizationId) {
          document.querySelectorAll('.Page_aapOrganizationId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapOrganizationId.getAttribute('value');
            else
              item.textContent = inputAapOrganizationId.textContent;
          });
          addGlow(document.querySelector('.Page_aapOrganizationId'));
        }

        if(inputAnsibleProjectId) {
          document.querySelectorAll('.Page_ansibleProjectId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAnsibleProjectId.getAttribute('value');
            else
              item.textContent = inputAnsibleProjectId.textContent;
          });
          addGlow(document.querySelector('.Page_ansibleProjectId'));
        }

        if(inputAapProjectId) {
          document.querySelectorAll('.Page_aapProjectId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapProjectId.getAttribute('value');
            else
              item.textContent = inputAapProjectId.textContent;
          });
          addGlow(document.querySelector('.Page_aapProjectId'));
        }

          pageGraphAnsibleProject();
      });
    });
  }
}

function pageGraphAnsibleProject(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'ansible projects';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphAnsibleProjectPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqAnsibleProject_time').innerText = '';
  searchPage('AnsibleProject', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqAnsibleProject_time').value = x;
      document.querySelector('#fqAnsibleProject_time').onchange();
      searchPage('AnsibleProject');
    }, speedRate);
  });
}

// Search //

async function searchAnsibleProject($formFilters, success, error) {
  var filters = searchAnsibleProjectFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchAnsibleProjectVals(filters, target, success, error);
}

function searchAnsibleProjectFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterOrganizationId = $formFilters.querySelector('.valueOrganizationId')?.value;
    if(filterOrganizationId != null && filterOrganizationId !== '')
      filters.push({ name: 'fq', value: 'organizationId:' + filterOrganizationId });

    var filterSourceControlType = $formFilters.querySelector('.valueSourceControlType')?.value;
    if(filterSourceControlType != null && filterSourceControlType !== '')
      filters.push({ name: 'fq', value: 'sourceControlType:' + filterSourceControlType });

    var filterSourceControlUrl = $formFilters.querySelector('.valueSourceControlUrl')?.value;
    if(filterSourceControlUrl != null && filterSourceControlUrl !== '')
      filters.push({ name: 'fq', value: 'sourceControlUrl:' + filterSourceControlUrl });

    var filterAnsibleProjectDescription = $formFilters.querySelector('.valueAnsibleProjectDescription')?.value;
    if(filterAnsibleProjectDescription != null && filterAnsibleProjectDescription !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectDescription:' + filterAnsibleProjectDescription });

    var filterSourceControlBranch = $formFilters.querySelector('.valueSourceControlBranch')?.value;
    if(filterSourceControlBranch != null && filterSourceControlBranch !== '')
      filters.push({ name: 'fq', value: 'sourceControlBranch:' + filterSourceControlBranch });

    var filterJobTemplateIds = $formFilters.querySelector('.valueJobTemplateIds')?.value;
    if(filterJobTemplateIds != null && filterJobTemplateIds !== '')
      filters.push({ name: 'fq', value: 'jobTemplateIds:' + filterJobTemplateIds });

    var filterAnsibleProjectName = $formFilters.querySelector('.valueAnsibleProjectName')?.value;
    if(filterAnsibleProjectName != null && filterAnsibleProjectName !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectName:' + filterAnsibleProjectName });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterAnsibleProjectId = $formFilters.querySelector('.valueAnsibleProjectId')?.value;
    if(filterAnsibleProjectId != null && filterAnsibleProjectId !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectId:' + filterAnsibleProjectId });

    var filterAapProjectId = $formFilters.querySelector('.valueAapProjectId')?.value;
    if(filterAapProjectId != null && filterAapProjectId !== '')
      filters.push({ name: 'fq', value: 'aapProjectId:' + filterAapProjectId });
  }
  return filters;
}

function searchAnsibleProjectVals(filters, target, success, error) {


  fetch(
    '/en-us/api/ansible-project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestAnsibleProjectTenantResource(filters, $list, ansibleProjectId = null, tenantResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['tenantResource'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(ansibleProjectId.toString()) : val == tenantResource);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_tenantResource_' + ansibleProjectId + '_tenantResource_' + o['tenantResource']);
        $input.setAttribute('name', 'tenantResource');
        $input.setAttribute('value', o['tenantResource']);
        $input.setAttribute('class', 'valueTenantResource ');
        if(ansibleProjectId != null) {
          $input.addEventListener('change', function(event) {
            patchAnsibleProjectVals([{ name: 'fq', value: 'ansibleProjectId:' + ansibleProjectId }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o['tenantResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestAnsibleProjectTenantResource(filters, $list, ansibleProjectId, o['tenantResource'], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchTenantVals(filters, target, success, error);
}

function suggestAnsibleProjectJobTemplateIds(filters, $list, ansibleProjectId = null, jobTemplateIds = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-excavator"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['ansibleProjectId'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(ansibleProjectId.toString()) : val == jobTemplateIds);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_jobTemplateIds_' + ansibleProjectId + '_ansibleProjectId_' + o['ansibleProjectId']);
        $input.setAttribute('name', 'ansibleProjectId');
        $input.setAttribute('value', o['ansibleProjectId']);
        $input.setAttribute('class', 'valueJobTemplateIds ');
        if(ansibleProjectId != null) {
          $input.addEventListener('change', function(event) {
            patchAnsibleProjectVals([{ name: 'fq', value: 'ansibleProjectId:' + ansibleProjectId }], { [(event.target.checked ? 'add' : 'remove') + 'JobTemplateIds']: o['ansibleProjectId'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestAnsibleProjectJobTemplateIds(filters, $list, ansibleProjectId, o['ansibleProjectId'], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchJobTemplateVals(filters, target, success, error);
}

function suggestAnsibleProjectObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-excavator"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchAnsibleProjectVals($formFilters, target, success, error);
}

// GET //

async function getAnsibleProject(pk) {
  fetch(
    '/en-us/api/ansible-project/' + ansibleProjectId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchAnsibleProject($formFilters, $formValues, target, ansibleProjectId, success, error) {
  var filters = patchAnsibleProjectFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueTenantResource = (Array.from($formValues.querySelectorAll('.valueTenantResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['setTenantResource'] = valueTenantResource;

  var valueOrganizationId = $formValues.querySelector('.valueOrganizationId')?.value;
  var removeOrganizationId = $formValues.querySelector('.removeOrganizationId')?.value === 'true';
  var setOrganizationId = removeOrganizationId ? null : $formValues.querySelector('.setOrganizationId')?.value;
  var addOrganizationId = $formValues.querySelector('.addOrganizationId')?.value;
  if(removeOrganizationId || setOrganizationId != null && setOrganizationId !== '')
    vals['setOrganizationId'] = setOrganizationId;
  if(addOrganizationId != null && addOrganizationId !== '')
    vals['addOrganizationId'] = addOrganizationId;
  var removeOrganizationId = $formValues.querySelector('.removeOrganizationId')?.value;
  if(removeOrganizationId != null && removeOrganizationId !== '')
    vals['removeOrganizationId'] = removeOrganizationId;

  var valueSourceControlType = $formValues.querySelector('.valueSourceControlType')?.value;
  var removeSourceControlType = $formValues.querySelector('.removeSourceControlType')?.value === 'true';
  var setSourceControlType = removeSourceControlType ? null : $formValues.querySelector('.setSourceControlType')?.value;
  var addSourceControlType = $formValues.querySelector('.addSourceControlType')?.value;
  if(removeSourceControlType || setSourceControlType != null && setSourceControlType !== '')
    vals['setSourceControlType'] = setSourceControlType;
  if(addSourceControlType != null && addSourceControlType !== '')
    vals['addSourceControlType'] = addSourceControlType;
  var removeSourceControlType = $formValues.querySelector('.removeSourceControlType')?.value;
  if(removeSourceControlType != null && removeSourceControlType !== '')
    vals['removeSourceControlType'] = removeSourceControlType;

  var valueSourceControlUrl = $formValues.querySelector('.valueSourceControlUrl')?.value;
  var removeSourceControlUrl = $formValues.querySelector('.removeSourceControlUrl')?.value === 'true';
  var setSourceControlUrl = removeSourceControlUrl ? null : $formValues.querySelector('.setSourceControlUrl')?.value;
  var addSourceControlUrl = $formValues.querySelector('.addSourceControlUrl')?.value;
  if(removeSourceControlUrl || setSourceControlUrl != null && setSourceControlUrl !== '')
    vals['setSourceControlUrl'] = setSourceControlUrl;
  if(addSourceControlUrl != null && addSourceControlUrl !== '')
    vals['addSourceControlUrl'] = addSourceControlUrl;
  var removeSourceControlUrl = $formValues.querySelector('.removeSourceControlUrl')?.value;
  if(removeSourceControlUrl != null && removeSourceControlUrl !== '')
    vals['removeSourceControlUrl'] = removeSourceControlUrl;

  var valueAnsibleProjectDescription = $formValues.querySelector('.valueAnsibleProjectDescription')?.value;
  var removeAnsibleProjectDescription = $formValues.querySelector('.removeAnsibleProjectDescription')?.value === 'true';
  var setAnsibleProjectDescription = removeAnsibleProjectDescription ? null : $formValues.querySelector('.setAnsibleProjectDescription')?.value;
  var addAnsibleProjectDescription = $formValues.querySelector('.addAnsibleProjectDescription')?.value;
  if(removeAnsibleProjectDescription || setAnsibleProjectDescription != null && setAnsibleProjectDescription !== '')
    vals['setAnsibleProjectDescription'] = setAnsibleProjectDescription;
  if(addAnsibleProjectDescription != null && addAnsibleProjectDescription !== '')
    vals['addAnsibleProjectDescription'] = addAnsibleProjectDescription;
  var removeAnsibleProjectDescription = $formValues.querySelector('.removeAnsibleProjectDescription')?.value;
  if(removeAnsibleProjectDescription != null && removeAnsibleProjectDescription !== '')
    vals['removeAnsibleProjectDescription'] = removeAnsibleProjectDescription;

  var valueSourceControlBranch = $formValues.querySelector('.valueSourceControlBranch')?.value;
  var removeSourceControlBranch = $formValues.querySelector('.removeSourceControlBranch')?.value === 'true';
  var setSourceControlBranch = removeSourceControlBranch ? null : $formValues.querySelector('.setSourceControlBranch')?.value;
  var addSourceControlBranch = $formValues.querySelector('.addSourceControlBranch')?.value;
  if(removeSourceControlBranch || setSourceControlBranch != null && setSourceControlBranch !== '')
    vals['setSourceControlBranch'] = setSourceControlBranch;
  if(addSourceControlBranch != null && addSourceControlBranch !== '')
    vals['addSourceControlBranch'] = addSourceControlBranch;
  var removeSourceControlBranch = $formValues.querySelector('.removeSourceControlBranch')?.value;
  if(removeSourceControlBranch != null && removeSourceControlBranch !== '')
    vals['removeSourceControlBranch'] = removeSourceControlBranch;

  var valueJobTemplateIds = (Array.from($formValues.querySelectorAll('.valueJobTemplateIds')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueJobTemplateIds != null && valueJobTemplateIds !== '')
    vals['addJobTemplateIds'] = valueJobTemplateIds;

  var valueAnsibleProjectName = $formValues.querySelector('.valueAnsibleProjectName')?.value;
  var removeAnsibleProjectName = $formValues.querySelector('.removeAnsibleProjectName')?.value === 'true';
  var setAnsibleProjectName = removeAnsibleProjectName ? null : $formValues.querySelector('.setAnsibleProjectName')?.value;
  var addAnsibleProjectName = $formValues.querySelector('.addAnsibleProjectName')?.value;
  if(removeAnsibleProjectName || setAnsibleProjectName != null && setAnsibleProjectName !== '')
    vals['setAnsibleProjectName'] = setAnsibleProjectName;
  if(addAnsibleProjectName != null && addAnsibleProjectName !== '')
    vals['addAnsibleProjectName'] = addAnsibleProjectName;
  var removeAnsibleProjectName = $formValues.querySelector('.removeAnsibleProjectName')?.value;
  if(removeAnsibleProjectName != null && removeAnsibleProjectName !== '')
    vals['removeAnsibleProjectName'] = removeAnsibleProjectName;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  var valueAapOrganizationId = $formValues.querySelector('.valueAapOrganizationId')?.value;
  var removeAapOrganizationId = $formValues.querySelector('.removeAapOrganizationId')?.value === 'true';
  var setAapOrganizationId = removeAapOrganizationId ? null : $formValues.querySelector('.setAapOrganizationId')?.value;
  var addAapOrganizationId = $formValues.querySelector('.addAapOrganizationId')?.value;
  if(removeAapOrganizationId || setAapOrganizationId != null && setAapOrganizationId !== '')
    vals['setAapOrganizationId'] = setAapOrganizationId;
  if(addAapOrganizationId != null && addAapOrganizationId !== '')
    vals['addAapOrganizationId'] = addAapOrganizationId;
  var removeAapOrganizationId = $formValues.querySelector('.removeAapOrganizationId')?.value;
  if(removeAapOrganizationId != null && removeAapOrganizationId !== '')
    vals['removeAapOrganizationId'] = removeAapOrganizationId;

  var valueAnsibleProjectId = $formValues.querySelector('.valueAnsibleProjectId')?.value;
  var removeAnsibleProjectId = $formValues.querySelector('.removeAnsibleProjectId')?.value === 'true';
  var setAnsibleProjectId = removeAnsibleProjectId ? null : $formValues.querySelector('.setAnsibleProjectId')?.value;
  var addAnsibleProjectId = $formValues.querySelector('.addAnsibleProjectId')?.value;
  if(removeAnsibleProjectId || setAnsibleProjectId != null && setAnsibleProjectId !== '')
    vals['setAnsibleProjectId'] = setAnsibleProjectId;
  if(addAnsibleProjectId != null && addAnsibleProjectId !== '')
    vals['addAnsibleProjectId'] = addAnsibleProjectId;
  var removeAnsibleProjectId = $formValues.querySelector('.removeAnsibleProjectId')?.value;
  if(removeAnsibleProjectId != null && removeAnsibleProjectId !== '')
    vals['removeAnsibleProjectId'] = removeAnsibleProjectId;

  var valueAapProjectId = $formValues.querySelector('.valueAapProjectId')?.value;
  var removeAapProjectId = $formValues.querySelector('.removeAapProjectId')?.value === 'true';
  var setAapProjectId = removeAapProjectId ? null : $formValues.querySelector('.setAapProjectId')?.value;
  var addAapProjectId = $formValues.querySelector('.addAapProjectId')?.value;
  if(removeAapProjectId || setAapProjectId != null && setAapProjectId !== '')
    vals['setAapProjectId'] = setAapProjectId;
  if(addAapProjectId != null && addAapProjectId !== '')
    vals['addAapProjectId'] = addAapProjectId;
  var removeAapProjectId = $formValues.querySelector('.removeAapProjectId')?.value;
  if(removeAapProjectId != null && removeAapProjectId !== '')
    vals['removeAapProjectId'] = removeAapProjectId;

  patchAnsibleProjectVals(ansibleProjectId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'ansibleProjectId:' + ansibleProjectId}], vals, target, success, error);
}

function patchAnsibleProjectFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterOrganizationId = $formFilters.querySelector('.valueOrganizationId')?.value;
    if(filterOrganizationId != null && filterOrganizationId !== '')
      filters.push({ name: 'fq', value: 'organizationId:' + filterOrganizationId });

    var filterSourceControlType = $formFilters.querySelector('.valueSourceControlType')?.value;
    if(filterSourceControlType != null && filterSourceControlType !== '')
      filters.push({ name: 'fq', value: 'sourceControlType:' + filterSourceControlType });

    var filterSourceControlUrl = $formFilters.querySelector('.valueSourceControlUrl')?.value;
    if(filterSourceControlUrl != null && filterSourceControlUrl !== '')
      filters.push({ name: 'fq', value: 'sourceControlUrl:' + filterSourceControlUrl });

    var filterAnsibleProjectDescription = $formFilters.querySelector('.valueAnsibleProjectDescription')?.value;
    if(filterAnsibleProjectDescription != null && filterAnsibleProjectDescription !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectDescription:' + filterAnsibleProjectDescription });

    var filterSourceControlBranch = $formFilters.querySelector('.valueSourceControlBranch')?.value;
    if(filterSourceControlBranch != null && filterSourceControlBranch !== '')
      filters.push({ name: 'fq', value: 'sourceControlBranch:' + filterSourceControlBranch });

    var filterJobTemplateIds = $formFilters.querySelector('.valueJobTemplateIds')?.value;
    if(filterJobTemplateIds != null && filterJobTemplateIds !== '')
      filters.push({ name: 'fq', value: 'jobTemplateIds:' + filterJobTemplateIds });

    var filterAnsibleProjectName = $formFilters.querySelector('.valueAnsibleProjectName')?.value;
    if(filterAnsibleProjectName != null && filterAnsibleProjectName !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectName:' + filterAnsibleProjectName });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterAnsibleProjectId = $formFilters.querySelector('.valueAnsibleProjectId')?.value;
    if(filterAnsibleProjectId != null && filterAnsibleProjectId !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectId:' + filterAnsibleProjectId });

    var filterAapProjectId = $formFilters.querySelector('.valueAapProjectId')?.value;
    if(filterAapProjectId != null && filterAapProjectId !== '')
      filters.push({ name: 'fq', value: 'aapProjectId:' + filterAapProjectId });
  }
  return filters;
}

function patchAnsibleProjectVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchAnsibleProjectVals(filters, vals, target, success, error);
}

function patchAnsibleProjectVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/ansible-project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postAnsibleProject($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueTenantResource = (Array.from($formValues.querySelectorAll('.valueTenantResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['tenantResource'] = valueTenantResource;

  var valueOrganizationId = $formValues.querySelector('.valueOrganizationId')?.value;
  if(valueOrganizationId != null && valueOrganizationId !== '')
    vals['organizationId'] = valueOrganizationId;

  var valueSourceControlType = $formValues.querySelector('.valueSourceControlType')?.value;
  if(valueSourceControlType != null && valueSourceControlType !== '')
    vals['sourceControlType'] = valueSourceControlType;

  var valueSourceControlUrl = $formValues.querySelector('.valueSourceControlUrl')?.value;
  if(valueSourceControlUrl != null && valueSourceControlUrl !== '')
    vals['sourceControlUrl'] = valueSourceControlUrl;

  var valueAnsibleProjectDescription = $formValues.querySelector('.valueAnsibleProjectDescription')?.value;
  if(valueAnsibleProjectDescription != null && valueAnsibleProjectDescription !== '')
    vals['ansibleProjectDescription'] = valueAnsibleProjectDescription;

  var valueSourceControlBranch = $formValues.querySelector('.valueSourceControlBranch')?.value;
  if(valueSourceControlBranch != null && valueSourceControlBranch !== '')
    vals['sourceControlBranch'] = valueSourceControlBranch;

  var valueJobTemplateIds = [];
  $formValues.querySelectorAll('input.valueJobTemplateIds:checked').forEach(function(index) {
    valueJobTemplateIds.push(this.value);
  });
  if(valueJobTemplateIds.length > 0)
    vals['jobTemplateIds'] = valueJobTemplateIds;

  var valueAnsibleProjectName = $formValues.querySelector('.valueAnsibleProjectName')?.value;
  if(valueAnsibleProjectName != null && valueAnsibleProjectName !== '')
    vals['ansibleProjectName'] = valueAnsibleProjectName;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  var valueAapOrganizationId = $formValues.querySelector('.valueAapOrganizationId')?.value;
  if(valueAapOrganizationId != null && valueAapOrganizationId !== '')
    vals['aapOrganizationId'] = valueAapOrganizationId;

  var valueAnsibleProjectId = $formValues.querySelector('.valueAnsibleProjectId')?.value;
  if(valueAnsibleProjectId != null && valueAnsibleProjectId !== '')
    vals['ansibleProjectId'] = valueAnsibleProjectId;

  var valueAapProjectId = $formValues.querySelector('.valueAapProjectId')?.value;
  if(valueAapProjectId != null && valueAapProjectId !== '')
    vals['aapProjectId'] = valueAapProjectId;

  fetch(
    '/en-us/api/ansible-project'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postAnsibleProjectVals(vals, target, success, error) {
  fetch(
    '/en-us/api/ansible-project'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteAnsibleProject(target, ansibleProjectId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/ansible-project/' + encodeURIComponent(ansibleProjectId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportAnsibleProject($formValues, target, ansibleProjectId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportAnsibleProjectVals(JSON.parse(json), target, success, error);
}

function putimportAnsibleProjectVals(json, target, success, error) {
  fetch(
    '/en-us/api/ansible-project-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterAnsibleProject(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/ansible-project'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}
