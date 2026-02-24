Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#HostCheck_Page_created')?.addEventListener('change', (event) => {
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
                patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostCheck_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#HostCheck_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostCheck_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH checkName
          document.querySelector('#HostCheck_Page_checkName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setCheckName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_checkName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_checkName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkName');
            const valid = form.reportValidity();
          });

          // PATCH checkDescription
          document.querySelector('#HostCheck_Page_checkDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setCheckDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_checkDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_checkDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkDescription');
            const valid = form.reportValidity();
          });

          // PATCH checkNamespace
          document.querySelector('#HostCheck_Page_checkNamespace')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkNamespace');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setCheckNamespace', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_checkNamespace')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_checkNamespace')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkNamespace');
            const valid = form.reportValidity();
          });

          // PATCH checkCommand
          document.querySelector('#HostCheck_Page_checkCommand')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkCommand');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setCheckCommand', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_checkCommand')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_checkCommand')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkCommand');
            const valid = form.reportValidity();
          });

          // PATCH checkInterval
          document.querySelector('#HostCheck_Page_checkInterval')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkInterval');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setCheckInterval', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_checkInterval')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_checkInterval')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkInterval');
            const valid = form.reportValidity();
          });

          // PATCH checkPublished
          document.querySelector('#HostCheck_Page_checkPublished')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_checkPublished');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setCheckPublished', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_checkPublished')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_checkPublished')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_checkPublished');
            const valid = form.reportValidity();
          });

          // PATCH eventSubscriptions
          document.querySelector('#HostCheck_Page_eventSubscriptions')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptions');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setEventSubscriptions', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_eventSubscriptions')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_eventSubscriptions')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptions');
            const valid = form.reportValidity();
          });

          // PATCH eventHandlers
          document.querySelector('#HostCheck_Page_eventHandlers')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventHandlers');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setEventHandlers', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_eventHandlers')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_eventHandlers')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventHandlers');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#HostCheck_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#HostCheck_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#HostCheck_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#HostCheck_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#HostCheck_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#HostCheck_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#HostCheck_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#HostCheck_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#HostCheck_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateId
          document.querySelector('#HostCheck_Page_jobTemplateId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setJobTemplateId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_jobTemplateId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_jobTemplateId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateId');
            const valid = form.reportValidity();
          });

          // PATCH aapTemplateId
          document.querySelector('#HostCheck_Page_aapTemplateId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapTemplateId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCheckVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'checkName:' + event.currentTarget.getAttribute('data-checkName') }]
                  , 'setAapTemplateId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCheck_Page_aapTemplateId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCheck_Page_aapTemplateId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapTemplateId');
            const valid = form.reportValidity();
          });
});
