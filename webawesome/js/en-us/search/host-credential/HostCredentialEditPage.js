Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#HostCredential_Page_created')?.addEventListener('change', (event) => {
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
                patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostCredential_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#HostCredential_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostCredential_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH credentialName
          document.querySelector('#HostCredential_Page_credentialName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_credentialName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setCredentialName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_credentialName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_credentialName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_credentialName');
            const valid = form.reportValidity();
          });

          // PATCH credentialDescription
          document.querySelector('#HostCredential_Page_credentialDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_credentialDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setCredentialDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_credentialDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_credentialDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_credentialDescription');
            const valid = form.reportValidity();
          });

          // PATCH userName
          document.querySelector('#HostCredential_Page_userName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setUserName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_userName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_userName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.reportValidity();
          });

          // PATCH becomePassword
          document.querySelector('#HostCredential_Page_becomePassword')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_becomePassword');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setBecomePassword', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_becomePassword')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_becomePassword')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_becomePassword');
            const valid = form.reportValidity();
          });

          // PATCH password
          document.querySelector('#HostCredential_Page_password')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_password');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setPassword', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_password')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_password')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_password');
            const valid = form.reportValidity();
          });

          // PATCH becomeMethod
          document.querySelector('#HostCredential_Page_becomeMethod')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_becomeMethod');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setBecomeMethod', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_becomeMethod')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_becomeMethod')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_becomeMethod');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#HostCredential_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#HostCredential_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#HostCredential_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#HostCredential_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#HostCredential_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#HostCredential_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#HostCredential_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#HostCredential_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#HostCredential_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH credentialId
          document.querySelector('#HostCredential_Page_credentialId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_credentialId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setCredentialId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_credentialId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_credentialId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_credentialId');
            const valid = form.reportValidity();
          });

          // PATCH credentialResource
          document.querySelector('#HostCredential_Page_credentialResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_credentialResource');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setCredentialResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_credentialResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_credentialResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_credentialResource');
            const valid = form.reportValidity();
          });

          // PATCH aapCredentialId
          document.querySelector('#HostCredential_Page_aapCredentialId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapCredentialId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setAapCredentialId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_aapCredentialId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_aapCredentialId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapCredentialId');
            const valid = form.reportValidity();
          });

          // PATCH aapCredentialTypeId
          document.querySelector('#HostCredential_Page_aapCredentialTypeId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapCredentialTypeId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostCredentialVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'credentialResource:' + event.currentTarget.getAttribute('data-credentialResource') }]
                  , 'setAapCredentialTypeId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostCredential_Page_aapCredentialTypeId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostCredential_Page_aapCredentialTypeId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapCredentialTypeId');
            const valid = form.reportValidity();
          });
});
