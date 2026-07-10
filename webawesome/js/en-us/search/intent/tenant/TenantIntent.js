
async function websocketTenantIntent(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketTenantIntent', function (error, message) {
      var json = JSON.parse(message['body']);
      var tenantResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + tenantResource + ' ');
      $box.setAttribute('id', 'box-' + tenantResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + tenantResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + tenantResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + tenantResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-buildings"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify tenant intents in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + tenantResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + tenantResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + tenantResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + tenantResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + tenantResource);
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
        var $old_box = document.querySelector('.box-' + tenantResource);
      } else {
        document.querySelector('.box-' + tenantResource)?.remove();
      }
      if(tenantResource) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketTenantIntentInner(apiRequest) {
  var tenantResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(tenantResource != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputCreatedByEmail = null;
        var inputCreatedByUserId = null;
        var inputCreatedByFullName = null;
        var inputCreatedVia = null;
        var inputIntentState = null;
        var inputRequestedState = null;
        var inputRealizedState = null;
        var inputTenantName = null;
        var inputTenantDescription = null;
        var inputRequested = null;
        var inputLocked = null;
        var inputTenantDiscovered = null;
        var inputTenantRealized = null;
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
        var inputTenantId = null;
        var inputTenantResource = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.TenantIntent_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.TenantIntent_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.TenantIntent_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.TenantIntent_Page_archived');
        if(vars.includes('createdByEmail'))
          inputCreatedByEmail = $response.querySelector('.TenantIntent_Page_createdByEmail');
        if(vars.includes('createdByUserId'))
          inputCreatedByUserId = $response.querySelector('.TenantIntent_Page_createdByUserId');
        if(vars.includes('createdByFullName'))
          inputCreatedByFullName = $response.querySelector('.TenantIntent_Page_createdByFullName');
        if(vars.includes('createdVia'))
          inputCreatedVia = $response.querySelector('.TenantIntent_Page_createdVia');
        if(vars.includes('intentState'))
          inputIntentState = $response.querySelector('.TenantIntent_Page_intentState');
        if(vars.includes('requestedState'))
          inputRequestedState = $response.querySelector('.TenantIntent_Page_requestedState');
        if(vars.includes('realizedState'))
          inputRealizedState = $response.querySelector('.TenantIntent_Page_realizedState');
        if(vars.includes('tenantName'))
          inputTenantName = $response.querySelector('.TenantIntent_Page_tenantName');
        if(vars.includes('tenantDescription'))
          inputTenantDescription = $response.querySelector('.TenantIntent_Page_tenantDescription');
        if(vars.includes('requested'))
          inputRequested = $response.querySelector('.TenantIntent_Page_requested');
        if(vars.includes('locked'))
          inputLocked = $response.querySelector('.TenantIntent_Page_locked');
        if(vars.includes('tenantDiscovered'))
          inputTenantDiscovered = $response.querySelector('.TenantIntent_Page_tenantDiscovered');
        if(vars.includes('tenantRealized'))
          inputTenantRealized = $response.querySelector('.TenantIntent_Page_tenantRealized');
        if(vars.includes('hostInventoryIds'))
          inputHostInventoryIds = $response.querySelector('.TenantIntent_Page_hostInventoryIds');
        if(vars.includes('ansibleProjectIds'))
          inputAnsibleProjectIds = $response.querySelector('.TenantIntent_Page_ansibleProjectIds');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.TenantIntent_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.TenantIntent_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.TenantIntent_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.TenantIntent_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.TenantIntent_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.TenantIntent_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.TenantIntent_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.TenantIntent_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.TenantIntent_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.TenantIntent_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.TenantIntent_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.TenantIntent_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.TenantIntent_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.TenantIntent_Page_solrId');
        if(vars.includes('hubId'))
          inputHubId = $response.querySelector('.TenantIntent_Page_hubId');
        if(vars.includes('clusterName'))
          inputClusterName = $response.querySelector('.TenantIntent_Page_clusterName');
        if(vars.includes('aapOrganizationId'))
          inputAapOrganizationId = $response.querySelector('.TenantIntent_Page_aapOrganizationId');
        if(vars.includes('tenantId'))
          inputTenantId = $response.querySelector('.TenantIntent_Page_tenantId');
        if(vars.includes('tenantResource'))
          inputTenantResource = $response.querySelector('.TenantIntent_Page_tenantResource');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listTenantIntent = JSON.parse($response.querySelector('.pageForm .listTenantIntent')?.value);
        jsWebsocketTenantIntent(tenantResource, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.TenantIntent_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.TenantIntent_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.TenantIntent_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.TenantIntent_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_archived'));
        }

        if(inputCreatedByEmail) {
          document.querySelectorAll('.TenantIntent_Page_createdByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByEmail.getAttribute('value');
            else
              item.textContent = inputCreatedByEmail.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_createdByEmail'));
        }

        if(inputCreatedByUserId) {
          document.querySelectorAll('.TenantIntent_Page_createdByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByUserId.getAttribute('value');
            else
              item.textContent = inputCreatedByUserId.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_createdByUserId'));
        }

        if(inputCreatedByFullName) {
          document.querySelectorAll('.TenantIntent_Page_createdByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByFullName.getAttribute('value');
            else
              item.textContent = inputCreatedByFullName.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_createdByFullName'));
        }

        if(inputCreatedVia) {
          document.querySelectorAll('.TenantIntent_Page_createdVia').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedVia.getAttribute('value');
            else
              item.textContent = inputCreatedVia.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_createdVia'));
        }

        if(inputIntentState) {
          document.querySelectorAll('.TenantIntent_Page_intentState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputIntentState.getAttribute('value');
            else
              item.textContent = inputIntentState.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_intentState'));
        }

        if(inputRequestedState) {
          document.querySelectorAll('.TenantIntent_Page_requestedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedState.getAttribute('value');
            else
              item.textContent = inputRequestedState.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_requestedState'));
        }

        if(inputRealizedState) {
          document.querySelectorAll('.TenantIntent_Page_realizedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedState.getAttribute('value');
            else
              item.textContent = inputRealizedState.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_realizedState'));
        }

        if(inputTenantName) {
          document.querySelectorAll('.TenantIntent_Page_tenantName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantName.getAttribute('value');
            else
              item.textContent = inputTenantName.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_tenantName'));
        }

        if(inputTenantDescription) {
          document.querySelectorAll('.TenantIntent_Page_tenantDescription').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantDescription.getAttribute('value');
            else
              item.textContent = inputTenantDescription.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_tenantDescription'));
        }

        if(inputRequested) {
          document.querySelectorAll('.TenantIntent_Page_requested').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequested.getAttribute('value');
            else
              item.textContent = inputRequested.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_requested'));
        }

        if(inputLocked) {
          document.querySelectorAll('.TenantIntent_Page_locked').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputLocked.getAttribute('value');
            else
              item.textContent = inputLocked.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_locked'));
        }

        if(inputTenantDiscovered) {
          document.querySelectorAll('.TenantIntent_Page_tenantDiscovered').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantDiscovered.getAttribute('value');
            else
              item.textContent = inputTenantDiscovered.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_tenantDiscovered'));
        }

        if(inputTenantRealized) {
          document.querySelectorAll('.TenantIntent_Page_tenantRealized').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantRealized.getAttribute('value');
            else
              item.textContent = inputTenantRealized.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_tenantRealized'));
        }

        if(inputHostInventoryIds) {
          document.querySelectorAll('.TenantIntent_Page_hostInventoryIds').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputHostInventoryIds.getAttribute('value');
            else
              item.textContent = inputHostInventoryIds.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_hostInventoryIds'));
        }

        if(inputAnsibleProjectIds) {
          document.querySelectorAll('.TenantIntent_Page_ansibleProjectIds').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAnsibleProjectIds.getAttribute('value');
            else
              item.textContent = inputAnsibleProjectIds.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_ansibleProjectIds'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.TenantIntent_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.TenantIntent_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.TenantIntent_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.TenantIntent_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.TenantIntent_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.TenantIntent_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.TenantIntent_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.TenantIntent_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.TenantIntent_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.TenantIntent_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.TenantIntent_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.TenantIntent_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.TenantIntent_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.TenantIntent_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_solrId'));
        }

        if(inputHubId) {
          document.querySelectorAll('.TenantIntent_Page_hubId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputHubId.getAttribute('value');
            else
              item.textContent = inputHubId.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_hubId'));
        }

        if(inputClusterName) {
          document.querySelectorAll('.TenantIntent_Page_clusterName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClusterName.getAttribute('value');
            else
              item.textContent = inputClusterName.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_clusterName'));
        }

        if(inputAapOrganizationId) {
          document.querySelectorAll('.TenantIntent_Page_aapOrganizationId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAapOrganizationId.getAttribute('value');
            else
              item.textContent = inputAapOrganizationId.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_aapOrganizationId'));
        }

        if(inputTenantId) {
          document.querySelectorAll('.TenantIntent_Page_tenantId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantId.getAttribute('value');
            else
              item.textContent = inputTenantId.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_tenantId'));
        }

        if(inputTenantResource) {
          document.querySelectorAll('.TenantIntent_Page_tenantResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantResource.getAttribute('value');
            else
              item.textContent = inputTenantResource.textContent;
          });
          addGlow(document.querySelector('.TenantIntent_Page_tenantResource'));
        }

          pageGraphTenantIntent();
      });
    });
  }
}

function pageGraphTenantIntent(apiRequest) {
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
          layout['title'] = 'tenant intents';
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
          Plotly.react('htmBodyGraphTenantIntentPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqTenantIntent_time').innerText = '';
  searchPage('TenantIntent', function() {
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
      document.querySelector('#fqTenantIntent_time').value = x;
      document.querySelector('#fqTenantIntent_time').onchange();
      searchPage('TenantIntent');
    }, speedRate);
  });
}

// Search //

async function searchTenantIntent($formFilters, success, error) {
  var filters = searchTenantIntentFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchTenantIntentVals(filters, target, success, error);
}

function searchTenantIntentFilters($formFilters) {
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

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterTenantName = $formFilters.querySelector('.valueTenantName')?.value;
    if(filterTenantName != null && filterTenantName !== '')
      filters.push({ name: 'fq', value: 'tenantName:' + filterTenantName });

    var filterTenantDescription = $formFilters.querySelector('.valueTenantDescription')?.value;
    if(filterTenantDescription != null && filterTenantDescription !== '')
      filters.push({ name: 'fq', value: 'tenantDescription:' + filterTenantDescription });

    var filterRequested = $formFilters.querySelector('.valueRequested')?.value;
    if(filterRequested != null && filterRequested !== '')
      filters.push({ name: 'fq', value: 'requested:' + filterRequested });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterTenantDiscovered = $formFilters.querySelector('.valueTenantDiscovered')?.value;
    if(filterTenantDiscovered != null && filterTenantDiscovered !== '')
      filters.push({ name: 'fq', value: 'tenantDiscovered:' + filterTenantDiscovered });

    var filterTenantRealized = $formFilters.querySelector('.valueTenantRealized')?.value;
    if(filterTenantRealized != null && filterTenantRealized !== '')
      filters.push({ name: 'fq', value: 'tenantRealized:' + filterTenantRealized });

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

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });
  }
  return filters;
}

function searchTenantIntentVals(filters, target, success, error) {

  fetch(
    '/en-us/api/intent/tenant?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestTenantIntentHostInventoryIds(filters, $list, tenantResource = null, hostInventoryIds = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_hostInventoryIds_' + tenantResource + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueHostInventoryIds ');
        if(tenantResource != null) {
          $input.addEventListener('change', function(event) {
            patchTenantIntentVals([{ name: 'fq', value: 'tenantResource:' + tenantResource }], { [(event.target.checked ? 'add' : 'remove') + 'HostInventoryIds']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantIntentHostInventoryIds(filters, $list, tenantResource, o[inputVar], relate, target);
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

function suggestTenantIntentAnsibleProjectIds(filters, $list, tenantResource = null, ansibleProjectIds = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_ansibleProjectIds_' + tenantResource + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueAnsibleProjectIds ');
        if(tenantResource != null) {
          $input.addEventListener('change', function(event) {
            patchTenantIntentVals([{ name: 'fq', value: 'tenantResource:' + tenantResource }], { [(event.target.checked ? 'add' : 'remove') + 'AnsibleProjectIds']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantIntentAnsibleProjectIds(filters, $list, tenantResource, o[inputVar], relate, target);
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

function suggestTenantIntentRequested(filters, $list, tenantResource = null, requested = null, relate=true, target) {
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
        var checked = val == null ? false : (requested != null && val === requested.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_requested_' + tenantResource + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueRequested ');
        if(tenantResource != null) {
          $input.addEventListener('change', function(event) {
            patchTenantIntentVals([{ name: 'fq', value: 'tenantResource:' + tenantResource }], { [(event.target.checked ? 'add' : 'remove') + 'Requested']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantIntentRequested(filters, $list, tenantResource, o[inputVar], relate, target);
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

function suggestTenantIntentTenantDiscovered(filters, $list, tenantResource = null, tenantDiscovered = null, relate=true, target) {
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
        var checked = val == null ? false : (tenantDiscovered != null && val === tenantDiscovered.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_tenantDiscovered_' + tenantResource + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueTenantDiscovered ');
        if(tenantResource != null) {
          $input.addEventListener('change', function(event) {
            patchTenantIntentVals([{ name: 'fq', value: 'tenantResource:' + tenantResource }], { [(event.target.checked ? 'add' : 'remove') + 'TenantDiscovered']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantIntentTenantDiscovered(filters, $list, tenantResource, o[inputVar], relate, target);
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
  if (typeof searchTenantDiscoveredVals === 'function') {
    searchTenantDiscoveredVals(filters, target, success, error);
  }
}

function suggestTenantIntentTenantRealized(filters, $list, tenantResource = null, tenantRealized = null, relate=true, target) {
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
        var checked = val == null ? false : (tenantRealized != null && val === tenantRealized.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_tenantRealized_' + tenantResource + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueTenantRealized ');
        if(tenantResource != null) {
          $input.addEventListener('change', function(event) {
            patchTenantIntentVals([{ name: 'fq', value: 'tenantResource:' + tenantResource }], { [(event.target.checked ? 'add' : 'remove') + 'TenantRealized']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestTenantIntentTenantRealized(filters, $list, tenantResource, o[inputVar], relate, target);
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
  if (typeof searchTenantRealizedVals === 'function') {
    searchTenantRealizedVals(filters, target, success, error);
  }
}

function suggestTenantIntentObjectSuggest($formFilters, $list, target) {
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
  searchTenantIntentVals($formFilters, target, success, error);
}

// GET //

async function getTenantIntent(pk) {
  fetch(
    '/en-us/api/intent/tenant/' + tenantResource
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

async function patchTenantIntent($formFilters, $formValues, target, tenantResource, success, error) {
  var filters = patchTenantIntentFilters($formFilters);

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

  var valueTenantDescription = $formValues.querySelector('.valueTenantDescription')?.value;
  var removeTenantDescription = $formValues.querySelector('.removeTenantDescription')?.value === 'true';
  var setTenantDescription = removeTenantDescription ? null : $formValues.querySelector('.setTenantDescription')?.value;
  var addTenantDescription = $formValues.querySelector('.addTenantDescription')?.value;
  if(removeTenantDescription || setTenantDescription != null && setTenantDescription !== '')
    vals['setTenantDescription'] = setTenantDescription;
  if(addTenantDescription != null && addTenantDescription !== '')
    vals['addTenantDescription'] = addTenantDescription;
  var removeTenantDescription = $formValues.querySelector('.removeTenantDescription')?.value;
  if(removeTenantDescription != null && removeTenantDescription !== '')
    vals['removeTenantDescription'] = removeTenantDescription;

  var valueRequested = (Array.from($formValues.querySelectorAll('.valueRequested')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueRequested != null && valueRequested !== '')
    vals['addRequested'] = valueRequested;

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

  var valueTenantDiscovered = (Array.from($formValues.querySelectorAll('.valueTenantDiscovered')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantDiscovered != null && valueTenantDiscovered !== '')
    vals['addTenantDiscovered'] = valueTenantDiscovered;

  var valueTenantRealized = (Array.from($formValues.querySelectorAll('.valueTenantRealized')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantRealized != null && valueTenantRealized !== '')
    vals['addTenantRealized'] = valueTenantRealized;

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

  var valueTenantResource = $formValues.querySelector('.valueTenantResource')?.value;
  var removeTenantResource = $formValues.querySelector('.removeTenantResource')?.value === 'true';
  var setTenantResource = removeTenantResource ? null : $formValues.querySelector('.setTenantResource')?.value;
  var addTenantResource = $formValues.querySelector('.addTenantResource')?.value;
  if(removeTenantResource || setTenantResource != null && setTenantResource !== '')
    vals['setTenantResource'] = setTenantResource;
  if(addTenantResource != null && addTenantResource !== '')
    vals['addTenantResource'] = addTenantResource;
  var removeTenantResource = $formValues.querySelector('.removeTenantResource')?.value;
  if(removeTenantResource != null && removeTenantResource !== '')
    vals['removeTenantResource'] = removeTenantResource;

  patchTenantIntentVals(tenantResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'tenantResource:' + tenantResource}], vals, target, success, error);
}

function patchTenantIntentFilters($formFilters) {
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

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterTenantName = $formFilters.querySelector('.valueTenantName')?.value;
    if(filterTenantName != null && filterTenantName !== '')
      filters.push({ name: 'fq', value: 'tenantName:' + filterTenantName });

    var filterTenantDescription = $formFilters.querySelector('.valueTenantDescription')?.value;
    if(filterTenantDescription != null && filterTenantDescription !== '')
      filters.push({ name: 'fq', value: 'tenantDescription:' + filterTenantDescription });

    var filterRequested = $formFilters.querySelector('.valueRequested')?.value;
    if(filterRequested != null && filterRequested !== '')
      filters.push({ name: 'fq', value: 'requested:' + filterRequested });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterTenantDiscovered = $formFilters.querySelector('.valueTenantDiscovered')?.value;
    if(filterTenantDiscovered != null && filterTenantDiscovered !== '')
      filters.push({ name: 'fq', value: 'tenantDiscovered:' + filterTenantDiscovered });

    var filterTenantRealized = $formFilters.querySelector('.valueTenantRealized')?.value;
    if(filterTenantRealized != null && filterTenantRealized !== '')
      filters.push({ name: 'fq', value: 'tenantRealized:' + filterTenantRealized });

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

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });
  }
  return filters;
}

function patchTenantIntentVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchTenantIntentVals(filters, vals, target, success, error);
}

function patchTenantIntentVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/intent/tenant?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postTenantIntent($formValues, target, success, error) {
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

  var valueCreatedByEmail = $formValues.querySelector('.valueCreatedByEmail')?.value;
  if(valueCreatedByEmail != null && valueCreatedByEmail !== '')
    vals['createdByEmail'] = valueCreatedByEmail;

  var valueCreatedByUserId = $formValues.querySelector('.valueCreatedByUserId')?.value;
  if(valueCreatedByUserId != null && valueCreatedByUserId !== '')
    vals['createdByUserId'] = valueCreatedByUserId;

  var valueCreatedByFullName = $formValues.querySelector('.valueCreatedByFullName')?.value;
  if(valueCreatedByFullName != null && valueCreatedByFullName !== '')
    vals['createdByFullName'] = valueCreatedByFullName;

  var valueCreatedVia = $formValues.querySelector('.valueCreatedVia')?.value;
  if(valueCreatedVia != null && valueCreatedVia !== '')
    vals['createdVia'] = valueCreatedVia;

  var valueIntentState = $formValues.querySelector('.valueIntentState')?.value;
  if(valueIntentState != null && valueIntentState !== '')
    vals['intentState'] = valueIntentState;

  var valueRequestedState = $formValues.querySelector('.valueRequestedState')?.value;
  if(valueRequestedState != null && valueRequestedState !== '')
    vals['requestedState'] = valueRequestedState;

  var valueRealizedState = $formValues.querySelector('.valueRealizedState')?.value;
  if(valueRealizedState != null && valueRealizedState !== '')
    vals['realizedState'] = valueRealizedState;

  var valueTenantName = $formValues.querySelector('.valueTenantName')?.value;
  if(valueTenantName != null && valueTenantName !== '')
    vals['tenantName'] = valueTenantName;

  var valueTenantDescription = $formValues.querySelector('.valueTenantDescription')?.value;
  if(valueTenantDescription != null && valueTenantDescription !== '')
    vals['tenantDescription'] = valueTenantDescription;

  var valueRequested = [];
  $formValues.querySelectorAll('input.valueRequested:checked').forEach(function(index) {
    valueRequested.push(this.value);
  });
  if(valueRequested.length > 0)
    vals['requested'] = valueRequested;

  var valueLocked = $formValues.querySelector('.valueLocked')?.value;
  if(valueLocked != null && valueLocked !== '')
    vals['locked'] = valueLocked == 'true';

  var valueTenantDiscovered = [];
  $formValues.querySelectorAll('input.valueTenantDiscovered:checked').forEach(function(index) {
    valueTenantDiscovered.push(this.value);
  });
  if(valueTenantDiscovered.length > 0)
    vals['tenantDiscovered'] = valueTenantDiscovered;

  var valueTenantRealized = [];
  $formValues.querySelectorAll('input.valueTenantRealized:checked').forEach(function(index) {
    valueTenantRealized.push(this.value);
  });
  if(valueTenantRealized.length > 0)
    vals['tenantRealized'] = valueTenantRealized;

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

  var valueTenantId = $formValues.querySelector('.valueTenantId')?.value;
  if(valueTenantId != null && valueTenantId !== '')
    vals['tenantId'] = valueTenantId;

  var valueTenantResource = $formValues.querySelector('.valueTenantResource')?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['tenantResource'] = valueTenantResource;

  fetch(
    '/en-us/api/intent/tenant'
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

function postTenantIntentVals(vals, target, success, error) {
  fetch(
    '/en-us/api/intent/tenant'
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

async function deleteTenantIntent(target, tenantResource, success, error) {
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
    '/en-us/api/intent/tenant/' + encodeURIComponent(tenantResource)
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

async function putimportTenantIntent($formValues, target, tenantResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportTenantIntentVals(JSON.parse(json), target, success, error);
}

function putimportTenantIntentVals(json, target, success, error) {
  fetch(
    '/en-us/api/intent/tenant-import'
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

async function deletefilterTenantIntent($formFilterstarget, success, error) {
  var filters = deletefilterTenantIntentFilters($formFilters);

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
    '/en-us/api/intent/tenant?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function deletefilterTenantIntentFilters($formFilters) {
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

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterTenantName = $formFilters.querySelector('.valueTenantName')?.value;
    if(filterTenantName != null && filterTenantName !== '')
      filters.push({ name: 'fq', value: 'tenantName:' + filterTenantName });

    var filterTenantDescription = $formFilters.querySelector('.valueTenantDescription')?.value;
    if(filterTenantDescription != null && filterTenantDescription !== '')
      filters.push({ name: 'fq', value: 'tenantDescription:' + filterTenantDescription });

    var filterRequested = $formFilters.querySelector('.valueRequested')?.value;
    if(filterRequested != null && filterRequested !== '')
      filters.push({ name: 'fq', value: 'requested:' + filterRequested });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterTenantDiscovered = $formFilters.querySelector('.valueTenantDiscovered')?.value;
    if(filterTenantDiscovered != null && filterTenantDiscovered !== '')
      filters.push({ name: 'fq', value: 'tenantDiscovered:' + filterTenantDiscovered });

    var filterTenantRealized = $formFilters.querySelector('.valueTenantRealized')?.value;
    if(filterTenantRealized != null && filterTenantRealized !== '')
      filters.push({ name: 'fq', value: 'tenantRealized:' + filterTenantRealized });

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

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });
  }
  return filters;
}
