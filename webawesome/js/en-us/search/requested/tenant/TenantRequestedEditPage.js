Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#TenantRequested_Page_created')?.addEventListener('change', (event) => {
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
                patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantRequested_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#TenantRequested_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantRequested_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH createdByEmail
          document.querySelector('#TenantRequested_Page_createdByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setCreatedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_createdByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_createdByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.reportValidity();
          });

          // PATCH createdByUserId
          document.querySelector('#TenantRequested_Page_createdByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setCreatedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_createdByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_createdByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.reportValidity();
          });

          // PATCH createdByFullName
          document.querySelector('#TenantRequested_Page_createdByFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setCreatedByFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_createdByFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_createdByFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.reportValidity();
          });

          // PATCH createdVia
          document.querySelector('#TenantRequested_Page_createdVia')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setCreatedVia', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_createdVia')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_createdVia')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.reportValidity();
          });

          // PATCH intentState
          document.querySelector('#TenantRequested_Page_intentState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setIntentState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_intentState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_intentState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.reportValidity();
          });

          // PATCH requestedState
          document.querySelector('#TenantRequested_Page_requestedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setRequestedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_requestedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_requestedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.reportValidity();
          });

          // PATCH realizedState
          document.querySelector('#TenantRequested_Page_realizedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setRealizedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_realizedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_realizedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.reportValidity();
          });

          // PATCH tenantName
          document.querySelector('#TenantRequested_Page_tenantName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setTenantName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_tenantName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_tenantName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantName');
            const valid = form.reportValidity();
          });

          // PATCH tenantDescription
          document.querySelector('#TenantRequested_Page_tenantDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setTenantDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_tenantDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_tenantDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantDescription');
            const valid = form.reportValidity();
          });

          // PATCH locked
          document.querySelector('#TenantRequested_Page_locked')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locked');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setLocked', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_locked')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_locked')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locked');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#TenantRequested_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#TenantRequested_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#TenantRequested_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#TenantRequested_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#TenantRequested_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#TenantRequested_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#TenantRequested_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH hubId
          document.querySelector('#TenantRequested_Page_hubId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setHubId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_hubId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_hubId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.reportValidity();
          });

          // PATCH clusterName
          document.querySelector('#TenantRequested_Page_clusterName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setClusterName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_clusterName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_clusterName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#TenantRequested_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#TenantRequested_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH requestedNumber
          document.querySelector('#TenantRequested_Page_requestedNumber')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedNumber');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setRequestedNumber', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_requestedNumber')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_requestedNumber')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedNumber');
            const valid = form.reportValidity();
          });

          // PATCH requestedId
          document.querySelector('#TenantRequested_Page_requestedId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setRequestedId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_requestedId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_requestedId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedId');
            const valid = form.reportValidity();
          });

          // PATCH requestedName
          document.querySelector('#TenantRequested_Page_requestedName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRequestedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'requestedId:' + event.currentTarget.getAttribute('data-requestedId') }]
                  , 'setRequestedName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRequested_Page_requestedName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRequested_Page_requestedName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedName');
            const valid = form.reportValidity();
          });
});
