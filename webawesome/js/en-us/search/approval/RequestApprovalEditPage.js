Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#RequestApproval_Page_created')?.addEventListener('change', (event) => {
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
                patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#RequestApproval_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#RequestApproval_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#RequestApproval_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH approvedByEmail
          document.querySelector('#RequestApproval_Page_approvedByEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvedByEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovedByEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvedByEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvedByEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvedByEmail');
            const valid = form.reportValidity();
          });

          // PATCH approvalName
          document.querySelector('#RequestApproval_Page_approvalName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvalName');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovalName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvalName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvalName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvalName');
            const valid = form.reportValidity();
          });

          // PATCH approvalNote
          document.querySelector('#RequestApproval_Page_approvalNote')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvalNote');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovalNote', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvalNote')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvalNote')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvalNote');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#RequestApproval_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#RequestApproval_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#RequestApproval_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#RequestApproval_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#RequestApproval_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#RequestApproval_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#RequestApproval_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH approvalId
          document.querySelector('#RequestApproval_Page_approvalId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvalId');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovalId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvalId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvalId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvalId');
            const valid = form.reportValidity();
          });

          // PATCH approvedByUserId
          document.querySelector('#RequestApproval_Page_approvedByUserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvedByUserId');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovedByUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvedByUserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvedByUserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvedByUserId');
            const valid = form.reportValidity();
          });

          // PATCH approvedByFullName
          document.querySelector('#RequestApproval_Page_approvedByFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvedByFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovedByFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvedByFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvedByFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvedByFullName');
            const valid = form.reportValidity();
          });

          // PATCH approved
          document.querySelector('#RequestApproval_Page_approved')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approved');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApproved', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approved')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approved')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approved');
            const valid = form.reportValidity();
          });

          // PATCH modelType
          document.querySelector('#RequestApproval_Page_modelType')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_modelType');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setModelType', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_modelType')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_modelType')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_modelType');
            const valid = form.reportValidity();
          });

          // PATCH modelResource
          document.querySelector('#RequestApproval_Page_modelResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_modelResource');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setModelResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_modelResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_modelResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_modelResource');
            const valid = form.reportValidity();
          });

          // PATCH approvalTitle
          document.querySelector('#RequestApproval_Page_approvalTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_approvalTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchRequestApprovalVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'approvalId:' + event.currentTarget.getAttribute('data-approvalId') }]
                  , 'setApprovalTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#RequestApproval_Page_approvalTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#RequestApproval_Page_approvalTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_approvalTitle');
            const valid = form.reportValidity();
          });
});
