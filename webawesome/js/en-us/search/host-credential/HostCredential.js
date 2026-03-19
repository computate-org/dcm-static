
async function websocketHostCredential(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketHostCredential', function (error, message) {
      var json = JSON.parse(message['body']);
      var credentialResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + credentialResource + ' ');
      $box.setAttribute('id', 'box-' + credentialResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + credentialResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + credentialResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + credentialResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-input-password"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify host credentials in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + credentialResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + credentialResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + credentialResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + credentialResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + credentialResource);
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
        var $old_box = document.querySelector('.box-' + credentialResource);
      } else {
        document.querySelector('.box-' + credentialResource)?.remove();
      }
      if(credentialResource) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketHostCredentialInner(apiRequest) {
  var credentialResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(credentialResource != null && vars.length > 0) {
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
        var inputCredentialName = null;
        var inputCredentialDescription = null;
        var inputUserName = null;
        var inputBecomePassword = null;
        var inputPassword = null;
        var inputBecomeMethod = null;
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
        var inputCredentialId = null;
        var inputCredentialResource = null;
        var inputAapCredentialId = null;
        var inputAapCredentialTypeId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.HostCredential_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.HostCredential_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.HostCredential_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.HostCredential_Page_archived');
        if(vars.includes('tenantResource'))
          inputTenantResource = $response.querySelector('.HostCredential_Page_tenantResource');
        if(vars.includes('credentialName'))
          inputCredentialName = $response.querySelector('.HostCredential_Page_credentialName');
        if(vars.includes('credentialDescription'))
          inputCredentialDescription = $response.querySelector('.HostCredential_Page_credentialDescription');
        if(vars.includes('userName'))
          inputUserName = $response.querySelector('.HostCredential_Page_userName');
        if(vars.includes('becomePassword'))
          inputBecomePassword = $response.querySelector('.HostCredential_Page_becomePassword');
        if(vars.includes('password'))
          inputPassword = $response.querySelector('.HostCredential_Page_password');
        if(vars.includes('becomeMethod'))
          inputBecomeMethod = $response.querySelector('.HostCredential_Page_becomeMethod');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.HostCredential_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.HostCredential_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.HostCredential_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.HostCredential_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.HostCredential_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.HostCredential_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.HostCredential_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.HostCredential_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.HostCredential_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.HostCredential_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.HostCredential_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.HostCredential_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.HostCredential_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.HostCredential_Page_solrId');
        if(vars.includes('tenantId'))
          inputTenantId = $response.querySelector('.HostCredential_Page_tenantId');
        if(vars.includes('aapOrganizationId'))
          inputAapOrganizationId = $response.querySelector('.HostCredential_Page_aapOrganizationId');
        if(vars.includes('credentialId'))
          inputCredentialId = $response.querySelector('.HostCredential_Page_credentialId');
        if(vars.includes('credentialResource'))
          inputCredentialResource = $response.querySelector('.HostCredential_Page_credentialResource');
        if(vars.includes('aapCredentialId'))
          inputAapCredentialId = $response.querySelector('.HostCredential_Page_aapCredentialId');
        if(vars.includes('aapCredentialTypeId'))
          inputAapCredentialTypeId = $response.querySelector('.HostCredential_Page_aapCredentialTypeId');

        jsWebsocketHostCredential(credentialResource, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listHostCredential = JSON.parse($response.querySelector('.pageForm .listHostCredential')?.value);


        if(inputPk) {
          document.querySelectorAll('.HostCredential_Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.HostCredential_Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.HostCredential_Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.HostCredential_Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_archived'));
        }

        if(inputTenantResource) {
          document.querySelectorAll('.HostCredential_Page_tenantResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTenantResource.getAttribute('value');
            else
              item.textContent = inputTenantResource.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_tenantResource'));
        }

        if(inputCredentialName) {
          document.querySelectorAll('.HostCredential_Page_credentialName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCredentialName.getAttribute('value');
            else
              item.textContent = inputCredentialName.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_credentialName'));
        }

        if(inputCredentialDescription) {
          document.querySelectorAll('.HostCredential_Page_credentialDescription').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCredentialDescription.getAttribute('value');
            else
              item.textContent = inputCredentialDescription.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_credentialDescription'));
        }

        if(inputUserName) {
          document.querySelectorAll('.HostCredential_Page_userName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserName.getAttribute('value');
            else
              item.textContent = inputUserName.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_userName'));
        }

        if(inputBecomePassword) {
          document.querySelectorAll('.HostCredential_Page_becomePassword').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBecomePassword.getAttribute('value');
            else
              item.textContent = inputBecomePassword.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_becomePassword'));
        }

        if(inputPassword) {
          document.querySelectorAll('.HostCredential_Page_password').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPassword.getAttribute('value');
            else
              item.textContent = inputPassword.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_password'));
        }

        if(inputBecomeMethod) {
          document.querySelectorAll('.HostCredential_Page_becomeMethod').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBecomeMethod.getAttribute('value');
            else
              item.textContent = inputBecomeMethod.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_becomeMethod'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.HostCredential_Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.HostCredential_Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.HostCredential_Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.HostCredential_Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.HostCredential_Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.HostCredential_Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.HostCredential_Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.HostCredential_Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.HostCredential_Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.HostCredential_Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.HostCredential_Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.HostCredential_Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.HostCredential_Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.HostCredential_Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_solrId'));
        }

        if(inputTenantId) {
          document.querySelectorAll('.HostCredential_Page_tenantId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTenantId.getAttribute('value');
            else
              item.textContent = inputTenantId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_tenantId'));
        }

        if(inputAapOrganizationId) {
          document.querySelectorAll('.HostCredential_Page_aapOrganizationId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapOrganizationId.getAttribute('value');
            else
              item.textContent = inputAapOrganizationId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_aapOrganizationId'));
        }

        if(inputCredentialId) {
          document.querySelectorAll('.HostCredential_Page_credentialId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCredentialId.getAttribute('value');
            else
              item.textContent = inputCredentialId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_credentialId'));
        }

        if(inputCredentialResource) {
          document.querySelectorAll('.HostCredential_Page_credentialResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCredentialResource.getAttribute('value');
            else
              item.textContent = inputCredentialResource.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_credentialResource'));
        }

        if(inputAapCredentialId) {
          document.querySelectorAll('.HostCredential_Page_aapCredentialId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapCredentialId.getAttribute('value');
            else
              item.textContent = inputAapCredentialId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_aapCredentialId'));
        }

        if(inputAapCredentialTypeId) {
          document.querySelectorAll('.HostCredential_Page_aapCredentialTypeId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapCredentialTypeId.getAttribute('value');
            else
              item.textContent = inputAapCredentialTypeId.textContent;
          });
          addGlow(document.querySelector('.HostCredential_Page_aapCredentialTypeId'));
        }

          pageGraphHostCredential();
      });
    });
  }
}

function pageGraphHostCredential(apiRequest) {
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
          layout['title'] = 'host credentials';
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
          Plotly.react('htmBodyGraphHostCredentialPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqHostCredential_time').innerText = '';
  searchPage('HostCredential', function() {
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
      document.querySelector('#fqHostCredential_time').value = x;
      document.querySelector('#fqHostCredential_time').onchange();
      searchPage('HostCredential');
    }, speedRate);
  });
}

// Search //

async function searchHostCredential($formFilters, success, error) {
  var filters = searchHostCredentialFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchHostCredentialVals(filters, target, success, error);
}

function searchHostCredentialFilters($formFilters) {
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

    var filterCredentialName = $formFilters.querySelector('.valueCredentialName')?.value;
    if(filterCredentialName != null && filterCredentialName !== '')
      filters.push({ name: 'fq', value: 'credentialName:' + filterCredentialName });

    var filterCredentialDescription = $formFilters.querySelector('.valueCredentialDescription')?.value;
    if(filterCredentialDescription != null && filterCredentialDescription !== '')
      filters.push({ name: 'fq', value: 'credentialDescription:' + filterCredentialDescription });

    var filterUserName = $formFilters.querySelector('.valueUserName')?.value;
    if(filterUserName != null && filterUserName !== '')
      filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterBecomePassword = $formFilters.querySelector('.valueBecomePassword')?.value;
    if(filterBecomePassword != null && filterBecomePassword !== '')
      filters.push({ name: 'fq', value: 'becomePassword:' + filterBecomePassword });

    var filterPassword = $formFilters.querySelector('.valuePassword')?.value;
    if(filterPassword != null && filterPassword !== '')
      filters.push({ name: 'fq', value: 'password:' + filterPassword });

    var filterBecomeMethod = $formFilters.querySelector('.valueBecomeMethod')?.value;
    if(filterBecomeMethod != null && filterBecomeMethod !== '')
      filters.push({ name: 'fq', value: 'becomeMethod:' + filterBecomeMethod });

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

    var filterCredentialId = $formFilters.querySelector('.valueCredentialId')?.value;
    if(filterCredentialId != null && filterCredentialId !== '')
      filters.push({ name: 'fq', value: 'credentialId:' + filterCredentialId });

    var filterCredentialResource = $formFilters.querySelector('.valueCredentialResource')?.value;
    if(filterCredentialResource != null && filterCredentialResource !== '')
      filters.push({ name: 'fq', value: 'credentialResource:' + filterCredentialResource });

    var filterAapCredentialId = $formFilters.querySelector('.valueAapCredentialId')?.value;
    if(filterAapCredentialId != null && filterAapCredentialId !== '')
      filters.push({ name: 'fq', value: 'aapCredentialId:' + filterAapCredentialId });

    var filterAapCredentialTypeId = $formFilters.querySelector('.valueAapCredentialTypeId')?.value;
    if(filterAapCredentialTypeId != null && filterAapCredentialTypeId !== '')
      filters.push({ name: 'fq', value: 'aapCredentialTypeId:' + filterAapCredentialTypeId });
  }
  return filters;
}

function searchHostCredentialVals(filters, target, success, error) {


  fetch(
    '/en-us/api/host-credential?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestHostCredentialTenantResource(filters, $list, credentialResource = null, tenantResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('class', 'wa-flank wa-gap-xs ');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'tenantResource';
        var val = o[inputVar];
        var checked = val == null ? false : (tenantResource != null && val === tenantResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_tenantResource_' + credentialResource + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueTenantResource ');
        if(credentialResource != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchHostCredentialVals([{ name: 'fq', value: 'credentialResource:' + credentialResource }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestHostCredentialTenantResource(filters, $list, credentialResource, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        $li.setAttribute('class', 'wa-flank wa-gap-0 ');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchTenantVals === 'function') {
    searchTenantVals(filters, target, success, error);
  }
}

function suggestHostCredentialObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="{{ FONTAWESOME_STYLE }} fa-input-password"></i>');
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
  searchHostCredentialVals($formFilters, target, success, error);
}

// GET //

async function getHostCredential(pk) {
  fetch(
    '/en-us/api/host-credential/' + credentialResource
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

async function patchHostCredential($formFilters, $formValues, target, credentialResource, success, error) {
  var filters = patchHostCredentialFilters($formFilters);

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

  var valueCredentialName = $formValues.querySelector('.valueCredentialName')?.value;
  var removeCredentialName = $formValues.querySelector('.removeCredentialName')?.value === 'true';
  var setCredentialName = removeCredentialName ? null : $formValues.querySelector('.setCredentialName')?.value;
  var addCredentialName = $formValues.querySelector('.addCredentialName')?.value;
  if(removeCredentialName || setCredentialName != null && setCredentialName !== '')
    vals['setCredentialName'] = setCredentialName;
  if(addCredentialName != null && addCredentialName !== '')
    vals['addCredentialName'] = addCredentialName;
  var removeCredentialName = $formValues.querySelector('.removeCredentialName')?.value;
  if(removeCredentialName != null && removeCredentialName !== '')
    vals['removeCredentialName'] = removeCredentialName;

  var valueCredentialDescription = $formValues.querySelector('.valueCredentialDescription')?.value;
  var removeCredentialDescription = $formValues.querySelector('.removeCredentialDescription')?.value === 'true';
  var setCredentialDescription = removeCredentialDescription ? null : $formValues.querySelector('.setCredentialDescription')?.value;
  var addCredentialDescription = $formValues.querySelector('.addCredentialDescription')?.value;
  if(removeCredentialDescription || setCredentialDescription != null && setCredentialDescription !== '')
    vals['setCredentialDescription'] = setCredentialDescription;
  if(addCredentialDescription != null && addCredentialDescription !== '')
    vals['addCredentialDescription'] = addCredentialDescription;
  var removeCredentialDescription = $formValues.querySelector('.removeCredentialDescription')?.value;
  if(removeCredentialDescription != null && removeCredentialDescription !== '')
    vals['removeCredentialDescription'] = removeCredentialDescription;

  var valueUserName = $formValues.querySelector('.valueUserName')?.value;
  var removeUserName = $formValues.querySelector('.removeUserName')?.value === 'true';
  var setUserName = removeUserName ? null : $formValues.querySelector('.setUserName')?.value;
  var addUserName = $formValues.querySelector('.addUserName')?.value;
  if(removeUserName || setUserName != null && setUserName !== '')
    vals['setUserName'] = setUserName;
  if(addUserName != null && addUserName !== '')
    vals['addUserName'] = addUserName;
  var removeUserName = $formValues.querySelector('.removeUserName')?.value;
  if(removeUserName != null && removeUserName !== '')
    vals['removeUserName'] = removeUserName;

  var valueBecomePassword = $formValues.querySelector('.valueBecomePassword')?.value;
  var removeBecomePassword = $formValues.querySelector('.removeBecomePassword')?.value === 'true';
  var setBecomePassword = removeBecomePassword ? null : $formValues.querySelector('.setBecomePassword')?.value;
  var addBecomePassword = $formValues.querySelector('.addBecomePassword')?.value;
  if(removeBecomePassword || setBecomePassword != null && setBecomePassword !== '')
    vals['setBecomePassword'] = setBecomePassword;
  if(addBecomePassword != null && addBecomePassword !== '')
    vals['addBecomePassword'] = addBecomePassword;
  var removeBecomePassword = $formValues.querySelector('.removeBecomePassword')?.value;
  if(removeBecomePassword != null && removeBecomePassword !== '')
    vals['removeBecomePassword'] = removeBecomePassword;

  var valuePassword = $formValues.querySelector('.valuePassword')?.value;
  var removePassword = $formValues.querySelector('.removePassword')?.value === 'true';
  var setPassword = removePassword ? null : $formValues.querySelector('.setPassword')?.value;
  var addPassword = $formValues.querySelector('.addPassword')?.value;
  if(removePassword || setPassword != null && setPassword !== '')
    vals['setPassword'] = setPassword;
  if(addPassword != null && addPassword !== '')
    vals['addPassword'] = addPassword;
  var removePassword = $formValues.querySelector('.removePassword')?.value;
  if(removePassword != null && removePassword !== '')
    vals['removePassword'] = removePassword;

  var valueBecomeMethod = $formValues.querySelector('.valueBecomeMethod')?.value;
  var removeBecomeMethod = $formValues.querySelector('.removeBecomeMethod')?.value === 'true';
  var setBecomeMethod = removeBecomeMethod ? null : $formValues.querySelector('.setBecomeMethod')?.value;
  var addBecomeMethod = $formValues.querySelector('.addBecomeMethod')?.value;
  if(removeBecomeMethod || setBecomeMethod != null && setBecomeMethod !== '')
    vals['setBecomeMethod'] = setBecomeMethod;
  if(addBecomeMethod != null && addBecomeMethod !== '')
    vals['addBecomeMethod'] = addBecomeMethod;
  var removeBecomeMethod = $formValues.querySelector('.removeBecomeMethod')?.value;
  if(removeBecomeMethod != null && removeBecomeMethod !== '')
    vals['removeBecomeMethod'] = removeBecomeMethod;

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

  var valueCredentialId = $formValues.querySelector('.valueCredentialId')?.value;
  var removeCredentialId = $formValues.querySelector('.removeCredentialId')?.value === 'true';
  var setCredentialId = removeCredentialId ? null : $formValues.querySelector('.setCredentialId')?.value;
  var addCredentialId = $formValues.querySelector('.addCredentialId')?.value;
  if(removeCredentialId || setCredentialId != null && setCredentialId !== '')
    vals['setCredentialId'] = setCredentialId;
  if(addCredentialId != null && addCredentialId !== '')
    vals['addCredentialId'] = addCredentialId;
  var removeCredentialId = $formValues.querySelector('.removeCredentialId')?.value;
  if(removeCredentialId != null && removeCredentialId !== '')
    vals['removeCredentialId'] = removeCredentialId;

  var valueCredentialResource = $formValues.querySelector('.valueCredentialResource')?.value;
  var removeCredentialResource = $formValues.querySelector('.removeCredentialResource')?.value === 'true';
  var setCredentialResource = removeCredentialResource ? null : $formValues.querySelector('.setCredentialResource')?.value;
  var addCredentialResource = $formValues.querySelector('.addCredentialResource')?.value;
  if(removeCredentialResource || setCredentialResource != null && setCredentialResource !== '')
    vals['setCredentialResource'] = setCredentialResource;
  if(addCredentialResource != null && addCredentialResource !== '')
    vals['addCredentialResource'] = addCredentialResource;
  var removeCredentialResource = $formValues.querySelector('.removeCredentialResource')?.value;
  if(removeCredentialResource != null && removeCredentialResource !== '')
    vals['removeCredentialResource'] = removeCredentialResource;

  var valueAapCredentialId = $formValues.querySelector('.valueAapCredentialId')?.value;
  var removeAapCredentialId = $formValues.querySelector('.removeAapCredentialId')?.value === 'true';
  var setAapCredentialId = removeAapCredentialId ? null : $formValues.querySelector('.setAapCredentialId')?.value;
  var addAapCredentialId = $formValues.querySelector('.addAapCredentialId')?.value;
  if(removeAapCredentialId || setAapCredentialId != null && setAapCredentialId !== '')
    vals['setAapCredentialId'] = setAapCredentialId;
  if(addAapCredentialId != null && addAapCredentialId !== '')
    vals['addAapCredentialId'] = addAapCredentialId;
  var removeAapCredentialId = $formValues.querySelector('.removeAapCredentialId')?.value;
  if(removeAapCredentialId != null && removeAapCredentialId !== '')
    vals['removeAapCredentialId'] = removeAapCredentialId;

  var valueAapCredentialTypeId = $formValues.querySelector('.valueAapCredentialTypeId')?.value;
  var removeAapCredentialTypeId = $formValues.querySelector('.removeAapCredentialTypeId')?.value === 'true';
  var setAapCredentialTypeId = removeAapCredentialTypeId ? null : $formValues.querySelector('.setAapCredentialTypeId')?.value;
  var addAapCredentialTypeId = $formValues.querySelector('.addAapCredentialTypeId')?.value;
  if(removeAapCredentialTypeId || setAapCredentialTypeId != null && setAapCredentialTypeId !== '')
    vals['setAapCredentialTypeId'] = setAapCredentialTypeId;
  if(addAapCredentialTypeId != null && addAapCredentialTypeId !== '')
    vals['addAapCredentialTypeId'] = addAapCredentialTypeId;
  var removeAapCredentialTypeId = $formValues.querySelector('.removeAapCredentialTypeId')?.value;
  if(removeAapCredentialTypeId != null && removeAapCredentialTypeId !== '')
    vals['removeAapCredentialTypeId'] = removeAapCredentialTypeId;

  patchHostCredentialVals(credentialResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'credentialResource:' + credentialResource}], vals, target, success, error);
}

function patchHostCredentialFilters($formFilters) {
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

    var filterCredentialName = $formFilters.querySelector('.valueCredentialName')?.value;
    if(filterCredentialName != null && filterCredentialName !== '')
      filters.push({ name: 'fq', value: 'credentialName:' + filterCredentialName });

    var filterCredentialDescription = $formFilters.querySelector('.valueCredentialDescription')?.value;
    if(filterCredentialDescription != null && filterCredentialDescription !== '')
      filters.push({ name: 'fq', value: 'credentialDescription:' + filterCredentialDescription });

    var filterUserName = $formFilters.querySelector('.valueUserName')?.value;
    if(filterUserName != null && filterUserName !== '')
      filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterBecomePassword = $formFilters.querySelector('.valueBecomePassword')?.value;
    if(filterBecomePassword != null && filterBecomePassword !== '')
      filters.push({ name: 'fq', value: 'becomePassword:' + filterBecomePassword });

    var filterPassword = $formFilters.querySelector('.valuePassword')?.value;
    if(filterPassword != null && filterPassword !== '')
      filters.push({ name: 'fq', value: 'password:' + filterPassword });

    var filterBecomeMethod = $formFilters.querySelector('.valueBecomeMethod')?.value;
    if(filterBecomeMethod != null && filterBecomeMethod !== '')
      filters.push({ name: 'fq', value: 'becomeMethod:' + filterBecomeMethod });

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

    var filterCredentialId = $formFilters.querySelector('.valueCredentialId')?.value;
    if(filterCredentialId != null && filterCredentialId !== '')
      filters.push({ name: 'fq', value: 'credentialId:' + filterCredentialId });

    var filterCredentialResource = $formFilters.querySelector('.valueCredentialResource')?.value;
    if(filterCredentialResource != null && filterCredentialResource !== '')
      filters.push({ name: 'fq', value: 'credentialResource:' + filterCredentialResource });

    var filterAapCredentialId = $formFilters.querySelector('.valueAapCredentialId')?.value;
    if(filterAapCredentialId != null && filterAapCredentialId !== '')
      filters.push({ name: 'fq', value: 'aapCredentialId:' + filterAapCredentialId });

    var filterAapCredentialTypeId = $formFilters.querySelector('.valueAapCredentialTypeId')?.value;
    if(filterAapCredentialTypeId != null && filterAapCredentialTypeId !== '')
      filters.push({ name: 'fq', value: 'aapCredentialTypeId:' + filterAapCredentialTypeId });
  }
  return filters;
}

function patchHostCredentialVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchHostCredentialVals(filters, vals, target, success, error);
}

function patchHostCredentialVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/host-credential?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postHostCredential($formValues, target, success, error) {
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

  var valueCredentialName = $formValues.querySelector('.valueCredentialName')?.value;
  if(valueCredentialName != null && valueCredentialName !== '')
    vals['credentialName'] = valueCredentialName;

  var valueCredentialDescription = $formValues.querySelector('.valueCredentialDescription')?.value;
  if(valueCredentialDescription != null && valueCredentialDescription !== '')
    vals['credentialDescription'] = valueCredentialDescription;

  var valueUserName = $formValues.querySelector('.valueUserName')?.value;
  if(valueUserName != null && valueUserName !== '')
    vals['userName'] = valueUserName;

  var valueBecomePassword = $formValues.querySelector('.valueBecomePassword')?.value;
  if(valueBecomePassword != null && valueBecomePassword !== '')
    vals['becomePassword'] = valueBecomePassword;

  var valuePassword = $formValues.querySelector('.valuePassword')?.value;
  if(valuePassword != null && valuePassword !== '')
    vals['password'] = valuePassword;

  var valueBecomeMethod = $formValues.querySelector('.valueBecomeMethod')?.value;
  if(valueBecomeMethod != null && valueBecomeMethod !== '')
    vals['becomeMethod'] = valueBecomeMethod;

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

  var valueCredentialId = $formValues.querySelector('.valueCredentialId')?.value;
  if(valueCredentialId != null && valueCredentialId !== '')
    vals['credentialId'] = valueCredentialId;

  var valueCredentialResource = $formValues.querySelector('.valueCredentialResource')?.value;
  if(valueCredentialResource != null && valueCredentialResource !== '')
    vals['credentialResource'] = valueCredentialResource;

  var valueAapCredentialId = $formValues.querySelector('.valueAapCredentialId')?.value;
  if(valueAapCredentialId != null && valueAapCredentialId !== '')
    vals['aapCredentialId'] = valueAapCredentialId;

  var valueAapCredentialTypeId = $formValues.querySelector('.valueAapCredentialTypeId')?.value;
  if(valueAapCredentialTypeId != null && valueAapCredentialTypeId !== '')
    vals['aapCredentialTypeId'] = valueAapCredentialTypeId;

  fetch(
    '/en-us/api/host-credential'
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

function postHostCredentialVals(vals, target, success, error) {
  fetch(
    '/en-us/api/host-credential'
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

async function deleteHostCredential(target, credentialResource, success, error) {
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
    '/en-us/api/host-credential/' + encodeURIComponent(credentialResource)
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

async function putimportHostCredential($formValues, target, credentialResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportHostCredentialVals(JSON.parse(json), target, success, error);
}

function putimportHostCredentialVals(json, target, success, error) {
  fetch(
    '/en-us/api/host-credential-import'
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

async function deletefilterHostCredential(target, success, error) {
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
    '/en-us/api/host-credential'
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
