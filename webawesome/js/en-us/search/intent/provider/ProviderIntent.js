
async function websocketProviderIntent(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketProviderIntent', function (error, message) {
      var json = JSON.parse(message['body']);
      var providerResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + providerResource + ' ');
      $box.setAttribute('id', 'box-' + providerResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + providerResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + providerResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + providerResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class=" fa-person-dolly"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify provider intents in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + providerResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + providerResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + providerResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + providerResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + providerResource);
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
        var $old_box = document.querySelector('.box-' + providerResource);
      } else {
        document.querySelector('.box-' + providerResource)?.remove();
      }
      if(providerResource) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketProviderIntentInner(apiRequest) {
  var providerResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(providerResource != null && vars.length > 0) {
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
        var inputProviderName = null;
        var inputDescription = null;
        var inputRequested = null;
        var inputLocked = null;
        var inputDcmDiscovered = null;
        var inputDcmRealized = null;
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
        var inputProviderUrl = null;
        var inputProviderId = null;
        var inputProviderResource = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.ProviderIntent_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.ProviderIntent_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.ProviderIntent_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.ProviderIntent_Page_archived');
        if(vars.includes('createdByEmail'))
          inputCreatedByEmail = $response.querySelector('.ProviderIntent_Page_createdByEmail');
        if(vars.includes('createdByUserId'))
          inputCreatedByUserId = $response.querySelector('.ProviderIntent_Page_createdByUserId');
        if(vars.includes('createdByFullName'))
          inputCreatedByFullName = $response.querySelector('.ProviderIntent_Page_createdByFullName');
        if(vars.includes('createdVia'))
          inputCreatedVia = $response.querySelector('.ProviderIntent_Page_createdVia');
        if(vars.includes('intentState'))
          inputIntentState = $response.querySelector('.ProviderIntent_Page_intentState');
        if(vars.includes('requestedState'))
          inputRequestedState = $response.querySelector('.ProviderIntent_Page_requestedState');
        if(vars.includes('realizedState'))
          inputRealizedState = $response.querySelector('.ProviderIntent_Page_realizedState');
        if(vars.includes('providerName'))
          inputProviderName = $response.querySelector('.ProviderIntent_Page_providerName');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.ProviderIntent_Page_description');
        if(vars.includes('requested'))
          inputRequested = $response.querySelector('.ProviderIntent_Page_requested');
        if(vars.includes('locked'))
          inputLocked = $response.querySelector('.ProviderIntent_Page_locked');
        if(vars.includes('dcmDiscovered'))
          inputDcmDiscovered = $response.querySelector('.ProviderIntent_Page_dcmDiscovered');
        if(vars.includes('dcmRealized'))
          inputDcmRealized = $response.querySelector('.ProviderIntent_Page_dcmRealized');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.ProviderIntent_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.ProviderIntent_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.ProviderIntent_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.ProviderIntent_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.ProviderIntent_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.ProviderIntent_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.ProviderIntent_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.ProviderIntent_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.ProviderIntent_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.ProviderIntent_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.ProviderIntent_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.ProviderIntent_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.ProviderIntent_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.ProviderIntent_Page_solrId');
        if(vars.includes('providerUrl'))
          inputProviderUrl = $response.querySelector('.ProviderIntent_Page_providerUrl');
        if(vars.includes('providerId'))
          inputProviderId = $response.querySelector('.ProviderIntent_Page_providerId');
        if(vars.includes('providerResource'))
          inputProviderResource = $response.querySelector('.ProviderIntent_Page_providerResource');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listProviderIntent = JSON.parse($response.querySelector('.pageForm .listProviderIntent')?.value);
        jsWebsocketProviderIntent(providerResource, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.ProviderIntent_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.ProviderIntent_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.ProviderIntent_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.ProviderIntent_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_archived'));
        }

        if(inputCreatedByEmail) {
          document.querySelectorAll('.ProviderIntent_Page_createdByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByEmail.getAttribute('value');
            else
              item.textContent = inputCreatedByEmail.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_createdByEmail'));
        }

        if(inputCreatedByUserId) {
          document.querySelectorAll('.ProviderIntent_Page_createdByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByUserId.getAttribute('value');
            else
              item.textContent = inputCreatedByUserId.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_createdByUserId'));
        }

        if(inputCreatedByFullName) {
          document.querySelectorAll('.ProviderIntent_Page_createdByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByFullName.getAttribute('value');
            else
              item.textContent = inputCreatedByFullName.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_createdByFullName'));
        }

        if(inputCreatedVia) {
          document.querySelectorAll('.ProviderIntent_Page_createdVia').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedVia.getAttribute('value');
            else
              item.textContent = inputCreatedVia.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_createdVia'));
        }

        if(inputIntentState) {
          document.querySelectorAll('.ProviderIntent_Page_intentState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputIntentState.getAttribute('value');
            else
              item.textContent = inputIntentState.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_intentState'));
        }

        if(inputRequestedState) {
          document.querySelectorAll('.ProviderIntent_Page_requestedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedState.getAttribute('value');
            else
              item.textContent = inputRequestedState.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_requestedState'));
        }

        if(inputRealizedState) {
          document.querySelectorAll('.ProviderIntent_Page_realizedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedState.getAttribute('value');
            else
              item.textContent = inputRealizedState.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_realizedState'));
        }

        if(inputProviderName) {
          document.querySelectorAll('.ProviderIntent_Page_providerName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderName.getAttribute('value');
            else
              item.textContent = inputProviderName.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_providerName'));
        }

        if(inputDescription) {
          document.querySelectorAll('.ProviderIntent_Page_description').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_description'));
        }

        if(inputRequested) {
          document.querySelectorAll('.ProviderIntent_Page_requested').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequested.getAttribute('value');
            else
              item.textContent = inputRequested.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_requested'));
        }

        if(inputLocked) {
          document.querySelectorAll('.ProviderIntent_Page_locked').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputLocked.getAttribute('value');
            else
              item.textContent = inputLocked.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_locked'));
        }

        if(inputDcmDiscovered) {
          document.querySelectorAll('.ProviderIntent_Page_dcmDiscovered').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDcmDiscovered.getAttribute('value');
            else
              item.textContent = inputDcmDiscovered.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_dcmDiscovered'));
        }

        if(inputDcmRealized) {
          document.querySelectorAll('.ProviderIntent_Page_dcmRealized').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDcmRealized.getAttribute('value');
            else
              item.textContent = inputDcmRealized.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_dcmRealized'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.ProviderIntent_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.ProviderIntent_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.ProviderIntent_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.ProviderIntent_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.ProviderIntent_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.ProviderIntent_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.ProviderIntent_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.ProviderIntent_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.ProviderIntent_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.ProviderIntent_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.ProviderIntent_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.ProviderIntent_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.ProviderIntent_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.ProviderIntent_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_solrId'));
        }

        if(inputProviderUrl) {
          document.querySelectorAll('.ProviderIntent_Page_providerUrl').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderUrl.getAttribute('value');
            else
              item.textContent = inputProviderUrl.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_providerUrl'));
        }

        if(inputProviderId) {
          document.querySelectorAll('.ProviderIntent_Page_providerId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderId.getAttribute('value');
            else
              item.textContent = inputProviderId.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_providerId'));
        }

        if(inputProviderResource) {
          document.querySelectorAll('.ProviderIntent_Page_providerResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderResource.getAttribute('value');
            else
              item.textContent = inputProviderResource.textContent;
          });
          addGlow(document.querySelector('.ProviderIntent_Page_providerResource'));
        }

          pageGraphProviderIntent();
      });
    });
  }
}

function pageGraphProviderIntent(apiRequest) {
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
          layout['title'] = 'provider intents';
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
          Plotly.react('htmBodyGraphProviderIntentPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqProviderIntent_time').innerText = '';
  searchPage('ProviderIntent', function() {
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
      document.querySelector('#fqProviderIntent_time').value = x;
      document.querySelector('#fqProviderIntent_time').onchange();
      searchPage('ProviderIntent');
    }, speedRate);
  });
}

// Search //

async function searchProviderIntent($formFilters, success, error) {
  var filters = searchProviderIntentFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchProviderIntentVals(filters, target, success, error);
}

function searchProviderIntentFilters($formFilters) {
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

    var filterProviderName = $formFilters.querySelector('.valueProviderName')?.value;
    if(filterProviderName != null && filterProviderName !== '')
      filters.push({ name: 'fq', value: 'providerName:' + filterProviderName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

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

    var filterDcmDiscovered = $formFilters.querySelector('.valueDcmDiscovered')?.value;
    if(filterDcmDiscovered != null && filterDcmDiscovered !== '')
      filters.push({ name: 'fq', value: 'dcmDiscovered:' + filterDcmDiscovered });

    var filterDcmRealized = $formFilters.querySelector('.valueDcmRealized')?.value;
    if(filterDcmRealized != null && filterDcmRealized !== '')
      filters.push({ name: 'fq', value: 'dcmRealized:' + filterDcmRealized });

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

    var filterProviderUrl = $formFilters.querySelector('.valueProviderUrl')?.value;
    if(filterProviderUrl != null && filterProviderUrl !== '')
      filters.push({ name: 'fq', value: 'providerUrl:' + filterProviderUrl });

    var filterProviderId = $formFilters.querySelector('.valueProviderId')?.value;
    if(filterProviderId != null && filterProviderId !== '')
      filters.push({ name: 'fq', value: 'providerId:' + filterProviderId });

    var filterProviderResource = $formFilters.querySelector('.valueProviderResource')?.value;
    if(filterProviderResource != null && filterProviderResource !== '')
      filters.push({ name: 'fq', value: 'providerResource:' + filterProviderResource });
  }
  return filters;
}

function searchProviderIntentVals(filters, target, success, error) {

  fetch(
    '/en-us/api/intent/provider?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestProviderIntentObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class=" fa-person-dolly"></i>');
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
  searchProviderIntentVals($formFilters, target, success, error);
}

// GET //

async function getProviderIntent(pk) {
  fetch(
    '/en-us/api/intent/provider/' + providerResource
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

async function patchProviderIntent($formFilters, $formValues, target, providerResource, success, error) {
  var filters = patchProviderIntentFilters($formFilters);

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

  var valueProviderName = $formValues.querySelector('.valueProviderName')?.value;
  var removeProviderName = $formValues.querySelector('.removeProviderName')?.value === 'true';
  var setProviderName = removeProviderName ? null : $formValues.querySelector('.setProviderName')?.value;
  var addProviderName = $formValues.querySelector('.addProviderName')?.value;
  if(removeProviderName || setProviderName != null && setProviderName !== '')
    vals['setProviderName'] = setProviderName;
  if(addProviderName != null && addProviderName !== '')
    vals['addProviderName'] = addProviderName;
  var removeProviderName = $formValues.querySelector('.removeProviderName')?.value;
  if(removeProviderName != null && removeProviderName !== '')
    vals['removeProviderName'] = removeProviderName;

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

  var valueRequested = $formValues.querySelector('.valueRequested')?.value;
  var removeRequested = $formValues.querySelector('.removeRequested')?.value === 'true';
  var setRequested = removeRequested ? null : $formValues.querySelector('.setRequested')?.value;
  var addRequested = $formValues.querySelector('.addRequested')?.value;
  if(removeRequested || setRequested != null && setRequested !== '')
    vals['setRequested'] = JSON.parse(setRequested);
  if(addRequested != null && addRequested !== '')
    vals['addRequested'] = addRequested;
  var removeRequested = $formValues.querySelector('.removeRequested')?.value;
  if(removeRequested != null && removeRequested !== '')
    vals['removeRequested'] = removeRequested;

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

  var valueDcmDiscovered = $formValues.querySelector('.valueDcmDiscovered')?.value;
  var removeDcmDiscovered = $formValues.querySelector('.removeDcmDiscovered')?.value === 'true';
  var setDcmDiscovered = removeDcmDiscovered ? null : $formValues.querySelector('.setDcmDiscovered')?.value;
  var addDcmDiscovered = $formValues.querySelector('.addDcmDiscovered')?.value;
  if(removeDcmDiscovered || setDcmDiscovered != null && setDcmDiscovered !== '')
    vals['setDcmDiscovered'] = JSON.parse(setDcmDiscovered);
  if(addDcmDiscovered != null && addDcmDiscovered !== '')
    vals['addDcmDiscovered'] = addDcmDiscovered;
  var removeDcmDiscovered = $formValues.querySelector('.removeDcmDiscovered')?.value;
  if(removeDcmDiscovered != null && removeDcmDiscovered !== '')
    vals['removeDcmDiscovered'] = removeDcmDiscovered;

  var valueDcmRealized = $formValues.querySelector('.valueDcmRealized')?.value;
  var removeDcmRealized = $formValues.querySelector('.removeDcmRealized')?.value === 'true';
  var setDcmRealized = removeDcmRealized ? null : $formValues.querySelector('.setDcmRealized')?.value;
  var addDcmRealized = $formValues.querySelector('.addDcmRealized')?.value;
  if(removeDcmRealized || setDcmRealized != null && setDcmRealized !== '')
    vals['setDcmRealized'] = JSON.parse(setDcmRealized);
  if(addDcmRealized != null && addDcmRealized !== '')
    vals['addDcmRealized'] = addDcmRealized;
  var removeDcmRealized = $formValues.querySelector('.removeDcmRealized')?.value;
  if(removeDcmRealized != null && removeDcmRealized !== '')
    vals['removeDcmRealized'] = removeDcmRealized;

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

  var valueProviderUrl = $formValues.querySelector('.valueProviderUrl')?.value;
  var removeProviderUrl = $formValues.querySelector('.removeProviderUrl')?.value === 'true';
  var setProviderUrl = removeProviderUrl ? null : $formValues.querySelector('.setProviderUrl')?.value;
  var addProviderUrl = $formValues.querySelector('.addProviderUrl')?.value;
  if(removeProviderUrl || setProviderUrl != null && setProviderUrl !== '')
    vals['setProviderUrl'] = setProviderUrl;
  if(addProviderUrl != null && addProviderUrl !== '')
    vals['addProviderUrl'] = addProviderUrl;
  var removeProviderUrl = $formValues.querySelector('.removeProviderUrl')?.value;
  if(removeProviderUrl != null && removeProviderUrl !== '')
    vals['removeProviderUrl'] = removeProviderUrl;

  var valueProviderId = $formValues.querySelector('.valueProviderId')?.value;
  var removeProviderId = $formValues.querySelector('.removeProviderId')?.value === 'true';
  var setProviderId = removeProviderId ? null : $formValues.querySelector('.setProviderId')?.value;
  var addProviderId = $formValues.querySelector('.addProviderId')?.value;
  if(removeProviderId || setProviderId != null && setProviderId !== '')
    vals['setProviderId'] = setProviderId;
  if(addProviderId != null && addProviderId !== '')
    vals['addProviderId'] = addProviderId;
  var removeProviderId = $formValues.querySelector('.removeProviderId')?.value;
  if(removeProviderId != null && removeProviderId !== '')
    vals['removeProviderId'] = removeProviderId;

  var valueProviderResource = $formValues.querySelector('.valueProviderResource')?.value;
  var removeProviderResource = $formValues.querySelector('.removeProviderResource')?.value === 'true';
  var setProviderResource = removeProviderResource ? null : $formValues.querySelector('.setProviderResource')?.value;
  var addProviderResource = $formValues.querySelector('.addProviderResource')?.value;
  if(removeProviderResource || setProviderResource != null && setProviderResource !== '')
    vals['setProviderResource'] = setProviderResource;
  if(addProviderResource != null && addProviderResource !== '')
    vals['addProviderResource'] = addProviderResource;
  var removeProviderResource = $formValues.querySelector('.removeProviderResource')?.value;
  if(removeProviderResource != null && removeProviderResource !== '')
    vals['removeProviderResource'] = removeProviderResource;

  patchProviderIntentVals(providerResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'providerResource:' + providerResource}], vals, target, success, error);
}

function patchProviderIntentFilters($formFilters) {
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

    var filterProviderName = $formFilters.querySelector('.valueProviderName')?.value;
    if(filterProviderName != null && filterProviderName !== '')
      filters.push({ name: 'fq', value: 'providerName:' + filterProviderName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

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

    var filterDcmDiscovered = $formFilters.querySelector('.valueDcmDiscovered')?.value;
    if(filterDcmDiscovered != null && filterDcmDiscovered !== '')
      filters.push({ name: 'fq', value: 'dcmDiscovered:' + filterDcmDiscovered });

    var filterDcmRealized = $formFilters.querySelector('.valueDcmRealized')?.value;
    if(filterDcmRealized != null && filterDcmRealized !== '')
      filters.push({ name: 'fq', value: 'dcmRealized:' + filterDcmRealized });

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

    var filterProviderUrl = $formFilters.querySelector('.valueProviderUrl')?.value;
    if(filterProviderUrl != null && filterProviderUrl !== '')
      filters.push({ name: 'fq', value: 'providerUrl:' + filterProviderUrl });

    var filterProviderId = $formFilters.querySelector('.valueProviderId')?.value;
    if(filterProviderId != null && filterProviderId !== '')
      filters.push({ name: 'fq', value: 'providerId:' + filterProviderId });

    var filterProviderResource = $formFilters.querySelector('.valueProviderResource')?.value;
    if(filterProviderResource != null && filterProviderResource !== '')
      filters.push({ name: 'fq', value: 'providerResource:' + filterProviderResource });
  }
  return filters;
}

function patchProviderIntentVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchProviderIntentVals(filters, vals, target, success, error);
}

function patchProviderIntentVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/intent/provider?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postProviderIntent($formValues, target, success, error) {
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

  var valueProviderName = $formValues.querySelector('.valueProviderName')?.value;
  if(valueProviderName != null && valueProviderName !== '')
    vals['providerName'] = valueProviderName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueRequested = $formValues.querySelector('.valueRequested')?.value;
  if(valueRequested != null && valueRequested !== '')
    vals['requested'] = JSON.parse(valueRequested);

  var valueLocked = $formValues.querySelector('.valueLocked')?.value;
  if(valueLocked != null && valueLocked !== '')
    vals['locked'] = valueLocked == 'true';

  var valueDcmDiscovered = $formValues.querySelector('.valueDcmDiscovered')?.value;
  if(valueDcmDiscovered != null && valueDcmDiscovered !== '')
    vals['dcmDiscovered'] = JSON.parse(valueDcmDiscovered);

  var valueDcmRealized = $formValues.querySelector('.valueDcmRealized')?.value;
  if(valueDcmRealized != null && valueDcmRealized !== '')
    vals['dcmRealized'] = JSON.parse(valueDcmRealized);

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

  var valueProviderUrl = $formValues.querySelector('.valueProviderUrl')?.value;
  if(valueProviderUrl != null && valueProviderUrl !== '')
    vals['providerUrl'] = valueProviderUrl;

  var valueProviderId = $formValues.querySelector('.valueProviderId')?.value;
  if(valueProviderId != null && valueProviderId !== '')
    vals['providerId'] = valueProviderId;

  var valueProviderResource = $formValues.querySelector('.valueProviderResource')?.value;
  if(valueProviderResource != null && valueProviderResource !== '')
    vals['providerResource'] = valueProviderResource;

  fetch(
    '/en-us/api/intent/provider'
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

function postProviderIntentVals(vals, target, success, error) {
  fetch(
    '/en-us/api/intent/provider'
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

async function deleteProviderIntent(target, providerResource, success, error) {
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
    '/en-us/api/intent/provider/' + encodeURIComponent(providerResource)
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

async function putimportProviderIntent($formValues, target, providerResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportProviderIntentVals(JSON.parse(json), target, success, error);
}

function putimportProviderIntentVals(json, target, success, error) {
  fetch(
    '/en-us/api/intent/provider-import'
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

async function deletefilterProviderIntent($formFilterstarget, success, error) {
  var filters = deletefilterProviderIntentFilters($formFilters);

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
    '/en-us/api/intent/provider?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function deletefilterProviderIntentFilters($formFilters) {
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

    var filterProviderName = $formFilters.querySelector('.valueProviderName')?.value;
    if(filterProviderName != null && filterProviderName !== '')
      filters.push({ name: 'fq', value: 'providerName:' + filterProviderName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

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

    var filterDcmDiscovered = $formFilters.querySelector('.valueDcmDiscovered')?.value;
    if(filterDcmDiscovered != null && filterDcmDiscovered !== '')
      filters.push({ name: 'fq', value: 'dcmDiscovered:' + filterDcmDiscovered });

    var filterDcmRealized = $formFilters.querySelector('.valueDcmRealized')?.value;
    if(filterDcmRealized != null && filterDcmRealized !== '')
      filters.push({ name: 'fq', value: 'dcmRealized:' + filterDcmRealized });

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

    var filterProviderUrl = $formFilters.querySelector('.valueProviderUrl')?.value;
    if(filterProviderUrl != null && filterProviderUrl !== '')
      filters.push({ name: 'fq', value: 'providerUrl:' + filterProviderUrl });

    var filterProviderId = $formFilters.querySelector('.valueProviderId')?.value;
    if(filterProviderId != null && filterProviderId !== '')
      filters.push({ name: 'fq', value: 'providerId:' + filterProviderId });

    var filterProviderResource = $formFilters.querySelector('.valueProviderResource')?.value;
    if(filterProviderResource != null && filterProviderResource !== '')
      filters.push({ name: 'fq', value: 'providerResource:' + filterProviderResource });
  }
  return filters;
}
