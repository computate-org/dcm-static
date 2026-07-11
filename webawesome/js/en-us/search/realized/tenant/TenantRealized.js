
async function websocketTenantRealized(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketTenantRealized', function (error, message) {
      var json = JSON.parse(message['body']);
      var realizedId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + realizedId + ' ');
      $box.setAttribute('id', 'box-' + realizedId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + realizedId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + realizedId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + realizedId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-buildings"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify realized tenants in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + realizedId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + realizedId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + realizedId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + realizedId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + realizedId);
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
        var $old_box = document.querySelector('.box-' + realizedId);
      } else {
        document.querySelector('.box-' + realizedId)?.remove();
      }
      if(realizedId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketTenantRealizedInner(apiRequest) {
  var realizedId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(realizedId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputRequestedId = null;
        var inputRealizedByEmail = null;
        var inputRealizedByUserId = null;
        var inputRealizedByFullName = null;
        var inputCreatedByEmail = null;
        var inputCreatedVia = null;
        var inputRealizedState = null;
        var inputIntentState = null;
        var inputRequestedState = null;
        var inputDescription = null;
        var inputLocked = null;
        var inputHostInventoryIds = null;
        var inputAnsibleProjectIds = null;
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
        var inputHubId = null;
        var inputClusterName = null;
        var inputAapOrganizationId = null;
        var inputTenantResource = null;
        var inputRealizedNumber = null;
        var inputTenantName = null;
        var inputTenantId = null;
        var inputRealizedId = null;
        var inputRealizedName = null;
        var inputCreatedByUserId = null;
        var inputCreatedByFullName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.TenantRealized_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.TenantRealized_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.TenantRealized_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.TenantRealized_Page_archived');
        if(vars.includes('requestedId'))
          inputRequestedId = $response.querySelector('.TenantRealized_Page_requestedId');
        if(vars.includes('realizedByEmail'))
          inputRealizedByEmail = $response.querySelector('.TenantRealized_Page_realizedByEmail');
        if(vars.includes('realizedByUserId'))
          inputRealizedByUserId = $response.querySelector('.TenantRealized_Page_realizedByUserId');
        if(vars.includes('realizedByFullName'))
          inputRealizedByFullName = $response.querySelector('.TenantRealized_Page_realizedByFullName');
        if(vars.includes('createdByEmail'))
          inputCreatedByEmail = $response.querySelector('.TenantRealized_Page_createdByEmail');
        if(vars.includes('createdVia'))
          inputCreatedVia = $response.querySelector('.TenantRealized_Page_createdVia');
        if(vars.includes('realizedState'))
          inputRealizedState = $response.querySelector('.TenantRealized_Page_realizedState');
        if(vars.includes('intentState'))
          inputIntentState = $response.querySelector('.TenantRealized_Page_intentState');
        if(vars.includes('requestedState'))
          inputRequestedState = $response.querySelector('.TenantRealized_Page_requestedState');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.TenantRealized_Page_description');
        if(vars.includes('locked'))
          inputLocked = $response.querySelector('.TenantRealized_Page_locked');
        if(vars.includes('hostInventoryIds'))
          inputHostInventoryIds = $response.querySelector('.TenantRealized_Page_hostInventoryIds');
        if(vars.includes('ansibleProjectIds'))
          inputAnsibleProjectIds = $response.querySelector('.TenantRealized_Page_ansibleProjectIds');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.TenantRealized_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.TenantRealized_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.TenantRealized_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.TenantRealized_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.TenantRealized_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.TenantRealized_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.TenantRealized_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.TenantRealized_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.TenantRealized_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.TenantRealized_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.TenantRealized_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.TenantRealized_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.TenantRealized_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.TenantRealized_Page_solrId');
        if(vars.includes('hubId'))
          inputHubId = $response.querySelector('.TenantRealized_Page_hubId');
        if(vars.includes('clusterName'))
          inputClusterName = $response.querySelector('.TenantRealized_Page_clusterName');
        if(vars.includes('aapOrganizationId'))
          inputAapOrganizationId = $response.querySelector('.TenantRealized_Page_aapOrganizationId');
        if(vars.includes('tenantResource'))
          inputTenantResource = $response.querySelector('.TenantRealized_Page_tenantResource');
        if(vars.includes('realizedNumber'))
          inputRealizedNumber = $response.querySelector('.TenantRealized_Page_realizedNumber');
        if(vars.includes('tenantName'))
          inputTenantName = $response.querySelector('.TenantRealized_Page_tenantName');
        if(vars.includes('tenantId'))
          inputTenantId = $response.querySelector('.TenantRealized_Page_tenantId');
        if(vars.includes('realizedId'))
          inputRealizedId = $response.querySelector('.TenantRealized_Page_realizedId');
        if(vars.includes('realizedName'))
          inputRealizedName = $response.querySelector('.TenantRealized_Page_realizedName');
        if(vars.includes('createdByUserId'))
          inputCreatedByUserId = $response.querySelector('.TenantRealized_Page_createdByUserId');
        if(vars.includes('createdByFullName'))
          inputCreatedByFullName = $response.querySelector('.TenantRealized_Page_createdByFullName');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listTenantRealized = JSON.parse($response.querySelector('.pageForm .listTenantRealized')?.value);
        jsWebsocketTenantRealized(realizedId, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.TenantRealized_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.TenantRealized_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.TenantRealized_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.TenantRealized_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_archived'));
        }

        if(inputRequestedId) {
          document.querySelectorAll('.TenantRealized_Page_requestedId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedId.getAttribute('value');
            else
              item.textContent = inputRequestedId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_requestedId'));
        }

        if(inputRealizedByEmail) {
          document.querySelectorAll('.TenantRealized_Page_realizedByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedByEmail.getAttribute('value');
            else
              item.textContent = inputRealizedByEmail.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedByEmail'));
        }

        if(inputRealizedByUserId) {
          document.querySelectorAll('.TenantRealized_Page_realizedByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedByUserId.getAttribute('value');
            else
              item.textContent = inputRealizedByUserId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedByUserId'));
        }

        if(inputRealizedByFullName) {
          document.querySelectorAll('.TenantRealized_Page_realizedByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedByFullName.getAttribute('value');
            else
              item.textContent = inputRealizedByFullName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedByFullName'));
        }

        if(inputCreatedByEmail) {
          document.querySelectorAll('.TenantRealized_Page_createdByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByEmail.getAttribute('value');
            else
              item.textContent = inputCreatedByEmail.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_createdByEmail'));
        }

        if(inputCreatedVia) {
          document.querySelectorAll('.TenantRealized_Page_createdVia').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedVia.getAttribute('value');
            else
              item.textContent = inputCreatedVia.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_createdVia'));
        }

        if(inputRealizedState) {
          document.querySelectorAll('.TenantRealized_Page_realizedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedState.getAttribute('value');
            else
              item.textContent = inputRealizedState.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedState'));
        }

        if(inputIntentState) {
          document.querySelectorAll('.TenantRealized_Page_intentState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputIntentState.getAttribute('value');
            else
              item.textContent = inputIntentState.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_intentState'));
        }

        if(inputRequestedState) {
          document.querySelectorAll('.TenantRealized_Page_requestedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedState.getAttribute('value');
            else
              item.textContent = inputRequestedState.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_requestedState'));
        }

        if(inputDescription) {
          document.querySelectorAll('.TenantRealized_Page_description').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_description'));
        }

        if(inputLocked) {
          document.querySelectorAll('.TenantRealized_Page_locked').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputLocked.getAttribute('value');
            else
              item.textContent = inputLocked.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_locked'));
        }

        if(inputHostInventoryIds) {
          document.querySelectorAll('.TenantRealized_Page_hostInventoryIds').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputHostInventoryIds.getAttribute('value');
            else
              item.textContent = inputHostInventoryIds.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_hostInventoryIds'));
        }

        if(inputAnsibleProjectIds) {
          document.querySelectorAll('.TenantRealized_Page_ansibleProjectIds').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAnsibleProjectIds.getAttribute('value');
            else
              item.textContent = inputAnsibleProjectIds.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_ansibleProjectIds'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.TenantRealized_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.TenantRealized_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.TenantRealized_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.TenantRealized_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.TenantRealized_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.TenantRealized_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.TenantRealized_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.TenantRealized_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.TenantRealized_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.TenantRealized_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.TenantRealized_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.TenantRealized_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.TenantRealized_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.TenantRealized_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_solrId'));
        }

        if(inputHubId) {
          document.querySelectorAll('.TenantRealized_Page_hubId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputHubId.getAttribute('value');
            else
              item.textContent = inputHubId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_hubId'));
        }

        if(inputClusterName) {
          document.querySelectorAll('.TenantRealized_Page_clusterName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClusterName.getAttribute('value');
            else
              item.textContent = inputClusterName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_clusterName'));
        }

        if(inputAapOrganizationId) {
          document.querySelectorAll('.TenantRealized_Page_aapOrganizationId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAapOrganizationId.getAttribute('value');
            else
              item.textContent = inputAapOrganizationId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_aapOrganizationId'));
        }

        if(inputTenantResource) {
          document.querySelectorAll('.TenantRealized_Page_tenantResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantResource.getAttribute('value');
            else
              item.textContent = inputTenantResource.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_tenantResource'));
        }

        if(inputRealizedNumber) {
          document.querySelectorAll('.TenantRealized_Page_realizedNumber').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedNumber.getAttribute('value');
            else
              item.textContent = inputRealizedNumber.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedNumber'));
        }

        if(inputTenantName) {
          document.querySelectorAll('.TenantRealized_Page_tenantName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantName.getAttribute('value');
            else
              item.textContent = inputTenantName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_tenantName'));
        }

        if(inputTenantId) {
          document.querySelectorAll('.TenantRealized_Page_tenantId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantId.getAttribute('value');
            else
              item.textContent = inputTenantId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_tenantId'));
        }

        if(inputRealizedId) {
          document.querySelectorAll('.TenantRealized_Page_realizedId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedId.getAttribute('value');
            else
              item.textContent = inputRealizedId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedId'));
        }

        if(inputRealizedName) {
          document.querySelectorAll('.TenantRealized_Page_realizedName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedName.getAttribute('value');
            else
              item.textContent = inputRealizedName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_realizedName'));
        }

        if(inputCreatedByUserId) {
          document.querySelectorAll('.TenantRealized_Page_createdByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByUserId.getAttribute('value');
            else
              item.textContent = inputCreatedByUserId.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_createdByUserId'));
        }

        if(inputCreatedByFullName) {
          document.querySelectorAll('.TenantRealized_Page_createdByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByFullName.getAttribute('value');
            else
              item.textContent = inputCreatedByFullName.textContent;
          });
          addGlow(document.querySelector('.TenantRealized_Page_createdByFullName'));
        }

          pageGraphTenantRealized();
      });
    });
  }
}

function pageGraphTenantRealized(apiRequest) {
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
          layout['title'] = 'realized tenants';
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
          Plotly.react('htmBodyGraphTenantRealizedPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqTenantRealized_time').innerText = '';
  searchPage('TenantRealized', function() {
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
      document.querySelector('#fqTenantRealized_time').value = x;
      document.querySelector('#fqTenantRealized_time').onchange();
      searchPage('TenantRealized');
    }, speedRate);
  });
}

// Search //

async function searchTenantRealized($formFilters, success, error) {
  var filters = searchTenantRealizedFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchTenantRealizedVals(filters, target, success, error);
}

function searchTenantRealizedFilters($formFilters) {
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

    var filterRequestedId = $formFilters.querySelector('.valueRequestedId')?.value;
    if(filterRequestedId != null && filterRequestedId !== '')
      filters.push({ name: 'fq', value: 'requestedId:' + filterRequestedId });

    var filterRealizedByEmail = $formFilters.querySelector('.valueRealizedByEmail')?.value;
    if(filterRealizedByEmail != null && filterRealizedByEmail !== '')
      filters.push({ name: 'fq', value: 'realizedByEmail:' + filterRealizedByEmail });

    var filterRealizedByUserId = $formFilters.querySelector('.valueRealizedByUserId')?.value;
    if(filterRealizedByUserId != null && filterRealizedByUserId !== '')
      filters.push({ name: 'fq', value: 'realizedByUserId:' + filterRealizedByUserId });

    var filterRealizedByFullName = $formFilters.querySelector('.valueRealizedByFullName')?.value;
    if(filterRealizedByFullName != null && filterRealizedByFullName !== '')
      filters.push({ name: 'fq', value: 'realizedByFullName:' + filterRealizedByFullName });

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterHostInventoryIds = $formFilters.querySelector('.valueHostInventoryIds')?.value;
    if(filterHostInventoryIds != null && filterHostInventoryIds !== '')
      filters.push({ name: 'fq', value: 'hostInventoryIds:' + filterHostInventoryIds });

    var filterAnsibleProjectIds = $formFilters.querySelector('.valueAnsibleProjectIds')?.value;
    if(filterAnsibleProjectIds != null && filterAnsibleProjectIds !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectIds:' + filterAnsibleProjectIds });

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

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterRealizedNumber = $formFilters.querySelector('.valueRealizedNumber')?.value;
    if(filterRealizedNumber != null && filterRealizedNumber !== '')
      filters.push({ name: 'fq', value: 'realizedNumber:' + filterRealizedNumber });

    var filterTenantName = $formFilters.querySelector('.valueTenantName')?.value;
    if(filterTenantName != null && filterTenantName !== '')
      filters.push({ name: 'fq', value: 'tenantName:' + filterTenantName });

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterRealizedId = $formFilters.querySelector('.valueRealizedId')?.value;
    if(filterRealizedId != null && filterRealizedId !== '')
      filters.push({ name: 'fq', value: 'realizedId:' + filterRealizedId });

    var filterRealizedName = $formFilters.querySelector('.valueRealizedName')?.value;
    if(filterRealizedName != null && filterRealizedName !== '')
      filters.push({ name: 'fq', value: 'realizedName:' + filterRealizedName });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });
  }
  return filters;
}

function searchTenantRealizedVals(filters, target, success, error) {

  fetch(
    '/en-us/api/intent/realized?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestTenantRealizedHostInventoryIds(filters, $list, realizedIdTenantRealized = null, hostInventoryIds = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-network-wired"></i>';
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
        var checked = val == null ? false : (hostInventoryIds != null && val === hostInventoryIds.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_hostInventoryIds_' + realizedIdTenantRealized + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueHostInventoryIds ');
        if(realizedIdTenantRealized != null) {
          $input.addEventListener('change', function(event) {
            patchTenantRealizedVals([{ name: 'fq', value: 'realizedId:' + realizedIdTenantRealized }], { [(event.target.checked ? 'add' : 'remove') + 'HostInventoryIds']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantRealizedHostInventoryIds(filters, $list, realizedIdTenantRealized, o[inputVar], relate, target);
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
  if (typeof searchHostInventoryVals === 'function') {
    searchHostInventoryVals(filters, target, success, error);
  }
}

function suggestTenantRealizedAnsibleProjectIds(filters, $list, realizedIdTenantRealized = null, ansibleProjectIds = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-excavator"></i>';
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
        var checked = val == null ? false : (ansibleProjectIds != null && val === ansibleProjectIds.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_ansibleProjectIds_' + realizedIdTenantRealized + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueAnsibleProjectIds ');
        if(realizedIdTenantRealized != null) {
          $input.addEventListener('change', function(event) {
            patchTenantRealizedVals([{ name: 'fq', value: 'realizedId:' + realizedIdTenantRealized }], { [(event.target.checked ? 'add' : 'remove') + 'AnsibleProjectIds']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantRealizedAnsibleProjectIds(filters, $list, realizedIdTenantRealized, o[inputVar], relate, target);
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
  if (typeof searchAnsibleProjectVals === 'function') {
    searchAnsibleProjectVals(filters, target, success, error);
  }
}

function suggestTenantRealizedRequestedId(filters, $list, realizedIdTenantRealized = null, requestedId = null, relate=true, target) {
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
        var inputVar = 'requestedId';
        var val = o[inputVar];
        var checked = val == null ? false : (requestedId != null && val === requestedId.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_requestedId_' + realizedIdTenantRealized + '_requestedId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueRequestedId ');
        if(realizedIdTenantRealized != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchTenantRealizedVals([{ name: 'fq', value: 'realizedId:' + realizedIdTenantRealized }], { [(event.target.checked ? 'set' : 'remove') + 'RequestedId']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantRealizedRequestedId(filters, $list, realizedIdTenantRealized, o[inputVar], relate, target);
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
  if (typeof searchTenantRequestedVals === 'function') {
    searchTenantRequestedVals(filters, target, success, error);
  }
}

function suggestTenantRealizedTenantResource(filters, $list, realizedIdTenantRealized = null, tenantResource = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_tenantResource_' + realizedIdTenantRealized + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueTenantResource ');
        if(realizedIdTenantRealized != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchTenantRealizedVals([{ name: 'fq', value: 'realizedId:' + realizedIdTenantRealized }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantRealizedTenantResource(filters, $list, realizedIdTenantRealized, o[inputVar], relate, target);
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
  if (typeof searchTenantIntentVals === 'function') {
    searchTenantIntentVals(filters, target, success, error);
  }
}

function suggestTenantRealizedObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="{{ FONTAWESOME_STYLE }} fa-buildings"></i>');
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
  searchTenantRealizedVals($formFilters, target, success, error);
}

// GET //

async function getTenantRealized(pk) {
  fetch(
    '/en-us/api/intent/realized/' + realizedId
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

async function patchTenantRealized($formFilters, $formValues, target, realizedId, success, error) {
  var filters = patchTenantRealizedFilters($formFilters);

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

  var valueRequestedId = (Array.from($formValues.querySelectorAll('.valueRequestedId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueRequestedId != null && valueRequestedId !== '')
    vals['setRequestedId'] = valueRequestedId;

  var valueRealizedByEmail = $formValues.querySelector('.valueRealizedByEmail')?.value;
  var removeRealizedByEmail = $formValues.querySelector('.removeRealizedByEmail')?.value === 'true';
  var setRealizedByEmail = removeRealizedByEmail ? null : $formValues.querySelector('.setRealizedByEmail')?.value;
  var addRealizedByEmail = $formValues.querySelector('.addRealizedByEmail')?.value;
  if(removeRealizedByEmail || setRealizedByEmail != null && setRealizedByEmail !== '')
    vals['setRealizedByEmail'] = setRealizedByEmail;
  if(addRealizedByEmail != null && addRealizedByEmail !== '')
    vals['addRealizedByEmail'] = addRealizedByEmail;
  var removeRealizedByEmail = $formValues.querySelector('.removeRealizedByEmail')?.value;
  if(removeRealizedByEmail != null && removeRealizedByEmail !== '')
    vals['removeRealizedByEmail'] = removeRealizedByEmail;

  var valueRealizedByUserId = $formValues.querySelector('.valueRealizedByUserId')?.value;
  var removeRealizedByUserId = $formValues.querySelector('.removeRealizedByUserId')?.value === 'true';
  var setRealizedByUserId = removeRealizedByUserId ? null : $formValues.querySelector('.setRealizedByUserId')?.value;
  var addRealizedByUserId = $formValues.querySelector('.addRealizedByUserId')?.value;
  if(removeRealizedByUserId || setRealizedByUserId != null && setRealizedByUserId !== '')
    vals['setRealizedByUserId'] = setRealizedByUserId;
  if(addRealizedByUserId != null && addRealizedByUserId !== '')
    vals['addRealizedByUserId'] = addRealizedByUserId;
  var removeRealizedByUserId = $formValues.querySelector('.removeRealizedByUserId')?.value;
  if(removeRealizedByUserId != null && removeRealizedByUserId !== '')
    vals['removeRealizedByUserId'] = removeRealizedByUserId;

  var valueRealizedByFullName = $formValues.querySelector('.valueRealizedByFullName')?.value;
  var removeRealizedByFullName = $formValues.querySelector('.removeRealizedByFullName')?.value === 'true';
  var setRealizedByFullName = removeRealizedByFullName ? null : $formValues.querySelector('.setRealizedByFullName')?.value;
  var addRealizedByFullName = $formValues.querySelector('.addRealizedByFullName')?.value;
  if(removeRealizedByFullName || setRealizedByFullName != null && setRealizedByFullName !== '')
    vals['setRealizedByFullName'] = setRealizedByFullName;
  if(addRealizedByFullName != null && addRealizedByFullName !== '')
    vals['addRealizedByFullName'] = addRealizedByFullName;
  var removeRealizedByFullName = $formValues.querySelector('.removeRealizedByFullName')?.value;
  if(removeRealizedByFullName != null && removeRealizedByFullName !== '')
    vals['removeRealizedByFullName'] = removeRealizedByFullName;

  var valueCreatedByEmail = $formValues.querySelector('.valueCreatedByEmail')?.value;
  var removeCreatedByEmail = $formValues.querySelector('.removeCreatedByEmail')?.value === 'true';
  var setCreatedByEmail = removeCreatedByEmail ? null : $formValues.querySelector('.setCreatedByEmail')?.value;
  var addCreatedByEmail = $formValues.querySelector('.addCreatedByEmail')?.value;
  if(removeCreatedByEmail || setCreatedByEmail != null && setCreatedByEmail !== '')
    vals['setCreatedByEmail'] = setCreatedByEmail;
  if(addCreatedByEmail != null && addCreatedByEmail !== '')
    vals['addCreatedByEmail'] = addCreatedByEmail;
  var removeCreatedByEmail = $formValues.querySelector('.removeCreatedByEmail')?.value;
  if(removeCreatedByEmail != null && removeCreatedByEmail !== '')
    vals['removeCreatedByEmail'] = removeCreatedByEmail;

  var valueCreatedVia = $formValues.querySelector('.valueCreatedVia')?.value;
  var removeCreatedVia = $formValues.querySelector('.removeCreatedVia')?.value === 'true';
  var setCreatedVia = removeCreatedVia ? null : $formValues.querySelector('.setCreatedVia')?.value;
  var addCreatedVia = $formValues.querySelector('.addCreatedVia')?.value;
  if(removeCreatedVia || setCreatedVia != null && setCreatedVia !== '')
    vals['setCreatedVia'] = setCreatedVia;
  if(addCreatedVia != null && addCreatedVia !== '')
    vals['addCreatedVia'] = addCreatedVia;
  var removeCreatedVia = $formValues.querySelector('.removeCreatedVia')?.value;
  if(removeCreatedVia != null && removeCreatedVia !== '')
    vals['removeCreatedVia'] = removeCreatedVia;

  var valueRealizedState = $formValues.querySelector('.valueRealizedState')?.value;
  var removeRealizedState = $formValues.querySelector('.removeRealizedState')?.value === 'true';
  var setRealizedState = removeRealizedState ? null : $formValues.querySelector('.setRealizedState')?.value;
  var addRealizedState = $formValues.querySelector('.addRealizedState')?.value;
  if(removeRealizedState || setRealizedState != null && setRealizedState !== '')
    vals['setRealizedState'] = setRealizedState;
  if(addRealizedState != null && addRealizedState !== '')
    vals['addRealizedState'] = addRealizedState;
  var removeRealizedState = $formValues.querySelector('.removeRealizedState')?.value;
  if(removeRealizedState != null && removeRealizedState !== '')
    vals['removeRealizedState'] = removeRealizedState;

  var valueIntentState = $formValues.querySelector('.valueIntentState')?.value;
  var removeIntentState = $formValues.querySelector('.removeIntentState')?.value === 'true';
  var setIntentState = removeIntentState ? null : $formValues.querySelector('.setIntentState')?.value;
  var addIntentState = $formValues.querySelector('.addIntentState')?.value;
  if(removeIntentState || setIntentState != null && setIntentState !== '')
    vals['setIntentState'] = setIntentState;
  if(addIntentState != null && addIntentState !== '')
    vals['addIntentState'] = addIntentState;
  var removeIntentState = $formValues.querySelector('.removeIntentState')?.value;
  if(removeIntentState != null && removeIntentState !== '')
    vals['removeIntentState'] = removeIntentState;

  var valueRequestedState = $formValues.querySelector('.valueRequestedState')?.value;
  var removeRequestedState = $formValues.querySelector('.removeRequestedState')?.value === 'true';
  var setRequestedState = removeRequestedState ? null : $formValues.querySelector('.setRequestedState')?.value;
  var addRequestedState = $formValues.querySelector('.addRequestedState')?.value;
  if(removeRequestedState || setRequestedState != null && setRequestedState !== '')
    vals['setRequestedState'] = setRequestedState;
  if(addRequestedState != null && addRequestedState !== '')
    vals['addRequestedState'] = addRequestedState;
  var removeRequestedState = $formValues.querySelector('.removeRequestedState')?.value;
  if(removeRequestedState != null && removeRequestedState !== '')
    vals['removeRequestedState'] = removeRequestedState;

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

  var valueLocked = $formValues.querySelector('.valueLocked')?.value;
  var removeLocked = $formValues.querySelector('.removeLocked')?.value === 'true';
  if(valueLocked != null)
    valueLocked = valueLocked === 'true';
  var valueLockedSelectVal = $formValues.querySelector('select.setLocked')?.value;
  if(valueLockedSelectVal != null)
    valueLockedSelectVal = valueLockedSelectVal === 'true';
  if(valueLockedSelectVal != null && valueLockedSelectVal !== '')
    valueLocked = valueLockedSelectVal == 'true';
  var setLocked = removeLocked ? null : valueLocked;
  var addLocked = $formValues.querySelector('.addLocked')?.checked;
  if(removeLocked || setLocked != null && setLocked !== '')
    vals['setLocked'] = setLocked;
  if(addLocked != null && addLocked !== '')
    vals['addLocked'] = addLocked;
  var removeLocked = $formValues.querySelector('.removeLocked')?.checked;
  if(removeLocked != null && removeLocked !== '')
    vals['removeLocked'] = removeLocked;

  var valueHostInventoryIds = (Array.from($formValues.querySelectorAll('.valueHostInventoryIds')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueHostInventoryIds != null && valueHostInventoryIds !== '')
    vals['addHostInventoryIds'] = valueHostInventoryIds;

  var valueAnsibleProjectIds = (Array.from($formValues.querySelectorAll('.valueAnsibleProjectIds')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueAnsibleProjectIds != null && valueAnsibleProjectIds !== '')
    vals['addAnsibleProjectIds'] = valueAnsibleProjectIds;

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

  var valueHubId = $formValues.querySelector('.valueHubId')?.value;
  var removeHubId = $formValues.querySelector('.removeHubId')?.value === 'true';
  var setHubId = removeHubId ? null : $formValues.querySelector('.setHubId')?.value;
  var addHubId = $formValues.querySelector('.addHubId')?.value;
  if(removeHubId || setHubId != null && setHubId !== '')
    vals['setHubId'] = setHubId;
  if(addHubId != null && addHubId !== '')
    vals['addHubId'] = addHubId;
  var removeHubId = $formValues.querySelector('.removeHubId')?.value;
  if(removeHubId != null && removeHubId !== '')
    vals['removeHubId'] = removeHubId;

  var valueClusterName = $formValues.querySelector('.valueClusterName')?.value;
  var removeClusterName = $formValues.querySelector('.removeClusterName')?.value === 'true';
  var setClusterName = removeClusterName ? null : $formValues.querySelector('.setClusterName')?.value;
  var addClusterName = $formValues.querySelector('.addClusterName')?.value;
  if(removeClusterName || setClusterName != null && setClusterName !== '')
    vals['setClusterName'] = setClusterName;
  if(addClusterName != null && addClusterName !== '')
    vals['addClusterName'] = addClusterName;
  var removeClusterName = $formValues.querySelector('.removeClusterName')?.value;
  if(removeClusterName != null && removeClusterName !== '')
    vals['removeClusterName'] = removeClusterName;

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

  var valueTenantResource = (Array.from($formValues.querySelectorAll('.valueTenantResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['setTenantResource'] = valueTenantResource;

  var valueRealizedNumber = $formValues.querySelector('.valueRealizedNumber')?.value;
  var removeRealizedNumber = $formValues.querySelector('.removeRealizedNumber')?.value === 'true';
  var setRealizedNumber = removeRealizedNumber ? null : $formValues.querySelector('.setRealizedNumber')?.value;
  var addRealizedNumber = $formValues.querySelector('.addRealizedNumber')?.value;
  if(removeRealizedNumber || setRealizedNumber != null && setRealizedNumber !== '')
    vals['setRealizedNumber'] = setRealizedNumber;
  if(addRealizedNumber != null && addRealizedNumber !== '')
    vals['addRealizedNumber'] = addRealizedNumber;
  var removeRealizedNumber = $formValues.querySelector('.removeRealizedNumber')?.value;
  if(removeRealizedNumber != null && removeRealizedNumber !== '')
    vals['removeRealizedNumber'] = removeRealizedNumber;

  var valueTenantName = $formValues.querySelector('.valueTenantName')?.value;
  var removeTenantName = $formValues.querySelector('.removeTenantName')?.value === 'true';
  var setTenantName = removeTenantName ? null : $formValues.querySelector('.setTenantName')?.value;
  var addTenantName = $formValues.querySelector('.addTenantName')?.value;
  if(removeTenantName || setTenantName != null && setTenantName !== '')
    vals['setTenantName'] = setTenantName;
  if(addTenantName != null && addTenantName !== '')
    vals['addTenantName'] = addTenantName;
  var removeTenantName = $formValues.querySelector('.removeTenantName')?.value;
  if(removeTenantName != null && removeTenantName !== '')
    vals['removeTenantName'] = removeTenantName;

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

  var valueRealizedId = $formValues.querySelector('.valueRealizedId')?.value;
  var removeRealizedId = $formValues.querySelector('.removeRealizedId')?.value === 'true';
  var setRealizedId = removeRealizedId ? null : $formValues.querySelector('.setRealizedId')?.value;
  var addRealizedId = $formValues.querySelector('.addRealizedId')?.value;
  if(removeRealizedId || setRealizedId != null && setRealizedId !== '')
    vals['setRealizedId'] = setRealizedId;
  if(addRealizedId != null && addRealizedId !== '')
    vals['addRealizedId'] = addRealizedId;
  var removeRealizedId = $formValues.querySelector('.removeRealizedId')?.value;
  if(removeRealizedId != null && removeRealizedId !== '')
    vals['removeRealizedId'] = removeRealizedId;

  var valueRealizedName = $formValues.querySelector('.valueRealizedName')?.value;
  var removeRealizedName = $formValues.querySelector('.removeRealizedName')?.value === 'true';
  var setRealizedName = removeRealizedName ? null : $formValues.querySelector('.setRealizedName')?.value;
  var addRealizedName = $formValues.querySelector('.addRealizedName')?.value;
  if(removeRealizedName || setRealizedName != null && setRealizedName !== '')
    vals['setRealizedName'] = setRealizedName;
  if(addRealizedName != null && addRealizedName !== '')
    vals['addRealizedName'] = addRealizedName;
  var removeRealizedName = $formValues.querySelector('.removeRealizedName')?.value;
  if(removeRealizedName != null && removeRealizedName !== '')
    vals['removeRealizedName'] = removeRealizedName;

  var valueCreatedByUserId = $formValues.querySelector('.valueCreatedByUserId')?.value;
  var removeCreatedByUserId = $formValues.querySelector('.removeCreatedByUserId')?.value === 'true';
  var setCreatedByUserId = removeCreatedByUserId ? null : $formValues.querySelector('.setCreatedByUserId')?.value;
  var addCreatedByUserId = $formValues.querySelector('.addCreatedByUserId')?.value;
  if(removeCreatedByUserId || setCreatedByUserId != null && setCreatedByUserId !== '')
    vals['setCreatedByUserId'] = setCreatedByUserId;
  if(addCreatedByUserId != null && addCreatedByUserId !== '')
    vals['addCreatedByUserId'] = addCreatedByUserId;
  var removeCreatedByUserId = $formValues.querySelector('.removeCreatedByUserId')?.value;
  if(removeCreatedByUserId != null && removeCreatedByUserId !== '')
    vals['removeCreatedByUserId'] = removeCreatedByUserId;

  var valueCreatedByFullName = $formValues.querySelector('.valueCreatedByFullName')?.value;
  var removeCreatedByFullName = $formValues.querySelector('.removeCreatedByFullName')?.value === 'true';
  var setCreatedByFullName = removeCreatedByFullName ? null : $formValues.querySelector('.setCreatedByFullName')?.value;
  var addCreatedByFullName = $formValues.querySelector('.addCreatedByFullName')?.value;
  if(removeCreatedByFullName || setCreatedByFullName != null && setCreatedByFullName !== '')
    vals['setCreatedByFullName'] = setCreatedByFullName;
  if(addCreatedByFullName != null && addCreatedByFullName !== '')
    vals['addCreatedByFullName'] = addCreatedByFullName;
  var removeCreatedByFullName = $formValues.querySelector('.removeCreatedByFullName')?.value;
  if(removeCreatedByFullName != null && removeCreatedByFullName !== '')
    vals['removeCreatedByFullName'] = removeCreatedByFullName;

  patchTenantRealizedVals(realizedId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'realizedId:' + realizedId}], vals, target, success, error);
}

function patchTenantRealizedFilters($formFilters) {
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

    var filterRequestedId = $formFilters.querySelector('.valueRequestedId')?.value;
    if(filterRequestedId != null && filterRequestedId !== '')
      filters.push({ name: 'fq', value: 'requestedId:' + filterRequestedId });

    var filterRealizedByEmail = $formFilters.querySelector('.valueRealizedByEmail')?.value;
    if(filterRealizedByEmail != null && filterRealizedByEmail !== '')
      filters.push({ name: 'fq', value: 'realizedByEmail:' + filterRealizedByEmail });

    var filterRealizedByUserId = $formFilters.querySelector('.valueRealizedByUserId')?.value;
    if(filterRealizedByUserId != null && filterRealizedByUserId !== '')
      filters.push({ name: 'fq', value: 'realizedByUserId:' + filterRealizedByUserId });

    var filterRealizedByFullName = $formFilters.querySelector('.valueRealizedByFullName')?.value;
    if(filterRealizedByFullName != null && filterRealizedByFullName !== '')
      filters.push({ name: 'fq', value: 'realizedByFullName:' + filterRealizedByFullName });

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterHostInventoryIds = $formFilters.querySelector('.valueHostInventoryIds')?.value;
    if(filterHostInventoryIds != null && filterHostInventoryIds !== '')
      filters.push({ name: 'fq', value: 'hostInventoryIds:' + filterHostInventoryIds });

    var filterAnsibleProjectIds = $formFilters.querySelector('.valueAnsibleProjectIds')?.value;
    if(filterAnsibleProjectIds != null && filterAnsibleProjectIds !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectIds:' + filterAnsibleProjectIds });

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

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterRealizedNumber = $formFilters.querySelector('.valueRealizedNumber')?.value;
    if(filterRealizedNumber != null && filterRealizedNumber !== '')
      filters.push({ name: 'fq', value: 'realizedNumber:' + filterRealizedNumber });

    var filterTenantName = $formFilters.querySelector('.valueTenantName')?.value;
    if(filterTenantName != null && filterTenantName !== '')
      filters.push({ name: 'fq', value: 'tenantName:' + filterTenantName });

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterRealizedId = $formFilters.querySelector('.valueRealizedId')?.value;
    if(filterRealizedId != null && filterRealizedId !== '')
      filters.push({ name: 'fq', value: 'realizedId:' + filterRealizedId });

    var filterRealizedName = $formFilters.querySelector('.valueRealizedName')?.value;
    if(filterRealizedName != null && filterRealizedName !== '')
      filters.push({ name: 'fq', value: 'realizedName:' + filterRealizedName });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });
  }
  return filters;
}

function patchTenantRealizedVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchTenantRealizedVals(filters, vals, target, success, error);
}

function patchTenantRealizedVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/intent/realized?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postTenantRealized($formValues, target, success, error) {
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

  var valueRequestedId = (Array.from($formValues.querySelectorAll('.valueRequestedId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueRequestedId != null && valueRequestedId !== '')
    vals['requestedId'] = valueRequestedId;

  var valueRealizedByEmail = $formValues.querySelector('.valueRealizedByEmail')?.value;
  if(valueRealizedByEmail != null && valueRealizedByEmail !== '')
    vals['realizedByEmail'] = valueRealizedByEmail;

  var valueRealizedByUserId = $formValues.querySelector('.valueRealizedByUserId')?.value;
  if(valueRealizedByUserId != null && valueRealizedByUserId !== '')
    vals['realizedByUserId'] = valueRealizedByUserId;

  var valueRealizedByFullName = $formValues.querySelector('.valueRealizedByFullName')?.value;
  if(valueRealizedByFullName != null && valueRealizedByFullName !== '')
    vals['realizedByFullName'] = valueRealizedByFullName;

  var valueCreatedByEmail = $formValues.querySelector('.valueCreatedByEmail')?.value;
  if(valueCreatedByEmail != null && valueCreatedByEmail !== '')
    vals['createdByEmail'] = valueCreatedByEmail;

  var valueCreatedVia = $formValues.querySelector('.valueCreatedVia')?.value;
  if(valueCreatedVia != null && valueCreatedVia !== '')
    vals['createdVia'] = valueCreatedVia;

  var valueRealizedState = $formValues.querySelector('.valueRealizedState')?.value;
  if(valueRealizedState != null && valueRealizedState !== '')
    vals['realizedState'] = valueRealizedState;

  var valueIntentState = $formValues.querySelector('.valueIntentState')?.value;
  if(valueIntentState != null && valueIntentState !== '')
    vals['intentState'] = valueIntentState;

  var valueRequestedState = $formValues.querySelector('.valueRequestedState')?.value;
  if(valueRequestedState != null && valueRequestedState !== '')
    vals['requestedState'] = valueRequestedState;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueLocked = $formValues.querySelector('.valueLocked')?.value;
  if(valueLocked != null && valueLocked !== '')
    vals['locked'] = valueLocked == 'true';

  var valueHostInventoryIds = [];
  $formValues.querySelectorAll('input.valueHostInventoryIds:checked').forEach(function(index) {
    valueHostInventoryIds.push(this.value);
  });
  if(valueHostInventoryIds.length > 0)
    vals['hostInventoryIds'] = valueHostInventoryIds;

  var valueAnsibleProjectIds = [];
  $formValues.querySelectorAll('input.valueAnsibleProjectIds:checked').forEach(function(index) {
    valueAnsibleProjectIds.push(this.value);
  });
  if(valueAnsibleProjectIds.length > 0)
    vals['ansibleProjectIds'] = valueAnsibleProjectIds;

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

  var valueHubId = $formValues.querySelector('.valueHubId')?.value;
  if(valueHubId != null && valueHubId !== '')
    vals['hubId'] = valueHubId;

  var valueClusterName = $formValues.querySelector('.valueClusterName')?.value;
  if(valueClusterName != null && valueClusterName !== '')
    vals['clusterName'] = valueClusterName;

  var valueAapOrganizationId = $formValues.querySelector('.valueAapOrganizationId')?.value;
  if(valueAapOrganizationId != null && valueAapOrganizationId !== '')
    vals['aapOrganizationId'] = valueAapOrganizationId;

  var valueTenantResource = (Array.from($formValues.querySelectorAll('.valueTenantResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['tenantResource'] = valueTenantResource;

  var valueRealizedNumber = $formValues.querySelector('.valueRealizedNumber')?.value;
  if(valueRealizedNumber != null && valueRealizedNumber !== '')
    vals['realizedNumber'] = valueRealizedNumber;

  var valueTenantName = $formValues.querySelector('.valueTenantName')?.value;
  if(valueTenantName != null && valueTenantName !== '')
    vals['tenantName'] = valueTenantName;

  var valueTenantId = $formValues.querySelector('.valueTenantId')?.value;
  if(valueTenantId != null && valueTenantId !== '')
    vals['tenantId'] = valueTenantId;

  var valueRealizedId = $formValues.querySelector('.valueRealizedId')?.value;
  if(valueRealizedId != null && valueRealizedId !== '')
    vals['realizedId'] = valueRealizedId;

  var valueRealizedName = $formValues.querySelector('.valueRealizedName')?.value;
  if(valueRealizedName != null && valueRealizedName !== '')
    vals['realizedName'] = valueRealizedName;

  var valueCreatedByUserId = $formValues.querySelector('.valueCreatedByUserId')?.value;
  if(valueCreatedByUserId != null && valueCreatedByUserId !== '')
    vals['createdByUserId'] = valueCreatedByUserId;

  var valueCreatedByFullName = $formValues.querySelector('.valueCreatedByFullName')?.value;
  if(valueCreatedByFullName != null && valueCreatedByFullName !== '')
    vals['createdByFullName'] = valueCreatedByFullName;

  fetch(
    '/en-us/api/intent/realized'
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

function postTenantRealizedVals(vals, target, success, error) {
  fetch(
    '/en-us/api/intent/realized'
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

async function deleteTenantRealized(target, realizedId, success, error) {
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
    '/en-us/api/intent/realized/' + encodeURIComponent(realizedId)
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

async function putimportTenantRealized($formValues, target, realizedId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportTenantRealizedVals(JSON.parse(json), target, success, error);
}

function putimportTenantRealizedVals(json, target, success, error) {
  fetch(
    '/en-us/api/intent/realized-import'
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

async function deletefilterTenantRealized($formFilterstarget, success, error) {
  var filters = deletefilterTenantRealizedFilters($formFilters);

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
    '/en-us/api/intent/realized?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function deletefilterTenantRealizedFilters($formFilters) {
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

    var filterRequestedId = $formFilters.querySelector('.valueRequestedId')?.value;
    if(filterRequestedId != null && filterRequestedId !== '')
      filters.push({ name: 'fq', value: 'requestedId:' + filterRequestedId });

    var filterRealizedByEmail = $formFilters.querySelector('.valueRealizedByEmail')?.value;
    if(filterRealizedByEmail != null && filterRealizedByEmail !== '')
      filters.push({ name: 'fq', value: 'realizedByEmail:' + filterRealizedByEmail });

    var filterRealizedByUserId = $formFilters.querySelector('.valueRealizedByUserId')?.value;
    if(filterRealizedByUserId != null && filterRealizedByUserId !== '')
      filters.push({ name: 'fq', value: 'realizedByUserId:' + filterRealizedByUserId });

    var filterRealizedByFullName = $formFilters.querySelector('.valueRealizedByFullName')?.value;
    if(filterRealizedByFullName != null && filterRealizedByFullName !== '')
      filters.push({ name: 'fq', value: 'realizedByFullName:' + filterRealizedByFullName });

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterHostInventoryIds = $formFilters.querySelector('.valueHostInventoryIds')?.value;
    if(filterHostInventoryIds != null && filterHostInventoryIds !== '')
      filters.push({ name: 'fq', value: 'hostInventoryIds:' + filterHostInventoryIds });

    var filterAnsibleProjectIds = $formFilters.querySelector('.valueAnsibleProjectIds')?.value;
    if(filterAnsibleProjectIds != null && filterAnsibleProjectIds !== '')
      filters.push({ name: 'fq', value: 'ansibleProjectIds:' + filterAnsibleProjectIds });

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

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var filterAapOrganizationId = $formFilters.querySelector('.valueAapOrganizationId')?.value;
    if(filterAapOrganizationId != null && filterAapOrganizationId !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationId:' + filterAapOrganizationId });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterRealizedNumber = $formFilters.querySelector('.valueRealizedNumber')?.value;
    if(filterRealizedNumber != null && filterRealizedNumber !== '')
      filters.push({ name: 'fq', value: 'realizedNumber:' + filterRealizedNumber });

    var filterTenantName = $formFilters.querySelector('.valueTenantName')?.value;
    if(filterTenantName != null && filterTenantName !== '')
      filters.push({ name: 'fq', value: 'tenantName:' + filterTenantName });

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterRealizedId = $formFilters.querySelector('.valueRealizedId')?.value;
    if(filterRealizedId != null && filterRealizedId !== '')
      filters.push({ name: 'fq', value: 'realizedId:' + filterRealizedId });

    var filterRealizedName = $formFilters.querySelector('.valueRealizedName')?.value;
    if(filterRealizedName != null && filterRealizedName !== '')
      filters.push({ name: 'fq', value: 'realizedName:' + filterRealizedName });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });
  }
  return filters;
}
