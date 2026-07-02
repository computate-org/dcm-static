Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#HostCheckCR_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostCheckCR_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#HostCheckCR_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostCheckCR_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH changeRequestId
          document.querySelector('#HostCheckCR_Page_changeRequestId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_changeRequestId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setChangeRequestId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_changeRequestId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_changeRequestId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_changeRequestId');
            const valid = form.reportValidity();
          });

          // PATCH createdByEmail
          document.querySelector('#HostCheckCR_Page_createdByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCreatedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_createdByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_createdByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.reportValidity();
          });

          // PATCH createdVia
          document.querySelector('#HostCheckCR_Page_createdVia')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCreatedVia', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_createdVia')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_createdVia')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.reportValidity();
          });

          // PATCH ownedByEmail
          document.querySelector('#HostCheckCR_Page_ownedByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ownedByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setOwnedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_ownedByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_ownedByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ownedByEmail');
            const valid = form.reportValidity();
          });

          // PATCH lifecycleState
          document.querySelector('#HostCheckCR_Page_lifecycleState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_lifecycleState');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setLifecycleState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_lifecycleState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_lifecycleState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_lifecycleState');
            const valid = form.reportValidity();
          });

          // PATCH intentState
          document.querySelector('#HostCheckCR_Page_intentState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setIntentState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_intentState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_intentState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.reportValidity();
          });

          // PATCH requestedState
          document.querySelector('#HostCheckCR_Page_requestedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setRequestedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_requestedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_requestedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.reportValidity();
          });

          // PATCH realizedState
          document.querySelector('#HostCheckCR_Page_realizedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setRealizedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_realizedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_realizedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.reportValidity();
          });

          // PATCH checkNameChange
          document.querySelector('#HostCheckCR_Page_checkNameChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkNameChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckNameChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkNameChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkNameChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkNameChange');
            const valid = form.reportValidity();
          });

          // PATCH checkDescriptionChange
          document.querySelector('#HostCheckCR_Page_checkDescriptionChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkDescriptionChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckDescriptionChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkDescriptionChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkDescriptionChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkDescriptionChange');
            const valid = form.reportValidity();
          });

          // PATCH checkNamespaceChange
          document.querySelector('#HostCheckCR_Page_checkNamespaceChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkNamespaceChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckNamespaceChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkNamespaceChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkNamespaceChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkNamespaceChange');
            const valid = form.reportValidity();
          });

          // PATCH checkCommandChange
          document.querySelector('#HostCheckCR_Page_checkCommandChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkCommandChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckCommandChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkCommandChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkCommandChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkCommandChange');
            const valid = form.reportValidity();
          });

          // PATCH checkIntervalChange
          document.querySelector('#HostCheckCR_Page_checkIntervalChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkIntervalChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckIntervalChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkIntervalChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkIntervalChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkIntervalChange');
            const valid = form.reportValidity();
          });

          // PATCH checkPublishedChange
          document.querySelector('#HostCheckCR_Page_checkPublishedChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkPublishedChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckPublishedChange', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkPublishedChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkPublishedChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkPublishedChange');
            const valid = form.reportValidity();
          });

          // PATCH eventSubscriptionsChange
          document.querySelector('#HostCheckCR_Page_eventSubscriptionsChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptionsChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setEventSubscriptionsChange', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_eventSubscriptionsChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_eventSubscriptionsChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptionsChange');
            const valid = form.reportValidity();
          });

          // PATCH eventHandlersChange
          document.querySelector('#HostCheckCR_Page_eventHandlersChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventHandlersChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setEventHandlersChange', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_eventHandlersChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_eventHandlersChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventHandlersChange');
            const valid = form.reportValidity();
          });

          // PATCH checkName
          document.querySelector('#HostCheckCR_Page_checkName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkName');
            const valid = form.reportValidity();
          });

          // PATCH checkDescription
          document.querySelector('#HostCheckCR_Page_checkDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkDescription');
            const valid = form.reportValidity();
          });

          // PATCH checkNamespace
          document.querySelector('#HostCheckCR_Page_checkNamespace')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkNamespace');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckNamespace', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkNamespace')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkNamespace')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkNamespace');
            const valid = form.reportValidity();
          });

          // PATCH checkCommand
          document.querySelector('#HostCheckCR_Page_checkCommand')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkCommand');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckCommand', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkCommand')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkCommand')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkCommand');
            const valid = form.reportValidity();
          });

          // PATCH checkInterval
          document.querySelector('#HostCheckCR_Page_checkInterval')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkInterval');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckInterval', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkInterval')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkInterval')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkInterval');
            const valid = form.reportValidity();
          });

          // PATCH checkPublished
          document.querySelector('#HostCheckCR_Page_checkPublished')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkPublished');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckPublished', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkPublished')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkPublished')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkPublished');
            const valid = form.reportValidity();
          });

          // PATCH eventSubscriptions
          document.querySelector('#HostCheckCR_Page_eventSubscriptions')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptions');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setEventSubscriptions', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_eventSubscriptions')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_eventSubscriptions')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptions');
            const valid = form.reportValidity();
          });

          // PATCH eventHandlers
          document.querySelector('#HostCheckCR_Page_eventHandlers')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventHandlers');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setEventHandlers', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_eventHandlers')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_eventHandlers')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventHandlers');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#HostCheckCR_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#HostCheckCR_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#HostCheckCR_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#HostCheckCR_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#HostCheckCR_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#HostCheckCR_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#HostCheckCR_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#HostCheckCR_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#HostCheckCR_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateId
          document.querySelector('#HostCheckCR_Page_jobTemplateId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setJobTemplateId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_jobTemplateId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_jobTemplateId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateId');
            const valid = form.reportValidity();
          });

          // PATCH aapTemplateId
          document.querySelector('#HostCheckCR_Page_aapTemplateId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapTemplateId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setAapTemplateId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_aapTemplateId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_aapTemplateId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapTemplateId');
            const valid = form.reportValidity();
          });

          // PATCH checkId
          document.querySelector('#HostCheckCR_Page_checkId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCheckId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_checkId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_checkId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkId');
            const valid = form.reportValidity();
          });

          // PATCH createdByUserId
          document.querySelector('#HostCheckCR_Page_createdByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCreatedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_createdByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_createdByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.reportValidity();
          });

          // PATCH createdByFullName
          document.querySelector('#HostCheckCR_Page_createdByFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setCreatedByFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_createdByFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_createdByFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.reportValidity();
          });

          // PATCH ownedByUserId
          document.querySelector('#HostCheckCR_Page_ownedByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ownedByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setOwnedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_ownedByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_ownedByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ownedByUserId');
            const valid = form.reportValidity();
          });

          // PATCH ownedByDisplayName
          document.querySelector('#HostCheckCR_Page_ownedByDisplayName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ownedByDisplayName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setOwnedByDisplayName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_ownedByDisplayName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_ownedByDisplayName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ownedByDisplayName');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationIdChange
          document.querySelector('#HostCheckCR_Page_aapOrganizationIdChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationIdChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setAapOrganizationIdChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_aapOrganizationIdChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_aapOrganizationIdChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationIdChange');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateIdChange
          document.querySelector('#HostCheckCR_Page_jobTemplateIdChange')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateIdChange');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckCRVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'changeRequestId:' + event.currentTarget.getAttribute('data-changeRequestId') }]
                  , 'setJobTemplateIdChange', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheckCR_Page_jobTemplateIdChange')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheckCR_Page_jobTemplateIdChange')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateIdChange');
            const valid = form.reportValidity();
          });
});
