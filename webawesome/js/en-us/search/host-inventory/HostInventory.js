
async function websocketHostInventory(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketHostInventory', function (error, message) {
      var json = JSON.parse(message['body']);
      var inventoryResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + inventoryResource + ' ');
      $box.setAttribute('id', 'box-' + inventoryResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + inventoryResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + inventoryResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + inventoryResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-network-wired"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify host inventories in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + inventoryResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + inventoryResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + inventoryResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + inventoryResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + inventoryResource);
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
        var $old_box = document.querySelector('.box-' + inventoryResource);
      } else {
        document.querySelector('.box-' + inventoryResource)?.remove();
      }
      if(inventoryResource) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketHostInventoryInner(apiRequest) {
  var inventoryResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(inventoryResource != null && vars.length > 0) {
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
        var inputInventoryName = null;
        var inputInventoryDescription = null;
        var inputInventoryKind = null;
        var inputHostInventoryIds = null;
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
        var inputInventoryId = null;
        var inputInventoryResource = null;
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
        if(vars.includes('inventoryName'))
          inputInventoryName = $response.querySelector('.Page_inventoryName');
        if(vars.includes('inventoryDescription'))
          inputInventoryDescription = $response.querySelector('.Page_inventoryDescription');
        if(vars.includes('inventoryKind'))
          inputInventoryKind = $response.querySelector('.Page_inventoryKind');
        if(vars.includes('hostInventoryIds'))
          inputHostInventoryIds = $response.querySelector('.Page_hostInventoryIds');
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
        if(vars.includes('inventoryId'))
          inputInventoryId = $response.querySelector('.Page_inventoryId');
        if(vars.includes('inventoryResource'))
          inputInventoryResource = $response.querySelector('.Page_inventoryResource');
        if(vars.includes('aapInventoryId'))
          inputAapInventoryId = $response.querySelector('.Page_aapInventoryId');

        jsWebsocketHostInventory(inventoryResource, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listHostInventory = JSON.parse($response.querySelector('.pageForm .listHostInventory')?.value);


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

        if(inputInventoryName) {
          document.querySelectorAll('.Page_inventoryName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInventoryName.getAttribute('value');
            else
              item.textContent = inputInventoryName.textContent;
          });
          addGlow(document.querySelector('.Page_inventoryName'));
        }

        if(inputInventoryDescription) {
          document.querySelectorAll('.Page_inventoryDescription').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInventoryDescription.getAttribute('value');
            else
              item.textContent = inputInventoryDescription.textContent;
          });
          addGlow(document.querySelector('.Page_inventoryDescription'));
        }

        if(inputInventoryKind) {
          document.querySelectorAll('.Page_inventoryKind').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInventoryKind.getAttribute('value');
            else
              item.textContent = inputInventoryKind.textContent;
          });
          addGlow(document.querySelector('.Page_inventoryKind'));
        }

        if(inputHostInventoryIds) {
          document.querySelectorAll('.Page_hostInventoryIds').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputHostInventoryIds.getAttribute('value');
            else
              item.textContent = inputHostInventoryIds.textContent;
          });
          addGlow(document.querySelector('.Page_hostInventoryIds'));
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

        if(inputInventoryId) {
          document.querySelectorAll('.Page_inventoryId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInventoryId.getAttribute('value');
            else
              item.textContent = inputInventoryId.textContent;
          });
          addGlow(document.querySelector('.Page_inventoryId'));
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

        if(inputAapInventoryId) {
          document.querySelectorAll('.Page_aapInventoryId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAapInventoryId.getAttribute('value');
            else
              item.textContent = inputAapInventoryId.textContent;
          });
          addGlow(document.querySelector('.Page_aapInventoryId'));
        }

          pageGraphHostInventory();
      });
    });
  }
}

function pageGraphHostInventory(apiRequest) {
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
          layout['title'] = 'host inventories';
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
          Plotly.react('htmBodyGraphHostInventoryPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqHostInventory_time').innerText = '';
  searchPage('HostInventory', function() {
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
      document.querySelector('#fqHostInventory_time').value = x;
      document.querySelector('#fqHostInventory_time').onchange();
      searchPage('HostInventory');
    }, speedRate);
  });
}

// Search //

async function searchHostInventory($formFilters, success, error) {
  var filters = searchHostInventoryFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchHostInventoryVals(filters, target, success, error);
}

function searchHostInventoryFilters($formFilters) {
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

    var filterInventoryName = $formFilters.querySelector('.valueInventoryName')?.value;
    if(filterInventoryName != null && filterInventoryName !== '')
      filters.push({ name: 'fq', value: 'inventoryName:' + filterInventoryName });

    var filterInventoryDescription = $formFilters.querySelector('.valueInventoryDescription')?.value;
    if(filterInventoryDescription != null && filterInventoryDescription !== '')
      filters.push({ name: 'fq', value: 'inventoryDescription:' + filterInventoryDescription });

    var filterInventoryKind = $formFilters.querySelector('.valueInventoryKind')?.value;
    if(filterInventoryKind != null && filterInventoryKind !== '')
      filters.push({ name: 'fq', value: 'inventoryKind:' + filterInventoryKind });

    var filterHostInventoryIds = $formFilters.querySelector('.valueHostInventoryIds')?.value;
    if(filterHostInventoryIds != null && filterHostInventoryIds !== '')
      filters.push({ name: 'fq', value: 'hostInventoryIds:' + filterHostInventoryIds });

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

    var filterInventoryId = $formFilters.querySelector('.valueInventoryId')?.value;
    if(filterInventoryId != null && filterInventoryId !== '')
      filters.push({ name: 'fq', value: 'inventoryId:' + filterInventoryId });

    var filterInventoryResource = $formFilters.querySelector('.valueInventoryResource')?.value;
    if(filterInventoryResource != null && filterInventoryResource !== '')
      filters.push({ name: 'fq', value: 'inventoryResource:' + filterInventoryResource });

    var filterAapInventoryId = $formFilters.querySelector('.valueAapInventoryId')?.value;
    if(filterAapInventoryId != null && filterAapInventoryId !== '')
      filters.push({ name: 'fq', value: 'aapInventoryId:' + filterAapInventoryId });
  }
  return filters;
}

function searchHostInventoryVals(filters, target, success, error) {


  fetch(
    '/en-us/api/host-inventory?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestHostInventoryTenantResource(filters, $list, inventoryResource = null, tenantResource = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_tenantResource_' + inventoryResource + '_tenantResource_' + o['tenantResource']);
        $input.setAttribute('name', 'tenantResource');
        $input.setAttribute('value', o['tenantResource']);
        $input.setAttribute('class', 'valueTenantResource ');
        if(inventoryResource != null) {
          $input.addEventListener('change', function(event) {
            patchHostInventoryVals([{ name: 'fq', value: 'inventoryResource:' + inventoryResource }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o['tenantResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestHostInventoryTenantResource(filters, $list, inventoryResource, o['tenantResource'], relate, target);
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

function suggestHostInventoryHostInventoryIds(filters, $list, inventoryResource = null, hostInventoryIds = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-server"></i>';
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
        var checked = val == null ? false : (hostInventoryIds != null && val === hostInventoryIds.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_hostInventoryIds_' + inventoryResource + '_inventoryResource_' + o['inventoryResource']);
        $input.setAttribute('name', 'inventoryResource');
        $input.setAttribute('value', o['inventoryResource']);
        $input.setAttribute('class', 'valueHostInventoryIds ');
        if(inventoryResource != null) {
          $input.addEventListener('change', function(event) {
            patchHostInventoryVals([{ name: 'fq', value: 'inventoryResource:' + inventoryResource }], { [(event.target.checked ? 'add' : 'remove') + 'HostInventoryIds']: o['inventoryResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestHostInventoryHostInventoryIds(filters, $list, inventoryResource, o['inventoryResource'], relate, target);
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
  searchHostVals(filters, target, success, error);
}

function suggestHostInventoryObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-network-wired"></i>');
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
  searchHostInventoryVals($formFilters, target, success, error);
}

// GET //

async function getHostInventory(pk) {
  fetch(
    '/en-us/api/host-inventory/' + inventoryResource
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

async function patchHostInventory($formFilters, $formValues, target, inventoryResource, success, error) {
  var filters = patchHostInventoryFilters($formFilters);

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

  var valueInventoryName = $formValues.querySelector('.valueInventoryName')?.value;
  var removeInventoryName = $formValues.querySelector('.removeInventoryName')?.value === 'true';
  var setInventoryName = removeInventoryName ? null : $formValues.querySelector('.setInventoryName')?.value;
  var addInventoryName = $formValues.querySelector('.addInventoryName')?.value;
  if(removeInventoryName || setInventoryName != null && setInventoryName !== '')
    vals['setInventoryName'] = setInventoryName;
  if(addInventoryName != null && addInventoryName !== '')
    vals['addInventoryName'] = addInventoryName;
  var removeInventoryName = $formValues.querySelector('.removeInventoryName')?.value;
  if(removeInventoryName != null && removeInventoryName !== '')
    vals['removeInventoryName'] = removeInventoryName;

  var valueInventoryDescription = $formValues.querySelector('.valueInventoryDescription')?.value;
  var removeInventoryDescription = $formValues.querySelector('.removeInventoryDescription')?.value === 'true';
  var setInventoryDescription = removeInventoryDescription ? null : $formValues.querySelector('.setInventoryDescription')?.value;
  var addInventoryDescription = $formValues.querySelector('.addInventoryDescription')?.value;
  if(removeInventoryDescription || setInventoryDescription != null && setInventoryDescription !== '')
    vals['setInventoryDescription'] = setInventoryDescription;
  if(addInventoryDescription != null && addInventoryDescription !== '')
    vals['addInventoryDescription'] = addInventoryDescription;
  var removeInventoryDescription = $formValues.querySelector('.removeInventoryDescription')?.value;
  if(removeInventoryDescription != null && removeInventoryDescription !== '')
    vals['removeInventoryDescription'] = removeInventoryDescription;

  var valueInventoryKind = $formValues.querySelector('.valueInventoryKind')?.value;
  var removeInventoryKind = $formValues.querySelector('.removeInventoryKind')?.value === 'true';
  var setInventoryKind = removeInventoryKind ? null : $formValues.querySelector('.setInventoryKind')?.value;
  var addInventoryKind = $formValues.querySelector('.addInventoryKind')?.value;
  if(removeInventoryKind || setInventoryKind != null && setInventoryKind !== '')
    vals['setInventoryKind'] = setInventoryKind;
  if(addInventoryKind != null && addInventoryKind !== '')
    vals['addInventoryKind'] = addInventoryKind;
  var removeInventoryKind = $formValues.querySelector('.removeInventoryKind')?.value;
  if(removeInventoryKind != null && removeInventoryKind !== '')
    vals['removeInventoryKind'] = removeInventoryKind;

  var valueHostInventoryIds = (Array.from($formValues.querySelectorAll('.valueHostInventoryIds')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueHostInventoryIds != null && valueHostInventoryIds !== '')
    vals['addHostInventoryIds'] = valueHostInventoryIds;

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

  var valueInventoryId = $formValues.querySelector('.valueInventoryId')?.value;
  var removeInventoryId = $formValues.querySelector('.removeInventoryId')?.value === 'true';
  var setInventoryId = removeInventoryId ? null : $formValues.querySelector('.setInventoryId')?.value;
  var addInventoryId = $formValues.querySelector('.addInventoryId')?.value;
  if(removeInventoryId || setInventoryId != null && setInventoryId !== '')
    vals['setInventoryId'] = setInventoryId;
  if(addInventoryId != null && addInventoryId !== '')
    vals['addInventoryId'] = addInventoryId;
  var removeInventoryId = $formValues.querySelector('.removeInventoryId')?.value;
  if(removeInventoryId != null && removeInventoryId !== '')
    vals['removeInventoryId'] = removeInventoryId;

  var valueInventoryResource = $formValues.querySelector('.valueInventoryResource')?.value;
  var removeInventoryResource = $formValues.querySelector('.removeInventoryResource')?.value === 'true';
  var setInventoryResource = removeInventoryResource ? null : $formValues.querySelector('.setInventoryResource')?.value;
  var addInventoryResource = $formValues.querySelector('.addInventoryResource')?.value;
  if(removeInventoryResource || setInventoryResource != null && setInventoryResource !== '')
    vals['setInventoryResource'] = setInventoryResource;
  if(addInventoryResource != null && addInventoryResource !== '')
    vals['addInventoryResource'] = addInventoryResource;
  var removeInventoryResource = $formValues.querySelector('.removeInventoryResource')?.value;
  if(removeInventoryResource != null && removeInventoryResource !== '')
    vals['removeInventoryResource'] = removeInventoryResource;

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

  patchHostInventoryVals(inventoryResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'inventoryResource:' + inventoryResource}], vals, target, success, error);
}

function patchHostInventoryFilters($formFilters) {
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

    var filterInventoryName = $formFilters.querySelector('.valueInventoryName')?.value;
    if(filterInventoryName != null && filterInventoryName !== '')
      filters.push({ name: 'fq', value: 'inventoryName:' + filterInventoryName });

    var filterInventoryDescription = $formFilters.querySelector('.valueInventoryDescription')?.value;
    if(filterInventoryDescription != null && filterInventoryDescription !== '')
      filters.push({ name: 'fq', value: 'inventoryDescription:' + filterInventoryDescription });

    var filterInventoryKind = $formFilters.querySelector('.valueInventoryKind')?.value;
    if(filterInventoryKind != null && filterInventoryKind !== '')
      filters.push({ name: 'fq', value: 'inventoryKind:' + filterInventoryKind });

    var filterHostInventoryIds = $formFilters.querySelector('.valueHostInventoryIds')?.value;
    if(filterHostInventoryIds != null && filterHostInventoryIds !== '')
      filters.push({ name: 'fq', value: 'hostInventoryIds:' + filterHostInventoryIds });

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

    var filterInventoryId = $formFilters.querySelector('.valueInventoryId')?.value;
    if(filterInventoryId != null && filterInventoryId !== '')
      filters.push({ name: 'fq', value: 'inventoryId:' + filterInventoryId });

    var filterInventoryResource = $formFilters.querySelector('.valueInventoryResource')?.value;
    if(filterInventoryResource != null && filterInventoryResource !== '')
      filters.push({ name: 'fq', value: 'inventoryResource:' + filterInventoryResource });

    var filterAapInventoryId = $formFilters.querySelector('.valueAapInventoryId')?.value;
    if(filterAapInventoryId != null && filterAapInventoryId !== '')
      filters.push({ name: 'fq', value: 'aapInventoryId:' + filterAapInventoryId });
  }
  return filters;
}

function patchHostInventoryVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchHostInventoryVals(filters, vals, target, success, error);
}

function patchHostInventoryVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/host-inventory?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postHostInventory($formValues, target, success, error) {
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

  var valueInventoryName = $formValues.querySelector('.valueInventoryName')?.value;
  if(valueInventoryName != null && valueInventoryName !== '')
    vals['inventoryName'] = valueInventoryName;

  var valueInventoryDescription = $formValues.querySelector('.valueInventoryDescription')?.value;
  if(valueInventoryDescription != null && valueInventoryDescription !== '')
    vals['inventoryDescription'] = valueInventoryDescription;

  var valueInventoryKind = $formValues.querySelector('.valueInventoryKind')?.value;
  if(valueInventoryKind != null && valueInventoryKind !== '')
    vals['inventoryKind'] = valueInventoryKind;

  var valueHostInventoryIds = [];
  $formValues.querySelectorAll('input.valueHostInventoryIds:checked').forEach(function(index) {
    valueHostInventoryIds.push(this.value);
  });
  if(valueHostInventoryIds.length > 0)
    vals['hostInventoryIds'] = valueHostInventoryIds;

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

  var valueInventoryId = $formValues.querySelector('.valueInventoryId')?.value;
  if(valueInventoryId != null && valueInventoryId !== '')
    vals['inventoryId'] = valueInventoryId;

  var valueInventoryResource = $formValues.querySelector('.valueInventoryResource')?.value;
  if(valueInventoryResource != null && valueInventoryResource !== '')
    vals['inventoryResource'] = valueInventoryResource;

  var valueAapInventoryId = $formValues.querySelector('.valueAapInventoryId')?.value;
  if(valueAapInventoryId != null && valueAapInventoryId !== '')
    vals['aapInventoryId'] = valueAapInventoryId;

  fetch(
    '/en-us/api/host-inventory'
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

function postHostInventoryVals(vals, target, success, error) {
  fetch(
    '/en-us/api/host-inventory'
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

async function deleteHostInventory(target, inventoryResource, success, error) {
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
    '/en-us/api/host-inventory/' + encodeURIComponent(inventoryResource)
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

async function putimportHostInventory($formValues, target, inventoryResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportHostInventoryVals(JSON.parse(json), target, success, error);
}

function putimportHostInventoryVals(json, target, success, error) {
  fetch(
    '/en-us/api/host-inventory-import'
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

async function deletefilterHostInventory(target, success, error) {
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
    '/en-us/api/host-inventory'
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
