
async function websocketProviderRequested(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketProviderRequested', function (error, message) {
      var json = JSON.parse(message['body']);
      var requestedId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + requestedId + ' ');
      $box.setAttribute('id', 'box-' + requestedId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + requestedId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + requestedId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + requestedId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class=" fa-person-dolly"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify provider requesteds in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + requestedId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + requestedId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + requestedId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + requestedId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + requestedId);
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
        var $old_box = document.querySelector('.box-' + requestedId);
      } else {
        document.querySelector('.box-' + requestedId)?.remove();
      }
      if(requestedId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketProviderRequestedInner(apiRequest) {
  var requestedId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(requestedId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputProviderResource = null;
        var inputRequestApprovals = null;
        var inputCreatedByEmail = null;
        var inputCreatedByUserId = null;
        var inputCreatedByFullName = null;
        var inputCreatedVia = null;
        var inputIntentState = null;
        var inputRequestedState = null;
        var inputRealizedState = null;
        var inputProviderName = null;
        var inputDescription = null;
        var inputProviderRequestInstructions = null;
        var inputProviderUrl = null;
        var inputRequestedClientId = null;
        var inputRequestedEnvironmentVariable = null;
        var inputLocked = null;
        var inputProviderDiscovered = null;
        var inputProviderRealized = null;
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
        var inputProviderId = null;
        var inputRequestedNumber = null;
        var inputRequestedId = null;
        var inputRequestedName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.ProviderRequested_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.ProviderRequested_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.ProviderRequested_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.ProviderRequested_Page_archived');
        if(vars.includes('providerResource'))
          inputProviderResource = $response.querySelector('.ProviderRequested_Page_providerResource');
        if(vars.includes('requestApprovals'))
          inputRequestApprovals = $response.querySelector('.ProviderRequested_Page_requestApprovals');
        if(vars.includes('createdByEmail'))
          inputCreatedByEmail = $response.querySelector('.ProviderRequested_Page_createdByEmail');
        if(vars.includes('createdByUserId'))
          inputCreatedByUserId = $response.querySelector('.ProviderRequested_Page_createdByUserId');
        if(vars.includes('createdByFullName'))
          inputCreatedByFullName = $response.querySelector('.ProviderRequested_Page_createdByFullName');
        if(vars.includes('createdVia'))
          inputCreatedVia = $response.querySelector('.ProviderRequested_Page_createdVia');
        if(vars.includes('intentState'))
          inputIntentState = $response.querySelector('.ProviderRequested_Page_intentState');
        if(vars.includes('requestedState'))
          inputRequestedState = $response.querySelector('.ProviderRequested_Page_requestedState');
        if(vars.includes('realizedState'))
          inputRealizedState = $response.querySelector('.ProviderRequested_Page_realizedState');
        if(vars.includes('providerName'))
          inputProviderName = $response.querySelector('.ProviderRequested_Page_providerName');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.ProviderRequested_Page_description');
        if(vars.includes('providerRequestInstructions'))
          inputProviderRequestInstructions = $response.querySelector('.ProviderRequested_Page_providerRequestInstructions');
        if(vars.includes('providerUrl'))
          inputProviderUrl = $response.querySelector('.ProviderRequested_Page_providerUrl');
        if(vars.includes('requestedClientId'))
          inputRequestedClientId = $response.querySelector('.ProviderRequested_Page_requestedClientId');
        if(vars.includes('requestedEnvironmentVariable'))
          inputRequestedEnvironmentVariable = $response.querySelector('.ProviderRequested_Page_requestedEnvironmentVariable');
        if(vars.includes('locked'))
          inputLocked = $response.querySelector('.ProviderRequested_Page_locked');
        if(vars.includes('providerDiscovered'))
          inputProviderDiscovered = $response.querySelector('.ProviderRequested_Page_providerDiscovered');
        if(vars.includes('providerRealized'))
          inputProviderRealized = $response.querySelector('.ProviderRequested_Page_providerRealized');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.ProviderRequested_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.ProviderRequested_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.ProviderRequested_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.ProviderRequested_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.ProviderRequested_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.ProviderRequested_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.ProviderRequested_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.ProviderRequested_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.ProviderRequested_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.ProviderRequested_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.ProviderRequested_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.ProviderRequested_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.ProviderRequested_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.ProviderRequested_Page_solrId');
        if(vars.includes('providerId'))
          inputProviderId = $response.querySelector('.ProviderRequested_Page_providerId');
        if(vars.includes('requestedNumber'))
          inputRequestedNumber = $response.querySelector('.ProviderRequested_Page_requestedNumber');
        if(vars.includes('requestedId'))
          inputRequestedId = $response.querySelector('.ProviderRequested_Page_requestedId');
        if(vars.includes('requestedName'))
          inputRequestedName = $response.querySelector('.ProviderRequested_Page_requestedName');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listProviderRequested = JSON.parse($response.querySelector('.pageForm .listProviderRequested')?.value);
        jsWebsocketProviderRequested(requestedId, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.ProviderRequested_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.ProviderRequested_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.ProviderRequested_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.ProviderRequested_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_archived'));
        }

        if(inputProviderResource) {
          document.querySelectorAll('.ProviderRequested_Page_providerResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderResource.getAttribute('value');
            else
              item.textContent = inputProviderResource.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerResource'));
        }

        if(inputRequestApprovals) {
          document.querySelectorAll('.ProviderRequested_Page_requestApprovals').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestApprovals.getAttribute('value');
            else
              item.textContent = inputRequestApprovals.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestApprovals'));
        }

        if(inputCreatedByEmail) {
          document.querySelectorAll('.ProviderRequested_Page_createdByEmail').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByEmail.getAttribute('value');
            else
              item.textContent = inputCreatedByEmail.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_createdByEmail'));
        }

        if(inputCreatedByUserId) {
          document.querySelectorAll('.ProviderRequested_Page_createdByUserId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByUserId.getAttribute('value');
            else
              item.textContent = inputCreatedByUserId.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_createdByUserId'));
        }

        if(inputCreatedByFullName) {
          document.querySelectorAll('.ProviderRequested_Page_createdByFullName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedByFullName.getAttribute('value');
            else
              item.textContent = inputCreatedByFullName.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_createdByFullName'));
        }

        if(inputCreatedVia) {
          document.querySelectorAll('.ProviderRequested_Page_createdVia').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedVia.getAttribute('value');
            else
              item.textContent = inputCreatedVia.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_createdVia'));
        }

        if(inputIntentState) {
          document.querySelectorAll('.ProviderRequested_Page_intentState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputIntentState.getAttribute('value');
            else
              item.textContent = inputIntentState.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_intentState'));
        }

        if(inputRequestedState) {
          document.querySelectorAll('.ProviderRequested_Page_requestedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedState.getAttribute('value');
            else
              item.textContent = inputRequestedState.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestedState'));
        }

        if(inputRealizedState) {
          document.querySelectorAll('.ProviderRequested_Page_realizedState').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRealizedState.getAttribute('value');
            else
              item.textContent = inputRealizedState.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_realizedState'));
        }

        if(inputProviderName) {
          document.querySelectorAll('.ProviderRequested_Page_providerName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderName.getAttribute('value');
            else
              item.textContent = inputProviderName.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerName'));
        }

        if(inputDescription) {
          document.querySelectorAll('.ProviderRequested_Page_description').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_description'));
        }

        if(inputProviderRequestInstructions) {
          document.querySelectorAll('.ProviderRequested_Page_providerRequestInstructions').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderRequestInstructions.getAttribute('value');
            else
              item.textContent = inputProviderRequestInstructions.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerRequestInstructions'));
        }

        if(inputProviderUrl) {
          document.querySelectorAll('.ProviderRequested_Page_providerUrl').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderUrl.getAttribute('value');
            else
              item.textContent = inputProviderUrl.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerUrl'));
        }

        if(inputRequestedClientId) {
          document.querySelectorAll('.ProviderRequested_Page_requestedClientId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedClientId.getAttribute('value');
            else
              item.textContent = inputRequestedClientId.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestedClientId'));
        }

        if(inputRequestedEnvironmentVariable) {
          document.querySelectorAll('.ProviderRequested_Page_requestedEnvironmentVariable').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedEnvironmentVariable.getAttribute('value');
            else
              item.textContent = inputRequestedEnvironmentVariable.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestedEnvironmentVariable'));
        }

        if(inputLocked) {
          document.querySelectorAll('.ProviderRequested_Page_locked').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputLocked.getAttribute('value');
            else
              item.textContent = inputLocked.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_locked'));
        }

        if(inputProviderDiscovered) {
          document.querySelectorAll('.ProviderRequested_Page_providerDiscovered').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderDiscovered.getAttribute('value');
            else
              item.textContent = inputProviderDiscovered.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerDiscovered'));
        }

        if(inputProviderRealized) {
          document.querySelectorAll('.ProviderRequested_Page_providerRealized').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderRealized.getAttribute('value');
            else
              item.textContent = inputProviderRealized.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerRealized'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.ProviderRequested_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.ProviderRequested_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.ProviderRequested_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.ProviderRequested_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.ProviderRequested_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.ProviderRequested_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.ProviderRequested_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.ProviderRequested_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.ProviderRequested_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.ProviderRequested_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.ProviderRequested_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.ProviderRequested_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.ProviderRequested_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.ProviderRequested_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_solrId'));
        }

        if(inputProviderId) {
          document.querySelectorAll('.ProviderRequested_Page_providerId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProviderId.getAttribute('value');
            else
              item.textContent = inputProviderId.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_providerId'));
        }

        if(inputRequestedNumber) {
          document.querySelectorAll('.ProviderRequested_Page_requestedNumber').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedNumber.getAttribute('value');
            else
              item.textContent = inputRequestedNumber.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestedNumber'));
        }

        if(inputRequestedId) {
          document.querySelectorAll('.ProviderRequested_Page_requestedId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedId.getAttribute('value');
            else
              item.textContent = inputRequestedId.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestedId'));
        }

        if(inputRequestedName) {
          document.querySelectorAll('.ProviderRequested_Page_requestedName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputRequestedName.getAttribute('value');
            else
              item.textContent = inputRequestedName.textContent;
          });
          addGlow(document.querySelector('.ProviderRequested_Page_requestedName'));
        }

          pageGraphProviderRequested();
      });
    });
  }
}

function pageGraphProviderRequested(apiRequest) {
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
          layout['title'] = 'provider requesteds';
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
          Plotly.react('htmBodyGraphProviderRequestedPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqProviderRequested_time').innerText = '';
  searchPage('ProviderRequested', function() {
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
      document.querySelector('#fqProviderRequested_time').value = x;
      document.querySelector('#fqProviderRequested_time').onchange();
      searchPage('ProviderRequested');
    }, speedRate);
  });
}

// Search //

async function searchProviderRequested($formFilters, success, error) {
  var filters = searchProviderRequestedFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchProviderRequestedVals(filters, target, success, error);
}

function searchProviderRequestedFilters($formFilters) {
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

    var filterProviderResource = $formFilters.querySelector('.valueProviderResource')?.value;
    if(filterProviderResource != null && filterProviderResource !== '')
      filters.push({ name: 'fq', value: 'providerResource:' + filterProviderResource });

    var filterRequestApprovals = $formFilters.querySelector('.valueRequestApprovals')?.value;
    if(filterRequestApprovals != null && filterRequestApprovals !== '')
      filters.push({ name: 'fq', value: 'requestApprovals:' + filterRequestApprovals });

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

    var filterProviderRequestInstructions = $formFilters.querySelector('.valueProviderRequestInstructions')?.value;
    if(filterProviderRequestInstructions != null && filterProviderRequestInstructions !== '')
      filters.push({ name: 'fq', value: 'providerRequestInstructions:' + filterProviderRequestInstructions });

    var filterProviderUrl = $formFilters.querySelector('.valueProviderUrl')?.value;
    if(filterProviderUrl != null && filterProviderUrl !== '')
      filters.push({ name: 'fq', value: 'providerUrl:' + filterProviderUrl });

    var filterRequestedClientId = $formFilters.querySelector('.valueRequestedClientId')?.value;
    if(filterRequestedClientId != null && filterRequestedClientId !== '')
      filters.push({ name: 'fq', value: 'requestedClientId:' + filterRequestedClientId });

    var filterRequestedEnvironmentVariable = $formFilters.querySelector('.valueRequestedEnvironmentVariable')?.value;
    if(filterRequestedEnvironmentVariable != null && filterRequestedEnvironmentVariable !== '')
      filters.push({ name: 'fq', value: 'requestedEnvironmentVariable:' + filterRequestedEnvironmentVariable });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterProviderDiscovered = $formFilters.querySelector('.valueProviderDiscovered')?.value;
    if(filterProviderDiscovered != null && filterProviderDiscovered !== '')
      filters.push({ name: 'fq', value: 'providerDiscovered:' + filterProviderDiscovered });

    var filterProviderRealized = $formFilters.querySelector('.valueProviderRealized')?.value;
    if(filterProviderRealized != null && filterProviderRealized !== '')
      filters.push({ name: 'fq', value: 'providerRealized:' + filterProviderRealized });

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

    var filterProviderId = $formFilters.querySelector('.valueProviderId')?.value;
    if(filterProviderId != null && filterProviderId !== '')
      filters.push({ name: 'fq', value: 'providerId:' + filterProviderId });

    var filterRequestedNumber = $formFilters.querySelector('.valueRequestedNumber')?.value;
    if(filterRequestedNumber != null && filterRequestedNumber !== '')
      filters.push({ name: 'fq', value: 'requestedNumber:' + filterRequestedNumber });

    var filterRequestedId = $formFilters.querySelector('.valueRequestedId')?.value;
    if(filterRequestedId != null && filterRequestedId !== '')
      filters.push({ name: 'fq', value: 'requestedId:' + filterRequestedId });

    var filterRequestedName = $formFilters.querySelector('.valueRequestedName')?.value;
    if(filterRequestedName != null && filterRequestedName !== '')
      filters.push({ name: 'fq', value: 'requestedName:' + filterRequestedName });
  }
  return filters;
}

function searchProviderRequestedVals(filters, target, success, error) {

  fetch(
    '/en-us/api/requested/provider?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestProviderRequestedProviderResource(filters, $list, requestedIdProviderRequested = null, providerResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class=" fa-person-dolly"></i>';
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
        var inputVar = 'providerResource';
        var val = o[inputVar];
        var checked = val == null ? false : (providerResource != null && val === providerResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_providerResource_' + requestedIdProviderRequested + '_providerResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueProviderResource ');
        if(requestedIdProviderRequested != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchProviderRequestedVals([{ name: 'fq', value: 'requestedId:' + requestedIdProviderRequested }], { [(event.target.checked ? 'set' : 'remove') + 'ProviderResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestProviderRequestedProviderResource(filters, $list, requestedIdProviderRequested, o[inputVar], relate, target);
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
  if (typeof searchProviderIntentVals === 'function') {
    searchProviderIntentVals(filters, target, success, error);
  }
}

function suggestProviderRequestedObjectSuggest($formFilters, $list, target) {
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
  searchProviderRequestedVals($formFilters, target, success, error);
}

// GET //

async function getProviderRequested(pk) {
  fetch(
    '/en-us/api/requested/provider/' + requestedId
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

async function patchProviderRequested($formFilters, $formValues, target, requestedId, success, error) {
  var filters = patchProviderRequestedFilters($formFilters);

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

  var valueProviderResource = (Array.from($formValues.querySelectorAll('.valueProviderResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueProviderResource != null && valueProviderResource !== '')
    vals['setProviderResource'] = valueProviderResource;

  var valueRequestApprovals = $formValues.querySelector('.valueRequestApprovals')?.value;
  var removeRequestApprovals = $formValues.querySelector('.removeRequestApprovals')?.value === 'true';
  var setRequestApprovals = removeRequestApprovals ? null : $formValues.querySelector('.setRequestApprovals')?.value;
  var addRequestApprovals = $formValues.querySelector('.addRequestApprovals')?.value;
  if(removeRequestApprovals || setRequestApprovals != null && setRequestApprovals !== '')
    vals['setRequestApprovals'] = JSON.parse(setRequestApprovals);
  if(addRequestApprovals != null && addRequestApprovals !== '')
    vals['addRequestApprovals'] = addRequestApprovals;
  var removeRequestApprovals = $formValues.querySelector('.removeRequestApprovals')?.value;
  if(removeRequestApprovals != null && removeRequestApprovals !== '')
    vals['removeRequestApprovals'] = removeRequestApprovals;

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

  var valueProviderRequestInstructions = $formValues.querySelector('.valueProviderRequestInstructions')?.value;
  var removeProviderRequestInstructions = $formValues.querySelector('.removeProviderRequestInstructions')?.value === 'true';
  var setProviderRequestInstructions = removeProviderRequestInstructions ? null : $formValues.querySelector('.setProviderRequestInstructions')?.value;
  var addProviderRequestInstructions = $formValues.querySelector('.addProviderRequestInstructions')?.value;
  if(removeProviderRequestInstructions || setProviderRequestInstructions != null && setProviderRequestInstructions !== '')
    vals['setProviderRequestInstructions'] = setProviderRequestInstructions;
  if(addProviderRequestInstructions != null && addProviderRequestInstructions !== '')
    vals['addProviderRequestInstructions'] = addProviderRequestInstructions;
  var removeProviderRequestInstructions = $formValues.querySelector('.removeProviderRequestInstructions')?.value;
  if(removeProviderRequestInstructions != null && removeProviderRequestInstructions !== '')
    vals['removeProviderRequestInstructions'] = removeProviderRequestInstructions;

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

  var valueRequestedClientId = $formValues.querySelector('.valueRequestedClientId')?.value;
  var removeRequestedClientId = $formValues.querySelector('.removeRequestedClientId')?.value === 'true';
  var setRequestedClientId = removeRequestedClientId ? null : $formValues.querySelector('.setRequestedClientId')?.value;
  var addRequestedClientId = $formValues.querySelector('.addRequestedClientId')?.value;
  if(removeRequestedClientId || setRequestedClientId != null && setRequestedClientId !== '')
    vals['setRequestedClientId'] = setRequestedClientId;
  if(addRequestedClientId != null && addRequestedClientId !== '')
    vals['addRequestedClientId'] = addRequestedClientId;
  var removeRequestedClientId = $formValues.querySelector('.removeRequestedClientId')?.value;
  if(removeRequestedClientId != null && removeRequestedClientId !== '')
    vals['removeRequestedClientId'] = removeRequestedClientId;

  var valueRequestedEnvironmentVariable = $formValues.querySelector('.valueRequestedEnvironmentVariable')?.value;
  var removeRequestedEnvironmentVariable = $formValues.querySelector('.removeRequestedEnvironmentVariable')?.value === 'true';
  var setRequestedEnvironmentVariable = removeRequestedEnvironmentVariable ? null : $formValues.querySelector('.setRequestedEnvironmentVariable')?.value;
  var addRequestedEnvironmentVariable = $formValues.querySelector('.addRequestedEnvironmentVariable')?.value;
  if(removeRequestedEnvironmentVariable || setRequestedEnvironmentVariable != null && setRequestedEnvironmentVariable !== '')
    vals['setRequestedEnvironmentVariable'] = setRequestedEnvironmentVariable;
  if(addRequestedEnvironmentVariable != null && addRequestedEnvironmentVariable !== '')
    vals['addRequestedEnvironmentVariable'] = addRequestedEnvironmentVariable;
  var removeRequestedEnvironmentVariable = $formValues.querySelector('.removeRequestedEnvironmentVariable')?.value;
  if(removeRequestedEnvironmentVariable != null && removeRequestedEnvironmentVariable !== '')
    vals['removeRequestedEnvironmentVariable'] = removeRequestedEnvironmentVariable;

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

  var valueProviderDiscovered = $formValues.querySelector('.valueProviderDiscovered')?.value;
  var removeProviderDiscovered = $formValues.querySelector('.removeProviderDiscovered')?.value === 'true';
  var setProviderDiscovered = removeProviderDiscovered ? null : $formValues.querySelector('.setProviderDiscovered')?.value;
  var addProviderDiscovered = $formValues.querySelector('.addProviderDiscovered')?.value;
  if(removeProviderDiscovered || setProviderDiscovered != null && setProviderDiscovered !== '')
    vals['setProviderDiscovered'] = JSON.parse(setProviderDiscovered);
  if(addProviderDiscovered != null && addProviderDiscovered !== '')
    vals['addProviderDiscovered'] = addProviderDiscovered;
  var removeProviderDiscovered = $formValues.querySelector('.removeProviderDiscovered')?.value;
  if(removeProviderDiscovered != null && removeProviderDiscovered !== '')
    vals['removeProviderDiscovered'] = removeProviderDiscovered;

  var valueProviderRealized = $formValues.querySelector('.valueProviderRealized')?.value;
  var removeProviderRealized = $formValues.querySelector('.removeProviderRealized')?.value === 'true';
  var setProviderRealized = removeProviderRealized ? null : $formValues.querySelector('.setProviderRealized')?.value;
  var addProviderRealized = $formValues.querySelector('.addProviderRealized')?.value;
  if(removeProviderRealized || setProviderRealized != null && setProviderRealized !== '')
    vals['setProviderRealized'] = JSON.parse(setProviderRealized);
  if(addProviderRealized != null && addProviderRealized !== '')
    vals['addProviderRealized'] = addProviderRealized;
  var removeProviderRealized = $formValues.querySelector('.removeProviderRealized')?.value;
  if(removeProviderRealized != null && removeProviderRealized !== '')
    vals['removeProviderRealized'] = removeProviderRealized;

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

  var valueRequestedNumber = $formValues.querySelector('.valueRequestedNumber')?.value;
  var removeRequestedNumber = $formValues.querySelector('.removeRequestedNumber')?.value === 'true';
  var setRequestedNumber = removeRequestedNumber ? null : $formValues.querySelector('.setRequestedNumber')?.value;
  var addRequestedNumber = $formValues.querySelector('.addRequestedNumber')?.value;
  if(removeRequestedNumber || setRequestedNumber != null && setRequestedNumber !== '')
    vals['setRequestedNumber'] = setRequestedNumber;
  if(addRequestedNumber != null && addRequestedNumber !== '')
    vals['addRequestedNumber'] = addRequestedNumber;
  var removeRequestedNumber = $formValues.querySelector('.removeRequestedNumber')?.value;
  if(removeRequestedNumber != null && removeRequestedNumber !== '')
    vals['removeRequestedNumber'] = removeRequestedNumber;

  var valueRequestedId = $formValues.querySelector('.valueRequestedId')?.value;
  var removeRequestedId = $formValues.querySelector('.removeRequestedId')?.value === 'true';
  var setRequestedId = removeRequestedId ? null : $formValues.querySelector('.setRequestedId')?.value;
  var addRequestedId = $formValues.querySelector('.addRequestedId')?.value;
  if(removeRequestedId || setRequestedId != null && setRequestedId !== '')
    vals['setRequestedId'] = setRequestedId;
  if(addRequestedId != null && addRequestedId !== '')
    vals['addRequestedId'] = addRequestedId;
  var removeRequestedId = $formValues.querySelector('.removeRequestedId')?.value;
  if(removeRequestedId != null && removeRequestedId !== '')
    vals['removeRequestedId'] = removeRequestedId;

  var valueRequestedName = $formValues.querySelector('.valueRequestedName')?.value;
  var removeRequestedName = $formValues.querySelector('.removeRequestedName')?.value === 'true';
  var setRequestedName = removeRequestedName ? null : $formValues.querySelector('.setRequestedName')?.value;
  var addRequestedName = $formValues.querySelector('.addRequestedName')?.value;
  if(removeRequestedName || setRequestedName != null && setRequestedName !== '')
    vals['setRequestedName'] = setRequestedName;
  if(addRequestedName != null && addRequestedName !== '')
    vals['addRequestedName'] = addRequestedName;
  var removeRequestedName = $formValues.querySelector('.removeRequestedName')?.value;
  if(removeRequestedName != null && removeRequestedName !== '')
    vals['removeRequestedName'] = removeRequestedName;

  patchProviderRequestedVals(requestedId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'requestedId:' + requestedId}], vals, target, success, error);
}

function patchProviderRequestedFilters($formFilters) {
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

    var filterProviderResource = $formFilters.querySelector('.valueProviderResource')?.value;
    if(filterProviderResource != null && filterProviderResource !== '')
      filters.push({ name: 'fq', value: 'providerResource:' + filterProviderResource });

    var filterRequestApprovals = $formFilters.querySelector('.valueRequestApprovals')?.value;
    if(filterRequestApprovals != null && filterRequestApprovals !== '')
      filters.push({ name: 'fq', value: 'requestApprovals:' + filterRequestApprovals });

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

    var filterProviderRequestInstructions = $formFilters.querySelector('.valueProviderRequestInstructions')?.value;
    if(filterProviderRequestInstructions != null && filterProviderRequestInstructions !== '')
      filters.push({ name: 'fq', value: 'providerRequestInstructions:' + filterProviderRequestInstructions });

    var filterProviderUrl = $formFilters.querySelector('.valueProviderUrl')?.value;
    if(filterProviderUrl != null && filterProviderUrl !== '')
      filters.push({ name: 'fq', value: 'providerUrl:' + filterProviderUrl });

    var filterRequestedClientId = $formFilters.querySelector('.valueRequestedClientId')?.value;
    if(filterRequestedClientId != null && filterRequestedClientId !== '')
      filters.push({ name: 'fq', value: 'requestedClientId:' + filterRequestedClientId });

    var filterRequestedEnvironmentVariable = $formFilters.querySelector('.valueRequestedEnvironmentVariable')?.value;
    if(filterRequestedEnvironmentVariable != null && filterRequestedEnvironmentVariable !== '')
      filters.push({ name: 'fq', value: 'requestedEnvironmentVariable:' + filterRequestedEnvironmentVariable });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterProviderDiscovered = $formFilters.querySelector('.valueProviderDiscovered')?.value;
    if(filterProviderDiscovered != null && filterProviderDiscovered !== '')
      filters.push({ name: 'fq', value: 'providerDiscovered:' + filterProviderDiscovered });

    var filterProviderRealized = $formFilters.querySelector('.valueProviderRealized')?.value;
    if(filterProviderRealized != null && filterProviderRealized !== '')
      filters.push({ name: 'fq', value: 'providerRealized:' + filterProviderRealized });

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

    var filterProviderId = $formFilters.querySelector('.valueProviderId')?.value;
    if(filterProviderId != null && filterProviderId !== '')
      filters.push({ name: 'fq', value: 'providerId:' + filterProviderId });

    var filterRequestedNumber = $formFilters.querySelector('.valueRequestedNumber')?.value;
    if(filterRequestedNumber != null && filterRequestedNumber !== '')
      filters.push({ name: 'fq', value: 'requestedNumber:' + filterRequestedNumber });

    var filterRequestedId = $formFilters.querySelector('.valueRequestedId')?.value;
    if(filterRequestedId != null && filterRequestedId !== '')
      filters.push({ name: 'fq', value: 'requestedId:' + filterRequestedId });

    var filterRequestedName = $formFilters.querySelector('.valueRequestedName')?.value;
    if(filterRequestedName != null && filterRequestedName !== '')
      filters.push({ name: 'fq', value: 'requestedName:' + filterRequestedName });
  }
  return filters;
}

function patchProviderRequestedVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchProviderRequestedVals(filters, vals, target, success, error);
}

function patchProviderRequestedVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/requested/provider?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postProviderRequested($formValues, target, success, error) {
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

  var valueProviderResource = (Array.from($formValues.querySelectorAll('.valueProviderResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueProviderResource != null && valueProviderResource !== '')
    vals['providerResource'] = valueProviderResource;

  var valueRequestApprovals = $formValues.querySelector('.valueRequestApprovals')?.value;
  if(valueRequestApprovals != null && valueRequestApprovals !== '')
    vals['requestApprovals'] = JSON.parse(valueRequestApprovals);

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

  var valueProviderRequestInstructions = $formValues.querySelector('.valueProviderRequestInstructions')?.value;
  if(valueProviderRequestInstructions != null && valueProviderRequestInstructions !== '')
    vals['providerRequestInstructions'] = valueProviderRequestInstructions;

  var valueProviderUrl = $formValues.querySelector('.valueProviderUrl')?.value;
  if(valueProviderUrl != null && valueProviderUrl !== '')
    vals['providerUrl'] = valueProviderUrl;

  var valueRequestedClientId = $formValues.querySelector('.valueRequestedClientId')?.value;
  if(valueRequestedClientId != null && valueRequestedClientId !== '')
    vals['requestedClientId'] = valueRequestedClientId;

  var valueRequestedEnvironmentVariable = $formValues.querySelector('.valueRequestedEnvironmentVariable')?.value;
  if(valueRequestedEnvironmentVariable != null && valueRequestedEnvironmentVariable !== '')
    vals['requestedEnvironmentVariable'] = valueRequestedEnvironmentVariable;

  var valueLocked = $formValues.querySelector('.valueLocked')?.value;
  if(valueLocked != null && valueLocked !== '')
    vals['locked'] = valueLocked == 'true';

  var valueProviderDiscovered = $formValues.querySelector('.valueProviderDiscovered')?.value;
  if(valueProviderDiscovered != null && valueProviderDiscovered !== '')
    vals['providerDiscovered'] = JSON.parse(valueProviderDiscovered);

  var valueProviderRealized = $formValues.querySelector('.valueProviderRealized')?.value;
  if(valueProviderRealized != null && valueProviderRealized !== '')
    vals['providerRealized'] = JSON.parse(valueProviderRealized);

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

  var valueProviderId = $formValues.querySelector('.valueProviderId')?.value;
  if(valueProviderId != null && valueProviderId !== '')
    vals['providerId'] = valueProviderId;

  var valueRequestedNumber = $formValues.querySelector('.valueRequestedNumber')?.value;
  if(valueRequestedNumber != null && valueRequestedNumber !== '')
    vals['requestedNumber'] = valueRequestedNumber;

  var valueRequestedId = $formValues.querySelector('.valueRequestedId')?.value;
  if(valueRequestedId != null && valueRequestedId !== '')
    vals['requestedId'] = valueRequestedId;

  var valueRequestedName = $formValues.querySelector('.valueRequestedName')?.value;
  if(valueRequestedName != null && valueRequestedName !== '')
    vals['requestedName'] = valueRequestedName;

  fetch(
    '/en-us/api/requested/provider'
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

function postProviderRequestedVals(vals, target, success, error) {
  fetch(
    '/en-us/api/requested/provider'
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

async function deleteProviderRequested(target, requestedId, success, error) {
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
    '/en-us/api/requested/provider/' + encodeURIComponent(requestedId)
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

async function putimportProviderRequested($formValues, target, requestedId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportProviderRequestedVals(JSON.parse(json), target, success, error);
}

function putimportProviderRequestedVals(json, target, success, error) {
  fetch(
    '/en-us/api/requested/provider-import'
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

async function deletefilterProviderRequested($formFilterstarget, success, error) {
  var filters = deletefilterProviderRequestedFilters($formFilters);

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
    '/en-us/api/requested/provider?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function deletefilterProviderRequestedFilters($formFilters) {
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

    var filterProviderResource = $formFilters.querySelector('.valueProviderResource')?.value;
    if(filterProviderResource != null && filterProviderResource !== '')
      filters.push({ name: 'fq', value: 'providerResource:' + filterProviderResource });

    var filterRequestApprovals = $formFilters.querySelector('.valueRequestApprovals')?.value;
    if(filterRequestApprovals != null && filterRequestApprovals !== '')
      filters.push({ name: 'fq', value: 'requestApprovals:' + filterRequestApprovals });

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

    var filterProviderRequestInstructions = $formFilters.querySelector('.valueProviderRequestInstructions')?.value;
    if(filterProviderRequestInstructions != null && filterProviderRequestInstructions !== '')
      filters.push({ name: 'fq', value: 'providerRequestInstructions:' + filterProviderRequestInstructions });

    var filterProviderUrl = $formFilters.querySelector('.valueProviderUrl')?.value;
    if(filterProviderUrl != null && filterProviderUrl !== '')
      filters.push({ name: 'fq', value: 'providerUrl:' + filterProviderUrl });

    var filterRequestedClientId = $formFilters.querySelector('.valueRequestedClientId')?.value;
    if(filterRequestedClientId != null && filterRequestedClientId !== '')
      filters.push({ name: 'fq', value: 'requestedClientId:' + filterRequestedClientId });

    var filterRequestedEnvironmentVariable = $formFilters.querySelector('.valueRequestedEnvironmentVariable')?.value;
    if(filterRequestedEnvironmentVariable != null && filterRequestedEnvironmentVariable !== '')
      filters.push({ name: 'fq', value: 'requestedEnvironmentVariable:' + filterRequestedEnvironmentVariable });

    var $filterLockedCheckbox = $formFilters.querySelector('input.valueLocked[type = "checkbox"]');
    var $filterLockedSelect = $formFilters.querySelector('select.valueLocked');
    var filterLocked = $filterLockedSelect.length ? $filterLockedSelect.value : $filterLockedCheckbox.checked;
    var filterLockedSelectVal = $formFilters.querySelector('select.filterLocked')?.value;
    var filterLocked = null;
    if(filterLockedSelectVal !== '')
      filterLocked = filterLockedSelectVal == 'true';
    if(filterLocked != null && filterLocked === true)
      filters.push({ name: 'fq', value: 'locked:' + filterLocked });

    var filterProviderDiscovered = $formFilters.querySelector('.valueProviderDiscovered')?.value;
    if(filterProviderDiscovered != null && filterProviderDiscovered !== '')
      filters.push({ name: 'fq', value: 'providerDiscovered:' + filterProviderDiscovered });

    var filterProviderRealized = $formFilters.querySelector('.valueProviderRealized')?.value;
    if(filterProviderRealized != null && filterProviderRealized !== '')
      filters.push({ name: 'fq', value: 'providerRealized:' + filterProviderRealized });

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

    var filterProviderId = $formFilters.querySelector('.valueProviderId')?.value;
    if(filterProviderId != null && filterProviderId !== '')
      filters.push({ name: 'fq', value: 'providerId:' + filterProviderId });

    var filterRequestedNumber = $formFilters.querySelector('.valueRequestedNumber')?.value;
    if(filterRequestedNumber != null && filterRequestedNumber !== '')
      filters.push({ name: 'fq', value: 'requestedNumber:' + filterRequestedNumber });

    var filterRequestedId = $formFilters.querySelector('.valueRequestedId')?.value;
    if(filterRequestedId != null && filterRequestedId !== '')
      filters.push({ name: 'fq', value: 'requestedId:' + filterRequestedId });

    var filterRequestedName = $formFilters.querySelector('.valueRequestedName')?.value;
    if(filterRequestedName != null && filterRequestedName !== '')
      filters.push({ name: 'fq', value: 'requestedName:' + filterRequestedName });
  }
  return filters;
}
