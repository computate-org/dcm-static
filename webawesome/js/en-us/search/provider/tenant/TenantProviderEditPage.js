Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#TenantProvider_Page_created')?.addEventListener('change', (event) => {
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
                patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantProvider_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#TenantProvider_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#TenantProvider_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH providerName
          document.querySelector('#TenantProvider_Page_providerName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_providerName');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setProviderName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_providerName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_providerName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_providerName');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#TenantProvider_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#TenantProvider_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#TenantProvider_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#TenantProvider_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#TenantProvider_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#TenantProvider_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#TenantProvider_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH providerId
          document.querySelector('#TenantProvider_Page_providerId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_providerId');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setProviderId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_providerId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_providerId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_providerId');
            const valid = form.reportValidity();
          });

          // PATCH providerUrl
          document.querySelector('#TenantProvider_Page_providerUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_providerUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchTenantProviderVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'providerId:' + event.currentTarget.getAttribute('data-providerId') }]
                  , 'setProviderUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#TenantProvider_Page_providerUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#TenantProvider_Page_providerUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_providerUrl');
            const valid = form.reportValidity();
          });
});
