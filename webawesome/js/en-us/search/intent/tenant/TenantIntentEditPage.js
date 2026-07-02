Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#TenantIntent_Page_created')?.addEventListener('change', (event) => {
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
                patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantIntent_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#TenantIntent_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantIntent_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH createdByEmail
          document.querySelector('#TenantIntent_Page_createdByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setCreatedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_createdByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_createdByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.reportValidity();
          });

          // PATCH createdByUserId
          document.querySelector('#TenantIntent_Page_createdByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setCreatedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_createdByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_createdByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.reportValidity();
          });

          // PATCH createdByFullName
          document.querySelector('#TenantIntent_Page_createdByFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setCreatedByFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_createdByFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_createdByFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.reportValidity();
          });

          // PATCH createdVia
          document.querySelector('#TenantIntent_Page_createdVia')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setCreatedVia', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_createdVia')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_createdVia')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.reportValidity();
          });

          // PATCH intentState
          document.querySelector('#TenantIntent_Page_intentState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setIntentState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_intentState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_intentState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.reportValidity();
          });

          // PATCH requestedState
          document.querySelector('#TenantIntent_Page_requestedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setRequestedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_requestedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_requestedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.reportValidity();
          });

          // PATCH realizedState
          document.querySelector('#TenantIntent_Page_realizedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setRealizedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_realizedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_realizedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.reportValidity();
          });

          // PATCH tenantName
          document.querySelector('#TenantIntent_Page_tenantName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setTenantName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_tenantName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_tenantName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantName');
            const valid = form.reportValidity();
          });

          // PATCH tenantDescription
          document.querySelector('#TenantIntent_Page_tenantDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setTenantDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_tenantDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_tenantDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantDescription');
            const valid = form.reportValidity();
          });

          // PATCH locked
          document.querySelector('#TenantIntent_Page_locked')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locked');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setLocked', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_locked')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_locked')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locked');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#TenantIntent_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#TenantIntent_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#TenantIntent_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#TenantIntent_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#TenantIntent_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#TenantIntent_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#TenantIntent_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH hubId
          document.querySelector('#TenantIntent_Page_hubId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setHubId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_hubId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_hubId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.reportValidity();
          });

          // PATCH clusterName
          document.querySelector('#TenantIntent_Page_clusterName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setClusterName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_clusterName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_clusterName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#TenantIntent_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#TenantIntent_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH tenantResource
          document.querySelector('#TenantIntent_Page_tenantResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantResource');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantIntentVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'tenantResource:' + event.currentTarget.getAttribute('data-tenantResource') }]
                  , 'setTenantResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantIntent_Page_tenantResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantIntent_Page_tenantResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantResource');
            const valid = form.reportValidity();
          });
});
