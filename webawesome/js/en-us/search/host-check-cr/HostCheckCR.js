
async function websocketHostCheckCR(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketHostCheckCR', function (error, message) {
      var json = JSON.parse(message['body']);
      var changeRequestId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + changeRequestId + ' ');
      $box.setAttribute('id', 'box-' + changeRequestId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + changeRequestId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + changeRequestId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + changeRequestId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-box-check"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify host check change requests in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + changeRequestId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + changeRequestId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + changeRequestId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + changeRequestId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + changeRequestId);
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
        var $old_box = document.querySelector('.box-' + changeRequestId);
      } else {
        document.querySelector('.box-' + changeRequestId)?.remove();
      }
      if(changeRequestId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketHostCheckCRInner(apiRequest) {
  var changeRequestId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(changeRequestId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputChangeRequestId = null;
        var inputCreatedByEmail = null;
        var inputCreatedVia = null;
        var inputOwnedByEmail = null;
        var inputLifecycleState = null;
        var inputIntentState = null;
        var inputRequestedState = null;
        var inputRealizedState = null;
        var inputJobTemplateResourceChange = null;
        var inputCheckNameChange = null;
        var inputCheckDescriptionChange = null;
        var inputCheckNamespaceChange = null;
        var inputCheckCommandChange = null;
        var inputCheckIntervalChange = null;
        var inputCheckPublishedChange = null;
        var inputEventSubscriptionsChange = null;
        var inputEventHandlersChange = null;
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
        var inputCheckId = null;
        var inputCheckResource = null;
        var inputCreatedByUserId = null;
        var inputCreatedByFullName = null;
        var inputOwnedByUserId = null;
        var inputOwnedByDisplayName = null;
        var inputAapOrganizationIdChange = null;
        var inputJobTemplateIdChange = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.HostCheckCR_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.HostCheckCR_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.HostCheckCR_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.HostCheckCR_Page_archived');
        if(vars.includes('changeRequestId'))
          inputChangeRequestId = $response.querySelector('.HostCheckCR_Page_changeRequestId');
        if(vars.includes('createdByEmail'))
          inputCreatedByEmail = $response.querySelector('.HostCheckCR_Page_createdByEmail');
        if(vars.includes('createdVia'))
          inputCreatedVia = $response.querySelector('.HostCheckCR_Page_createdVia');
        if(vars.includes('ownedByEmail'))
          inputOwnedByEmail = $response.querySelector('.HostCheckCR_Page_ownedByEmail');
        if(vars.includes('lifecycleState'))
          inputLifecycleState = $response.querySelector('.HostCheckCR_Page_lifecycleState');
        if(vars.includes('intentState'))
          inputIntentState = $response.querySelector('.HostCheckCR_Page_intentState');
        if(vars.includes('requestedState'))
          inputRequestedState = $response.querySelector('.HostCheckCR_Page_requestedState');
        if(vars.includes('realizedState'))
          inputRealizedState = $response.querySelector('.HostCheckCR_Page_realizedState');
        if(vars.includes('jobTemplateResourceChange'))
          inputJobTemplateResourceChange = $response.querySelector('.HostCheckCR_Page_jobTemplateResourceChange');
        if(vars.includes('checkNameChange'))
          inputCheckNameChange = $response.querySelector('.HostCheckCR_Page_checkNameChange');
        if(vars.includes('checkDescriptionChange'))
          inputCheckDescriptionChange = $response.querySelector('.HostCheckCR_Page_checkDescriptionChange');
        if(vars.includes('checkNamespaceChange'))
          inputCheckNamespaceChange = $response.querySelector('.HostCheckCR_Page_checkNamespaceChange');
        if(vars.includes('checkCommandChange'))
          inputCheckCommandChange = $response.querySelector('.HostCheckCR_Page_checkCommandChange');
        if(vars.includes('checkIntervalChange'))
          inputCheckIntervalChange = $response.querySelector('.HostCheckCR_Page_checkIntervalChange');
        if(vars.includes('checkPublishedChange'))
          inputCheckPublishedChange = $response.querySelector('.HostCheckCR_Page_checkPublishedChange');
        if(vars.includes('eventSubscriptionsChange'))
          inputEventSubscriptionsChange = $response.querySelector('.HostCheckCR_Page_eventSubscriptionsChange');
        if(vars.includes('eventHandlersChange'))
          inputEventHandlersChange = $response.querySelector('.HostCheckCR_Page_eventHandlersChange');
        if(vars.includes('tenantResource'))
          inputTenantResource = $response.querySelector('.HostCheckCR_Page_tenantResource');
        if(vars.includes('jobTemplateResource'))
          inputJobTemplateResource = $response.querySelector('.HostCheckCR_Page_jobTemplateResource');
        if(vars.includes('checkName'))
          inputCheckName = $response.querySelector('.HostCheckCR_Page_checkName');
        if(vars.includes('checkDescription'))
          inputCheckDescription = $response.querySelector('.HostCheckCR_Page_checkDescription');
        if(vars.includes('checkNamespace'))
          inputCheckNamespace = $response.querySelector('.HostCheckCR_Page_checkNamespace');
        if(vars.includes('checkCommand'))
          inputCheckCommand = $response.querySelector('.HostCheckCR_Page_checkCommand');
        if(vars.includes('checkInterval'))
          inputCheckInterval = $response.querySelector('.HostCheckCR_Page_checkInterval');
        if(vars.includes('checkPublished'))
          inputCheckPublished = $response.querySelector('.HostCheckCR_Page_checkPublished');
        if(vars.includes('eventSubscriptions'))
          inputEventSubscriptions = $response.querySelector('.HostCheckCR_Page_eventSubscriptions');
        if(vars.includes('eventHandlers'))
          inputEventHandlers = $response.querySelector('.HostCheckCR_Page_eventHandlers');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.HostCheckCR_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.HostCheckCR_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.HostCheckCR_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.HostCheckCR_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.HostCheckCR_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.HostCheckCR_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.HostCheckCR_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.HostCheckCR_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.HostCheckCR_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.HostCheckCR_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.HostCheckCR_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.HostCheckCR_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.HostCheckCR_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.HostCheckCR_Page_solrId');
        if(vars.includes('tenantId'))
          inputTenantId = $response.querySelector('.HostCheckCR_Page_tenantId');
        if(vars.includes('aapOrganizationId'))
          inputAapOrganizationId = $response.querySelector('.HostCheckCR_Page_aapOrganizationId');
        if(vars.includes('jobTemplateId'))
          inputJobTemplateId = $response.querySelector('.HostCheckCR_Page_jobTemplateId');
        if(vars.includes('aapTemplateId'))
          inputAapTemplateId = $response.querySelector('.HostCheckCR_Page_aapTemplateId');
        if(vars.includes('checkId'))
          inputCheckId = $response.querySelector('.HostCheckCR_Page_checkId');
        if(vars.includes('checkResource'))
          inputCheckResource = $response.querySelector('.HostCheckCR_Page_checkResource');
        if(vars.includes('createdByUserId'))
          inputCreatedByUserId = $response.querySelector('.HostCheckCR_Page_createdByUserId');
        if(vars.includes('createdByFullName'))
          inputCreatedByFullName = $response.querySelector('.HostCheckCR_Page_createdByFullName');
        if(vars.includes('ownedByUserId'))
          inputOwnedByUserId = $response.querySelector('.HostCheckCR_Page_ownedByUserId');
        if(vars.includes('ownedByDisplayName'))
          inputOwnedByDisplayName = $response.querySelector('.HostCheckCR_Page_ownedByDisplayName');
        if(vars.includes('aapOrganizationIdChange'))
          inputAapOrganizationIdChange = $response.querySelector('.HostCheckCR_Page_aapOrganizationIdChange');
        if(vars.includes('jobTemplateIdChange'))
          inputJobTemplateIdChange = $response.querySelector('.HostCheckCR_Page_jobTemplateIdChange');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listHostCheckCR = JSON.parse($response.querySelector('.pageForm .listHostCheckCR')?.value);
        jsWebsocketHostCheckCR(changeRequestId, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.HostCheckCR_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.HostCheckCR_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.HostCheckCR_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.HostCheckCR_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_archived'));
        }

        if(inputChangeRequestId) {
          document.querySelectorAll('.HostCheckCR_Page_changeRequestId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputChangeRequestId.getAttribute('value');
            else
              item.textContent = inputChangeRequestId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_changeRequestId'));
        }

        if(inputCreatedByEmail) {
          document.querySelectorAll('.HostCheckCR_Page_createdByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByEmail.getAttribute('value');
            else
              item.textContent = inputCreatedByEmail.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_createdByEmail'));
        }

        if(inputCreatedVia) {
          document.querySelectorAll('.HostCheckCR_Page_createdVia').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedVia.getAttribute('value');
            else
              item.textContent = inputCreatedVia.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_createdVia'));
        }

        if(inputOwnedByEmail) {
          document.querySelectorAll('.HostCheckCR_Page_ownedByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputOwnedByEmail.getAttribute('value');
            else
              item.textContent = inputOwnedByEmail.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_ownedByEmail'));
        }

        if(inputLifecycleState) {
          document.querySelectorAll('.HostCheckCR_Page_lifecycleState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputLifecycleState.getAttribute('value');
            else
              item.textContent = inputLifecycleState.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_lifecycleState'));
        }

        if(inputIntentState) {
          document.querySelectorAll('.HostCheckCR_Page_intentState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputIntentState.getAttribute('value');
            else
              item.textContent = inputIntentState.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_intentState'));
        }

        if(inputRequestedState) {
          document.querySelectorAll('.HostCheckCR_Page_requestedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedState.getAttribute('value');
            else
              item.textContent = inputRequestedState.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_requestedState'));
        }

        if(inputRealizedState) {
          document.querySelectorAll('.HostCheckCR_Page_realizedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedState.getAttribute('value');
            else
              item.textContent = inputRealizedState.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_realizedState'));
        }

        if(inputJobTemplateResourceChange) {
          document.querySelectorAll('.HostCheckCR_Page_jobTemplateResourceChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateResourceChange.getAttribute('value');
            else
              item.textContent = inputJobTemplateResourceChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_jobTemplateResourceChange'));
        }

        if(inputCheckNameChange) {
          document.querySelectorAll('.HostCheckCR_Page_checkNameChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckNameChange.getAttribute('value');
            else
              item.textContent = inputCheckNameChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkNameChange'));
        }

        if(inputCheckDescriptionChange) {
          document.querySelectorAll('.HostCheckCR_Page_checkDescriptionChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckDescriptionChange.getAttribute('value');
            else
              item.textContent = inputCheckDescriptionChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkDescriptionChange'));
        }

        if(inputCheckNamespaceChange) {
          document.querySelectorAll('.HostCheckCR_Page_checkNamespaceChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckNamespaceChange.getAttribute('value');
            else
              item.textContent = inputCheckNamespaceChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkNamespaceChange'));
        }

        if(inputCheckCommandChange) {
          document.querySelectorAll('.HostCheckCR_Page_checkCommandChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckCommandChange.getAttribute('value');
            else
              item.textContent = inputCheckCommandChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkCommandChange'));
        }

        if(inputCheckIntervalChange) {
          document.querySelectorAll('.HostCheckCR_Page_checkIntervalChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckIntervalChange.getAttribute('value');
            else
              item.textContent = inputCheckIntervalChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkIntervalChange'));
        }

        if(inputCheckPublishedChange) {
          document.querySelectorAll('.HostCheckCR_Page_checkPublishedChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckPublishedChange.getAttribute('value');
            else
              item.textContent = inputCheckPublishedChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkPublishedChange'));
        }

        if(inputEventSubscriptionsChange) {
          document.querySelectorAll('.HostCheckCR_Page_eventSubscriptionsChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEventSubscriptionsChange.getAttribute('value');
            else
              item.textContent = inputEventSubscriptionsChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_eventSubscriptionsChange'));
        }

        if(inputEventHandlersChange) {
          document.querySelectorAll('.HostCheckCR_Page_eventHandlersChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEventHandlersChange.getAttribute('value');
            else
              item.textContent = inputEventHandlersChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_eventHandlersChange'));
        }

        if(inputTenantResource) {
          document.querySelectorAll('.HostCheckCR_Page_tenantResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantResource.getAttribute('value');
            else
              item.textContent = inputTenantResource.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_tenantResource'));
        }

        if(inputJobTemplateResource) {
          document.querySelectorAll('.HostCheckCR_Page_jobTemplateResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateResource.getAttribute('value');
            else
              item.textContent = inputJobTemplateResource.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_jobTemplateResource'));
        }

        if(inputCheckName) {
          document.querySelectorAll('.HostCheckCR_Page_checkName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckName.getAttribute('value');
            else
              item.textContent = inputCheckName.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkName'));
        }

        if(inputCheckDescription) {
          document.querySelectorAll('.HostCheckCR_Page_checkDescription').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckDescription.getAttribute('value');
            else
              item.textContent = inputCheckDescription.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkDescription'));
        }

        if(inputCheckNamespace) {
          document.querySelectorAll('.HostCheckCR_Page_checkNamespace').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckNamespace.getAttribute('value');
            else
              item.textContent = inputCheckNamespace.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkNamespace'));
        }

        if(inputCheckCommand) {
          document.querySelectorAll('.HostCheckCR_Page_checkCommand').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckCommand.getAttribute('value');
            else
              item.textContent = inputCheckCommand.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkCommand'));
        }

        if(inputCheckInterval) {
          document.querySelectorAll('.HostCheckCR_Page_checkInterval').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckInterval.getAttribute('value');
            else
              item.textContent = inputCheckInterval.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkInterval'));
        }

        if(inputCheckPublished) {
          document.querySelectorAll('.HostCheckCR_Page_checkPublished').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckPublished.getAttribute('value');
            else
              item.textContent = inputCheckPublished.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkPublished'));
        }

        if(inputEventSubscriptions) {
          document.querySelectorAll('.HostCheckCR_Page_eventSubscriptions').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEventSubscriptions.getAttribute('value');
            else
              item.textContent = inputEventSubscriptions.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_eventSubscriptions'));
        }

        if(inputEventHandlers) {
          document.querySelectorAll('.HostCheckCR_Page_eventHandlers').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEventHandlers.getAttribute('value');
            else
              item.textContent = inputEventHandlers.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_eventHandlers'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.HostCheckCR_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.HostCheckCR_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.HostCheckCR_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.HostCheckCR_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.HostCheckCR_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.HostCheckCR_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.HostCheckCR_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.HostCheckCR_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.HostCheckCR_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.HostCheckCR_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.HostCheckCR_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.HostCheckCR_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.HostCheckCR_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.HostCheckCR_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_solrId'));
        }

        if(inputTenantId) {
          document.querySelectorAll('.HostCheckCR_Page_tenantId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantId.getAttribute('value');
            else
              item.textContent = inputTenantId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_tenantId'));
        }

        if(inputAapOrganizationId) {
          document.querySelectorAll('.HostCheckCR_Page_aapOrganizationId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAapOrganizationId.getAttribute('value');
            else
              item.textContent = inputAapOrganizationId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_aapOrganizationId'));
        }

        if(inputJobTemplateId) {
          document.querySelectorAll('.HostCheckCR_Page_jobTemplateId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateId.getAttribute('value');
            else
              item.textContent = inputJobTemplateId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_jobTemplateId'));
        }

        if(inputAapTemplateId) {
          document.querySelectorAll('.HostCheckCR_Page_aapTemplateId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAapTemplateId.getAttribute('value');
            else
              item.textContent = inputAapTemplateId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_aapTemplateId'));
        }

        if(inputCheckId) {
          document.querySelectorAll('.HostCheckCR_Page_checkId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckId.getAttribute('value');
            else
              item.textContent = inputCheckId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkId'));
        }

        if(inputCheckResource) {
          document.querySelectorAll('.HostCheckCR_Page_checkResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCheckResource.getAttribute('value');
            else
              item.textContent = inputCheckResource.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_checkResource'));
        }

        if(inputCreatedByUserId) {
          document.querySelectorAll('.HostCheckCR_Page_createdByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByUserId.getAttribute('value');
            else
              item.textContent = inputCreatedByUserId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_createdByUserId'));
        }

        if(inputCreatedByFullName) {
          document.querySelectorAll('.HostCheckCR_Page_createdByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByFullName.getAttribute('value');
            else
              item.textContent = inputCreatedByFullName.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_createdByFullName'));
        }

        if(inputOwnedByUserId) {
          document.querySelectorAll('.HostCheckCR_Page_ownedByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputOwnedByUserId.getAttribute('value');
            else
              item.textContent = inputOwnedByUserId.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_ownedByUserId'));
        }

        if(inputOwnedByDisplayName) {
          document.querySelectorAll('.HostCheckCR_Page_ownedByDisplayName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputOwnedByDisplayName.getAttribute('value');
            else
              item.textContent = inputOwnedByDisplayName.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_ownedByDisplayName'));
        }

        if(inputAapOrganizationIdChange) {
          document.querySelectorAll('.HostCheckCR_Page_aapOrganizationIdChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputAapOrganizationIdChange.getAttribute('value');
            else
              item.textContent = inputAapOrganizationIdChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_aapOrganizationIdChange'));
        }

        if(inputJobTemplateIdChange) {
          document.querySelectorAll('.HostCheckCR_Page_jobTemplateIdChange').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputJobTemplateIdChange.getAttribute('value');
            else
              item.textContent = inputJobTemplateIdChange.textContent;
          });
          addGlow(document.querySelector('.HostCheckCR_Page_jobTemplateIdChange'));
        }

          pageGraphHostCheckCR();
      });
    });
  }
}

function pageGraphHostCheckCR(apiRequest) {
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
          layout['title'] = 'host check change requests';
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
          Plotly.react('htmBodyGraphHostCheckCRPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqHostCheckCR_time').innerText = '';
  searchPage('HostCheckCR', function() {
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
      document.querySelector('#fqHostCheckCR_time').value = x;
      document.querySelector('#fqHostCheckCR_time').onchange();
      searchPage('HostCheckCR');
    }, speedRate);
  });
}

// Search //

async function searchHostCheckCR($formFilters, success, error) {
  var filters = searchHostCheckCRFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchHostCheckCRVals(filters, target, success, error);
}

function searchHostCheckCRFilters($formFilters) {
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

    var filterChangeRequestId = $formFilters.querySelector('.valueChangeRequestId')?.value;
    if(filterChangeRequestId != null && filterChangeRequestId !== '')
      filters.push({ name: 'fq', value: 'changeRequestId:' + filterChangeRequestId });

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterOwnedByEmail = $formFilters.querySelector('.valueOwnedByEmail')?.value;
    if(filterOwnedByEmail != null && filterOwnedByEmail !== '')
      filters.push({ name: 'fq', value: 'ownedByEmail:' + filterOwnedByEmail });

    var filterLifecycleState = $formFilters.querySelector('.valueLifecycleState')?.value;
    if(filterLifecycleState != null && filterLifecycleState !== '')
      filters.push({ name: 'fq', value: 'lifecycleState:' + filterLifecycleState });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterJobTemplateResourceChange = $formFilters.querySelector('.valueJobTemplateResourceChange')?.value;
    if(filterJobTemplateResourceChange != null && filterJobTemplateResourceChange !== '')
      filters.push({ name: 'fq', value: 'jobTemplateResourceChange:' + filterJobTemplateResourceChange });

    var filterCheckNameChange = $formFilters.querySelector('.valueCheckNameChange')?.value;
    if(filterCheckNameChange != null && filterCheckNameChange !== '')
      filters.push({ name: 'fq', value: 'checkNameChange:' + filterCheckNameChange });

    var filterCheckDescriptionChange = $formFilters.querySelector('.valueCheckDescriptionChange')?.value;
    if(filterCheckDescriptionChange != null && filterCheckDescriptionChange !== '')
      filters.push({ name: 'fq', value: 'checkDescriptionChange:' + filterCheckDescriptionChange });

    var filterCheckNamespaceChange = $formFilters.querySelector('.valueCheckNamespaceChange')?.value;
    if(filterCheckNamespaceChange != null && filterCheckNamespaceChange !== '')
      filters.push({ name: 'fq', value: 'checkNamespaceChange:' + filterCheckNamespaceChange });

    var filterCheckCommandChange = $formFilters.querySelector('.valueCheckCommandChange')?.value;
    if(filterCheckCommandChange != null && filterCheckCommandChange !== '')
      filters.push({ name: 'fq', value: 'checkCommandChange:' + filterCheckCommandChange });

    var filterCheckIntervalChange = $formFilters.querySelector('.valueCheckIntervalChange')?.value;
    if(filterCheckIntervalChange != null && filterCheckIntervalChange !== '')
      filters.push({ name: 'fq', value: 'checkIntervalChange:' + filterCheckIntervalChange });

    var $filterCheckPublishedChangeCheckbox = $formFilters.querySelector('input.valueCheckPublishedChange[type = "checkbox"]');
    var $filterCheckPublishedChangeSelect = $formFilters.querySelector('select.valueCheckPublishedChange');
    var filterCheckPublishedChange = $filterCheckPublishedChangeSelect.length ? $filterCheckPublishedChangeSelect.value : $filterCheckPublishedChangeCheckbox.checked;
    var filterCheckPublishedChangeSelectVal = $formFilters.querySelector('select.filterCheckPublishedChange')?.value;
    var filterCheckPublishedChange = null;
    if(filterCheckPublishedChangeSelectVal !== '')
      filterCheckPublishedChange = filterCheckPublishedChangeSelectVal == 'true';
    if(filterCheckPublishedChange != null && filterCheckPublishedChange === true)
      filters.push({ name: 'fq', value: 'checkPublishedChange:' + filterCheckPublishedChange });

    var filterEventSubscriptionsChange = $formFilters.querySelector('.valueEventSubscriptionsChange')?.value;
    if(filterEventSubscriptionsChange != null && filterEventSubscriptionsChange !== '')
      filters.push({ name: 'fq', value: 'eventSubscriptionsChange:' + filterEventSubscriptionsChange });

    var filterEventHandlersChange = $formFilters.querySelector('.valueEventHandlersChange')?.value;
    if(filterEventHandlersChange != null && filterEventHandlersChange !== '')
      filters.push({ name: 'fq', value: 'eventHandlersChange:' + filterEventHandlersChange });

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

    var filterCheckId = $formFilters.querySelector('.valueCheckId')?.value;
    if(filterCheckId != null && filterCheckId !== '')
      filters.push({ name: 'fq', value: 'checkId:' + filterCheckId });

    var filterCheckResource = $formFilters.querySelector('.valueCheckResource')?.value;
    if(filterCheckResource != null && filterCheckResource !== '')
      filters.push({ name: 'fq', value: 'checkResource:' + filterCheckResource });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });

    var filterOwnedByUserId = $formFilters.querySelector('.valueOwnedByUserId')?.value;
    if(filterOwnedByUserId != null && filterOwnedByUserId !== '')
      filters.push({ name: 'fq', value: 'ownedByUserId:' + filterOwnedByUserId });

    var filterOwnedByDisplayName = $formFilters.querySelector('.valueOwnedByDisplayName')?.value;
    if(filterOwnedByDisplayName != null && filterOwnedByDisplayName !== '')
      filters.push({ name: 'fq', value: 'ownedByDisplayName:' + filterOwnedByDisplayName });

    var filterAapOrganizationIdChange = $formFilters.querySelector('.valueAapOrganizationIdChange')?.value;
    if(filterAapOrganizationIdChange != null && filterAapOrganizationIdChange !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationIdChange:' + filterAapOrganizationIdChange });

    var filterJobTemplateIdChange = $formFilters.querySelector('.valueJobTemplateIdChange')?.value;
    if(filterJobTemplateIdChange != null && filterJobTemplateIdChange !== '')
      filters.push({ name: 'fq', value: 'jobTemplateIdChange:' + filterJobTemplateIdChange });
  }
  return filters;
}

function searchHostCheckCRVals(filters, target, success, error) {


  fetch(
    '/en-us/api/host-check-cr?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestHostCheckCRTenantResource(filters, $list, changeRequestId = null, tenantResource = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_tenantResource_' + changeRequestId + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueTenantResource ');
        if(changeRequestId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchHostCheckCRVals([{ name: 'fq', value: 'changeRequestId:' + changeRequestId }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestHostCheckCRTenantResource(filters, $list, changeRequestId, o[inputVar], relate, target);
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

// GET //

async function getHostCheckCR(pk) {
  fetch(
    '/en-us/api/host-check-cr/' + changeRequestId
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

async function patchHostCheckCR($formFilters, $formValues, target, changeRequestId, success, error) {
  var filters = patchHostCheckCRFilters($formFilters);

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

  var valueChangeRequestId = $formValues.querySelector('.valueChangeRequestId')?.value;
  var removeChangeRequestId = $formValues.querySelector('.removeChangeRequestId')?.value === 'true';
  var setChangeRequestId = removeChangeRequestId ? null : $formValues.querySelector('.setChangeRequestId')?.value;
  var addChangeRequestId = $formValues.querySelector('.addChangeRequestId')?.value;
  if(removeChangeRequestId || setChangeRequestId != null && setChangeRequestId !== '')
    vals['setChangeRequestId'] = setChangeRequestId;
  if(addChangeRequestId != null && addChangeRequestId !== '')
    vals['addChangeRequestId'] = addChangeRequestId;
  var removeChangeRequestId = $formValues.querySelector('.removeChangeRequestId')?.value;
  if(removeChangeRequestId != null && removeChangeRequestId !== '')
    vals['removeChangeRequestId'] = removeChangeRequestId;

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

  var valueOwnedByEmail = $formValues.querySelector('.valueOwnedByEmail')?.value;
  var removeOwnedByEmail = $formValues.querySelector('.removeOwnedByEmail')?.value === 'true';
  var setOwnedByEmail = removeOwnedByEmail ? null : $formValues.querySelector('.setOwnedByEmail')?.value;
  var addOwnedByEmail = $formValues.querySelector('.addOwnedByEmail')?.value;
  if(removeOwnedByEmail || setOwnedByEmail != null && setOwnedByEmail !== '')
    vals['setOwnedByEmail'] = setOwnedByEmail;
  if(addOwnedByEmail != null && addOwnedByEmail !== '')
    vals['addOwnedByEmail'] = addOwnedByEmail;
  var removeOwnedByEmail = $formValues.querySelector('.removeOwnedByEmail')?.value;
  if(removeOwnedByEmail != null && removeOwnedByEmail !== '')
    vals['removeOwnedByEmail'] = removeOwnedByEmail;

  var valueLifecycleState = $formValues.querySelector('.valueLifecycleState')?.value;
  var removeLifecycleState = $formValues.querySelector('.removeLifecycleState')?.value === 'true';
  var setLifecycleState = removeLifecycleState ? null : $formValues.querySelector('.setLifecycleState')?.value;
  var addLifecycleState = $formValues.querySelector('.addLifecycleState')?.value;
  if(removeLifecycleState || setLifecycleState != null && setLifecycleState !== '')
    vals['setLifecycleState'] = setLifecycleState;
  if(addLifecycleState != null && addLifecycleState !== '')
    vals['addLifecycleState'] = addLifecycleState;
  var removeLifecycleState = $formValues.querySelector('.removeLifecycleState')?.value;
  if(removeLifecycleState != null && removeLifecycleState !== '')
    vals['removeLifecycleState'] = removeLifecycleState;

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

  var valueJobTemplateResourceChange = (Array.from($formValues.querySelectorAll('.valueJobTemplateResourceChange')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueJobTemplateResourceChange != null && valueJobTemplateResourceChange !== '')
    vals['setJobTemplateResourceChange'] = valueJobTemplateResourceChange;

  var valueCheckNameChange = $formValues.querySelector('.valueCheckNameChange')?.value;
  var removeCheckNameChange = $formValues.querySelector('.removeCheckNameChange')?.value === 'true';
  var setCheckNameChange = removeCheckNameChange ? null : $formValues.querySelector('.setCheckNameChange')?.value;
  var addCheckNameChange = $formValues.querySelector('.addCheckNameChange')?.value;
  if(removeCheckNameChange || setCheckNameChange != null && setCheckNameChange !== '')
    vals['setCheckNameChange'] = setCheckNameChange;
  if(addCheckNameChange != null && addCheckNameChange !== '')
    vals['addCheckNameChange'] = addCheckNameChange;
  var removeCheckNameChange = $formValues.querySelector('.removeCheckNameChange')?.value;
  if(removeCheckNameChange != null && removeCheckNameChange !== '')
    vals['removeCheckNameChange'] = removeCheckNameChange;

  var valueCheckDescriptionChange = $formValues.querySelector('.valueCheckDescriptionChange')?.value;
  var removeCheckDescriptionChange = $formValues.querySelector('.removeCheckDescriptionChange')?.value === 'true';
  var setCheckDescriptionChange = removeCheckDescriptionChange ? null : $formValues.querySelector('.setCheckDescriptionChange')?.value;
  var addCheckDescriptionChange = $formValues.querySelector('.addCheckDescriptionChange')?.value;
  if(removeCheckDescriptionChange || setCheckDescriptionChange != null && setCheckDescriptionChange !== '')
    vals['setCheckDescriptionChange'] = setCheckDescriptionChange;
  if(addCheckDescriptionChange != null && addCheckDescriptionChange !== '')
    vals['addCheckDescriptionChange'] = addCheckDescriptionChange;
  var removeCheckDescriptionChange = $formValues.querySelector('.removeCheckDescriptionChange')?.value;
  if(removeCheckDescriptionChange != null && removeCheckDescriptionChange !== '')
    vals['removeCheckDescriptionChange'] = removeCheckDescriptionChange;

  var valueCheckNamespaceChange = $formValues.querySelector('.valueCheckNamespaceChange')?.value;
  var removeCheckNamespaceChange = $formValues.querySelector('.removeCheckNamespaceChange')?.value === 'true';
  var setCheckNamespaceChange = removeCheckNamespaceChange ? null : $formValues.querySelector('.setCheckNamespaceChange')?.value;
  var addCheckNamespaceChange = $formValues.querySelector('.addCheckNamespaceChange')?.value;
  if(removeCheckNamespaceChange || setCheckNamespaceChange != null && setCheckNamespaceChange !== '')
    vals['setCheckNamespaceChange'] = setCheckNamespaceChange;
  if(addCheckNamespaceChange != null && addCheckNamespaceChange !== '')
    vals['addCheckNamespaceChange'] = addCheckNamespaceChange;
  var removeCheckNamespaceChange = $formValues.querySelector('.removeCheckNamespaceChange')?.value;
  if(removeCheckNamespaceChange != null && removeCheckNamespaceChange !== '')
    vals['removeCheckNamespaceChange'] = removeCheckNamespaceChange;

  var valueCheckCommandChange = $formValues.querySelector('.valueCheckCommandChange')?.value;
  var removeCheckCommandChange = $formValues.querySelector('.removeCheckCommandChange')?.value === 'true';
  var setCheckCommandChange = removeCheckCommandChange ? null : $formValues.querySelector('.setCheckCommandChange')?.value;
  var addCheckCommandChange = $formValues.querySelector('.addCheckCommandChange')?.value;
  if(removeCheckCommandChange || setCheckCommandChange != null && setCheckCommandChange !== '')
    vals['setCheckCommandChange'] = setCheckCommandChange;
  if(addCheckCommandChange != null && addCheckCommandChange !== '')
    vals['addCheckCommandChange'] = addCheckCommandChange;
  var removeCheckCommandChange = $formValues.querySelector('.removeCheckCommandChange')?.value;
  if(removeCheckCommandChange != null && removeCheckCommandChange !== '')
    vals['removeCheckCommandChange'] = removeCheckCommandChange;

  var valueCheckIntervalChange = $formValues.querySelector('.valueCheckIntervalChange')?.value;
  var removeCheckIntervalChange = $formValues.querySelector('.removeCheckIntervalChange')?.value === 'true';
  var setCheckIntervalChange = removeCheckIntervalChange ? null : $formValues.querySelector('.setCheckIntervalChange')?.value;
  var addCheckIntervalChange = $formValues.querySelector('.addCheckIntervalChange')?.value;
  if(removeCheckIntervalChange || setCheckIntervalChange != null && setCheckIntervalChange !== '')
    vals['setCheckIntervalChange'] = setCheckIntervalChange;
  if(addCheckIntervalChange != null && addCheckIntervalChange !== '')
    vals['addCheckIntervalChange'] = addCheckIntervalChange;
  var removeCheckIntervalChange = $formValues.querySelector('.removeCheckIntervalChange')?.value;
  if(removeCheckIntervalChange != null && removeCheckIntervalChange !== '')
    vals['removeCheckIntervalChange'] = removeCheckIntervalChange;

  var valueCheckPublishedChange = $formValues.querySelector('.valueCheckPublishedChange')?.value;
  var removeCheckPublishedChange = $formValues.querySelector('.removeCheckPublishedChange')?.value === 'true';
  if(valueCheckPublishedChange != null)
    valueCheckPublishedChange = valueCheckPublishedChange === 'true';
  var valueCheckPublishedChangeSelectVal = $formValues.querySelector('select.setCheckPublishedChange')?.value;
  if(valueCheckPublishedChangeSelectVal != null)
    valueCheckPublishedChangeSelectVal = valueCheckPublishedChangeSelectVal === 'true';
  if(valueCheckPublishedChangeSelectVal != null && valueCheckPublishedChangeSelectVal !== '')
    valueCheckPublishedChange = valueCheckPublishedChangeSelectVal == 'true';
  var setCheckPublishedChange = removeCheckPublishedChange ? null : valueCheckPublishedChange;
  var addCheckPublishedChange = $formValues.querySelector('.addCheckPublishedChange')?.checked;
  if(removeCheckPublishedChange || setCheckPublishedChange != null && setCheckPublishedChange !== '')
    vals['setCheckPublishedChange'] = setCheckPublishedChange;
  if(addCheckPublishedChange != null && addCheckPublishedChange !== '')
    vals['addCheckPublishedChange'] = addCheckPublishedChange;
  var removeCheckPublishedChange = $formValues.querySelector('.removeCheckPublishedChange')?.checked;
  if(removeCheckPublishedChange != null && removeCheckPublishedChange !== '')
    vals['removeCheckPublishedChange'] = removeCheckPublishedChange;

  var valueEventSubscriptionsChange = $formValues.querySelector('.valueEventSubscriptionsChange')?.value;
  var removeEventSubscriptionsChange = $formValues.querySelector('.removeEventSubscriptionsChange')?.value === 'true';
  var setEventSubscriptionsChange = removeEventSubscriptionsChange ? null : $formValues.querySelector('.setEventSubscriptionsChange')?.value;
  var addEventSubscriptionsChange = $formValues.querySelector('.addEventSubscriptionsChange')?.value;
  if(removeEventSubscriptionsChange || setEventSubscriptionsChange != null && setEventSubscriptionsChange !== '')
    vals['setEventSubscriptionsChange'] = JSON.parse(setEventSubscriptionsChange);
  if(addEventSubscriptionsChange != null && addEventSubscriptionsChange !== '')
    vals['addEventSubscriptionsChange'] = addEventSubscriptionsChange;
  var removeEventSubscriptionsChange = $formValues.querySelector('.removeEventSubscriptionsChange')?.value;
  if(removeEventSubscriptionsChange != null && removeEventSubscriptionsChange !== '')
    vals['removeEventSubscriptionsChange'] = removeEventSubscriptionsChange;

  var valueEventHandlersChange = $formValues.querySelector('.valueEventHandlersChange')?.value;
  var removeEventHandlersChange = $formValues.querySelector('.removeEventHandlersChange')?.value === 'true';
  var setEventHandlersChange = removeEventHandlersChange ? null : $formValues.querySelector('.setEventHandlersChange')?.value;
  var addEventHandlersChange = $formValues.querySelector('.addEventHandlersChange')?.value;
  if(removeEventHandlersChange || setEventHandlersChange != null && setEventHandlersChange !== '')
    vals['setEventHandlersChange'] = JSON.parse(setEventHandlersChange);
  if(addEventHandlersChange != null && addEventHandlersChange !== '')
    vals['addEventHandlersChange'] = addEventHandlersChange;
  var removeEventHandlersChange = $formValues.querySelector('.removeEventHandlersChange')?.value;
  if(removeEventHandlersChange != null && removeEventHandlersChange !== '')
    vals['removeEventHandlersChange'] = removeEventHandlersChange;

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

  var valueCheckId = $formValues.querySelector('.valueCheckId')?.value;
  var removeCheckId = $formValues.querySelector('.removeCheckId')?.value === 'true';
  var setCheckId = removeCheckId ? null : $formValues.querySelector('.setCheckId')?.value;
  var addCheckId = $formValues.querySelector('.addCheckId')?.value;
  if(removeCheckId || setCheckId != null && setCheckId !== '')
    vals['setCheckId'] = setCheckId;
  if(addCheckId != null && addCheckId !== '')
    vals['addCheckId'] = addCheckId;
  var removeCheckId = $formValues.querySelector('.removeCheckId')?.value;
  if(removeCheckId != null && removeCheckId !== '')
    vals['removeCheckId'] = removeCheckId;

  var valueCheckResource = (Array.from($formValues.querySelectorAll('.valueCheckResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueCheckResource != null && valueCheckResource !== '')
    vals['setCheckResource'] = valueCheckResource;

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

  var valueOwnedByUserId = $formValues.querySelector('.valueOwnedByUserId')?.value;
  var removeOwnedByUserId = $formValues.querySelector('.removeOwnedByUserId')?.value === 'true';
  var setOwnedByUserId = removeOwnedByUserId ? null : $formValues.querySelector('.setOwnedByUserId')?.value;
  var addOwnedByUserId = $formValues.querySelector('.addOwnedByUserId')?.value;
  if(removeOwnedByUserId || setOwnedByUserId != null && setOwnedByUserId !== '')
    vals['setOwnedByUserId'] = setOwnedByUserId;
  if(addOwnedByUserId != null && addOwnedByUserId !== '')
    vals['addOwnedByUserId'] = addOwnedByUserId;
  var removeOwnedByUserId = $formValues.querySelector('.removeOwnedByUserId')?.value;
  if(removeOwnedByUserId != null && removeOwnedByUserId !== '')
    vals['removeOwnedByUserId'] = removeOwnedByUserId;

  var valueOwnedByDisplayName = $formValues.querySelector('.valueOwnedByDisplayName')?.value;
  var removeOwnedByDisplayName = $formValues.querySelector('.removeOwnedByDisplayName')?.value === 'true';
  var setOwnedByDisplayName = removeOwnedByDisplayName ? null : $formValues.querySelector('.setOwnedByDisplayName')?.value;
  var addOwnedByDisplayName = $formValues.querySelector('.addOwnedByDisplayName')?.value;
  if(removeOwnedByDisplayName || setOwnedByDisplayName != null && setOwnedByDisplayName !== '')
    vals['setOwnedByDisplayName'] = setOwnedByDisplayName;
  if(addOwnedByDisplayName != null && addOwnedByDisplayName !== '')
    vals['addOwnedByDisplayName'] = addOwnedByDisplayName;
  var removeOwnedByDisplayName = $formValues.querySelector('.removeOwnedByDisplayName')?.value;
  if(removeOwnedByDisplayName != null && removeOwnedByDisplayName !== '')
    vals['removeOwnedByDisplayName'] = removeOwnedByDisplayName;

  var valueAapOrganizationIdChange = $formValues.querySelector('.valueAapOrganizationIdChange')?.value;
  var removeAapOrganizationIdChange = $formValues.querySelector('.removeAapOrganizationIdChange')?.value === 'true';
  var setAapOrganizationIdChange = removeAapOrganizationIdChange ? null : $formValues.querySelector('.setAapOrganizationIdChange')?.value;
  var addAapOrganizationIdChange = $formValues.querySelector('.addAapOrganizationIdChange')?.value;
  if(removeAapOrganizationIdChange || setAapOrganizationIdChange != null && setAapOrganizationIdChange !== '')
    vals['setAapOrganizationIdChange'] = setAapOrganizationIdChange;
  if(addAapOrganizationIdChange != null && addAapOrganizationIdChange !== '')
    vals['addAapOrganizationIdChange'] = addAapOrganizationIdChange;
  var removeAapOrganizationIdChange = $formValues.querySelector('.removeAapOrganizationIdChange')?.value;
  if(removeAapOrganizationIdChange != null && removeAapOrganizationIdChange !== '')
    vals['removeAapOrganizationIdChange'] = removeAapOrganizationIdChange;

  var valueJobTemplateIdChange = $formValues.querySelector('.valueJobTemplateIdChange')?.value;
  var removeJobTemplateIdChange = $formValues.querySelector('.removeJobTemplateIdChange')?.value === 'true';
  var setJobTemplateIdChange = removeJobTemplateIdChange ? null : $formValues.querySelector('.setJobTemplateIdChange')?.value;
  var addJobTemplateIdChange = $formValues.querySelector('.addJobTemplateIdChange')?.value;
  if(removeJobTemplateIdChange || setJobTemplateIdChange != null && setJobTemplateIdChange !== '')
    vals['setJobTemplateIdChange'] = setJobTemplateIdChange;
  if(addJobTemplateIdChange != null && addJobTemplateIdChange !== '')
    vals['addJobTemplateIdChange'] = addJobTemplateIdChange;
  var removeJobTemplateIdChange = $formValues.querySelector('.removeJobTemplateIdChange')?.value;
  if(removeJobTemplateIdChange != null && removeJobTemplateIdChange !== '')
    vals['removeJobTemplateIdChange'] = removeJobTemplateIdChange;

  patchHostCheckCRVals(changeRequestId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'changeRequestId:' + changeRequestId}], vals, target, success, error);
}

function patchHostCheckCRFilters($formFilters) {
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

    var filterChangeRequestId = $formFilters.querySelector('.valueChangeRequestId')?.value;
    if(filterChangeRequestId != null && filterChangeRequestId !== '')
      filters.push({ name: 'fq', value: 'changeRequestId:' + filterChangeRequestId });

    var filterCreatedByEmail = $formFilters.querySelector('.valueCreatedByEmail')?.value;
    if(filterCreatedByEmail != null && filterCreatedByEmail !== '')
      filters.push({ name: 'fq', value: 'createdByEmail:' + filterCreatedByEmail });

    var filterCreatedVia = $formFilters.querySelector('.valueCreatedVia')?.value;
    if(filterCreatedVia != null && filterCreatedVia !== '')
      filters.push({ name: 'fq', value: 'createdVia:' + filterCreatedVia });

    var filterOwnedByEmail = $formFilters.querySelector('.valueOwnedByEmail')?.value;
    if(filterOwnedByEmail != null && filterOwnedByEmail !== '')
      filters.push({ name: 'fq', value: 'ownedByEmail:' + filterOwnedByEmail });

    var filterLifecycleState = $formFilters.querySelector('.valueLifecycleState')?.value;
    if(filterLifecycleState != null && filterLifecycleState !== '')
      filters.push({ name: 'fq', value: 'lifecycleState:' + filterLifecycleState });

    var filterIntentState = $formFilters.querySelector('.valueIntentState')?.value;
    if(filterIntentState != null && filterIntentState !== '')
      filters.push({ name: 'fq', value: 'intentState:' + filterIntentState });

    var filterRequestedState = $formFilters.querySelector('.valueRequestedState')?.value;
    if(filterRequestedState != null && filterRequestedState !== '')
      filters.push({ name: 'fq', value: 'requestedState:' + filterRequestedState });

    var filterRealizedState = $formFilters.querySelector('.valueRealizedState')?.value;
    if(filterRealizedState != null && filterRealizedState !== '')
      filters.push({ name: 'fq', value: 'realizedState:' + filterRealizedState });

    var filterJobTemplateResourceChange = $formFilters.querySelector('.valueJobTemplateResourceChange')?.value;
    if(filterJobTemplateResourceChange != null && filterJobTemplateResourceChange !== '')
      filters.push({ name: 'fq', value: 'jobTemplateResourceChange:' + filterJobTemplateResourceChange });

    var filterCheckNameChange = $formFilters.querySelector('.valueCheckNameChange')?.value;
    if(filterCheckNameChange != null && filterCheckNameChange !== '')
      filters.push({ name: 'fq', value: 'checkNameChange:' + filterCheckNameChange });

    var filterCheckDescriptionChange = $formFilters.querySelector('.valueCheckDescriptionChange')?.value;
    if(filterCheckDescriptionChange != null && filterCheckDescriptionChange !== '')
      filters.push({ name: 'fq', value: 'checkDescriptionChange:' + filterCheckDescriptionChange });

    var filterCheckNamespaceChange = $formFilters.querySelector('.valueCheckNamespaceChange')?.value;
    if(filterCheckNamespaceChange != null && filterCheckNamespaceChange !== '')
      filters.push({ name: 'fq', value: 'checkNamespaceChange:' + filterCheckNamespaceChange });

    var filterCheckCommandChange = $formFilters.querySelector('.valueCheckCommandChange')?.value;
    if(filterCheckCommandChange != null && filterCheckCommandChange !== '')
      filters.push({ name: 'fq', value: 'checkCommandChange:' + filterCheckCommandChange });

    var filterCheckIntervalChange = $formFilters.querySelector('.valueCheckIntervalChange')?.value;
    if(filterCheckIntervalChange != null && filterCheckIntervalChange !== '')
      filters.push({ name: 'fq', value: 'checkIntervalChange:' + filterCheckIntervalChange });

    var $filterCheckPublishedChangeCheckbox = $formFilters.querySelector('input.valueCheckPublishedChange[type = "checkbox"]');
    var $filterCheckPublishedChangeSelect = $formFilters.querySelector('select.valueCheckPublishedChange');
    var filterCheckPublishedChange = $filterCheckPublishedChangeSelect.length ? $filterCheckPublishedChangeSelect.value : $filterCheckPublishedChangeCheckbox.checked;
    var filterCheckPublishedChangeSelectVal = $formFilters.querySelector('select.filterCheckPublishedChange')?.value;
    var filterCheckPublishedChange = null;
    if(filterCheckPublishedChangeSelectVal !== '')
      filterCheckPublishedChange = filterCheckPublishedChangeSelectVal == 'true';
    if(filterCheckPublishedChange != null && filterCheckPublishedChange === true)
      filters.push({ name: 'fq', value: 'checkPublishedChange:' + filterCheckPublishedChange });

    var filterEventSubscriptionsChange = $formFilters.querySelector('.valueEventSubscriptionsChange')?.value;
    if(filterEventSubscriptionsChange != null && filterEventSubscriptionsChange !== '')
      filters.push({ name: 'fq', value: 'eventSubscriptionsChange:' + filterEventSubscriptionsChange });

    var filterEventHandlersChange = $formFilters.querySelector('.valueEventHandlersChange')?.value;
    if(filterEventHandlersChange != null && filterEventHandlersChange !== '')
      filters.push({ name: 'fq', value: 'eventHandlersChange:' + filterEventHandlersChange });

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

    var filterCheckId = $formFilters.querySelector('.valueCheckId')?.value;
    if(filterCheckId != null && filterCheckId !== '')
      filters.push({ name: 'fq', value: 'checkId:' + filterCheckId });

    var filterCheckResource = $formFilters.querySelector('.valueCheckResource')?.value;
    if(filterCheckResource != null && filterCheckResource !== '')
      filters.push({ name: 'fq', value: 'checkResource:' + filterCheckResource });

    var filterCreatedByUserId = $formFilters.querySelector('.valueCreatedByUserId')?.value;
    if(filterCreatedByUserId != null && filterCreatedByUserId !== '')
      filters.push({ name: 'fq', value: 'createdByUserId:' + filterCreatedByUserId });

    var filterCreatedByFullName = $formFilters.querySelector('.valueCreatedByFullName')?.value;
    if(filterCreatedByFullName != null && filterCreatedByFullName !== '')
      filters.push({ name: 'fq', value: 'createdByFullName:' + filterCreatedByFullName });

    var filterOwnedByUserId = $formFilters.querySelector('.valueOwnedByUserId')?.value;
    if(filterOwnedByUserId != null && filterOwnedByUserId !== '')
      filters.push({ name: 'fq', value: 'ownedByUserId:' + filterOwnedByUserId });

    var filterOwnedByDisplayName = $formFilters.querySelector('.valueOwnedByDisplayName')?.value;
    if(filterOwnedByDisplayName != null && filterOwnedByDisplayName !== '')
      filters.push({ name: 'fq', value: 'ownedByDisplayName:' + filterOwnedByDisplayName });

    var filterAapOrganizationIdChange = $formFilters.querySelector('.valueAapOrganizationIdChange')?.value;
    if(filterAapOrganizationIdChange != null && filterAapOrganizationIdChange !== '')
      filters.push({ name: 'fq', value: 'aapOrganizationIdChange:' + filterAapOrganizationIdChange });

    var filterJobTemplateIdChange = $formFilters.querySelector('.valueJobTemplateIdChange')?.value;
    if(filterJobTemplateIdChange != null && filterJobTemplateIdChange !== '')
      filters.push({ name: 'fq', value: 'jobTemplateIdChange:' + filterJobTemplateIdChange });
  }
  return filters;
}

function patchHostCheckCRVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchHostCheckCRVals(filters, vals, target, success, error);
}

function patchHostCheckCRVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/host-check-cr?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postHostCheckCR($formValues, target, success, error) {
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

  var valueChangeRequestId = $formValues.querySelector('.valueChangeRequestId')?.value;
  if(valueChangeRequestId != null && valueChangeRequestId !== '')
    vals['changeRequestId'] = valueChangeRequestId;

  var valueCreatedByEmail = $formValues.querySelector('.valueCreatedByEmail')?.value;
  if(valueCreatedByEmail != null && valueCreatedByEmail !== '')
    vals['createdByEmail'] = valueCreatedByEmail;

  var valueCreatedVia = $formValues.querySelector('.valueCreatedVia')?.value;
  if(valueCreatedVia != null && valueCreatedVia !== '')
    vals['createdVia'] = valueCreatedVia;

  var valueOwnedByEmail = $formValues.querySelector('.valueOwnedByEmail')?.value;
  if(valueOwnedByEmail != null && valueOwnedByEmail !== '')
    vals['ownedByEmail'] = valueOwnedByEmail;

  var valueLifecycleState = $formValues.querySelector('.valueLifecycleState')?.value;
  if(valueLifecycleState != null && valueLifecycleState !== '')
    vals['lifecycleState'] = valueLifecycleState;

  var valueIntentState = $formValues.querySelector('.valueIntentState')?.value;
  if(valueIntentState != null && valueIntentState !== '')
    vals['intentState'] = valueIntentState;

  var valueRequestedState = $formValues.querySelector('.valueRequestedState')?.value;
  if(valueRequestedState != null && valueRequestedState !== '')
    vals['requestedState'] = valueRequestedState;

  var valueRealizedState = $formValues.querySelector('.valueRealizedState')?.value;
  if(valueRealizedState != null && valueRealizedState !== '')
    vals['realizedState'] = valueRealizedState;

  var valueJobTemplateResourceChange = (Array.from($formValues.querySelectorAll('.valueJobTemplateResourceChange')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueJobTemplateResourceChange != null && valueJobTemplateResourceChange !== '')
    vals['jobTemplateResourceChange'] = valueJobTemplateResourceChange;

  var valueCheckNameChange = $formValues.querySelector('.valueCheckNameChange')?.value;
  if(valueCheckNameChange != null && valueCheckNameChange !== '')
    vals['checkNameChange'] = valueCheckNameChange;

  var valueCheckDescriptionChange = $formValues.querySelector('.valueCheckDescriptionChange')?.value;
  if(valueCheckDescriptionChange != null && valueCheckDescriptionChange !== '')
    vals['checkDescriptionChange'] = valueCheckDescriptionChange;

  var valueCheckNamespaceChange = $formValues.querySelector('.valueCheckNamespaceChange')?.value;
  if(valueCheckNamespaceChange != null && valueCheckNamespaceChange !== '')
    vals['checkNamespaceChange'] = valueCheckNamespaceChange;

  var valueCheckCommandChange = $formValues.querySelector('.valueCheckCommandChange')?.value;
  if(valueCheckCommandChange != null && valueCheckCommandChange !== '')
    vals['checkCommandChange'] = valueCheckCommandChange;

  var valueCheckIntervalChange = $formValues.querySelector('.valueCheckIntervalChange')?.value;
  if(valueCheckIntervalChange != null && valueCheckIntervalChange !== '')
    vals['checkIntervalChange'] = valueCheckIntervalChange;

  var valueCheckPublishedChange = $formValues.querySelector('.valueCheckPublishedChange')?.value;
  if(valueCheckPublishedChange != null && valueCheckPublishedChange !== '')
    vals['checkPublishedChange'] = valueCheckPublishedChange == 'true';

  var valueEventSubscriptionsChange = $formValues.querySelector('.valueEventSubscriptionsChange')?.value;
  if(valueEventSubscriptionsChange != null && valueEventSubscriptionsChange !== '')
    vals['eventSubscriptionsChange'] = JSON.parse(valueEventSubscriptionsChange);

  var valueEventHandlersChange = $formValues.querySelector('.valueEventHandlersChange')?.value;
  if(valueEventHandlersChange != null && valueEventHandlersChange !== '')
    vals['eventHandlersChange'] = JSON.parse(valueEventHandlersChange);

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

  var valueCheckId = $formValues.querySelector('.valueCheckId')?.value;
  if(valueCheckId != null && valueCheckId !== '')
    vals['checkId'] = valueCheckId;

  var valueCheckResource = (Array.from($formValues.querySelectorAll('.valueCheckResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueCheckResource != null && valueCheckResource !== '')
    vals['checkResource'] = valueCheckResource;

  var valueCreatedByUserId = $formValues.querySelector('.valueCreatedByUserId')?.value;
  if(valueCreatedByUserId != null && valueCreatedByUserId !== '')
    vals['createdByUserId'] = valueCreatedByUserId;

  var valueCreatedByFullName = $formValues.querySelector('.valueCreatedByFullName')?.value;
  if(valueCreatedByFullName != null && valueCreatedByFullName !== '')
    vals['createdByFullName'] = valueCreatedByFullName;

  var valueOwnedByUserId = $formValues.querySelector('.valueOwnedByUserId')?.value;
  if(valueOwnedByUserId != null && valueOwnedByUserId !== '')
    vals['ownedByUserId'] = valueOwnedByUserId;

  var valueOwnedByDisplayName = $formValues.querySelector('.valueOwnedByDisplayName')?.value;
  if(valueOwnedByDisplayName != null && valueOwnedByDisplayName !== '')
    vals['ownedByDisplayName'] = valueOwnedByDisplayName;

  var valueAapOrganizationIdChange = $formValues.querySelector('.valueAapOrganizationIdChange')?.value;
  if(valueAapOrganizationIdChange != null && valueAapOrganizationIdChange !== '')
    vals['aapOrganizationIdChange'] = valueAapOrganizationIdChange;

  var valueJobTemplateIdChange = $formValues.querySelector('.valueJobTemplateIdChange')?.value;
  if(valueJobTemplateIdChange != null && valueJobTemplateIdChange !== '')
    vals['jobTemplateIdChange'] = valueJobTemplateIdChange;

  fetch(
    '/en-us/api/host-check-cr'
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

function postHostCheckCRVals(vals, target, success, error) {
  fetch(
    '/en-us/api/host-check-cr'
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

async function deleteHostCheckCR(target, changeRequestId, success, error) {
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
    '/en-us/api/host-check-cr/' + encodeURIComponent(changeRequestId)
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

async function putimportHostCheckCR($formValues, target, changeRequestId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportHostCheckCRVals(JSON.parse(json), target, success, error);
}

function putimportHostCheckCRVals(json, target, success, error) {
  fetch(
    '/en-us/api/host-check-cr-import'
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

async function deletefilterHostCheckCR(target, success, error) {
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
    '/en-us/api/host-check-cr'
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
