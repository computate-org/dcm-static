Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#AnsibleProject_Page_created')?.addEventListener('change', (event) => {
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
                patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#AnsibleProject_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#AnsibleProject_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#AnsibleProject_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH sourceControlType
          document.querySelector('#AnsibleProject_Page_sourceControlType')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sourceControlType');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setSourceControlType', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_sourceControlType')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_sourceControlType')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sourceControlType');
            const valid = form.reportValidity();
          });

          // PATCH sourceControlUrl
          document.querySelector('#AnsibleProject_Page_sourceControlUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sourceControlUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setSourceControlUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_sourceControlUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_sourceControlUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sourceControlUrl');
            const valid = form.reportValidity();
          });

          // PATCH ansibleProjectDescription
          document.querySelector('#AnsibleProject_Page_ansibleProjectDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setAnsibleProjectDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectDescription');
            const valid = form.reportValidity();
          });

          // PATCH sourceControlBranch
          document.querySelector('#AnsibleProject_Page_sourceControlBranch')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sourceControlBranch');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setSourceControlBranch', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_sourceControlBranch')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_sourceControlBranch')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sourceControlBranch');
            const valid = form.reportValidity();
          });

          // PATCH ansibleProjectName
          document.querySelector('#AnsibleProject_Page_ansibleProjectName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectName');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setAnsibleProjectName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectName');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#AnsibleProject_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#AnsibleProject_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#AnsibleProject_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#AnsibleProject_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#AnsibleProject_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#AnsibleProject_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#AnsibleProject_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#AnsibleProject_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH aapOrganizationId
          document.querySelector('#AnsibleProject_Page_aapOrganizationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setAapOrganizationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_aapOrganizationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_aapOrganizationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapOrganizationId');
            const valid = form.reportValidity();
          });

          // PATCH ansibleProjectId
          document.querySelector('#AnsibleProject_Page_ansibleProjectId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectId');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setAnsibleProjectId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectId');
            const valid = form.reportValidity();
          });

          // PATCH ansibleProjectResource
          document.querySelector('#AnsibleProject_Page_ansibleProjectResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectResource');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setAnsibleProjectResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_ansibleProjectResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectResource');
            const valid = form.reportValidity();
          });

          // PATCH aapProjectId
          document.querySelector('#AnsibleProject_Page_aapProjectId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aapProjectId');
            const valid = form.checkValidity();
            if(valid) {
              patchAnsibleProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'ansibleProjectResource:' + event.currentTarget.getAttribute('data-ansibleProjectResource') }]
                  , 'setAapProjectId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#AnsibleProject_Page_aapProjectId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#AnsibleProject_Page_aapProjectId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aapProjectId');
            const valid = form.reportValidity();
          });
});
