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
                patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
                patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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

          // PATCH projectName
          document.querySelector('#Page_projectName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_projectName');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setProjectName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_projectName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_projectName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_projectName');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH gpuEnabled
          document.querySelector('#Page_gpuEnabled')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_gpuEnabled');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setGpuEnabled', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gpuEnabled')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gpuEnabled')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_gpuEnabled');
            const valid = form.reportValidity();
          });

          // PATCH podRestartCount
          document.querySelector('#Page_podRestartCount')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_podRestartCount');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setPodRestartCount', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_podRestartCount')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_podRestartCount')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_podRestartCount');
            const valid = form.reportValidity();
          });

          // PATCH podsRestarting
          document.querySelector('#Page_podsRestarting')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_podsRestarting');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setPodsRestarting', event.currentTarget.value.replace('[','').replace(']','').split(/[ ,]+/)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_podsRestarting')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_podsRestarting')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_podsRestarting');
            const valid = form.reportValidity();
          });

          // PATCH podTerminatingCount
          document.querySelector('#Page_podTerminatingCount')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_podTerminatingCount');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setPodTerminatingCount', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_podTerminatingCount')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_podTerminatingCount')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_podTerminatingCount');
            const valid = form.reportValidity();
          });

          // PATCH podsTerminating
          document.querySelector('#Page_podsTerminating')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_podsTerminating');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setPodsTerminating', event.currentTarget.value.replace('[','').replace(']','').split(/[ ,]+/)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_podsTerminating')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_podsTerminating')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_podsTerminating');
            const valid = form.reportValidity();
          });

          // PATCH fullPvcsCount
          document.querySelector('#Page_fullPvcsCount')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_fullPvcsCount');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setFullPvcsCount', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_fullPvcsCount')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_fullPvcsCount')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_fullPvcsCount');
            const valid = form.reportValidity();
          });

          // PATCH fullPvcs
          document.querySelector('#Page_fullPvcs')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_fullPvcs');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setFullPvcs', event.currentTarget.value.replace('[','').replace(']','').split(/[ ,]+/)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_fullPvcs')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_fullPvcs')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_fullPvcs');
            const valid = form.reportValidity();
          });

          // PATCH namespaceTerminating
          document.querySelector('#Page_namespaceTerminating')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_namespaceTerminating');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setNamespaceTerminating', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_namespaceTerminating')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_namespaceTerminating')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_namespaceTerminating');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
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

          // PATCH projectResource
          document.querySelector('#Page_projectResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_projectResource');
            const valid = form.checkValidity();
            if(valid) {
              patchProjectVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'projectResource:' + event.currentTarget.getAttribute('data-projectResource') }]
                  , 'setProjectResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_projectResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_projectResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_projectResource');
            const valid = form.reportValidity();
          });
});
