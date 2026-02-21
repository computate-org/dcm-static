
async function websocketJobTemplate(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketJobTemplate', function (error, message) {
      var json = JSON.parse(message['body']);
      var jobTemplateId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + jobTemplateId + ' ');
      $box.setAttribute('id', 'box-' + jobTemplateId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + jobTemplateId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + jobTemplateId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + jobTemplateId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-excavator"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify job templates in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + jobTemplateId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + jobTemplateId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + jobTemplateId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + jobTemplateId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + jobTemplateId);
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
        var $old_box = document.querySelector('.box-' + jobTemplateId);
      } else {
        document.querySelector('.box-' + jobTemplateId)?.remove();
      }
      if(jobTemplateId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketJobTemplateInner(apiRequest) {
  var jobTemplateId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(jobTemplateId != null && vars.length > 0) {
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
        var inputInventoryResource = null;
        var inputJobTemplateName = null;
        var inputJobTemplateDescription = null;
        var inputJobType = null;
        var inputOrganizationId = null;
        var inputAnsibleProjectId = null;
        var inputAnsiblePlaybook = null;
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
        var inputAapProjectId = null;
        var inputAapTemplateId = null;
        var inputJobTemplateId = null;
        var inputAapInventoryId = null;

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
        if(vars.includes('inventoryResource'))
          inputInventoryResource = $response.querySelector('.Page_inventoryResource');
        if(vars.includes('jobTemplateName'))
          inputJobTemplateName = $response.querySelector('.Page_jobTemplateName');
        if(vars.includes('jobTemplateDescription'))
          inputJobTemplateDescription = $response.querySelector('.Page_jobTemplateDescription');
        if(vars.includes('jobType'))
          inputJobType = $response.querySelector('.Page_jobType');
        if(vars.includes('organizationId'))
          inputOrganizationId = $response.querySelector('.Page_organizationId');
        if(vars.includes('ansibleProjectId'))
          inputAnsibleProjectId = $response.querySelector('.Page_ansibleProjectId');
        if(vars.includes('ansiblePlaybook'))
          inputAnsiblePlaybook = $response.querySelector('.Page_ansiblePlaybook');
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
        if(vars.includes('aapProjectId'))
          inputAapProjectId = $response.querySelector('.Page_aapProjectId');
        if(vars.includes('aapTemplateId'))
          inputAapTemplateId = $response.querySelector('.Page_aapTemplateId');
        if(vars.includes('jobTemplateId'))
          inputJobTemplateId = $response.querySelector('.Page_jobTemplateId');
        if(vars.includes('aapInventoryId'))
          inputAapInventoryId = $response.querySelector('.Page_aapInventoryId');

        jsWebsocketJobTemplate(jobTemplateId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listJobTemplate = JSON.parse($response.querySelector('.pageForm .listJobTemplate')?.value);


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

        if(inputInventoryResource) {
          document.querySelectorAll('.Page_inventoryResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInventoryResource.getAttribute('value');
            else
              item.textContent = inputInventoryResource.textContent;
          });
          addGlow(document.querySelector('.Page_inventoryResource'));
        }

        if(inputJobTemplateName) {
          document.querySelectorAll('.Page_jobTemplateName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateName.getAttribute('value');
            else
              item.textContent = inputJobTemplateName.textContent;
          });
          addGlow(document.querySelector('.Page_jobTemplateName'));
        }

        if(inputJobTemplateDescription) {
          document.querySelectorAll('.Page_jobTemplateDescription').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateDescription.getAttribute('value');
            else
              item.textContent = inputJobTemplateDescription.textContent;
          });
          addGlow(document.querySelector('.Page_jobTemplateDescription'));
        }

        if(inputJobType) {
          document.querySelectorAll('.Page_jobType').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobType.getAttribute('value');
            else
              item.textContent = inputJobType.textContent;
          });
          addGlow(document.querySelector('.Page_jobType'));
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

        if(inputAnsibleProjectId) {
          document.querySelectorAll('.Page_ansibleProjectId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAnsibleProjectId.getAttribute('value');
            else
              item.textContent = inputAnsibleProjectId.textContent;
          });
          addGlow(document.querySelector('.Page_ansibleProjectId'));
        }

        if(inputAnsiblePlaybook) {
          document.querySelectorAll('.Page_ansiblePlaybook').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAnsiblePlaybook.getAttribute('value');
            else
              item.textContent = inputAnsiblePlaybook.textContent;
          });
          addGlow(document.querySelector('.Page_ansiblePlaybook'));
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

        if(inputAapProjectId) {
          document.querySelectorAll('.Page_aapProjectId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapProjectId.getAttribute('value');
            else
              item.textContent = inputAapProjectId.textContent;
          });
          addGlow(document.querySelector('.Page_aapProjectId'));
        }

        if(inputAapTemplateId) {
          document.querySelectorAll('.Page_aapTemplateId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapTemplateId.getAttribute('value');
            else
              item.textContent = inputAapTemplateId.textContent;
          });
          addGlow(document.querySelector('.Page_aapTemplateId'));
        }

        if(inputJobTemplateId) {
          document.querySelectorAll('.Page_jobTemplateId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateId.getAttribute('value');
            else
              item.textContent = inputJobTemplateId.textContent;
          });
          addGlow(document.querySelector('.Page_jobTemplateId'));
        }

        if(inputAapInventoryId) {
          document.querySelectorAll('.Page_aapInventoryId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapInventoryId.getAttribute('value');
            else
              item.textContent = inputAapInventoryId.textContent;
          });
          addGlow(document.querySelector('.Page_aapInventoryId'));
        }

          pageGraphJobTemplate();
      });
    });
  }
}

function pageGraphJobTemplate(apiRequest) {
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
          layout['title'] = 'job templates';
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
          Plotly.react('htmBodyGraphJobTemplatePage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqJobTemplate_time').innerText = '';
  searchPage('JobTemplate', function() {
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
      document.querySelector('#fqJobTemplate_time').value = x;
      document.querySelector('#fqJobTemplate_time').onchange();
      searchPage('JobTemplate');
    }, speedRate);
  });
}

// Search //

async function searchJobTemplate($formFilters, success, error) {
  var filters = searchJobTemplateFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchJobTemplateVals(filters, target, success, error);
}

function searchJobTemplateFilters($formFilters) {
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

    var filterInventoryResource = $formFilters.querySelector('.valueInventoryResource')?.value;
    if(filterInventoryResource != null && filterInventoryResource !== '')
      filters.push({ name: 'fq', value: 'inventoryResource:' + filterInventoryResource });

    var filterJobTemplateName = $formFilters.querySelector('.valueJobTemplateName')?.value;
    if(filterJobTemplateName != null && filterJobTemplateName !== '')
      filters.push({ name: 'fq', value: 'jobTemplateName:' + filterJobTemplateName });

    var filterJobTemplateDescription = $formFilters.querySelector('.valueJobTemplateDescription')?.value;
    if(filterJobTemplateDescription != null && filterJobTemplateDescription !== '')
      filters.push({ name: 'fq', value: 'jobTemplateDescription:' + filterJobTemplateDescription });

    var filterJobType = $formFilters.querySelector('.valueJobType')?.value;
    if(filterJobType != null && filterJobType !== '')
      filters.push({ name: 'fq', value: 'jobType:' + filterJobType });

    var filterOrganizationId = $formFilters.querySelector('.valueOrganizationId')?.value;
    if(filterOrganizationId != null && filterOrganizationId !== '')
      filters.push({ name: 'fq', value: 'organizationId:' + filterOrganizationId });

    var filterAnsibleProjectId = $formFilters.querySelector('.valueAnsibleProjectId')?.value;
    if(filterAnsibleProjectId != null && filterAnsibleProjectId !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectId:' + filterAnsibleProjectId });

    var filterAnsiblePlaybook = $formFilters.querySelector('.valueAnsiblePlaybook')?.value;
    if(filterAnsiblePlaybook != null && filterAnsiblePlaybook !== '')
      filters.push({ name: 'fq', value: 'ansiblePlaybook:' + filterAnsiblePlaybook });

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

    var filterAapProjectId = $formFilters.querySelector('.valueAapProjectId')?.value;
    if(filterAapProjectId != null && filterAapProjectId !== '')
      filters.push({ name: 'fq', value: 'aapProjectId:' + filterAapProjectId });

    var filterAapTemplateId = $formFilters.querySelector('.valueAapTemplateId')?.value;
    if(filterAapTemplateId != null && filterAapTemplateId !== '')
      filters.push({ name: 'fq', value: 'aapTemplateId:' + filterAapTemplateId });

    var filterJobTemplateId = $formFilters.querySelector('.valueJobTemplateId')?.value;
    if(filterJobTemplateId != null && filterJobTemplateId !== '')
      filters.push({ name: 'fq', value: 'jobTemplateId:' + filterJobTemplateId });

    var filterAapInventoryId = $formFilters.querySelector('.valueAapInventoryId')?.value;
    if(filterAapInventoryId != null && filterAapInventoryId !== '')
      filters.push({ name: 'fq', value: 'aapInventoryId:' + filterAapInventoryId });
  }
  return filters;
}

function searchJobTemplateVals(filters, target, success, error) {


  fetch(
    '/en-us/api/job-template?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestJobTemplateTenantResource(filters, $list, jobTemplateId = null, tenantResource = null, relate=true, target) {
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
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['tenantResource'];
        var checked = val == null ? false : (tenantResource != null && val === tenantResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_tenantResource_' + jobTemplateId + '_tenantResource_' + o['tenantResource']);
        $input.setAttribute('name', 'tenantResource');
        $input.setAttribute('value', o['tenantResource']);
        $input.setAttribute('class', 'valueTenantResource ');
        if(jobTemplateId != null) {
          $input.addEventListener('change', function(event) {
            patchJobTemplateVals([{ name: 'fq', value: 'jobTemplateId:' + jobTemplateId }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o['tenantResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestJobTemplateTenantResource(filters, $list, jobTemplateId, o['tenantResource'], relate, target);
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

function suggestJobTemplateInventoryResource(filters, $list, jobTemplateId = null, inventoryResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-network-wired"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['inventoryResource'];
        var checked = val == null ? false : (inventoryResource != null && val === inventoryResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_inventoryResource_' + jobTemplateId + '_inventoryResource_' + o['inventoryResource']);
        $input.setAttribute('name', 'inventoryResource');
        $input.setAttribute('value', o['inventoryResource']);
        $input.setAttribute('class', 'valueInventoryResource ');
        if(jobTemplateId != null) {
          $input.addEventListener('change', function(event) {
            patchJobTemplateVals([{ name: 'fq', value: 'jobTemplateId:' + jobTemplateId }], { [(event.target.checked ? 'set' : 'remove') + 'InventoryResource']: o['inventoryResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestJobTemplateInventoryResource(filters, $list, jobTemplateId, o['inventoryResource'], relate, target);
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
  searchHostInventoryVals(filters, target, success, error);
}

function suggestJobTemplateAnsibleProjectId(filters, $list, jobTemplateId = null, ansibleProjectId = null, relate=true, target) {
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
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['ansibleProjectId'];
        var checked = val == null ? false : (ansibleProjectId != null && val === ansibleProjectId.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_ansibleProjectId_' + jobTemplateId + '_ansibleProjectId_' + o['ansibleProjectId']);
        $input.setAttribute('name', 'ansibleProjectId');
        $input.setAttribute('value', o['ansibleProjectId']);
        $input.setAttribute('class', 'valueAnsibleProjectId ');
        if(jobTemplateId != null) {
          $input.addEventListener('change', function(event) {
            patchJobTemplateVals([{ name: 'fq', value: 'jobTemplateId:' + jobTemplateId }], { [(event.target.checked ? 'set' : 'remove') + 'AnsibleProjectId']: o['ansibleProjectId'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestJobTemplateAnsibleProjectId(filters, $list, jobTemplateId, o['ansibleProjectId'], relate, target);
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
  searchAnsibleProjectVals(filters, target, success, error);
}

function suggestJobTemplateObjectSuggest($formFilters, $list, target) {
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
  searchJobTemplateVals($formFilters, target, success, error);
}

// GET //

async function getJobTemplate(pk) {
  fetch(
    '/en-us/api/job-template/' + jobTemplateId
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

async function patchJobTemplate($formFilters, $formValues, target, jobTemplateId, success, error) {
  var filters = patchJobTemplateFilters($formFilters);

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

  var valueInventoryResource = (Array.from($formValues.querySelectorAll('.valueInventoryResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueInventoryResource != null && valueInventoryResource !== '')
    vals['setInventoryResource'] = valueInventoryResource;

  var valueJobTemplateName = $formValues.querySelector('.valueJobTemplateName')?.value;
  var removeJobTemplateName = $formValues.querySelector('.removeJobTemplateName')?.value === 'true';
  var setJobTemplateName = removeJobTemplateName ? null : $formValues.querySelector('.setJobTemplateName')?.value;
  var addJobTemplateName = $formValues.querySelector('.addJobTemplateName')?.value;
  if(removeJobTemplateName || setJobTemplateName != null && setJobTemplateName !== '')
    vals['setJobTemplateName'] = setJobTemplateName;
  if(addJobTemplateName != null && addJobTemplateName !== '')
    vals['addJobTemplateName'] = addJobTemplateName;
  var removeJobTemplateName = $formValues.querySelector('.removeJobTemplateName')?.value;
  if(removeJobTemplateName != null && removeJobTemplateName !== '')
    vals['removeJobTemplateName'] = removeJobTemplateName;

  var valueJobTemplateDescription = $formValues.querySelector('.valueJobTemplateDescription')?.value;
  var removeJobTemplateDescription = $formValues.querySelector('.removeJobTemplateDescription')?.value === 'true';
  var setJobTemplateDescription = removeJobTemplateDescription ? null : $formValues.querySelector('.setJobTemplateDescription')?.value;
  var addJobTemplateDescription = $formValues.querySelector('.addJobTemplateDescription')?.value;
  if(removeJobTemplateDescription || setJobTemplateDescription != null && setJobTemplateDescription !== '')
    vals['setJobTemplateDescription'] = setJobTemplateDescription;
  if(addJobTemplateDescription != null && addJobTemplateDescription !== '')
    vals['addJobTemplateDescription'] = addJobTemplateDescription;
  var removeJobTemplateDescription = $formValues.querySelector('.removeJobTemplateDescription')?.value;
  if(removeJobTemplateDescription != null && removeJobTemplateDescription !== '')
    vals['removeJobTemplateDescription'] = removeJobTemplateDescription;

  var valueJobType = $formValues.querySelector('.valueJobType')?.value;
  var removeJobType = $formValues.querySelector('.removeJobType')?.value === 'true';
  var setJobType = removeJobType ? null : $formValues.querySelector('.setJobType')?.value;
  var addJobType = $formValues.querySelector('.addJobType')?.value;
  if(removeJobType || setJobType != null && setJobType !== '')
    vals['setJobType'] = setJobType;
  if(addJobType != null && addJobType !== '')
    vals['addJobType'] = addJobType;
  var removeJobType = $formValues.querySelector('.removeJobType')?.value;
  if(removeJobType != null && removeJobType !== '')
    vals['removeJobType'] = removeJobType;

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

  var valueAnsibleProjectId = (Array.from($formValues.querySelectorAll('.valueAnsibleProjectId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueAnsibleProjectId != null && valueAnsibleProjectId !== '')
    vals['setAnsibleProjectId'] = valueAnsibleProjectId;

  var valueAnsiblePlaybook = $formValues.querySelector('.valueAnsiblePlaybook')?.value;
  var removeAnsiblePlaybook = $formValues.querySelector('.removeAnsiblePlaybook')?.value === 'true';
  var setAnsiblePlaybook = removeAnsiblePlaybook ? null : $formValues.querySelector('.setAnsiblePlaybook')?.value;
  var addAnsiblePlaybook = $formValues.querySelector('.addAnsiblePlaybook')?.value;
  if(removeAnsiblePlaybook || setAnsiblePlaybook != null && setAnsiblePlaybook !== '')
    vals['setAnsiblePlaybook'] = setAnsiblePlaybook;
  if(addAnsiblePlaybook != null && addAnsiblePlaybook !== '')
    vals['addAnsiblePlaybook'] = addAnsiblePlaybook;
  var removeAnsiblePlaybook = $formValues.querySelector('.removeAnsiblePlaybook')?.value;
  if(removeAnsiblePlaybook != null && removeAnsiblePlaybook !== '')
    vals['removeAnsiblePlaybook'] = removeAnsiblePlaybook;

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

  var valueAapTemplateId = $formValues.querySelector('.valueAapTemplateId')?.value;
  var removeAapTemplateId = $formValues.querySelector('.removeAapTemplateId')?.value === 'true';
  var setAapTemplateId = removeAapTemplateId ? null : $formValues.querySelector('.setAapTemplateId')?.value;
  var addAapTemplateId = $formValues.querySelector('.addAapTemplateId')?.value;
  if(removeAapTemplateId || setAapTemplateId != null && setAapTemplateId !== '')
    vals['setAapTemplateId'] = setAapTemplateId;
  if(addAapTemplateId != null && addAapTemplateId !== '')
    vals['addAapTemplateId'] = addAapTemplateId;
  var removeAapTemplateId = $formValues.querySelector('.removeAapTemplateId')?.value;
  if(removeAapTemplateId != null && removeAapTemplateId !== '')
    vals['removeAapTemplateId'] = removeAapTemplateId;

  var valueJobTemplateId = $formValues.querySelector('.valueJobTemplateId')?.value;
  var removeJobTemplateId = $formValues.querySelector('.removeJobTemplateId')?.value === 'true';
  var setJobTemplateId = removeJobTemplateId ? null : $formValues.querySelector('.setJobTemplateId')?.value;
  var addJobTemplateId = $formValues.querySelector('.addJobTemplateId')?.value;
  if(removeJobTemplateId || setJobTemplateId != null && setJobTemplateId !== '')
    vals['setJobTemplateId'] = setJobTemplateId;
  if(addJobTemplateId != null && addJobTemplateId !== '')
    vals['addJobTemplateId'] = addJobTemplateId;
  var removeJobTemplateId = $formValues.querySelector('.removeJobTemplateId')?.value;
  if(removeJobTemplateId != null && removeJobTemplateId !== '')
    vals['removeJobTemplateId'] = removeJobTemplateId;

  var valueAapInventoryId = $formValues.querySelector('.valueAapInventoryId')?.value;
  var removeAapInventoryId = $formValues.querySelector('.removeAapInventoryId')?.value === 'true';
  var setAapInventoryId = removeAapInventoryId ? null : $formValues.querySelector('.setAapInventoryId')?.value;
  var addAapInventoryId = $formValues.querySelector('.addAapInventoryId')?.value;
  if(removeAapInventoryId || setAapInventoryId != null && setAapInventoryId !== '')
    vals['setAapInventoryId'] = setAapInventoryId;
  if(addAapInventoryId != null && addAapInventoryId !== '')
    vals['addAapInventoryId'] = addAapInventoryId;
  var removeAapInventoryId = $formValues.querySelector('.removeAapInventoryId')?.value;
  if(removeAapInventoryId != null && removeAapInventoryId !== '')
    vals['removeAapInventoryId'] = removeAapInventoryId;

  patchJobTemplateVals(jobTemplateId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'jobTemplateId:' + jobTemplateId}], vals, target, success, error);
}

function patchJobTemplateFilters($formFilters) {
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

    var filterInventoryResource = $formFilters.querySelector('.valueInventoryResource')?.value;
    if(filterInventoryResource != null && filterInventoryResource !== '')
      filters.push({ name: 'fq', value: 'inventoryResource:' + filterInventoryResource });

    var filterJobTemplateName = $formFilters.querySelector('.valueJobTemplateName')?.value;
    if(filterJobTemplateName != null && filterJobTemplateName !== '')
      filters.push({ name: 'fq', value: 'jobTemplateName:' + filterJobTemplateName });

    var filterJobTemplateDescription = $formFilters.querySelector('.valueJobTemplateDescription')?.value;
    if(filterJobTemplateDescription != null && filterJobTemplateDescription !== '')
      filters.push({ name: 'fq', value: 'jobTemplateDescription:' + filterJobTemplateDescription });

    var filterJobType = $formFilters.querySelector('.valueJobType')?.value;
    if(filterJobType != null && filterJobType !== '')
      filters.push({ name: 'fq', value: 'jobType:' + filterJobType });

    var filterOrganizationId = $formFilters.querySelector('.valueOrganizationId')?.value;
    if(filterOrganizationId != null && filterOrganizationId !== '')
      filters.push({ name: 'fq', value: 'organizationId:' + filterOrganizationId });

    var filterAnsibleProjectId = $formFilters.querySelector('.valueAnsibleProjectId')?.value;
    if(filterAnsibleProjectId != null && filterAnsibleProjectId !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectId:' + filterAnsibleProjectId });

    var filterAnsiblePlaybook = $formFilters.querySelector('.valueAnsiblePlaybook')?.value;
    if(filterAnsiblePlaybook != null && filterAnsiblePlaybook !== '')
      filters.push({ name: 'fq', value: 'ansiblePlaybook:' + filterAnsiblePlaybook });

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

    var filterAapProjectId = $formFilters.querySelector('.valueAapProjectId')?.value;
    if(filterAapProjectId != null && filterAapProjectId !== '')
      filters.push({ name: 'fq', value: 'aapProjectId:' + filterAapProjectId });

    var filterAapTemplateId = $formFilters.querySelector('.valueAapTemplateId')?.value;
    if(filterAapTemplateId != null && filterAapTemplateId !== '')
      filters.push({ name: 'fq', value: 'aapTemplateId:' + filterAapTemplateId });

    var filterJobTemplateId = $formFilters.querySelector('.valueJobTemplateId')?.value;
    if(filterJobTemplateId != null && filterJobTemplateId !== '')
      filters.push({ name: 'fq', value: 'jobTemplateId:' + filterJobTemplateId });

    var filterAapInventoryId = $formFilters.querySelector('.valueAapInventoryId')?.value;
    if(filterAapInventoryId != null && filterAapInventoryId !== '')
      filters.push({ name: 'fq', value: 'aapInventoryId:' + filterAapInventoryId });
  }
  return filters;
}

function patchJobTemplateVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchJobTemplateVals(filters, vals, target, success, error);
}

function patchJobTemplateVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/job-template?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postJobTemplate($formValues, target, success, error) {
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

  var valueInventoryResource = (Array.from($formValues.querySelectorAll('.valueInventoryResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueInventoryResource != null && valueInventoryResource !== '')
    vals['inventoryResource'] = valueInventoryResource;

  var valueJobTemplateName = $formValues.querySelector('.valueJobTemplateName')?.value;
  if(valueJobTemplateName != null && valueJobTemplateName !== '')
    vals['jobTemplateName'] = valueJobTemplateName;

  var valueJobTemplateDescription = $formValues.querySelector('.valueJobTemplateDescription')?.value;
  if(valueJobTemplateDescription != null && valueJobTemplateDescription !== '')
    vals['jobTemplateDescription'] = valueJobTemplateDescription;

  var valueJobType = $formValues.querySelector('.valueJobType')?.value;
  if(valueJobType != null && valueJobType !== '')
    vals['jobType'] = valueJobType;

  var valueOrganizationId = $formValues.querySelector('.valueOrganizationId')?.value;
  if(valueOrganizationId != null && valueOrganizationId !== '')
    vals['organizationId'] = valueOrganizationId;

  var valueAnsibleProjectId = (Array.from($formValues.querySelectorAll('.valueAnsibleProjectId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueAnsibleProjectId != null && valueAnsibleProjectId !== '')
    vals['ansibleProjectId'] = valueAnsibleProjectId;

  var valueAnsiblePlaybook = $formValues.querySelector('.valueAnsiblePlaybook')?.value;
  if(valueAnsiblePlaybook != null && valueAnsiblePlaybook !== '')
    vals['ansiblePlaybook'] = valueAnsiblePlaybook;

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

  var valueAapProjectId = $formValues.querySelector('.valueAapProjectId')?.value;
  if(valueAapProjectId != null && valueAapProjectId !== '')
    vals['aapProjectId'] = valueAapProjectId;

  var valueAapTemplateId = $formValues.querySelector('.valueAapTemplateId')?.value;
  if(valueAapTemplateId != null && valueAapTemplateId !== '')
    vals['aapTemplateId'] = valueAapTemplateId;

  var valueJobTemplateId = $formValues.querySelector('.valueJobTemplateId')?.value;
  if(valueJobTemplateId != null && valueJobTemplateId !== '')
    vals['jobTemplateId'] = valueJobTemplateId;

  var valueAapInventoryId = $formValues.querySelector('.valueAapInventoryId')?.value;
  if(valueAapInventoryId != null && valueAapInventoryId !== '')
    vals['aapInventoryId'] = valueAapInventoryId;

  fetch(
    '/en-us/api/job-template'
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

function postJobTemplateVals(vals, target, success, error) {
  fetch(
    '/en-us/api/job-template'
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

async function deleteJobTemplate(target, jobTemplateId, success, error) {
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
    '/en-us/api/job-template/' + encodeURIComponent(jobTemplateId)
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

async function putimportJobTemplate($formValues, target, jobTemplateId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportJobTemplateVals(JSON.parse(json), target, success, error);
}

function putimportJobTemplateVals(json, target, success, error) {
  fetch(
    '/en-us/api/job-template-import'
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

async function deletefilterJobTemplate(target, success, error) {
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
    '/en-us/api/job-template'
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
