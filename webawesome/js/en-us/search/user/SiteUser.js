
async function websocketSiteUser(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
      var json = JSON.parse(message['body']);
      var userId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + userId + ' ');
      $box.setAttribute('id', 'box-' + userId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + userId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + userId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + userId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-user-gear"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify site users in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + userId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + userId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + userId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + userId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + userId);
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
        var $old_box = document.querySelector('.box-' + userId);
      } else {
        document.querySelector('.box-' + userId)?.remove();
      }
      if(userId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketSiteUserInner(apiRequest) {
  var userId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(userId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputSeeArchived = null;
        var inputSiteFontSize = null;
        var inputSiteTheme = null;
        var inputUserProfileUrl = null;
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
        var inputUserKeys = null;
        var inputUserId = null;
        var inputUserName = null;
        var inputUserEmail = null;
        var inputUserFirstName = null;
        var inputUserLastName = null;
        var inputUserFullName = null;
        var inputDisplayName = null;
        var inputCustomerProfileId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('seeArchived'))
          inputSeeArchived = $response.querySelector('.Page_seeArchived');
        if(vars.includes('siteFontSize'))
          inputSiteFontSize = $response.querySelector('.Page_siteFontSize');
        if(vars.includes('siteTheme'))
          inputSiteTheme = $response.querySelector('.Page_siteTheme');
        if(vars.includes('userProfileUrl'))
          inputUserProfileUrl = $response.querySelector('.Page_userProfileUrl');
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
        if(vars.includes('userKeys'))
          inputUserKeys = $response.querySelector('.Page_userKeys');
        if(vars.includes('userId'))
          inputUserId = $response.querySelector('.Page_userId');
        if(vars.includes('userName'))
          inputUserName = $response.querySelector('.Page_userName');
        if(vars.includes('userEmail'))
          inputUserEmail = $response.querySelector('.Page_userEmail');
        if(vars.includes('userFirstName'))
          inputUserFirstName = $response.querySelector('.Page_userFirstName');
        if(vars.includes('userLastName'))
          inputUserLastName = $response.querySelector('.Page_userLastName');
        if(vars.includes('userFullName'))
          inputUserFullName = $response.querySelector('.Page_userFullName');
        if(vars.includes('displayName'))
          inputDisplayName = $response.querySelector('.Page_displayName');
        if(vars.includes('customerProfileId'))
          inputCustomerProfileId = $response.querySelector('.Page_customerProfileId');

        jsWebsocketSiteUser(userId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listSiteUser = JSON.parse($response.querySelector('.pageForm .listSiteUser')?.value);


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

        if(inputSeeArchived) {
          document.querySelectorAll('.Page_seeArchived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSeeArchived.getAttribute('value');
            else
              item.textContent = inputSeeArchived.textContent;
          });
          addGlow(document.querySelector('.Page_seeArchived'));
        }

        if(inputSiteFontSize) {
          document.querySelectorAll('.Page_siteFontSize').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSiteFontSize.getAttribute('value');
            else
              item.textContent = inputSiteFontSize.textContent;
          });
          addGlow(document.querySelector('.Page_siteFontSize'));
        }

        if(inputSiteTheme) {
          document.querySelectorAll('.Page_siteTheme').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSiteTheme.getAttribute('value');
            else
              item.textContent = inputSiteTheme.textContent;
          });
          addGlow(document.querySelector('.Page_siteTheme'));
        }

        if(inputUserProfileUrl) {
          document.querySelectorAll('.Page_userProfileUrl').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserProfileUrl.getAttribute('value');
            else
              item.textContent = inputUserProfileUrl.textContent;
          });
          addGlow(document.querySelector('.Page_userProfileUrl'));
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

        if(inputUserKeys) {
          document.querySelectorAll('.Page_userKeys').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKeys.getAttribute('value');
            else
              item.textContent = inputUserKeys.textContent;
          });
          addGlow(document.querySelector('.Page_userKeys'));
        }

        if(inputUserId) {
          document.querySelectorAll('.Page_userId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserId.getAttribute('value');
            else
              item.textContent = inputUserId.textContent;
          });
          addGlow(document.querySelector('.Page_userId'));
        }

        if(inputUserName) {
          document.querySelectorAll('.Page_userName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserName.getAttribute('value');
            else
              item.textContent = inputUserName.textContent;
          });
          addGlow(document.querySelector('.Page_userName'));
        }

        if(inputUserEmail) {
          document.querySelectorAll('.Page_userEmail').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserEmail.getAttribute('value');
            else
              item.textContent = inputUserEmail.textContent;
          });
          addGlow(document.querySelector('.Page_userEmail'));
        }

        if(inputUserFirstName) {
          document.querySelectorAll('.Page_userFirstName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserFirstName.getAttribute('value');
            else
              item.textContent = inputUserFirstName.textContent;
          });
          addGlow(document.querySelector('.Page_userFirstName'));
        }

        if(inputUserLastName) {
          document.querySelectorAll('.Page_userLastName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserLastName.getAttribute('value');
            else
              item.textContent = inputUserLastName.textContent;
          });
          addGlow(document.querySelector('.Page_userLastName'));
        }

        if(inputUserFullName) {
          document.querySelectorAll('.Page_userFullName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserFullName.getAttribute('value');
            else
              item.textContent = inputUserFullName.textContent;
          });
          addGlow(document.querySelector('.Page_userFullName'));
        }

        if(inputDisplayName) {
          document.querySelectorAll('.Page_displayName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayName.getAttribute('value');
            else
              item.textContent = inputDisplayName.textContent;
          });
          addGlow(document.querySelector('.Page_displayName'));
        }

        if(inputCustomerProfileId) {
          document.querySelectorAll('.Page_customerProfileId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCustomerProfileId.getAttribute('value');
            else
              item.textContent = inputCustomerProfileId.textContent;
          });
          addGlow(document.querySelector('.Page_customerProfileId'));
        }

          pageGraphSiteUser();
      });
    });
  }
}

function pageGraphSiteUser(apiRequest) {
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
          layout['title'] = 'site users';
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
          Plotly.react('htmBodyGraphSiteUserPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqSiteUser_time').innerText = '';
  searchPage('SiteUser', function() {
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
      document.querySelector('#fqSiteUser_time').value = x;
      document.querySelector('#fqSiteUser_time').onchange();
      searchPage('SiteUser');
    }, speedRate);
  });
}

// Search //

async function searchSiteUser($formFilters, success, error) {
  var filters = searchSiteUserFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchSiteUserVals(filters, target, success, error);
}

function searchSiteUserFilters($formFilters) {
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

    var $filterSeeArchivedCheckbox = $formFilters.querySelector('input.valueSeeArchived[type = "checkbox"]');
    var $filterSeeArchivedSelect = $formFilters.querySelector('select.valueSeeArchived');
    var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.value : $filterSeeArchivedCheckbox.checked;
    var filterSeeArchivedSelectVal = $formFilters.querySelector('select.filterSeeArchived')?.value;
    var filterSeeArchived = null;
    if(filterSeeArchivedSelectVal !== '')
      filterSeeArchived = filterSeeArchivedSelectVal == 'true';
    if(filterSeeArchived != null && filterSeeArchived === true)
      filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

    var filterSiteFontSize = $formFilters.querySelector('.valueSiteFontSize')?.value;
    if(filterSiteFontSize != null && filterSiteFontSize !== '')
      filters.push({ name: 'fq', value: 'siteFontSize:' + filterSiteFontSize });

    var filterSiteTheme = $formFilters.querySelector('.valueSiteTheme')?.value;
    if(filterSiteTheme != null && filterSiteTheme !== '')
      filters.push({ name: 'fq', value: 'siteTheme:' + filterSiteTheme });

    var filterUserProfileUrl = $formFilters.querySelector('.valueUserProfileUrl')?.value;
    if(filterUserProfileUrl != null && filterUserProfileUrl !== '')
      filters.push({ name: 'fq', value: 'userProfileUrl:' + filterUserProfileUrl });

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

    var filterUserKeys = $formFilters.querySelector('.valueUserKeys')?.value;
    if(filterUserKeys != null && filterUserKeys !== '')
      filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

    var filterUserId = $formFilters.querySelector('.valueUserId')?.value;
    if(filterUserId != null && filterUserId !== '')
      filters.push({ name: 'fq', value: 'userId:' + filterUserId });

    var filterUserName = $formFilters.querySelector('.valueUserName')?.value;
    if(filterUserName != null && filterUserName !== '')
      filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterUserEmail = $formFilters.querySelector('.valueUserEmail')?.value;
    if(filterUserEmail != null && filterUserEmail !== '')
      filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

    var filterUserFirstName = $formFilters.querySelector('.valueUserFirstName')?.value;
    if(filterUserFirstName != null && filterUserFirstName !== '')
      filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

    var filterUserLastName = $formFilters.querySelector('.valueUserLastName')?.value;
    if(filterUserLastName != null && filterUserLastName !== '')
      filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

    var filterUserFullName = $formFilters.querySelector('.valueUserFullName')?.value;
    if(filterUserFullName != null && filterUserFullName !== '')
      filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });

    var filterDisplayName = $formFilters.querySelector('.valueDisplayName')?.value;
    if(filterDisplayName != null && filterDisplayName !== '')
      filters.push({ name: 'fq', value: 'displayName:' + filterDisplayName });

    var filterCustomerProfileId = $formFilters.querySelector('.valueCustomerProfileId')?.value;
    if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
      filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });
  }
  return filters;
}

function searchSiteUserVals(filters, target, success, error) {

  fetch(
    '/en-us/api/user?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestSiteUserObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-user-gear"></i>');
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
  searchSiteUserVals($formFilters, target, success, error);
}

// PATCH //

async function patchSiteUser($formFilters, $formValues, target, userId, success, error) {
  var filters = patchSiteUserFilters($formFilters);

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

  var valueSeeArchived = $formValues.querySelector('.valueSeeArchived')?.value;
  var removeSeeArchived = $formValues.querySelector('.removeSeeArchived')?.value === 'true';
  if(valueSeeArchived != null)
    valueSeeArchived = valueSeeArchived === 'true';
  var valueSeeArchivedSelectVal = $formValues.querySelector('select.setSeeArchived')?.value;
  if(valueSeeArchivedSelectVal != null)
    valueSeeArchivedSelectVal = valueSeeArchivedSelectVal === 'true';
  if(valueSeeArchivedSelectVal != null && valueSeeArchivedSelectVal !== '')
    valueSeeArchived = valueSeeArchivedSelectVal == 'true';
  var setSeeArchived = removeSeeArchived ? null : valueSeeArchived;
  var addSeeArchived = $formValues.querySelector('.addSeeArchived')?.checked;
  if(removeSeeArchived || setSeeArchived != null && setSeeArchived !== '')
    vals['setSeeArchived'] = setSeeArchived;
  if(addSeeArchived != null && addSeeArchived !== '')
    vals['addSeeArchived'] = addSeeArchived;
  var removeSeeArchived = $formValues.querySelector('.removeSeeArchived')?.checked;
  if(removeSeeArchived != null && removeSeeArchived !== '')
    vals['removeSeeArchived'] = removeSeeArchived;

  var valueSiteFontSize = $formValues.querySelector('.valueSiteFontSize')?.value;
  var removeSiteFontSize = $formValues.querySelector('.removeSiteFontSize')?.value === 'true';
  var setSiteFontSize = removeSiteFontSize ? null : $formValues.querySelector('.setSiteFontSize')?.value;
  var addSiteFontSize = $formValues.querySelector('.addSiteFontSize')?.value;
  if(removeSiteFontSize || setSiteFontSize != null && setSiteFontSize !== '')
    vals['setSiteFontSize'] = setSiteFontSize;
  if(addSiteFontSize != null && addSiteFontSize !== '')
    vals['addSiteFontSize'] = addSiteFontSize;
  var removeSiteFontSize = $formValues.querySelector('.removeSiteFontSize')?.value;
  if(removeSiteFontSize != null && removeSiteFontSize !== '')
    vals['removeSiteFontSize'] = removeSiteFontSize;

  var valueSiteTheme = $formValues.querySelector('.valueSiteTheme')?.value;
  var removeSiteTheme = $formValues.querySelector('.removeSiteTheme')?.value === 'true';
  var setSiteTheme = removeSiteTheme ? null : $formValues.querySelector('.setSiteTheme')?.value;
  var addSiteTheme = $formValues.querySelector('.addSiteTheme')?.value;
  if(removeSiteTheme || setSiteTheme != null && setSiteTheme !== '')
    vals['setSiteTheme'] = setSiteTheme;
  if(addSiteTheme != null && addSiteTheme !== '')
    vals['addSiteTheme'] = addSiteTheme;
  var removeSiteTheme = $formValues.querySelector('.removeSiteTheme')?.value;
  if(removeSiteTheme != null && removeSiteTheme !== '')
    vals['removeSiteTheme'] = removeSiteTheme;

  var valueUserProfileUrl = $formValues.querySelector('.valueUserProfileUrl')?.value;
  var removeUserProfileUrl = $formValues.querySelector('.removeUserProfileUrl')?.value === 'true';
  var setUserProfileUrl = removeUserProfileUrl ? null : $formValues.querySelector('.setUserProfileUrl')?.value;
  var addUserProfileUrl = $formValues.querySelector('.addUserProfileUrl')?.value;
  if(removeUserProfileUrl || setUserProfileUrl != null && setUserProfileUrl !== '')
    vals['setUserProfileUrl'] = setUserProfileUrl;
  if(addUserProfileUrl != null && addUserProfileUrl !== '')
    vals['addUserProfileUrl'] = addUserProfileUrl;
  var removeUserProfileUrl = $formValues.querySelector('.removeUserProfileUrl')?.value;
  if(removeUserProfileUrl != null && removeUserProfileUrl !== '')
    vals['removeUserProfileUrl'] = removeUserProfileUrl;

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

  var valueUserId = $formValues.querySelector('.valueUserId')?.value;
  var removeUserId = $formValues.querySelector('.removeUserId')?.value === 'true';
  var setUserId = removeUserId ? null : $formValues.querySelector('.setUserId')?.value;
  var addUserId = $formValues.querySelector('.addUserId')?.value;
  if(removeUserId || setUserId != null && setUserId !== '')
    vals['setUserId'] = setUserId;
  if(addUserId != null && addUserId !== '')
    vals['addUserId'] = addUserId;
  var removeUserId = $formValues.querySelector('.removeUserId')?.value;
  if(removeUserId != null && removeUserId !== '')
    vals['removeUserId'] = removeUserId;

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

  var valueUserEmail = $formValues.querySelector('.valueUserEmail')?.value;
  var removeUserEmail = $formValues.querySelector('.removeUserEmail')?.value === 'true';
  var setUserEmail = removeUserEmail ? null : $formValues.querySelector('.setUserEmail')?.value;
  var addUserEmail = $formValues.querySelector('.addUserEmail')?.value;
  if(removeUserEmail || setUserEmail != null && setUserEmail !== '')
    vals['setUserEmail'] = setUserEmail;
  if(addUserEmail != null && addUserEmail !== '')
    vals['addUserEmail'] = addUserEmail;
  var removeUserEmail = $formValues.querySelector('.removeUserEmail')?.value;
  if(removeUserEmail != null && removeUserEmail !== '')
    vals['removeUserEmail'] = removeUserEmail;

  var valueUserFirstName = $formValues.querySelector('.valueUserFirstName')?.value;
  var removeUserFirstName = $formValues.querySelector('.removeUserFirstName')?.value === 'true';
  var setUserFirstName = removeUserFirstName ? null : $formValues.querySelector('.setUserFirstName')?.value;
  var addUserFirstName = $formValues.querySelector('.addUserFirstName')?.value;
  if(removeUserFirstName || setUserFirstName != null && setUserFirstName !== '')
    vals['setUserFirstName'] = setUserFirstName;
  if(addUserFirstName != null && addUserFirstName !== '')
    vals['addUserFirstName'] = addUserFirstName;
  var removeUserFirstName = $formValues.querySelector('.removeUserFirstName')?.value;
  if(removeUserFirstName != null && removeUserFirstName !== '')
    vals['removeUserFirstName'] = removeUserFirstName;

  var valueUserLastName = $formValues.querySelector('.valueUserLastName')?.value;
  var removeUserLastName = $formValues.querySelector('.removeUserLastName')?.value === 'true';
  var setUserLastName = removeUserLastName ? null : $formValues.querySelector('.setUserLastName')?.value;
  var addUserLastName = $formValues.querySelector('.addUserLastName')?.value;
  if(removeUserLastName || setUserLastName != null && setUserLastName !== '')
    vals['setUserLastName'] = setUserLastName;
  if(addUserLastName != null && addUserLastName !== '')
    vals['addUserLastName'] = addUserLastName;
  var removeUserLastName = $formValues.querySelector('.removeUserLastName')?.value;
  if(removeUserLastName != null && removeUserLastName !== '')
    vals['removeUserLastName'] = removeUserLastName;

  var valueUserFullName = $formValues.querySelector('.valueUserFullName')?.value;
  var removeUserFullName = $formValues.querySelector('.removeUserFullName')?.value === 'true';
  var setUserFullName = removeUserFullName ? null : $formValues.querySelector('.setUserFullName')?.value;
  var addUserFullName = $formValues.querySelector('.addUserFullName')?.value;
  if(removeUserFullName || setUserFullName != null && setUserFullName !== '')
    vals['setUserFullName'] = setUserFullName;
  if(addUserFullName != null && addUserFullName !== '')
    vals['addUserFullName'] = addUserFullName;
  var removeUserFullName = $formValues.querySelector('.removeUserFullName')?.value;
  if(removeUserFullName != null && removeUserFullName !== '')
    vals['removeUserFullName'] = removeUserFullName;

  var valueDisplayName = $formValues.querySelector('.valueDisplayName')?.value;
  var removeDisplayName = $formValues.querySelector('.removeDisplayName')?.value === 'true';
  var setDisplayName = removeDisplayName ? null : $formValues.querySelector('.setDisplayName')?.value;
  var addDisplayName = $formValues.querySelector('.addDisplayName')?.value;
  if(removeDisplayName || setDisplayName != null && setDisplayName !== '')
    vals['setDisplayName'] = setDisplayName;
  if(addDisplayName != null && addDisplayName !== '')
    vals['addDisplayName'] = addDisplayName;
  var removeDisplayName = $formValues.querySelector('.removeDisplayName')?.value;
  if(removeDisplayName != null && removeDisplayName !== '')
    vals['removeDisplayName'] = removeDisplayName;

  var valueCustomerProfileId = $formValues.querySelector('.valueCustomerProfileId')?.value;
  var removeCustomerProfileId = $formValues.querySelector('.removeCustomerProfileId')?.value === 'true';
  var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.querySelector('.setCustomerProfileId')?.value;
  var addCustomerProfileId = $formValues.querySelector('.addCustomerProfileId')?.value;
  if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
    vals['setCustomerProfileId'] = setCustomerProfileId;
  if(addCustomerProfileId != null && addCustomerProfileId !== '')
    vals['addCustomerProfileId'] = addCustomerProfileId;
  var removeCustomerProfileId = $formValues.querySelector('.removeCustomerProfileId')?.value;
  if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
    vals['removeCustomerProfileId'] = removeCustomerProfileId;

  patchSiteUserVals(userId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'userId:' + userId}], vals, target, success, error);
}

function patchSiteUserFilters($formFilters) {
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

    var $filterSeeArchivedCheckbox = $formFilters.querySelector('input.valueSeeArchived[type = "checkbox"]');
    var $filterSeeArchivedSelect = $formFilters.querySelector('select.valueSeeArchived');
    var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.value : $filterSeeArchivedCheckbox.checked;
    var filterSeeArchivedSelectVal = $formFilters.querySelector('select.filterSeeArchived')?.value;
    var filterSeeArchived = null;
    if(filterSeeArchivedSelectVal !== '')
      filterSeeArchived = filterSeeArchivedSelectVal == 'true';
    if(filterSeeArchived != null && filterSeeArchived === true)
      filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

    var filterSiteFontSize = $formFilters.querySelector('.valueSiteFontSize')?.value;
    if(filterSiteFontSize != null && filterSiteFontSize !== '')
      filters.push({ name: 'fq', value: 'siteFontSize:' + filterSiteFontSize });

    var filterSiteTheme = $formFilters.querySelector('.valueSiteTheme')?.value;
    if(filterSiteTheme != null && filterSiteTheme !== '')
      filters.push({ name: 'fq', value: 'siteTheme:' + filterSiteTheme });

    var filterUserProfileUrl = $formFilters.querySelector('.valueUserProfileUrl')?.value;
    if(filterUserProfileUrl != null && filterUserProfileUrl !== '')
      filters.push({ name: 'fq', value: 'userProfileUrl:' + filterUserProfileUrl });

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

    var filterUserKeys = $formFilters.querySelector('.valueUserKeys')?.value;
    if(filterUserKeys != null && filterUserKeys !== '')
      filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

    var filterUserId = $formFilters.querySelector('.valueUserId')?.value;
    if(filterUserId != null && filterUserId !== '')
      filters.push({ name: 'fq', value: 'userId:' + filterUserId });

    var filterUserName = $formFilters.querySelector('.valueUserName')?.value;
    if(filterUserName != null && filterUserName !== '')
      filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterUserEmail = $formFilters.querySelector('.valueUserEmail')?.value;
    if(filterUserEmail != null && filterUserEmail !== '')
      filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

    var filterUserFirstName = $formFilters.querySelector('.valueUserFirstName')?.value;
    if(filterUserFirstName != null && filterUserFirstName !== '')
      filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

    var filterUserLastName = $formFilters.querySelector('.valueUserLastName')?.value;
    if(filterUserLastName != null && filterUserLastName !== '')
      filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

    var filterUserFullName = $formFilters.querySelector('.valueUserFullName')?.value;
    if(filterUserFullName != null && filterUserFullName !== '')
      filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });

    var filterDisplayName = $formFilters.querySelector('.valueDisplayName')?.value;
    if(filterDisplayName != null && filterDisplayName !== '')
      filters.push({ name: 'fq', value: 'displayName:' + filterDisplayName });

    var filterCustomerProfileId = $formFilters.querySelector('.valueCustomerProfileId')?.value;
    if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
      filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });
  }
  return filters;
}

function patchSiteUserVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchSiteUserVals(filters, vals, target, success, error);
}

function patchSiteUserVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/user?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postSiteUser($formValues, target, success, error) {
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
      addError(target, jqXhr);
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

  var valueSeeArchived = $formValues.querySelector('.valueSeeArchived')?.value;
  if(valueSeeArchived != null && valueSeeArchived !== '')
    vals['seeArchived'] = valueSeeArchived == 'true';

  var valueSiteFontSize = $formValues.querySelector('.valueSiteFontSize')?.value;
  if(valueSiteFontSize != null && valueSiteFontSize !== '')
    vals['siteFontSize'] = valueSiteFontSize;

  var valueSiteTheme = $formValues.querySelector('.valueSiteTheme')?.value;
  if(valueSiteTheme != null && valueSiteTheme !== '')
    vals['siteTheme'] = valueSiteTheme;

  var valueUserProfileUrl = $formValues.querySelector('.valueUserProfileUrl')?.value;
  if(valueUserProfileUrl != null && valueUserProfileUrl !== '')
    vals['userProfileUrl'] = valueUserProfileUrl;

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

  var valueUserId = $formValues.querySelector('.valueUserId')?.value;
  if(valueUserId != null && valueUserId !== '')
    vals['userId'] = valueUserId;

  var valueUserName = $formValues.querySelector('.valueUserName')?.value;
  if(valueUserName != null && valueUserName !== '')
    vals['userName'] = valueUserName;

  var valueUserEmail = $formValues.querySelector('.valueUserEmail')?.value;
  if(valueUserEmail != null && valueUserEmail !== '')
    vals['userEmail'] = valueUserEmail;

  var valueUserFirstName = $formValues.querySelector('.valueUserFirstName')?.value;
  if(valueUserFirstName != null && valueUserFirstName !== '')
    vals['userFirstName'] = valueUserFirstName;

  var valueUserLastName = $formValues.querySelector('.valueUserLastName')?.value;
  if(valueUserLastName != null && valueUserLastName !== '')
    vals['userLastName'] = valueUserLastName;

  var valueUserFullName = $formValues.querySelector('.valueUserFullName')?.value;
  if(valueUserFullName != null && valueUserFullName !== '')
    vals['userFullName'] = valueUserFullName;

  var valueDisplayName = $formValues.querySelector('.valueDisplayName')?.value;
  if(valueDisplayName != null && valueDisplayName !== '')
    vals['displayName'] = valueDisplayName;

  var valueCustomerProfileId = $formValues.querySelector('.valueCustomerProfileId')?.value;
  if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
    vals['customerProfileId'] = valueCustomerProfileId;

  fetch(
    '/en-us/api/user'
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

function postSiteUserVals(vals, target, success, error) {
  fetch(
    '/en-us/api/user'
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
