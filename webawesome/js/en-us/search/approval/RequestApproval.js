
async function websocketRequestApproval(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketRequestApproval', function (error, message) {
      var json = JSON.parse(message['body']);
      var approvalId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + approvalId + ' ');
      $box.setAttribute('id', 'box-' + approvalId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + approvalId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + approvalId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + approvalId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-thumbs-up"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify request approvals in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + approvalId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + approvalId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + approvalId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + approvalId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + approvalId);
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
        var $old_box = document.querySelector('.box-' + approvalId);
      } else {
        document.querySelector('.box-' + approvalId)?.remove();
      }
      if(approvalId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketRequestApprovalInner(apiRequest) {
  var approvalId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(approvalId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputApprovedByEmail = null;
        var inputApprovalName = null;
        var inputApprovalNote = null;
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
        var inputApprovalId = null;
        var inputApprovedByUserId = null;
        var inputApprovedByFullName = null;
        var inputApproved = null;
        var inputModelType = null;
        var inputModelResource = null;
        var inputApprovalTitle = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.RequestApproval_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.RequestApproval_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.RequestApproval_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.RequestApproval_Page_archived');
        if(vars.includes('approvedByEmail'))
          inputApprovedByEmail = $response.querySelector('.RequestApproval_Page_approvedByEmail');
        if(vars.includes('approvalName'))
          inputApprovalName = $response.querySelector('.RequestApproval_Page_approvalName');
        if(vars.includes('approvalNote'))
          inputApprovalNote = $response.querySelector('.RequestApproval_Page_approvalNote');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.RequestApproval_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.RequestApproval_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.RequestApproval_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.RequestApproval_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.RequestApproval_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.RequestApproval_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.RequestApproval_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.RequestApproval_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.RequestApproval_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.RequestApproval_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.RequestApproval_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.RequestApproval_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.RequestApproval_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.RequestApproval_Page_solrId');
        if(vars.includes('approvalId'))
          inputApprovalId = $response.querySelector('.RequestApproval_Page_approvalId');
        if(vars.includes('approvedByUserId'))
          inputApprovedByUserId = $response.querySelector('.RequestApproval_Page_approvedByUserId');
        if(vars.includes('approvedByFullName'))
          inputApprovedByFullName = $response.querySelector('.RequestApproval_Page_approvedByFullName');
        if(vars.includes('approved'))
          inputApproved = $response.querySelector('.RequestApproval_Page_approved');
        if(vars.includes('modelType'))
          inputModelType = $response.querySelector('.RequestApproval_Page_modelType');
        if(vars.includes('modelResource'))
          inputModelResource = $response.querySelector('.RequestApproval_Page_modelResource');
        if(vars.includes('approvalTitle'))
          inputApprovalTitle = $response.querySelector('.RequestApproval_Page_approvalTitle');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listRequestApproval = JSON.parse($response.querySelector('.pageForm .listRequestApproval')?.value);
        jsWebsocketRequestApproval(approvalId, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.RequestApproval_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.RequestApproval_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.RequestApproval_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.RequestApproval_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_archived'));
        }

        if(inputApprovedByEmail) {
          document.querySelectorAll('.RequestApproval_Page_approvedByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovedByEmail.getAttribute('value');
            else
              item.textContent = inputApprovedByEmail.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvedByEmail'));
        }

        if(inputApprovalName) {
          document.querySelectorAll('.RequestApproval_Page_approvalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovalName.getAttribute('value');
            else
              item.textContent = inputApprovalName.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvalName'));
        }

        if(inputApprovalNote) {
          document.querySelectorAll('.RequestApproval_Page_approvalNote').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovalNote.getAttribute('value');
            else
              item.textContent = inputApprovalNote.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvalNote'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.RequestApproval_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.RequestApproval_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.RequestApproval_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.RequestApproval_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.RequestApproval_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.RequestApproval_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.RequestApproval_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.RequestApproval_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.RequestApproval_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.RequestApproval_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.RequestApproval_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.RequestApproval_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.RequestApproval_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.RequestApproval_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_solrId'));
        }

        if(inputApprovalId) {
          document.querySelectorAll('.RequestApproval_Page_approvalId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovalId.getAttribute('value');
            else
              item.textContent = inputApprovalId.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvalId'));
        }

        if(inputApprovedByUserId) {
          document.querySelectorAll('.RequestApproval_Page_approvedByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovedByUserId.getAttribute('value');
            else
              item.textContent = inputApprovedByUserId.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvedByUserId'));
        }

        if(inputApprovedByFullName) {
          document.querySelectorAll('.RequestApproval_Page_approvedByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovedByFullName.getAttribute('value');
            else
              item.textContent = inputApprovedByFullName.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvedByFullName'));
        }

        if(inputApproved) {
          document.querySelectorAll('.RequestApproval_Page_approved').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApproved.getAttribute('value');
            else
              item.textContent = inputApproved.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approved'));
        }

        if(inputModelType) {
          document.querySelectorAll('.RequestApproval_Page_modelType').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModelType.getAttribute('value');
            else
              item.textContent = inputModelType.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_modelType'));
        }

        if(inputModelResource) {
          document.querySelectorAll('.RequestApproval_Page_modelResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModelResource.getAttribute('value');
            else
              item.textContent = inputModelResource.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_modelResource'));
        }

        if(inputApprovalTitle) {
          document.querySelectorAll('.RequestApproval_Page_approvalTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApprovalTitle.getAttribute('value');
            else
              item.textContent = inputApprovalTitle.textContent;
          });
          addGlow(document.querySelector('.RequestApproval_Page_approvalTitle'));
        }

          pageGraphRequestApproval();
      });
    });
  }
}

function pageGraphRequestApproval(apiRequest) {
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
          layout['title'] = 'request approvals';
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
          Plotly.react('htmBodyGraphRequestApprovalPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqRequestApproval_time').innerText = '';
  searchPage('RequestApproval', function() {
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
      document.querySelector('#fqRequestApproval_time').value = x;
      document.querySelector('#fqRequestApproval_time').onchange();
      searchPage('RequestApproval');
    }, speedRate);
  });
}

// Search //

async function searchRequestApproval($formFilters, success, error) {
  var filters = searchRequestApprovalFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchRequestApprovalVals(filters, target, success, error);
}

function searchRequestApprovalFilters($formFilters) {
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

    var filterApprovedByEmail = $formFilters.querySelector('.valueApprovedByEmail')?.value;
    if(filterApprovedByEmail != null && filterApprovedByEmail !== '')
      filters.push({ name: 'fq', value: 'approvedByEmail:' + filterApprovedByEmail });

    var filterApprovalName = $formFilters.querySelector('.valueApprovalName')?.value;
    if(filterApprovalName != null && filterApprovalName !== '')
      filters.push({ name: 'fq', value: 'approvalName:' + filterApprovalName });

    var filterApprovalNote = $formFilters.querySelector('.valueApprovalNote')?.value;
    if(filterApprovalNote != null && filterApprovalNote !== '')
      filters.push({ name: 'fq', value: 'approvalNote:' + filterApprovalNote });

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

    var filterApprovalId = $formFilters.querySelector('.valueApprovalId')?.value;
    if(filterApprovalId != null && filterApprovalId !== '')
      filters.push({ name: 'fq', value: 'approvalId:' + filterApprovalId });

    var filterApprovedByUserId = $formFilters.querySelector('.valueApprovedByUserId')?.value;
    if(filterApprovedByUserId != null && filterApprovedByUserId !== '')
      filters.push({ name: 'fq', value: 'approvedByUserId:' + filterApprovedByUserId });

    var filterApprovedByFullName = $formFilters.querySelector('.valueApprovedByFullName')?.value;
    if(filterApprovedByFullName != null && filterApprovedByFullName !== '')
      filters.push({ name: 'fq', value: 'approvedByFullName:' + filterApprovedByFullName });

    var $filterApprovedCheckbox = $formFilters.querySelector('input.valueApproved[type = "checkbox"]');
    var $filterApprovedSelect = $formFilters.querySelector('select.valueApproved');
    var filterApproved = $filterApprovedSelect.length ? $filterApprovedSelect.value : $filterApprovedCheckbox.checked;
    var filterApprovedSelectVal = $formFilters.querySelector('select.filterApproved')?.value;
    var filterApproved = null;
    if(filterApprovedSelectVal !== '')
      filterApproved = filterApprovedSelectVal == 'true';
    if(filterApproved != null && filterApproved === true)
      filters.push({ name: 'fq', value: 'approved:' + filterApproved });

    var filterModelType = $formFilters.querySelector('.valueModelType')?.value;
    if(filterModelType != null && filterModelType !== '')
      filters.push({ name: 'fq', value: 'modelType:' + filterModelType });

    var filterModelResource = $formFilters.querySelector('.valueModelResource')?.value;
    if(filterModelResource != null && filterModelResource !== '')
      filters.push({ name: 'fq', value: 'modelResource:' + filterModelResource });

    var filterApprovalTitle = $formFilters.querySelector('.valueApprovalTitle')?.value;
    if(filterApprovalTitle != null && filterApprovalTitle !== '')
      filters.push({ name: 'fq', value: 'approvalTitle:' + filterApprovalTitle });
  }
  return filters;
}

function searchRequestApprovalVals(filters, target, success, error) {

  fetch(
    '/en-us/api/approval?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestRequestApprovalObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="{{ FONTAWESOME_STYLE }} fa-thumbs-up"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['approvalTitle'];
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
  searchRequestApprovalVals($formFilters, target, success, error);
}

// GET //

async function getRequestApproval(pk) {
  fetch(
    '/en-us/api/approval/' + approvalId
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

async function patchRequestApproval($formFilters, $formValues, target, approvalId, success, error) {
  var filters = patchRequestApprovalFilters($formFilters);

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

  var valueApprovedByEmail = $formValues.querySelector('.valueApprovedByEmail')?.value;
  var removeApprovedByEmail = $formValues.querySelector('.removeApprovedByEmail')?.value === 'true';
  var setApprovedByEmail = removeApprovedByEmail ? null : $formValues.querySelector('.setApprovedByEmail')?.value;
  var addApprovedByEmail = $formValues.querySelector('.addApprovedByEmail')?.value;
  if(removeApprovedByEmail || setApprovedByEmail != null && setApprovedByEmail !== '')
    vals['setApprovedByEmail'] = setApprovedByEmail;
  if(addApprovedByEmail != null && addApprovedByEmail !== '')
    vals['addApprovedByEmail'] = addApprovedByEmail;
  var removeApprovedByEmail = $formValues.querySelector('.removeApprovedByEmail')?.value;
  if(removeApprovedByEmail != null && removeApprovedByEmail !== '')
    vals['removeApprovedByEmail'] = removeApprovedByEmail;

  var valueApprovalName = $formValues.querySelector('.valueApprovalName')?.value;
  var removeApprovalName = $formValues.querySelector('.removeApprovalName')?.value === 'true';
  var setApprovalName = removeApprovalName ? null : $formValues.querySelector('.setApprovalName')?.value;
  var addApprovalName = $formValues.querySelector('.addApprovalName')?.value;
  if(removeApprovalName || setApprovalName != null && setApprovalName !== '')
    vals['setApprovalName'] = setApprovalName;
  if(addApprovalName != null && addApprovalName !== '')
    vals['addApprovalName'] = addApprovalName;
  var removeApprovalName = $formValues.querySelector('.removeApprovalName')?.value;
  if(removeApprovalName != null && removeApprovalName !== '')
    vals['removeApprovalName'] = removeApprovalName;

  var valueApprovalNote = $formValues.querySelector('.valueApprovalNote')?.value;
  var removeApprovalNote = $formValues.querySelector('.removeApprovalNote')?.value === 'true';
  var setApprovalNote = removeApprovalNote ? null : $formValues.querySelector('.setApprovalNote')?.value;
  var addApprovalNote = $formValues.querySelector('.addApprovalNote')?.value;
  if(removeApprovalNote || setApprovalNote != null && setApprovalNote !== '')
    vals['setApprovalNote'] = setApprovalNote;
  if(addApprovalNote != null && addApprovalNote !== '')
    vals['addApprovalNote'] = addApprovalNote;
  var removeApprovalNote = $formValues.querySelector('.removeApprovalNote')?.value;
  if(removeApprovalNote != null && removeApprovalNote !== '')
    vals['removeApprovalNote'] = removeApprovalNote;

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

  var valueApprovalId = $formValues.querySelector('.valueApprovalId')?.value;
  var removeApprovalId = $formValues.querySelector('.removeApprovalId')?.value === 'true';
  var setApprovalId = removeApprovalId ? null : $formValues.querySelector('.setApprovalId')?.value;
  var addApprovalId = $formValues.querySelector('.addApprovalId')?.value;
  if(removeApprovalId || setApprovalId != null && setApprovalId !== '')
    vals['setApprovalId'] = setApprovalId;
  if(addApprovalId != null && addApprovalId !== '')
    vals['addApprovalId'] = addApprovalId;
  var removeApprovalId = $formValues.querySelector('.removeApprovalId')?.value;
  if(removeApprovalId != null && removeApprovalId !== '')
    vals['removeApprovalId'] = removeApprovalId;

  var valueApprovedByUserId = $formValues.querySelector('.valueApprovedByUserId')?.value;
  var removeApprovedByUserId = $formValues.querySelector('.removeApprovedByUserId')?.value === 'true';
  var setApprovedByUserId = removeApprovedByUserId ? null : $formValues.querySelector('.setApprovedByUserId')?.value;
  var addApprovedByUserId = $formValues.querySelector('.addApprovedByUserId')?.value;
  if(removeApprovedByUserId || setApprovedByUserId != null && setApprovedByUserId !== '')
    vals['setApprovedByUserId'] = setApprovedByUserId;
  if(addApprovedByUserId != null && addApprovedByUserId !== '')
    vals['addApprovedByUserId'] = addApprovedByUserId;
  var removeApprovedByUserId = $formValues.querySelector('.removeApprovedByUserId')?.value;
  if(removeApprovedByUserId != null && removeApprovedByUserId !== '')
    vals['removeApprovedByUserId'] = removeApprovedByUserId;

  var valueApprovedByFullName = $formValues.querySelector('.valueApprovedByFullName')?.value;
  var removeApprovedByFullName = $formValues.querySelector('.removeApprovedByFullName')?.value === 'true';
  var setApprovedByFullName = removeApprovedByFullName ? null : $formValues.querySelector('.setApprovedByFullName')?.value;
  var addApprovedByFullName = $formValues.querySelector('.addApprovedByFullName')?.value;
  if(removeApprovedByFullName || setApprovedByFullName != null && setApprovedByFullName !== '')
    vals['setApprovedByFullName'] = setApprovedByFullName;
  if(addApprovedByFullName != null && addApprovedByFullName !== '')
    vals['addApprovedByFullName'] = addApprovedByFullName;
  var removeApprovedByFullName = $formValues.querySelector('.removeApprovedByFullName')?.value;
  if(removeApprovedByFullName != null && removeApprovedByFullName !== '')
    vals['removeApprovedByFullName'] = removeApprovedByFullName;

  var valueApproved = $formValues.querySelector('.valueApproved')?.value;
  var removeApproved = $formValues.querySelector('.removeApproved')?.value === 'true';
  if(valueApproved != null)
    valueApproved = valueApproved === 'true';
  var valueApprovedSelectVal = $formValues.querySelector('select.setApproved')?.value;
  if(valueApprovedSelectVal != null)
    valueApprovedSelectVal = valueApprovedSelectVal === 'true';
  if(valueApprovedSelectVal != null && valueApprovedSelectVal !== '')
    valueApproved = valueApprovedSelectVal == 'true';
  var setApproved = removeApproved ? null : valueApproved;
  var addApproved = $formValues.querySelector('.addApproved')?.checked;
  if(removeApproved || setApproved != null && setApproved !== '')
    vals['setApproved'] = setApproved;
  if(addApproved != null && addApproved !== '')
    vals['addApproved'] = addApproved;
  var removeApproved = $formValues.querySelector('.removeApproved')?.checked;
  if(removeApproved != null && removeApproved !== '')
    vals['removeApproved'] = removeApproved;

  var valueModelType = $formValues.querySelector('.valueModelType')?.value;
  var removeModelType = $formValues.querySelector('.removeModelType')?.value === 'true';
  var setModelType = removeModelType ? null : $formValues.querySelector('.setModelType')?.value;
  var addModelType = $formValues.querySelector('.addModelType')?.value;
  if(removeModelType || setModelType != null && setModelType !== '')
    vals['setModelType'] = setModelType;
  if(addModelType != null && addModelType !== '')
    vals['addModelType'] = addModelType;
  var removeModelType = $formValues.querySelector('.removeModelType')?.value;
  if(removeModelType != null && removeModelType !== '')
    vals['removeModelType'] = removeModelType;

  var valueModelResource = $formValues.querySelector('.valueModelResource')?.value;
  var removeModelResource = $formValues.querySelector('.removeModelResource')?.value === 'true';
  var setModelResource = removeModelResource ? null : $formValues.querySelector('.setModelResource')?.value;
  var addModelResource = $formValues.querySelector('.addModelResource')?.value;
  if(removeModelResource || setModelResource != null && setModelResource !== '')
    vals['setModelResource'] = setModelResource;
  if(addModelResource != null && addModelResource !== '')
    vals['addModelResource'] = addModelResource;
  var removeModelResource = $formValues.querySelector('.removeModelResource')?.value;
  if(removeModelResource != null && removeModelResource !== '')
    vals['removeModelResource'] = removeModelResource;

  var valueApprovalTitle = $formValues.querySelector('.valueApprovalTitle')?.value;
  var removeApprovalTitle = $formValues.querySelector('.removeApprovalTitle')?.value === 'true';
  var setApprovalTitle = removeApprovalTitle ? null : $formValues.querySelector('.setApprovalTitle')?.value;
  var addApprovalTitle = $formValues.querySelector('.addApprovalTitle')?.value;
  if(removeApprovalTitle || setApprovalTitle != null && setApprovalTitle !== '')
    vals['setApprovalTitle'] = setApprovalTitle;
  if(addApprovalTitle != null && addApprovalTitle !== '')
    vals['addApprovalTitle'] = addApprovalTitle;
  var removeApprovalTitle = $formValues.querySelector('.removeApprovalTitle')?.value;
  if(removeApprovalTitle != null && removeApprovalTitle !== '')
    vals['removeApprovalTitle'] = removeApprovalTitle;

  patchRequestApprovalVals(approvalId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'approvalId:' + approvalId}], vals, target, success, error);
}

function patchRequestApprovalFilters($formFilters) {
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

    var filterApprovedByEmail = $formFilters.querySelector('.valueApprovedByEmail')?.value;
    if(filterApprovedByEmail != null && filterApprovedByEmail !== '')
      filters.push({ name: 'fq', value: 'approvedByEmail:' + filterApprovedByEmail });

    var filterApprovalName = $formFilters.querySelector('.valueApprovalName')?.value;
    if(filterApprovalName != null && filterApprovalName !== '')
      filters.push({ name: 'fq', value: 'approvalName:' + filterApprovalName });

    var filterApprovalNote = $formFilters.querySelector('.valueApprovalNote')?.value;
    if(filterApprovalNote != null && filterApprovalNote !== '')
      filters.push({ name: 'fq', value: 'approvalNote:' + filterApprovalNote });

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

    var filterApprovalId = $formFilters.querySelector('.valueApprovalId')?.value;
    if(filterApprovalId != null && filterApprovalId !== '')
      filters.push({ name: 'fq', value: 'approvalId:' + filterApprovalId });

    var filterApprovedByUserId = $formFilters.querySelector('.valueApprovedByUserId')?.value;
    if(filterApprovedByUserId != null && filterApprovedByUserId !== '')
      filters.push({ name: 'fq', value: 'approvedByUserId:' + filterApprovedByUserId });

    var filterApprovedByFullName = $formFilters.querySelector('.valueApprovedByFullName')?.value;
    if(filterApprovedByFullName != null && filterApprovedByFullName !== '')
      filters.push({ name: 'fq', value: 'approvedByFullName:' + filterApprovedByFullName });

    var $filterApprovedCheckbox = $formFilters.querySelector('input.valueApproved[type = "checkbox"]');
    var $filterApprovedSelect = $formFilters.querySelector('select.valueApproved');
    var filterApproved = $filterApprovedSelect.length ? $filterApprovedSelect.value : $filterApprovedCheckbox.checked;
    var filterApprovedSelectVal = $formFilters.querySelector('select.filterApproved')?.value;
    var filterApproved = null;
    if(filterApprovedSelectVal !== '')
      filterApproved = filterApprovedSelectVal == 'true';
    if(filterApproved != null && filterApproved === true)
      filters.push({ name: 'fq', value: 'approved:' + filterApproved });

    var filterModelType = $formFilters.querySelector('.valueModelType')?.value;
    if(filterModelType != null && filterModelType !== '')
      filters.push({ name: 'fq', value: 'modelType:' + filterModelType });

    var filterModelResource = $formFilters.querySelector('.valueModelResource')?.value;
    if(filterModelResource != null && filterModelResource !== '')
      filters.push({ name: 'fq', value: 'modelResource:' + filterModelResource });

    var filterApprovalTitle = $formFilters.querySelector('.valueApprovalTitle')?.value;
    if(filterApprovalTitle != null && filterApprovalTitle !== '')
      filters.push({ name: 'fq', value: 'approvalTitle:' + filterApprovalTitle });
  }
  return filters;
}

function patchRequestApprovalVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchRequestApprovalVals(filters, vals, target, success, error);
}

function patchRequestApprovalVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/approval?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postRequestApproval($formValues, target, success, error) {
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

  var valueApprovedByEmail = $formValues.querySelector('.valueApprovedByEmail')?.value;
  if(valueApprovedByEmail != null && valueApprovedByEmail !== '')
    vals['approvedByEmail'] = valueApprovedByEmail;

  var valueApprovalName = $formValues.querySelector('.valueApprovalName')?.value;
  if(valueApprovalName != null && valueApprovalName !== '')
    vals['approvalName'] = valueApprovalName;

  var valueApprovalNote = $formValues.querySelector('.valueApprovalNote')?.value;
  if(valueApprovalNote != null && valueApprovalNote !== '')
    vals['approvalNote'] = valueApprovalNote;

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

  var valueApprovalId = $formValues.querySelector('.valueApprovalId')?.value;
  if(valueApprovalId != null && valueApprovalId !== '')
    vals['approvalId'] = valueApprovalId;

  var valueApprovedByUserId = $formValues.querySelector('.valueApprovedByUserId')?.value;
  if(valueApprovedByUserId != null && valueApprovedByUserId !== '')
    vals['approvedByUserId'] = valueApprovedByUserId;

  var valueApprovedByFullName = $formValues.querySelector('.valueApprovedByFullName')?.value;
  if(valueApprovedByFullName != null && valueApprovedByFullName !== '')
    vals['approvedByFullName'] = valueApprovedByFullName;

  var valueApproved = $formValues.querySelector('.valueApproved')?.value;
  if(valueApproved != null && valueApproved !== '')
    vals['approved'] = valueApproved == 'true';

  var valueModelType = $formValues.querySelector('.valueModelType')?.value;
  if(valueModelType != null && valueModelType !== '')
    vals['modelType'] = valueModelType;

  var valueModelResource = $formValues.querySelector('.valueModelResource')?.value;
  if(valueModelResource != null && valueModelResource !== '')
    vals['modelResource'] = valueModelResource;

  var valueApprovalTitle = $formValues.querySelector('.valueApprovalTitle')?.value;
  if(valueApprovalTitle != null && valueApprovalTitle !== '')
    vals['approvalTitle'] = valueApprovalTitle;

  fetch(
    '/en-us/api/approval'
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

function postRequestApprovalVals(vals, target, success, error) {
  fetch(
    '/en-us/api/approval'
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

async function deleteRequestApproval(target, approvalId, success, error) {
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
    '/en-us/api/approval/' + encodeURIComponent(approvalId)
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

async function putimportRequestApproval($formValues, target, approvalId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportRequestApprovalVals(JSON.parse(json), target, success, error);
}

function putimportRequestApprovalVals(json, target, success, error) {
  fetch(
    '/en-us/api/approval-import'
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

async function deletefilterRequestApproval(target, success, error) {
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
    '/en-us/api/approval'
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
