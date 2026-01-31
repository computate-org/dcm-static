
async function websocketProject(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketProject', function (error, message) {
      var json = JSON.parse(message['body']);
      var projectResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + projectResource + ' ');
      $box.setAttribute('id', 'box-' + projectResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + projectResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + projectResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + projectResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-people-line"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify projects in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + projectResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + projectResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + projectResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + projectResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + projectResource);
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
        var $old_box = document.querySelector('.box-' + projectResource);
      } else {
        document.querySelector('.box-' + projectResource)?.remove();
      }
      if(projectResource) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketProjectInner(apiRequest) {
  var projectResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(projectResource != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputProjectName = null;
        var inputDescription = null;
        var inputGpuEnabled = null;
        var inputPodRestartCount = null;
        var inputPodsRestarting = null;
        var inputPodTerminatingCount = null;
        var inputPodsTerminating = null;
        var inputFullPvcsCount = null;
        var inputFullPvcs = null;
        var inputNamespaceTerminating = null;
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
        var inputProjectResource = null;
        var inputProjectDisplayName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('projectName'))
          inputProjectName = $response.querySelector('.Page_projectName');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('gpuEnabled'))
          inputGpuEnabled = $response.querySelector('.Page_gpuEnabled');
        if(vars.includes('podRestartCount'))
          inputPodRestartCount = $response.querySelector('.Page_podRestartCount');
        if(vars.includes('podsRestarting'))
          inputPodsRestarting = $response.querySelector('.Page_podsRestarting');
        if(vars.includes('podTerminatingCount'))
          inputPodTerminatingCount = $response.querySelector('.Page_podTerminatingCount');
        if(vars.includes('podsTerminating'))
          inputPodsTerminating = $response.querySelector('.Page_podsTerminating');
        if(vars.includes('fullPvcsCount'))
          inputFullPvcsCount = $response.querySelector('.Page_fullPvcsCount');
        if(vars.includes('fullPvcs'))
          inputFullPvcs = $response.querySelector('.Page_fullPvcs');
        if(vars.includes('namespaceTerminating'))
          inputNamespaceTerminating = $response.querySelector('.Page_namespaceTerminating');
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
        if(vars.includes('projectResource'))
          inputProjectResource = $response.querySelector('.Page_projectResource');
        if(vars.includes('projectDisplayName'))
          inputProjectDisplayName = $response.querySelector('.Page_projectDisplayName');

        jsWebsocketProject(projectResource, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listProject = JSON.parse($response.querySelector('.pageForm .listProject')?.value);


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

        if(inputProjectName) {
          document.querySelectorAll('.Page_projectName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProjectName.getAttribute('value');
            else
              item.textContent = inputProjectName.textContent;
          });
          addGlow(document.querySelector('.Page_projectName'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Page_description'));
        }

        if(inputGpuEnabled) {
          document.querySelectorAll('.Page_gpuEnabled').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGpuEnabled.getAttribute('value');
            else
              item.textContent = inputGpuEnabled.textContent;
          });
          addGlow(document.querySelector('.Page_gpuEnabled'));
        }

        if(inputPodRestartCount) {
          document.querySelectorAll('.Page_podRestartCount').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPodRestartCount.getAttribute('value');
            else
              item.textContent = inputPodRestartCount.textContent;
          });
          addGlow(document.querySelector('.Page_podRestartCount'));
        }

        if(inputPodsRestarting) {
          document.querySelectorAll('.Page_podsRestarting').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPodsRestarting.getAttribute('value');
            else
              item.textContent = inputPodsRestarting.textContent;
          });
          addGlow(document.querySelector('.Page_podsRestarting'));
        }

        if(inputPodTerminatingCount) {
          document.querySelectorAll('.Page_podTerminatingCount').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPodTerminatingCount.getAttribute('value');
            else
              item.textContent = inputPodTerminatingCount.textContent;
          });
          addGlow(document.querySelector('.Page_podTerminatingCount'));
        }

        if(inputPodsTerminating) {
          document.querySelectorAll('.Page_podsTerminating').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPodsTerminating.getAttribute('value');
            else
              item.textContent = inputPodsTerminating.textContent;
          });
          addGlow(document.querySelector('.Page_podsTerminating'));
        }

        if(inputFullPvcsCount) {
          document.querySelectorAll('.Page_fullPvcsCount').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFullPvcsCount.getAttribute('value');
            else
              item.textContent = inputFullPvcsCount.textContent;
          });
          addGlow(document.querySelector('.Page_fullPvcsCount'));
        }

        if(inputFullPvcs) {
          document.querySelectorAll('.Page_fullPvcs').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFullPvcs.getAttribute('value');
            else
              item.textContent = inputFullPvcs.textContent;
          });
          addGlow(document.querySelector('.Page_fullPvcs'));
        }

        if(inputNamespaceTerminating) {
          document.querySelectorAll('.Page_namespaceTerminating').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNamespaceTerminating.getAttribute('value');
            else
              item.textContent = inputNamespaceTerminating.textContent;
          });
          addGlow(document.querySelector('.Page_namespaceTerminating'));
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

        if(inputProjectResource) {
          document.querySelectorAll('.Page_projectResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProjectResource.getAttribute('value');
            else
              item.textContent = inputProjectResource.textContent;
          });
          addGlow(document.querySelector('.Page_projectResource'));
        }

        if(inputProjectDisplayName) {
          document.querySelectorAll('.Page_projectDisplayName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProjectDisplayName.getAttribute('value');
            else
              item.textContent = inputProjectDisplayName.textContent;
          });
          addGlow(document.querySelector('.Page_projectDisplayName'));
        }

          pageGraphProject();
      });
    });
  }
}

function pageGraphProject(apiRequest) {
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
          layout['title'] = 'projects';
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
          Plotly.react('htmBodyGraphProjectPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqProject_time').innerText = '';
  searchPage('Project', function() {
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
      document.querySelector('#fqProject_time').value = x;
      document.querySelector('#fqProject_time').onchange();
      searchPage('Project');
    }, speedRate);
  });
}

// Search //

async function searchProject($formFilters, success, error) {
  var filters = searchProjectFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchProjectVals(filters, target, success, error);
}

function searchProjectFilters($formFilters) {
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

    var filterProjectName = $formFilters.querySelector('.valueProjectName')?.value;
    if(filterProjectName != null && filterProjectName !== '')
      filters.push({ name: 'fq', value: 'projectName:' + filterProjectName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var $filterGpuEnabledCheckbox = $formFilters.querySelector('input.valueGpuEnabled[type = "checkbox"]');
    var $filterGpuEnabledSelect = $formFilters.querySelector('select.valueGpuEnabled');
    var filterGpuEnabled = $filterGpuEnabledSelect.length ? $filterGpuEnabledSelect.value : $filterGpuEnabledCheckbox.checked;
    var filterGpuEnabledSelectVal = $formFilters.querySelector('select.filterGpuEnabled')?.value;
    var filterGpuEnabled = null;
    if(filterGpuEnabledSelectVal !== '')
      filterGpuEnabled = filterGpuEnabledSelectVal == 'true';
    if(filterGpuEnabled != null && filterGpuEnabled === true)
      filters.push({ name: 'fq', value: 'gpuEnabled:' + filterGpuEnabled });

    var filterPodRestartCount = $formFilters.querySelector('.valuePodRestartCount')?.value;
    if(filterPodRestartCount != null && filterPodRestartCount !== '')
      filters.push({ name: 'fq', value: 'podRestartCount:' + filterPodRestartCount });

    var filterPodsRestarting = $formFilters.querySelector('.valuePodsRestarting')?.value;
    if(filterPodsRestarting != null && filterPodsRestarting !== '')
      filters.push({ name: 'fq', value: 'podsRestarting:' + filterPodsRestarting });

    var filterPodTerminatingCount = $formFilters.querySelector('.valuePodTerminatingCount')?.value;
    if(filterPodTerminatingCount != null && filterPodTerminatingCount !== '')
      filters.push({ name: 'fq', value: 'podTerminatingCount:' + filterPodTerminatingCount });

    var filterPodsTerminating = $formFilters.querySelector('.valuePodsTerminating')?.value;
    if(filterPodsTerminating != null && filterPodsTerminating !== '')
      filters.push({ name: 'fq', value: 'podsTerminating:' + filterPodsTerminating });

    var filterFullPvcsCount = $formFilters.querySelector('.valueFullPvcsCount')?.value;
    if(filterFullPvcsCount != null && filterFullPvcsCount !== '')
      filters.push({ name: 'fq', value: 'fullPvcsCount:' + filterFullPvcsCount });

    var filterFullPvcs = $formFilters.querySelector('.valueFullPvcs')?.value;
    if(filterFullPvcs != null && filterFullPvcs !== '')
      filters.push({ name: 'fq', value: 'fullPvcs:' + filterFullPvcs });

    var $filterNamespaceTerminatingCheckbox = $formFilters.querySelector('input.valueNamespaceTerminating[type = "checkbox"]');
    var $filterNamespaceTerminatingSelect = $formFilters.querySelector('select.valueNamespaceTerminating');
    var filterNamespaceTerminating = $filterNamespaceTerminatingSelect.length ? $filterNamespaceTerminatingSelect.value : $filterNamespaceTerminatingCheckbox.checked;
    var filterNamespaceTerminatingSelectVal = $formFilters.querySelector('select.filterNamespaceTerminating')?.value;
    var filterNamespaceTerminating = null;
    if(filterNamespaceTerminatingSelectVal !== '')
      filterNamespaceTerminating = filterNamespaceTerminatingSelectVal == 'true';
    if(filterNamespaceTerminating != null && filterNamespaceTerminating === true)
      filters.push({ name: 'fq', value: 'namespaceTerminating:' + filterNamespaceTerminating });

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

    var filterProjectResource = $formFilters.querySelector('.valueProjectResource')?.value;
    if(filterProjectResource != null && filterProjectResource !== '')
      filters.push({ name: 'fq', value: 'projectResource:' + filterProjectResource });

    var filterProjectDisplayName = $formFilters.querySelector('.valueProjectDisplayName')?.value;
    if(filterProjectDisplayName != null && filterProjectDisplayName !== '')
      filters.push({ name: 'fq', value: 'projectDisplayName:' + filterProjectDisplayName });
  }
  return filters;
}

function searchProjectVals(filters, target, success, error) {


  fetch(
    '/en-us/api/project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestProjectObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-people-line"></i>');
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
  searchProjectVals($formFilters, target, success, error);
}

// GET //

async function getProject(pk) {
  fetch(
    '/en-us/api/project/' + projectResource
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

async function patchProject($formFilters, $formValues, target, projectResource, success, error) {
  var filters = patchProjectFilters($formFilters);

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

  var valueProjectName = $formValues.querySelector('.valueProjectName')?.value;
  var removeProjectName = $formValues.querySelector('.removeProjectName')?.value === 'true';
  var setProjectName = removeProjectName ? null : $formValues.querySelector('.setProjectName')?.value;
  var addProjectName = $formValues.querySelector('.addProjectName')?.value;
  if(removeProjectName || setProjectName != null && setProjectName !== '')
    vals['setProjectName'] = setProjectName;
  if(addProjectName != null && addProjectName !== '')
    vals['addProjectName'] = addProjectName;
  var removeProjectName = $formValues.querySelector('.removeProjectName')?.value;
  if(removeProjectName != null && removeProjectName !== '')
    vals['removeProjectName'] = removeProjectName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value === 'true';
  var setDescription = removeDescription ? null : $formValues.querySelector('.setDescription')?.value;
  var addDescription = $formValues.querySelector('.addDescription')?.value;
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value;
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valueGpuEnabled = $formValues.querySelector('.valueGpuEnabled')?.value;
  var removeGpuEnabled = $formValues.querySelector('.removeGpuEnabled')?.value === 'true';
  if(valueGpuEnabled != null)
    valueGpuEnabled = valueGpuEnabled === 'true';
  var valueGpuEnabledSelectVal = $formValues.querySelector('select.setGpuEnabled')?.value;
  if(valueGpuEnabledSelectVal != null)
    valueGpuEnabledSelectVal = valueGpuEnabledSelectVal === 'true';
  if(valueGpuEnabledSelectVal != null && valueGpuEnabledSelectVal !== '')
    valueGpuEnabled = valueGpuEnabledSelectVal == 'true';
  var setGpuEnabled = removeGpuEnabled ? null : valueGpuEnabled;
  var addGpuEnabled = $formValues.querySelector('.addGpuEnabled')?.checked;
  if(removeGpuEnabled || setGpuEnabled != null && setGpuEnabled !== '')
    vals['setGpuEnabled'] = setGpuEnabled;
  if(addGpuEnabled != null && addGpuEnabled !== '')
    vals['addGpuEnabled'] = addGpuEnabled;
  var removeGpuEnabled = $formValues.querySelector('.removeGpuEnabled')?.checked;
  if(removeGpuEnabled != null && removeGpuEnabled !== '')
    vals['removeGpuEnabled'] = removeGpuEnabled;

  var valuePodRestartCount = $formValues.querySelector('.valuePodRestartCount')?.value;
  var removePodRestartCount = $formValues.querySelector('.removePodRestartCount')?.value === 'true';
  var setPodRestartCount = removePodRestartCount ? null : $formValues.querySelector('.setPodRestartCount')?.value;
  var addPodRestartCount = $formValues.querySelector('.addPodRestartCount')?.value;
  if(removePodRestartCount || setPodRestartCount != null && setPodRestartCount !== '')
    vals['setPodRestartCount'] = setPodRestartCount;
  if(addPodRestartCount != null && addPodRestartCount !== '')
    vals['addPodRestartCount'] = addPodRestartCount;
  var removePodRestartCount = $formValues.querySelector('.removePodRestartCount')?.value;
  if(removePodRestartCount != null && removePodRestartCount !== '')
    vals['removePodRestartCount'] = removePodRestartCount;

  var valuePodsRestarting = $formValues.querySelector('.valuePodsRestarting')?.value;
  var removePodsRestarting = $formValues.querySelector('.removePodsRestarting')?.value === 'true';
  var setPodsRestarting = removePodsRestarting ? null : $formValues.querySelector('.setPodsRestarting')?.value;
  var addPodsRestarting = $formValues.querySelector('.addPodsRestarting')?.value;
  if(removePodsRestarting || setPodsRestarting != null && setPodsRestarting !== '')
    vals['setPodsRestarting'] = JSON.parse(setPodsRestarting);
  if(addPodsRestarting != null && addPodsRestarting !== '')
    vals['addPodsRestarting'] = addPodsRestarting;
  var removePodsRestarting = $formValues.querySelector('.removePodsRestarting')?.value;
  if(removePodsRestarting != null && removePodsRestarting !== '')
    vals['removePodsRestarting'] = removePodsRestarting;

  var valuePodTerminatingCount = $formValues.querySelector('.valuePodTerminatingCount')?.value;
  var removePodTerminatingCount = $formValues.querySelector('.removePodTerminatingCount')?.value === 'true';
  var setPodTerminatingCount = removePodTerminatingCount ? null : $formValues.querySelector('.setPodTerminatingCount')?.value;
  var addPodTerminatingCount = $formValues.querySelector('.addPodTerminatingCount')?.value;
  if(removePodTerminatingCount || setPodTerminatingCount != null && setPodTerminatingCount !== '')
    vals['setPodTerminatingCount'] = setPodTerminatingCount;
  if(addPodTerminatingCount != null && addPodTerminatingCount !== '')
    vals['addPodTerminatingCount'] = addPodTerminatingCount;
  var removePodTerminatingCount = $formValues.querySelector('.removePodTerminatingCount')?.value;
  if(removePodTerminatingCount != null && removePodTerminatingCount !== '')
    vals['removePodTerminatingCount'] = removePodTerminatingCount;

  var valuePodsTerminating = $formValues.querySelector('.valuePodsTerminating')?.value;
  var removePodsTerminating = $formValues.querySelector('.removePodsTerminating')?.value === 'true';
  var setPodsTerminating = removePodsTerminating ? null : $formValues.querySelector('.setPodsTerminating')?.value;
  var addPodsTerminating = $formValues.querySelector('.addPodsTerminating')?.value;
  if(removePodsTerminating || setPodsTerminating != null && setPodsTerminating !== '')
    vals['setPodsTerminating'] = JSON.parse(setPodsTerminating);
  if(addPodsTerminating != null && addPodsTerminating !== '')
    vals['addPodsTerminating'] = addPodsTerminating;
  var removePodsTerminating = $formValues.querySelector('.removePodsTerminating')?.value;
  if(removePodsTerminating != null && removePodsTerminating !== '')
    vals['removePodsTerminating'] = removePodsTerminating;

  var valueFullPvcsCount = $formValues.querySelector('.valueFullPvcsCount')?.value;
  var removeFullPvcsCount = $formValues.querySelector('.removeFullPvcsCount')?.value === 'true';
  var setFullPvcsCount = removeFullPvcsCount ? null : $formValues.querySelector('.setFullPvcsCount')?.value;
  var addFullPvcsCount = $formValues.querySelector('.addFullPvcsCount')?.value;
  if(removeFullPvcsCount || setFullPvcsCount != null && setFullPvcsCount !== '')
    vals['setFullPvcsCount'] = setFullPvcsCount;
  if(addFullPvcsCount != null && addFullPvcsCount !== '')
    vals['addFullPvcsCount'] = addFullPvcsCount;
  var removeFullPvcsCount = $formValues.querySelector('.removeFullPvcsCount')?.value;
  if(removeFullPvcsCount != null && removeFullPvcsCount !== '')
    vals['removeFullPvcsCount'] = removeFullPvcsCount;

  var valueFullPvcs = $formValues.querySelector('.valueFullPvcs')?.value;
  var removeFullPvcs = $formValues.querySelector('.removeFullPvcs')?.value === 'true';
  var setFullPvcs = removeFullPvcs ? null : $formValues.querySelector('.setFullPvcs')?.value;
  var addFullPvcs = $formValues.querySelector('.addFullPvcs')?.value;
  if(removeFullPvcs || setFullPvcs != null && setFullPvcs !== '')
    vals['setFullPvcs'] = JSON.parse(setFullPvcs);
  if(addFullPvcs != null && addFullPvcs !== '')
    vals['addFullPvcs'] = addFullPvcs;
  var removeFullPvcs = $formValues.querySelector('.removeFullPvcs')?.value;
  if(removeFullPvcs != null && removeFullPvcs !== '')
    vals['removeFullPvcs'] = removeFullPvcs;

  var valueNamespaceTerminating = $formValues.querySelector('.valueNamespaceTerminating')?.value;
  var removeNamespaceTerminating = $formValues.querySelector('.removeNamespaceTerminating')?.value === 'true';
  if(valueNamespaceTerminating != null)
    valueNamespaceTerminating = valueNamespaceTerminating === 'true';
  var valueNamespaceTerminatingSelectVal = $formValues.querySelector('select.setNamespaceTerminating')?.value;
  if(valueNamespaceTerminatingSelectVal != null)
    valueNamespaceTerminatingSelectVal = valueNamespaceTerminatingSelectVal === 'true';
  if(valueNamespaceTerminatingSelectVal != null && valueNamespaceTerminatingSelectVal !== '')
    valueNamespaceTerminating = valueNamespaceTerminatingSelectVal == 'true';
  var setNamespaceTerminating = removeNamespaceTerminating ? null : valueNamespaceTerminating;
  var addNamespaceTerminating = $formValues.querySelector('.addNamespaceTerminating')?.checked;
  if(removeNamespaceTerminating || setNamespaceTerminating != null && setNamespaceTerminating !== '')
    vals['setNamespaceTerminating'] = setNamespaceTerminating;
  if(addNamespaceTerminating != null && addNamespaceTerminating !== '')
    vals['addNamespaceTerminating'] = addNamespaceTerminating;
  var removeNamespaceTerminating = $formValues.querySelector('.removeNamespaceTerminating')?.checked;
  if(removeNamespaceTerminating != null && removeNamespaceTerminating !== '')
    vals['removeNamespaceTerminating'] = removeNamespaceTerminating;

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

  var valueProjectResource = $formValues.querySelector('.valueProjectResource')?.value;
  var removeProjectResource = $formValues.querySelector('.removeProjectResource')?.value === 'true';
  var setProjectResource = removeProjectResource ? null : $formValues.querySelector('.setProjectResource')?.value;
  var addProjectResource = $formValues.querySelector('.addProjectResource')?.value;
  if(removeProjectResource || setProjectResource != null && setProjectResource !== '')
    vals['setProjectResource'] = setProjectResource;
  if(addProjectResource != null && addProjectResource !== '')
    vals['addProjectResource'] = addProjectResource;
  var removeProjectResource = $formValues.querySelector('.removeProjectResource')?.value;
  if(removeProjectResource != null && removeProjectResource !== '')
    vals['removeProjectResource'] = removeProjectResource;

  patchProjectVals(projectResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'projectResource:' + projectResource}], vals, target, success, error);
}

function patchProjectFilters($formFilters) {
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

    var filterProjectName = $formFilters.querySelector('.valueProjectName')?.value;
    if(filterProjectName != null && filterProjectName !== '')
      filters.push({ name: 'fq', value: 'projectName:' + filterProjectName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var $filterGpuEnabledCheckbox = $formFilters.querySelector('input.valueGpuEnabled[type = "checkbox"]');
    var $filterGpuEnabledSelect = $formFilters.querySelector('select.valueGpuEnabled');
    var filterGpuEnabled = $filterGpuEnabledSelect.length ? $filterGpuEnabledSelect.value : $filterGpuEnabledCheckbox.checked;
    var filterGpuEnabledSelectVal = $formFilters.querySelector('select.filterGpuEnabled')?.value;
    var filterGpuEnabled = null;
    if(filterGpuEnabledSelectVal !== '')
      filterGpuEnabled = filterGpuEnabledSelectVal == 'true';
    if(filterGpuEnabled != null && filterGpuEnabled === true)
      filters.push({ name: 'fq', value: 'gpuEnabled:' + filterGpuEnabled });

    var filterPodRestartCount = $formFilters.querySelector('.valuePodRestartCount')?.value;
    if(filterPodRestartCount != null && filterPodRestartCount !== '')
      filters.push({ name: 'fq', value: 'podRestartCount:' + filterPodRestartCount });

    var filterPodsRestarting = $formFilters.querySelector('.valuePodsRestarting')?.value;
    if(filterPodsRestarting != null && filterPodsRestarting !== '')
      filters.push({ name: 'fq', value: 'podsRestarting:' + filterPodsRestarting });

    var filterPodTerminatingCount = $formFilters.querySelector('.valuePodTerminatingCount')?.value;
    if(filterPodTerminatingCount != null && filterPodTerminatingCount !== '')
      filters.push({ name: 'fq', value: 'podTerminatingCount:' + filterPodTerminatingCount });

    var filterPodsTerminating = $formFilters.querySelector('.valuePodsTerminating')?.value;
    if(filterPodsTerminating != null && filterPodsTerminating !== '')
      filters.push({ name: 'fq', value: 'podsTerminating:' + filterPodsTerminating });

    var filterFullPvcsCount = $formFilters.querySelector('.valueFullPvcsCount')?.value;
    if(filterFullPvcsCount != null && filterFullPvcsCount !== '')
      filters.push({ name: 'fq', value: 'fullPvcsCount:' + filterFullPvcsCount });

    var filterFullPvcs = $formFilters.querySelector('.valueFullPvcs')?.value;
    if(filterFullPvcs != null && filterFullPvcs !== '')
      filters.push({ name: 'fq', value: 'fullPvcs:' + filterFullPvcs });

    var $filterNamespaceTerminatingCheckbox = $formFilters.querySelector('input.valueNamespaceTerminating[type = "checkbox"]');
    var $filterNamespaceTerminatingSelect = $formFilters.querySelector('select.valueNamespaceTerminating');
    var filterNamespaceTerminating = $filterNamespaceTerminatingSelect.length ? $filterNamespaceTerminatingSelect.value : $filterNamespaceTerminatingCheckbox.checked;
    var filterNamespaceTerminatingSelectVal = $formFilters.querySelector('select.filterNamespaceTerminating')?.value;
    var filterNamespaceTerminating = null;
    if(filterNamespaceTerminatingSelectVal !== '')
      filterNamespaceTerminating = filterNamespaceTerminatingSelectVal == 'true';
    if(filterNamespaceTerminating != null && filterNamespaceTerminating === true)
      filters.push({ name: 'fq', value: 'namespaceTerminating:' + filterNamespaceTerminating });

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

    var filterProjectResource = $formFilters.querySelector('.valueProjectResource')?.value;
    if(filterProjectResource != null && filterProjectResource !== '')
      filters.push({ name: 'fq', value: 'projectResource:' + filterProjectResource });

    var filterProjectDisplayName = $formFilters.querySelector('.valueProjectDisplayName')?.value;
    if(filterProjectDisplayName != null && filterProjectDisplayName !== '')
      filters.push({ name: 'fq', value: 'projectDisplayName:' + filterProjectDisplayName });
  }
  return filters;
}

function patchProjectVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchProjectVals(filters, vals, target, success, error);
}

function patchProjectVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postProject($formValues, target, success, error) {
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

  var valueProjectName = $formValues.querySelector('.valueProjectName')?.value;
  if(valueProjectName != null && valueProjectName !== '')
    vals['projectName'] = valueProjectName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueGpuEnabled = $formValues.querySelector('.valueGpuEnabled')?.value;
  if(valueGpuEnabled != null && valueGpuEnabled !== '')
    vals['gpuEnabled'] = valueGpuEnabled == 'true';

  var valuePodRestartCount = $formValues.querySelector('.valuePodRestartCount')?.value;
  if(valuePodRestartCount != null && valuePodRestartCount !== '')
    vals['podRestartCount'] = valuePodRestartCount;

  var valuePodsRestarting = $formValues.querySelector('.valuePodsRestarting')?.value;
  if(valuePodsRestarting != null && valuePodsRestarting !== '')
    vals['podsRestarting'] = JSON.parse(valuePodsRestarting);

  var valuePodTerminatingCount = $formValues.querySelector('.valuePodTerminatingCount')?.value;
  if(valuePodTerminatingCount != null && valuePodTerminatingCount !== '')
    vals['podTerminatingCount'] = valuePodTerminatingCount;

  var valuePodsTerminating = $formValues.querySelector('.valuePodsTerminating')?.value;
  if(valuePodsTerminating != null && valuePodsTerminating !== '')
    vals['podsTerminating'] = JSON.parse(valuePodsTerminating);

  var valueFullPvcsCount = $formValues.querySelector('.valueFullPvcsCount')?.value;
  if(valueFullPvcsCount != null && valueFullPvcsCount !== '')
    vals['fullPvcsCount'] = valueFullPvcsCount;

  var valueFullPvcs = $formValues.querySelector('.valueFullPvcs')?.value;
  if(valueFullPvcs != null && valueFullPvcs !== '')
    vals['fullPvcs'] = JSON.parse(valueFullPvcs);

  var valueNamespaceTerminating = $formValues.querySelector('.valueNamespaceTerminating')?.value;
  if(valueNamespaceTerminating != null && valueNamespaceTerminating !== '')
    vals['namespaceTerminating'] = valueNamespaceTerminating == 'true';

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

  var valueProjectResource = $formValues.querySelector('.valueProjectResource')?.value;
  if(valueProjectResource != null && valueProjectResource !== '')
    vals['projectResource'] = valueProjectResource;

  fetch(
    '/en-us/api/project'
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

function postProjectVals(vals, target, success, error) {
  fetch(
    '/en-us/api/project'
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

async function deleteProject(target, projectResource, success, error) {
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

  fetch(
    '/en-us/api/project/' + encodeURIComponent(projectResource)
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

async function putimportProject($formValues, target, projectResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportProjectVals(JSON.parse(json), target, success, error);
}

function putimportProjectVals(json, target, success, error) {
  fetch(
    '/en-us/api/project-import'
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

async function deletefilterProject(target, success, error) {
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

  fetch(
    '/en-us/api/project'
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
