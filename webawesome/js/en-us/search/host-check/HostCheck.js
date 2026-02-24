
async function websocketHostCheck(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketHostCheck', function (error, message) {
      var json = JSON.parse(message['body']);
      var checkName = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + checkName + ' ');
      $box.setAttribute('id', 'box-' + checkName);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + checkName);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + checkName);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + checkName);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-box-check"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify host checks in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + checkName + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + checkName);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + checkName);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + checkName);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + checkName);
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
        var $old_box = document.querySelector('.box-' + checkName);
      } else {
        document.querySelector('.box-' + checkName)?.remove();
      }
      if(checkName) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketHostCheckInner(apiRequest) {
  var checkName = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(checkName != null && vars.length > 0) {
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
        var inputJobTemplateResource = null;
        var inputCheckName = null;
        var inputCheckDescription = null;
        var inputCheckNamespace = null;
        var inputCheckCommand = null;
        var inputCheckInterval = null;
        var inputCheckPublished = null;
        var inputEventSubscriptions = null;
        var inputEventHandlers = null;
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
        var inputTenantId = null;
        var inputAapOrganizationId = null;
        var inputJobTemplateId = null;
        var inputAapTemplateId = null;

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
        if(vars.includes('jobTemplateResource'))
          inputJobTemplateResource = $response.querySelector('.Page_jobTemplateResource');
        if(vars.includes('checkName'))
          inputCheckName = $response.querySelector('.Page_checkName');
        if(vars.includes('checkDescription'))
          inputCheckDescription = $response.querySelector('.Page_checkDescription');
        if(vars.includes('checkNamespace'))
          inputCheckNamespace = $response.querySelector('.Page_checkNamespace');
        if(vars.includes('checkCommand'))
          inputCheckCommand = $response.querySelector('.Page_checkCommand');
        if(vars.includes('checkInterval'))
          inputCheckInterval = $response.querySelector('.Page_checkInterval');
        if(vars.includes('checkPublished'))
          inputCheckPublished = $response.querySelector('.Page_checkPublished');
        if(vars.includes('eventSubscriptions'))
          inputEventSubscriptions = $response.querySelector('.Page_eventSubscriptions');
        if(vars.includes('eventHandlers'))
          inputEventHandlers = $response.querySelector('.Page_eventHandlers');
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
        if(vars.includes('tenantId'))
          inputTenantId = $response.querySelector('.Page_tenantId');
        if(vars.includes('aapOrganizationId'))
          inputAapOrganizationId = $response.querySelector('.Page_aapOrganizationId');
        if(vars.includes('jobTemplateId'))
          inputJobTemplateId = $response.querySelector('.Page_jobTemplateId');
        if(vars.includes('aapTemplateId'))
          inputAapTemplateId = $response.querySelector('.Page_aapTemplateId');

        jsWebsocketHostCheck(checkName, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listHostCheck = JSON.parse($response.querySelector('.pageForm .listHostCheck')?.value);


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

        if(inputJobTemplateResource) {
          document.querySelectorAll('.Page_jobTemplateResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateResource.getAttribute('value');
            else
              item.textContent = inputJobTemplateResource.textContent;
          });
          addGlow(document.querySelector('.Page_jobTemplateResource'));
        }

        if(inputCheckName) {
          document.querySelectorAll('.Page_checkName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCheckName.getAttribute('value');
            else
              item.textContent = inputCheckName.textContent;
          });
          addGlow(document.querySelector('.Page_checkName'));
        }

        if(inputCheckDescription) {
          document.querySelectorAll('.Page_checkDescription').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCheckDescription.getAttribute('value');
            else
              item.textContent = inputCheckDescription.textContent;
          });
          addGlow(document.querySelector('.Page_checkDescription'));
        }

        if(inputCheckNamespace) {
          document.querySelectorAll('.Page_checkNamespace').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCheckNamespace.getAttribute('value');
            else
              item.textContent = inputCheckNamespace.textContent;
          });
          addGlow(document.querySelector('.Page_checkNamespace'));
        }

        if(inputCheckCommand) {
          document.querySelectorAll('.Page_checkCommand').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCheckCommand.getAttribute('value');
            else
              item.textContent = inputCheckCommand.textContent;
          });
          addGlow(document.querySelector('.Page_checkCommand'));
        }

        if(inputCheckInterval) {
          document.querySelectorAll('.Page_checkInterval').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCheckInterval.getAttribute('value');
            else
              item.textContent = inputCheckInterval.textContent;
          });
          addGlow(document.querySelector('.Page_checkInterval'));
        }

        if(inputCheckPublished) {
          document.querySelectorAll('.Page_checkPublished').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCheckPublished.getAttribute('value');
            else
              item.textContent = inputCheckPublished.textContent;
          });
          addGlow(document.querySelector('.Page_checkPublished'));
        }

        if(inputEventSubscriptions) {
          document.querySelectorAll('.Page_eventSubscriptions').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEventSubscriptions.getAttribute('value');
            else
              item.textContent = inputEventSubscriptions.textContent;
          });
          addGlow(document.querySelector('.Page_eventSubscriptions'));
        }

        if(inputEventHandlers) {
          document.querySelectorAll('.Page_eventHandlers').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEventHandlers.getAttribute('value');
            else
              item.textContent = inputEventHandlers.textContent;
          });
          addGlow(document.querySelector('.Page_eventHandlers'));
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

        if(inputTenantId) {
          document.querySelectorAll('.Page_tenantId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTenantId.getAttribute('value');
            else
              item.textContent = inputTenantId.textContent;
          });
          addGlow(document.querySelector('.Page_tenantId'));
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

        if(inputJobTemplateId) {
          document.querySelectorAll('.Page_jobTemplateId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateId.getAttribute('value');
            else
              item.textContent = inputJobTemplateId.textContent;
          });
          addGlow(document.querySelector('.Page_jobTemplateId'));
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

          pageGraphHostCheck();
      });
    });
  }
}

function pageGraphHostCheck(apiRequest) {
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
          layout['title'] = 'host checks';
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
          Plotly.react('htmBodyGraphHostCheckPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqHostCheck_time').innerText = '';
  searchPage('HostCheck', function() {
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
      document.querySelector('#fqHostCheck_time').value = x;
      document.querySelector('#fqHostCheck_time').onchange();
      searchPage('HostCheck');
    }, speedRate);
  });
}

// Search //

async function searchHostCheck($formFilters, success, error) {
  var filters = searchHostCheckFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchHostCheckVals(filters, target, success, error);
}

function searchHostCheckFilters($formFilters) {
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

    var filterJobTemplateResource = $formFilters.querySelector('.valueJobTemplateResource')?.value;
    if(filterJobTemplateResource != null && filterJobTemplateResource !== '')
      filters.push({ name: 'fq', value: 'jobTemplateResource:' + filterJobTemplateResource });

    var filterCheckName = $formFilters.querySelector('.valueCheckName')?.value;
    if(filterCheckName != null && filterCheckName !== '')
      filters.push({ name: 'fq', value: 'checkName:' + filterCheckName });

    var filterCheckDescription = $formFilters.querySelector('.valueCheckDescription')?.value;
    if(filterCheckDescription != null && filterCheckDescription !== '')
      filters.push({ name: 'fq', value: 'checkDescription:' + filterCheckDescription });

    var filterCheckNamespace = $formFilters.querySelector('.valueCheckNamespace')?.value;
    if(filterCheckNamespace != null && filterCheckNamespace !== '')
      filters.push({ name: 'fq', value: 'checkNamespace:' + filterCheckNamespace });

    var filterCheckCommand = $formFilters.querySelector('.valueCheckCommand')?.value;
    if(filterCheckCommand != null && filterCheckCommand !== '')
      filters.push({ name: 'fq', value: 'checkCommand:' + filterCheckCommand });

    var filterCheckInterval = $formFilters.querySelector('.valueCheckInterval')?.value;
    if(filterCheckInterval != null && filterCheckInterval !== '')
      filters.push({ name: 'fq', value: 'checkInterval:' + filterCheckInterval });

    var $filterCheckPublishedCheckbox = $formFilters.querySelector('input.valueCheckPublished[type = "checkbox"]');
    var $filterCheckPublishedSelect = $formFilters.querySelector('select.valueCheckPublished');
    var filterCheckPublished = $filterCheckPublishedSelect.length ? $filterCheckPublishedSelect.value : $filterCheckPublishedCheckbox.checked;
    var filterCheckPublishedSelectVal = $formFilters.querySelector('select.filterCheckPublished')?.value;
    var filterCheckPublished = null;
    if(filterCheckPublishedSelectVal !== '')
      filterCheckPublished = filterCheckPublishedSelectVal == 'true';
    if(filterCheckPublished != null && filterCheckPublished === true)
      filters.push({ name: 'fq', value: 'checkPublished:' + filterCheckPublished });

    var filterEventSubscriptions = $formFilters.querySelector('.valueEventSubscriptions')?.value;
    if(filterEventSubscriptions != null && filterEventSubscriptions !== '')
      filters.push({ name: 'fq', value: 'eventSubscriptions:' + filterEventSubscriptions });

    var filterEventHandlers = $formFilters.querySelector('.valueEventHandlers')?.value;
    if(filterEventHandlers != null && filterEventHandlers !== '')
      filters.push({ name: 'fq', value: 'eventHandlers:' + filterEventHandlers });

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

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterJobTemplateId = $formFilters.querySelector('.valueJobTemplateId')?.value;
    if(filterJobTemplateId != null && filterJobTemplateId !== '')
      filters.push({ name: 'fq', value: 'jobTemplateId:' + filterJobTemplateId });

    var filterAapTemplateId = $formFilters.querySelector('.valueAapTemplateId')?.value;
    if(filterAapTemplateId != null && filterAapTemplateId !== '')
      filters.push({ name: 'fq', value: 'aapTemplateId:' + filterAapTemplateId });
  }
  return filters;
}

function searchHostCheckVals(filters, target, success, error) {


  fetch(
    '/en-us/api/host-check?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestHostCheckTenantResource(filters, $list, checkName = null, tenantResource = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_tenantResource_' + checkName + '_tenantResource_' + o['tenantResource']);
        $input.setAttribute('name', 'tenantResource');
        $input.setAttribute('value', o['tenantResource']);
        $input.setAttribute('class', 'valueTenantResource ');
        if(checkName != null) {
          $input.addEventListener('change', function(event) {
            patchHostCheckVals([{ name: 'fq', value: 'checkName:' + checkName }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o['tenantResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestHostCheckTenantResource(filters, $list, checkName, o['tenantResource'], relate, target);
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

function suggestHostCheckJobTemplateResource(filters, $list, checkName = null, jobTemplateResource = null, relate=true, target) {
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
        var val = o['jobTemplateResource'];
        var checked = val == null ? false : (jobTemplateResource != null && val === jobTemplateResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_jobTemplateResource_' + checkName + '_jobTemplateResource_' + o['jobTemplateResource']);
        $input.setAttribute('name', 'jobTemplateResource');
        $input.setAttribute('value', o['jobTemplateResource']);
        $input.setAttribute('class', 'valueJobTemplateResource ');
        if(checkName != null) {
          $input.addEventListener('change', function(event) {
            patchHostCheckVals([{ name: 'fq', value: 'checkName:' + checkName }], { [(event.target.checked ? 'set' : 'remove') + 'JobTemplateResource']: o['jobTemplateResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestHostCheckJobTemplateResource(filters, $list, checkName, o['jobTemplateResource'], relate, target);
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

function suggestHostCheckObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-box-check"></i>');
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
  searchHostCheckVals($formFilters, target, success, error);
}

// GET //

async function getHostCheck(pk) {
  fetch(
    '/en-us/api/host-check/' + checkName
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

async function patchHostCheck($formFilters, $formValues, target, checkName, success, error) {
  var filters = patchHostCheckFilters($formFilters);

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

  var valueJobTemplateResource = (Array.from($formValues.querySelectorAll('.valueJobTemplateResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueJobTemplateResource != null && valueJobTemplateResource !== '')
    vals['setJobTemplateResource'] = valueJobTemplateResource;

  var valueCheckName = $formValues.querySelector('.valueCheckName')?.value;
  var removeCheckName = $formValues.querySelector('.removeCheckName')?.value === 'true';
  var setCheckName = removeCheckName ? null : $formValues.querySelector('.setCheckName')?.value;
  var addCheckName = $formValues.querySelector('.addCheckName')?.value;
  if(removeCheckName || setCheckName != null && setCheckName !== '')
    vals['setCheckName'] = setCheckName;
  if(addCheckName != null && addCheckName !== '')
    vals['addCheckName'] = addCheckName;
  var removeCheckName = $formValues.querySelector('.removeCheckName')?.value;
  if(removeCheckName != null && removeCheckName !== '')
    vals['removeCheckName'] = removeCheckName;

  var valueCheckDescription = $formValues.querySelector('.valueCheckDescription')?.value;
  var removeCheckDescription = $formValues.querySelector('.removeCheckDescription')?.value === 'true';
  var setCheckDescription = removeCheckDescription ? null : $formValues.querySelector('.setCheckDescription')?.value;
  var addCheckDescription = $formValues.querySelector('.addCheckDescription')?.value;
  if(removeCheckDescription || setCheckDescription != null && setCheckDescription !== '')
    vals['setCheckDescription'] = setCheckDescription;
  if(addCheckDescription != null && addCheckDescription !== '')
    vals['addCheckDescription'] = addCheckDescription;
  var removeCheckDescription = $formValues.querySelector('.removeCheckDescription')?.value;
  if(removeCheckDescription != null && removeCheckDescription !== '')
    vals['removeCheckDescription'] = removeCheckDescription;

  var valueCheckNamespace = $formValues.querySelector('.valueCheckNamespace')?.value;
  var removeCheckNamespace = $formValues.querySelector('.removeCheckNamespace')?.value === 'true';
  var setCheckNamespace = removeCheckNamespace ? null : $formValues.querySelector('.setCheckNamespace')?.value;
  var addCheckNamespace = $formValues.querySelector('.addCheckNamespace')?.value;
  if(removeCheckNamespace || setCheckNamespace != null && setCheckNamespace !== '')
    vals['setCheckNamespace'] = setCheckNamespace;
  if(addCheckNamespace != null && addCheckNamespace !== '')
    vals['addCheckNamespace'] = addCheckNamespace;
  var removeCheckNamespace = $formValues.querySelector('.removeCheckNamespace')?.value;
  if(removeCheckNamespace != null && removeCheckNamespace !== '')
    vals['removeCheckNamespace'] = removeCheckNamespace;

  var valueCheckCommand = $formValues.querySelector('.valueCheckCommand')?.value;
  var removeCheckCommand = $formValues.querySelector('.removeCheckCommand')?.value === 'true';
  var setCheckCommand = removeCheckCommand ? null : $formValues.querySelector('.setCheckCommand')?.value;
  var addCheckCommand = $formValues.querySelector('.addCheckCommand')?.value;
  if(removeCheckCommand || setCheckCommand != null && setCheckCommand !== '')
    vals['setCheckCommand'] = setCheckCommand;
  if(addCheckCommand != null && addCheckCommand !== '')
    vals['addCheckCommand'] = addCheckCommand;
  var removeCheckCommand = $formValues.querySelector('.removeCheckCommand')?.value;
  if(removeCheckCommand != null && removeCheckCommand !== '')
    vals['removeCheckCommand'] = removeCheckCommand;

  var valueCheckInterval = $formValues.querySelector('.valueCheckInterval')?.value;
  var removeCheckInterval = $formValues.querySelector('.removeCheckInterval')?.value === 'true';
  var setCheckInterval = removeCheckInterval ? null : $formValues.querySelector('.setCheckInterval')?.value;
  var addCheckInterval = $formValues.querySelector('.addCheckInterval')?.value;
  if(removeCheckInterval || setCheckInterval != null && setCheckInterval !== '')
    vals['setCheckInterval'] = setCheckInterval;
  if(addCheckInterval != null && addCheckInterval !== '')
    vals['addCheckInterval'] = addCheckInterval;
  var removeCheckInterval = $formValues.querySelector('.removeCheckInterval')?.value;
  if(removeCheckInterval != null && removeCheckInterval !== '')
    vals['removeCheckInterval'] = removeCheckInterval;

  var valueCheckPublished = $formValues.querySelector('.valueCheckPublished')?.value;
  var removeCheckPublished = $formValues.querySelector('.removeCheckPublished')?.value === 'true';
  if(valueCheckPublished != null)
    valueCheckPublished = valueCheckPublished === 'true';
  var valueCheckPublishedSelectVal = $formValues.querySelector('select.setCheckPublished')?.value;
  if(valueCheckPublishedSelectVal != null)
    valueCheckPublishedSelectVal = valueCheckPublishedSelectVal === 'true';
  if(valueCheckPublishedSelectVal != null && valueCheckPublishedSelectVal !== '')
    valueCheckPublished = valueCheckPublishedSelectVal == 'true';
  var setCheckPublished = removeCheckPublished ? null : valueCheckPublished;
  var addCheckPublished = $formValues.querySelector('.addCheckPublished')?.checked;
  if(removeCheckPublished || setCheckPublished != null && setCheckPublished !== '')
    vals['setCheckPublished'] = setCheckPublished;
  if(addCheckPublished != null && addCheckPublished !== '')
    vals['addCheckPublished'] = addCheckPublished;
  var removeCheckPublished = $formValues.querySelector('.removeCheckPublished')?.checked;
  if(removeCheckPublished != null && removeCheckPublished !== '')
    vals['removeCheckPublished'] = removeCheckPublished;

  var valueEventSubscriptions = $formValues.querySelector('.valueEventSubscriptions')?.value;
  var removeEventSubscriptions = $formValues.querySelector('.removeEventSubscriptions')?.value === 'true';
  var setEventSubscriptions = removeEventSubscriptions ? null : $formValues.querySelector('.setEventSubscriptions')?.value;
  var addEventSubscriptions = $formValues.querySelector('.addEventSubscriptions')?.value;
  if(removeEventSubscriptions || setEventSubscriptions != null && setEventSubscriptions !== '')
    vals['setEventSubscriptions'] = JSON.parse(setEventSubscriptions);
  if(addEventSubscriptions != null && addEventSubscriptions !== '')
    vals['addEventSubscriptions'] = addEventSubscriptions;
  var removeEventSubscriptions = $formValues.querySelector('.removeEventSubscriptions')?.value;
  if(removeEventSubscriptions != null && removeEventSubscriptions !== '')
    vals['removeEventSubscriptions'] = removeEventSubscriptions;

  var valueEventHandlers = $formValues.querySelector('.valueEventHandlers')?.value;
  var removeEventHandlers = $formValues.querySelector('.removeEventHandlers')?.value === 'true';
  var setEventHandlers = removeEventHandlers ? null : $formValues.querySelector('.setEventHandlers')?.value;
  var addEventHandlers = $formValues.querySelector('.addEventHandlers')?.value;
  if(removeEventHandlers || setEventHandlers != null && setEventHandlers !== '')
    vals['setEventHandlers'] = JSON.parse(setEventHandlers);
  if(addEventHandlers != null && addEventHandlers !== '')
    vals['addEventHandlers'] = addEventHandlers;
  var removeEventHandlers = $formValues.querySelector('.removeEventHandlers')?.value;
  if(removeEventHandlers != null && removeEventHandlers !== '')
    vals['removeEventHandlers'] = removeEventHandlers;

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

  var valueTenantId = $formValues.querySelector('.valueTenantId')?.value;
  var removeTenantId = $formValues.querySelector('.removeTenantId')?.value === 'true';
  var setTenantId = removeTenantId ? null : $formValues.querySelector('.setTenantId')?.value;
  var addTenantId = $formValues.querySelector('.addTenantId')?.value;
  if(removeTenantId || setTenantId != null && setTenantId !== '')
    vals['setTenantId'] = setTenantId;
  if(addTenantId != null && addTenantId !== '')
    vals['addTenantId'] = addTenantId;
  var removeTenantId = $formValues.querySelector('.removeTenantId')?.value;
  if(removeTenantId != null && removeTenantId !== '')
    vals['removeTenantId'] = removeTenantId;

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

  patchHostCheckVals(checkName == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'checkName:' + checkName}], vals, target, success, error);
}

function patchHostCheckFilters($formFilters) {
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

    var filterJobTemplateResource = $formFilters.querySelector('.valueJobTemplateResource')?.value;
    if(filterJobTemplateResource != null && filterJobTemplateResource !== '')
      filters.push({ name: 'fq', value: 'jobTemplateResource:' + filterJobTemplateResource });

    var filterCheckName = $formFilters.querySelector('.valueCheckName')?.value;
    if(filterCheckName != null && filterCheckName !== '')
      filters.push({ name: 'fq', value: 'checkName:' + filterCheckName });

    var filterCheckDescription = $formFilters.querySelector('.valueCheckDescription')?.value;
    if(filterCheckDescription != null && filterCheckDescription !== '')
      filters.push({ name: 'fq', value: 'checkDescription:' + filterCheckDescription });

    var filterCheckNamespace = $formFilters.querySelector('.valueCheckNamespace')?.value;
    if(filterCheckNamespace != null && filterCheckNamespace !== '')
      filters.push({ name: 'fq', value: 'checkNamespace:' + filterCheckNamespace });

    var filterCheckCommand = $formFilters.querySelector('.valueCheckCommand')?.value;
    if(filterCheckCommand != null && filterCheckCommand !== '')
      filters.push({ name: 'fq', value: 'checkCommand:' + filterCheckCommand });

    var filterCheckInterval = $formFilters.querySelector('.valueCheckInterval')?.value;
    if(filterCheckInterval != null && filterCheckInterval !== '')
      filters.push({ name: 'fq', value: 'checkInterval:' + filterCheckInterval });

    var $filterCheckPublishedCheckbox = $formFilters.querySelector('input.valueCheckPublished[type = "checkbox"]');
    var $filterCheckPublishedSelect = $formFilters.querySelector('select.valueCheckPublished');
    var filterCheckPublished = $filterCheckPublishedSelect.length ? $filterCheckPublishedSelect.value : $filterCheckPublishedCheckbox.checked;
    var filterCheckPublishedSelectVal = $formFilters.querySelector('select.filterCheckPublished')?.value;
    var filterCheckPublished = null;
    if(filterCheckPublishedSelectVal !== '')
      filterCheckPublished = filterCheckPublishedSelectVal == 'true';
    if(filterCheckPublished != null && filterCheckPublished === true)
      filters.push({ name: 'fq', value: 'checkPublished:' + filterCheckPublished });

    var filterEventSubscriptions = $formFilters.querySelector('.valueEventSubscriptions')?.value;
    if(filterEventSubscriptions != null && filterEventSubscriptions !== '')
      filters.push({ name: 'fq', value: 'eventSubscriptions:' + filterEventSubscriptions });

    var filterEventHandlers = $formFilters.querySelector('.valueEventHandlers')?.value;
    if(filterEventHandlers != null && filterEventHandlers !== '')
      filters.push({ name: 'fq', value: 'eventHandlers:' + filterEventHandlers });

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

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterJobTemplateId = $formFilters.querySelector('.valueJobTemplateId')?.value;
    if(filterJobTemplateId != null && filterJobTemplateId !== '')
      filters.push({ name: 'fq', value: 'jobTemplateId:' + filterJobTemplateId });

    var filterAapTemplateId = $formFilters.querySelector('.valueAapTemplateId')?.value;
    if(filterAapTemplateId != null && filterAapTemplateId !== '')
      filters.push({ name: 'fq', value: 'aapTemplateId:' + filterAapTemplateId });
  }
  return filters;
}

function patchHostCheckVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchHostCheckVals(filters, vals, target, success, error);
}

function patchHostCheckVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/host-check?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postHostCheck($formValues, target, success, error) {
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

  var valueJobTemplateResource = (Array.from($formValues.querySelectorAll('.valueJobTemplateResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueJobTemplateResource != null && valueJobTemplateResource !== '')
    vals['jobTemplateResource'] = valueJobTemplateResource;

  var valueCheckName = $formValues.querySelector('.valueCheckName')?.value;
  if(valueCheckName != null && valueCheckName !== '')
    vals['checkName'] = valueCheckName;

  var valueCheckDescription = $formValues.querySelector('.valueCheckDescription')?.value;
  if(valueCheckDescription != null && valueCheckDescription !== '')
    vals['checkDescription'] = valueCheckDescription;

  var valueCheckNamespace = $formValues.querySelector('.valueCheckNamespace')?.value;
  if(valueCheckNamespace != null && valueCheckNamespace !== '')
    vals['checkNamespace'] = valueCheckNamespace;

  var valueCheckCommand = $formValues.querySelector('.valueCheckCommand')?.value;
  if(valueCheckCommand != null && valueCheckCommand !== '')
    vals['checkCommand'] = valueCheckCommand;

  var valueCheckInterval = $formValues.querySelector('.valueCheckInterval')?.value;
  if(valueCheckInterval != null && valueCheckInterval !== '')
    vals['checkInterval'] = valueCheckInterval;

  var valueCheckPublished = $formValues.querySelector('.valueCheckPublished')?.value;
  if(valueCheckPublished != null && valueCheckPublished !== '')
    vals['checkPublished'] = valueCheckPublished == 'true';

  var valueEventSubscriptions = $formValues.querySelector('.valueEventSubscriptions')?.value;
  if(valueEventSubscriptions != null && valueEventSubscriptions !== '')
    vals['eventSubscriptions'] = JSON.parse(valueEventSubscriptions);

  var valueEventHandlers = $formValues.querySelector('.valueEventHandlers')?.value;
  if(valueEventHandlers != null && valueEventHandlers !== '')
    vals['eventHandlers'] = JSON.parse(valueEventHandlers);

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

  var valueTenantId = $formValues.querySelector('.valueTenantId')?.value;
  if(valueTenantId != null && valueTenantId !== '')
    vals['tenantId'] = valueTenantId;

  var valueAapOrganizationId = $formValues.querySelector('.valueAapOrganizationId')?.value;
  if(valueAapOrganizationId != null && valueAapOrganizationId !== '')
    vals['aapOrganizationId'] = valueAapOrganizationId;

  var valueJobTemplateId = $formValues.querySelector('.valueJobTemplateId')?.value;
  if(valueJobTemplateId != null && valueJobTemplateId !== '')
    vals['jobTemplateId'] = valueJobTemplateId;

  var valueAapTemplateId = $formValues.querySelector('.valueAapTemplateId')?.value;
  if(valueAapTemplateId != null && valueAapTemplateId !== '')
    vals['aapTemplateId'] = valueAapTemplateId;

  fetch(
    '/en-us/api/host-check'
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

function postHostCheckVals(vals, target, success, error) {
  fetch(
    '/en-us/api/host-check'
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

async function deleteHostCheck(target, checkName, success, error) {
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
    '/en-us/api/host-check/' + encodeURIComponent(checkName)
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

async function putimportHostCheck($formValues, target, checkName, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportHostCheckVals(JSON.parse(json), target, success, error);
}

function putimportHostCheckVals(json, target, success, error) {
  fetch(
    '/en-us/api/host-check-import'
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

async function deletefilterHostCheck(target, success, error) {
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
    '/en-us/api/host-check'
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
