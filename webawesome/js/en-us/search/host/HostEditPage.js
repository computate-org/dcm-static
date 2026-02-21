Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('change', (event) => {
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
                patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH hostName
          document.querySelector('#Page_hostName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hostName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setHostName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hostName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hostName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hostName');
            const valid = form.reportValidity();
          });

          // PATCH ipAddress
          document.querySelector('#Page_ipAddress')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ipAddress');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setIpAddress', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ipAddress')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ipAddress')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ipAddress');
            const valid = form.reportValidity();
          });

          // PATCH hostDescription
          document.querySelector('#Page_hostDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hostDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setHostDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hostDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hostDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hostDescription');
            const valid = form.reportValidity();
          });

          // PATCH eventSubscriptions
          document.querySelector('#Page_eventSubscriptions')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptions');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setEventSubscriptions', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_eventSubscriptions')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_eventSubscriptions')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_eventSubscriptions');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH aapHostId
          document.querySelector('#Page_aapHostId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapHostId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setAapHostId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aapHostId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aapHostId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapHostId');
            const valid = form.reportValidity();
          });

          // PATCH hostId
          document.querySelector('#Page_hostId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hostId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setHostId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hostId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hostId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hostId');
            const valid = form.reportValidity();
          });

          // PATCH hostResource
          document.querySelector('#Page_hostResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hostResource');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setHostResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hostResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hostResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hostResource');
            const valid = form.reportValidity();
          });

          // PATCH aapInventoryId
          document.querySelector('#Page_aapInventoryId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapInventoryId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setAapInventoryId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aapInventoryId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aapInventoryId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapInventoryId');
            const valid = form.reportValidity();
          });

          // PATCH inventoryName
          document.querySelector('#Page_inventoryName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_inventoryName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hostResource:' + event.currentTarget.getAttribute('data-hostResource') }]
                  , 'setInventoryName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_inventoryName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_inventoryName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_inventoryName');
            const valid = form.reportValidity();
          });
});
