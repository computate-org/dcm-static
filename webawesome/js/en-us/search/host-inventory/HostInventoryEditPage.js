Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#HostInventory_Page_created')?.addEventListener('change', (event) => {
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
                patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostInventory_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#HostInventory_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#HostInventory_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH inventoryName
          document.querySelector('#HostInventory_Page_inventoryName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_inventoryName');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setInventoryName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_inventoryName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_inventoryName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_inventoryName');
            const valid = form.reportValidity();
          });

          // PATCH inventoryDescription
          document.querySelector('#HostInventory_Page_inventoryDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_inventoryDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setInventoryDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_inventoryDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_inventoryDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_inventoryDescription');
            const valid = form.reportValidity();
          });

          // PATCH inventoryKind
          document.querySelector('#HostInventory_Page_inventoryKind')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_inventoryKind');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setInventoryKind', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_inventoryKind')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_inventoryKind')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_inventoryKind');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#HostInventory_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#HostInventory_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#HostInventory_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#HostInventory_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#HostInventory_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#HostInventory_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#HostInventory_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#HostInventory_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#HostInventory_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH inventoryId
          document.querySelector('#HostInventory_Page_inventoryId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_inventoryId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setInventoryId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_inventoryId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_inventoryId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_inventoryId');
            const valid = form.reportValidity();
          });

          // PATCH inventoryResource
          document.querySelector('#HostInventory_Page_inventoryResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_inventoryResource');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setInventoryResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_inventoryResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_inventoryResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_inventoryResource');
            const valid = form.reportValidity();
          });

          // PATCH aapInventoryId
          document.querySelector('#HostInventory_Page_aapInventoryId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapInventoryId');
            const valid = form.checkValidity();
            if(valid) {
              patchHostInventoryVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'inventoryResource:' + event.currentTarget.getAttribute('data-inventoryResource') }]
                  , 'setAapInventoryId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#HostInventory_Page_aapInventoryId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#HostInventory_Page_aapInventoryId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapInventoryId');
            const valid = form.reportValidity();
          });
});
