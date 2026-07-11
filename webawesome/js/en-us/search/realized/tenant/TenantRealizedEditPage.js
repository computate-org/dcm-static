Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#TenantRealized_Page_created')?.addEventListener('change', (event) => {
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
                patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantRealized_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#TenantRealized_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantRealized_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH realizedByEmail
          document.querySelector('#TenantRealized_Page_realizedByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedByEmail');
            const valid = form.reportValidity();
          });

          // PATCH realizedByUserId
          document.querySelector('#TenantRealized_Page_realizedByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedByUserId');
            const valid = form.reportValidity();
          });

          // PATCH realizedByFullName
          document.querySelector('#TenantRealized_Page_realizedByFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedByFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedByFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedByFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedByFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedByFullName');
            const valid = form.reportValidity();
          });

          // PATCH createdByEmail
          document.querySelector('#TenantRealized_Page_createdByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setCreatedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_createdByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_createdByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByEmail');
            const valid = form.reportValidity();
          });

          // PATCH createdVia
          document.querySelector('#TenantRealized_Page_createdVia')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setCreatedVia', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_createdVia')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_createdVia')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdVia');
            const valid = form.reportValidity();
          });

          // PATCH realizedState
          document.querySelector('#TenantRealized_Page_realizedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedState');
            const valid = form.reportValidity();
          });

          // PATCH intentState
          document.querySelector('#TenantRealized_Page_intentState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setIntentState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_intentState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_intentState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_intentState');
            const valid = form.reportValidity();
          });

          // PATCH requestedState
          document.querySelector('#TenantRealized_Page_requestedState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRequestedState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_requestedState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_requestedState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_requestedState');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#TenantRealized_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH locked
          document.querySelector('#TenantRealized_Page_locked')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locked');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setLocked', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_locked')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_locked')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locked');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#TenantRealized_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#TenantRealized_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#TenantRealized_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#TenantRealized_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#TenantRealized_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#TenantRealized_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#TenantRealized_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH hubId
          document.querySelector('#TenantRealized_Page_hubId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setHubId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_hubId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_hubId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.reportValidity();
          });

          // PATCH clusterName
          document.querySelector('#TenantRealized_Page_clusterName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setClusterName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_clusterName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_clusterName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#TenantRealized_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH realizedNumber
          document.querySelector('#TenantRealized_Page_realizedNumber')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedNumber');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedNumber', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedNumber')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedNumber')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedNumber');
            const valid = form.reportValidity();
          });

          // PATCH tenantName
          document.querySelector('#TenantRealized_Page_tenantName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setTenantName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_tenantName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_tenantName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantName');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#TenantRealized_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH realizedId
          document.querySelector('#TenantRealized_Page_realizedId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedId');
            const valid = form.reportValidity();
          });

          // PATCH realizedName
          document.querySelector('#TenantRealized_Page_realizedName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_realizedName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setRealizedName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_realizedName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_realizedName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_realizedName');
            const valid = form.reportValidity();
          });

          // PATCH createdByUserId
          document.querySelector('#TenantRealized_Page_createdByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setCreatedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_createdByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_createdByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByUserId');
            const valid = form.reportValidity();
          });

          // PATCH createdByFullName
          document.querySelector('#TenantRealized_Page_createdByFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantRealizedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'realizedId:' + event.currentTarget.getAttribute('data-realizedId') }]
                  , 'setCreatedByFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantRealized_Page_createdByFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantRealized_Page_createdByFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdByFullName');
            const valid = form.reportValidity();
          });
});
