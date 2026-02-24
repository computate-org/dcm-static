Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#JobTemplate_Page_created')?.addEventListener('change', (event) => {
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
                patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#JobTemplate_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#JobTemplate_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#JobTemplate_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH ansiblePlaybook
          document.querySelector('#JobTemplate_Page_ansiblePlaybook')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ansiblePlaybook');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setAnsiblePlaybook', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_ansiblePlaybook')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_ansiblePlaybook')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ansiblePlaybook');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateName
          document.querySelector('#JobTemplate_Page_jobTemplateName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateName');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setJobTemplateName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_jobTemplateName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_jobTemplateName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateName');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateDescription
          document.querySelector('#JobTemplate_Page_jobTemplateDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setJobTemplateDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_jobTemplateDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_jobTemplateDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateDescription');
            const valid = form.reportValidity();
          });

          // PATCH jobType
          document.querySelector('#JobTemplate_Page_jobType')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobType');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setJobType', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_jobType')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_jobType')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobType');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#JobTemplate_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#JobTemplate_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#JobTemplate_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#JobTemplate_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#JobTemplate_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#JobTemplate_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#JobTemplate_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#JobTemplate_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#JobTemplate_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH aapInventoryId
          document.querySelector('#JobTemplate_Page_aapInventoryId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapInventoryId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setAapInventoryId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_aapInventoryId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_aapInventoryId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapInventoryId');
            const valid = form.reportValidity();
          });

          // PATCH aapProjectId
          document.querySelector('#JobTemplate_Page_aapProjectId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapProjectId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setAapProjectId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_aapProjectId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_aapProjectId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapProjectId');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateId
          document.querySelector('#JobTemplate_Page_jobTemplateId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setJobTemplateId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_jobTemplateId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_jobTemplateId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateId');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateResource
          document.querySelector('#JobTemplate_Page_jobTemplateResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateResource');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setJobTemplateResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_jobTemplateResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_jobTemplateResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateResource');
            const valid = form.reportValidity();
          });

          // PATCH aapTemplateId
          document.querySelector('#JobTemplate_Page_aapTemplateId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapTemplateId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateResource:' + event.currentTarget.getAttribute('data-jobTemplateResource') }]
                  , 'setAapTemplateId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#JobTemplate_Page_aapTemplateId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#JobTemplate_Page_aapTemplateId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapTemplateId');
            const valid = form.reportValidity();
          });
});
