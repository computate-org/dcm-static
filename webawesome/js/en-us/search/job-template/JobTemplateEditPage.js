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
                patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
                patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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

          // PATCH jobTemplateName
          document.querySelector('#Page_jobTemplateName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateName');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
                  , 'setJobTemplateName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_jobTemplateName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_jobTemplateName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateName');
            const valid = form.reportValidity();
          });

          // PATCH jobTemplateDescription
          document.querySelector('#Page_jobTemplateDescription')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateDescription');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
                  , 'setJobTemplateDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_jobTemplateDescription')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_jobTemplateDescription')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobTemplateDescription');
            const valid = form.reportValidity();
          });

          // PATCH jobType
          document.querySelector('#Page_jobType')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_jobType');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
                  , 'setJobType', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_jobType')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_jobType')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_jobType');
            const valid = form.reportValidity();
          });

          // PATCH ansibleProjectId
          document.querySelector('#Page_ansibleProjectId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
                  , 'setAnsibleProjectId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ansibleProjectId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ansibleProjectId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ansibleProjectId');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
              patchJobTemplateVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'jobTemplateName:' + event.currentTarget.getAttribute('data-jobTemplateName') }]
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
});
