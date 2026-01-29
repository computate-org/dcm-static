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
                patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
                patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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

          // PATCH seeArchived
          document.querySelector('#Page_seeArchived')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_seeArchived');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setSeeArchived', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeArchived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeArchived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_seeArchived');
            const valid = form.reportValidity();
          });

          // PATCH siteFontSize
          document.querySelector('#Page_siteFontSize')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_siteFontSize');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setSiteFontSize', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) {
                  addGlow(target);
                  fetch('/refresh').then(response => {
                    response.text().then(text => {
                      window.location.reload();
                    });
                  });
                }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_siteFontSize')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_siteFontSize')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_siteFontSize');
            const valid = form.reportValidity();
          });

          // PATCH siteTheme
          document.querySelector('#Page_siteTheme')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_siteTheme');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setSiteTheme', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) {
                  addGlow(target);
                  fetch('/refresh').then(response => {
                    response.text().then(text => {
                      window.location.reload();
                    });
                  });
                }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_siteTheme')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_siteTheme')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_siteTheme');
            const valid = form.reportValidity();
          });

          // PATCH userProfileUrl
          document.querySelector('#Page_userProfileUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userProfileUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserProfileUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userProfileUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userProfileUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userProfileUrl');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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

          // PATCH userId
          document.querySelector('#Page_userId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userId');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userId');
            const valid = form.reportValidity();
          });

          // PATCH userName
          document.querySelector('#Page_userName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.reportValidity();
          });

          // PATCH userEmail
          document.querySelector('#Page_userEmail')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserEmail', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userEmail')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userEmail')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userEmail');
            const valid = form.reportValidity();
          });

          // PATCH userFirstName
          document.querySelector('#Page_userFirstName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userFirstName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserFirstName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userFirstName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userFirstName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userFirstName');
            const valid = form.reportValidity();
          });

          // PATCH userLastName
          document.querySelector('#Page_userLastName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userLastName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserLastName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userLastName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userLastName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userLastName');
            const valid = form.reportValidity();
          });

          // PATCH userFullName
          document.querySelector('#Page_userFullName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserFullName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userFullName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userFullName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userFullName');
            const valid = form.reportValidity();
          });

          // PATCH displayName
          document.querySelector('#Page_displayName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setDisplayName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayName');
            const valid = form.reportValidity();
          });

          // PATCH customerProfileId
          document.querySelector('#Page_customerProfileId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_customerProfileId');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setCustomerProfileId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_customerProfileId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_customerProfileId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_customerProfileId');
            const valid = form.reportValidity();
          });
});
