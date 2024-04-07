document.addEventListener('keydown', function(event) {
    if (event.key === 'F1') {
      event.preventDefault(); // Prevent the default F1 action
  
      // Extract data
      let incidentLevel = document.querySelector('#priority option:checked').textContent.trim().match(/\((\d+)\)/)?.[1];
      let incidentNumber = document.querySelector('small.text-muted').textContent.trim().match(/#(L\d+)/)?.[1];
      let locationValue = document.querySelector('#incidentLocation').value;
      let descriptionValue = document.querySelector('#incidentBriefDescription').value;
      let incidentType = document.querySelector('#incidentType option:checked').textContent.trim();
      let slsContact = document.querySelector('#incidentSLSContact').value;
      let textAfterLastSlash = slsContact.split('/').pop();
      
      // Convert locationValue to title case
      locationValue = locationValue.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  
      // Convert descriptionValue to sentence case
      descriptionValue = descriptionValue.charAt(0).toUpperCase() + descriptionValue.slice(1).toLowerCase();
  
      // Format the output
      let output = `L${incidentLevel} Incident Notification. ${incidentNumber}. ${incidentType}. ${locationValue}. ${descriptionValue}. ${textAfterLastSlash}`;
  
      // Insert into the textarea
      document.querySelector('#pager_message').value = output;
    }
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
      event.preventDefault(); // Prevent the default F2 action
  
      // Extract data
      let locationValue = document.querySelector('#incidentLocation').value;
      let incidentType = document.querySelector('#incidentType option:checked').textContent.trim();
      let descriptionValue = document.querySelector('#incidentBriefDescription').value;

      // Format the output
      let output = `Emergency Surf Rescue call out. ${locationValue}. ${descriptionValue}. Please raise SurfCom on channel 3 once on scene, or contact SurfCom on (02) 9471 8091. Thank you.`;
  
      // Insert into the textarea
      document.querySelector('textarea[name="incident_further"]').value = output;
      
      // Trigger the button click to save the form
      document.querySelector('.check-incident-status').click();
    }
  }); 

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F3') {
      event.preventDefault(); // Prevent the default F3 action
  
      // Extract data
      let locationValue = document.querySelector('#incidentLocation').value;
      let incidentType = document.querySelector('#incidentType option:checked').textContent.trim();
      let descriptionValue = document.querySelector('#incidentBriefDescription').value;

      // Format the output
      let output = `Emergency Surf Rescue call out. ${locationValue}. **PLEASE STAND DOWN** No further action or resources required. Thank you to those that responded.`;
  
      // Insert into the textarea
      document.querySelector('#pager_message').value = output;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F8') {
        event.preventDefault(); // Prevent the default F9 action

        // Set the value of the first dropdown
        var selectElementFrom = document.getElementById('msg_from');
        selectElementFrom.value = 'unit_97';
        // Trigger the 'change' event for the select element
        var changeEventFrom = new Event('change', {
            'bubbles': true,
            'cancelable': true
        });
        selectElementFrom.dispatchEvent(changeEventFrom);

        // Set the value of the second dropdown
        var selectElementTo = document.getElementById('msg_to');
        selectElementTo.value = 'unit_97';
        // Trigger the 'change' event for the select element
        var changeEventTo = new Event('change', {
            'bubbles': true,
            'cancelable': true
        });
        selectElementTo.dispatchEvent(changeEventTo);

        // Format the output
        let output = `**HANDOVER COMPLETE FROM NSW 10 DAY TO NSW 10 NIGHT AS PER DEPUTY ROSTER, NIL ISSUES**`;

        // Insert into the textarea
        document.querySelector('textarea[name="message"]').value = output;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F9') {
      event.preventDefault(); // Prevent the default F3 action


      // Format the output
      let org = `Marine Area Command`;
      let name = 'MAC';
      let number = '1800 622 727';
  
      // Insert into the textarea
      document.querySelector('#callerDetailsName').value = name;
      document.querySelector('#callerDetailsOrganisation').value = org;
      document.querySelector('#callerDetailsNumber').value = number;
      document.querySelector('#callerDetails13Surf').checked = true;
    }
  });


  document.addEventListener('keydown', function(event) {
    if (event.key === 'F10') {
      event.preventDefault(); // Prevent the default F3 action


      // Format the output
      let org = `VKG Newcastle`;
      let name = 'VKG Newcastle';
      let number = '(02) 4929 0811';
  
      // Insert into the textarea
      document.querySelector('#callerDetailsName').value = name;
      document.querySelector('#callerDetailsOrganisation').value = org;
      document.querySelector('#callerDetailsNumber').value = number;
      document.querySelector('#callerDetails13Surf').checked = true;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
      event.preventDefault(); // Prevent the default F3 action


      // Format the output
      let org = `VKG Sydney`;
      let name = 'VKG Sydney';
      let number = '(02) 9265 4112';
  
      // Insert into the textarea
      document.querySelector('#callerDetailsName').value = name;
      document.querySelector('#callerDetailsOrganisation').value = org;
      document.querySelector('#callerDetailsNumber').value = number;
      document.querySelector('#callerDetails13Surf').checked = true;
    }
  });


  document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
      event.preventDefault(); // Prevent the default F3 action


      // Format the output
      let org = `VKG Oak Flats`;
      let name = 'VKG Oak Flats';
      let number = '(02) 4232 5640';
  
      // Insert into the textarea
      document.querySelector('#callerDetailsName').value = name;
      document.querySelector('#callerDetailsOrganisation').value = org;
      document.querySelector('#callerDetailsNumber').value = number;
      document.querySelector('#callerDetails13Surf').checked = true;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F7') {
      event.preventDefault(); // Prevent the default F7 action
  
      // Check if the dropdown already exists
      if (document.getElementById('erbNameDropdown')) {
        alert("Please select an ERB from the dropdown!");
        return; // Stop the function here to prevent creating another dropdown
      }
  
      // Create and populate the dropdown menu
      let dropdown = document.createElement('select');
      dropdown.id = 'erbNameDropdown';
      dropdown.className = 'form-control'; // Optional: for styling if using Bootstrap or similar
  
      // ERB names, excluding the first placeholder
      let erbNames = [
        'Dreamtime Beach (Fingal - Tweed)', 'Kingscliff (Tweed)',
        'Brunswick Beach (Byron)', 'Belongil Beach (Byron)', 'Suffolk Park',
        'Seven Mile Beach/Lennox (Ballina)', 'Shelly Beach (Port Macquarie)',
        'Diamond Beach (LNC)', 'Tuncurry Beach (LNC)', 'The Ruins (LNC)',
        'Boomerang Beach (LNC)', 'Fingal Spit (Port Stephens)',
        'Fingal Island (Port Stephens)', 'Snapper Point (Frazer Park)',
        'Budgewoi (Central Coast)', 'The Entrance Channel (Central Coast)',
        'Pearl Beach (Central Coast)', 'Shelly Beach (Manly)', 'Malabar (Randwick)',
        'Little Bay (Randwick)', 'Greenhills Beach Track 1 (Sutherland Shire)',
        'Greenhills Beach Track 6 (Sutherland Shire)', 'Potter Point (Kurnell)',
        'Blackwoods Beach (Cronulla)', 'Sharky Beach (Coledale)',
        'East Corrimal Beach (Wollongong)', 'Puckeys Beach (Wollongong)',
        'Coniston Beach (Wollongong)', 'Hill 60 (Wollongong)',
        'Windang Island (Shellharbour)', 'Shellharbour', 'South Bombo (Kiama)',
        'Kiama Blowhole (Kiama)', 'Kendalls Beach (Kiama)'
      ];
  
      // Sort ERB names alphabetically
      erbNames.sort();
  
      // Add the placeholder as the first option
      dropdown.appendChild(new Option('Select an ERB...', ''));
  
      // Append sorted ERB names as options
      erbNames.forEach(function(erbName) {
        let option = document.createElement('option');
        option.value = erbName;
        option.text = erbName;
        dropdown.appendChild(option);
      });
  
      // Find the second column in the first row where the dropdown should be appended
      let targetColumn = document.querySelector('.row.mb-2 .col-sm-6:nth-child(2)');
      if (targetColumn) {
        targetColumn.appendChild(dropdown); // Append the dropdown to the second column
      }
  
      // Listener for the dropdown change event
      dropdown.addEventListener('change', function() {
        let selectedERBName = this.value;
  
        // Format the output with the selected ERB Name
        let location = `ERB - ${selectedERBName}`;
        let org = `SLSNSW`;      
        let name = `ERB - ${selectedERBName}`;
        let number = 'ERB';
        let tpi = 'NIL';
  
        // Insert into the textarea
        document.querySelector('#callerDetailsName').value = name;
        document.querySelector('#callerDetailsOrganisation').value = org;
        document.querySelector('#callerDetailsNumber').value = number;
        document.querySelector('#incidentLocation').value = location;
        document.querySelector('#incidentThirdParty').value = tpi;
  
        var selectElementTo = document.getElementById('primary_service');
        selectElementTo.value = '680';
        // Trigger the 'change' event for the select element
        var changeEventTo = new Event('change', {
            'bubbles': true,
            'cancelable': true
        });
        selectElementTo.dispatchEvent(changeEventTo);
        document.querySelector('#callerDetails13Surf').checked = false;
  
        // Optionally, remove the dropdown after selection
        dropdown.remove();
      });
  
      // Optionally, focus the dropdown to immediately start using it
      dropdown.focus();
    }
  });
  

  document.addEventListener('keydown', function(event) {
    // Check if Ctrl + S was pressed
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent the browser's save dialog
      // Trigger the button click to save the form
      document.querySelector('.check-incident-status').click();
    }
});

document.addEventListener('keydown', function(event) {
    // Check if Ctrl + R was pressed
    if (event.ctrlKey && event.key === 'r') {
        event.preventDefault(); // Prevent the default action (page reload)

        // Get the current URL
        let currentUrl = window.location.href;
        
        // Replace 'Edit' with 'record' in the URL
        let newUrl = currentUrl.replace('edit', 'record');

        // Update the URL without reloading the page
        window.location.href = newUrl;
    }
});

document.addEventListener('keydown', function(event) {
    // Check if Ctrl + R was pressed
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault(); // Prevent the default action (page reload)

        // Get the current URL
        let currentUrl = window.location.href;
        
        // Replace 'Edit' with 'record' in the URL
        let newUrl = currentUrl.replace('record', 'edit');

        // Update the URL without reloading the page
        window.location.href = newUrl;
    }
});

document.addEventListener('keydown', function(event) {
    // Check if Ctrl + I was pressed
    if (event.ctrlKey && event.key === 'i') {
        event.preventDefault(); // Prevent the default action (page reload)
        
        // Replace 'Edit' with 'record' in the URL
        let newUrl = 'https://surfcom.sls.com.au/incidents/view/0';

        // Update the URL without reloading the page
        window.location.href = newUrl;
    }
});

document.addEventListener('keydown', function(event) {
    // Check if Ctrl + n was pressed
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault(); // Prevent the default action (page reload)
        
        // Replace 'Edit' with 'record' in the URL
        let newUrl = 'https://surfcom.sls.com.au/incidents/add';

        // Update the URL without reloading the page
        window.location.href = newUrl;
    }
});

window.addEventListener('load', function() {
  const currentPageUrl = window.location.href;

  // Use console logging to confirm the script is running
  console.log('Page fully loaded', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/support-services')) {
    const targetDivSelector = '.col-12.col-md-4 .form-group';
    const targetDiv = document.querySelector(targetDivSelector);

    // Log the targetDiv to ensure it's found
    console.log('Target Div:', targetDiv);

    if (targetDiv) {
      const button = document.createElement('button');
      button.innerText = 'Bulk Sign Off All';
      button.className = 'btn btn-danger';
      button.style.marginTop = '10px'; // Add some spacing above the button

      button.addEventListener('click', function() {
        // Confirmation dialog
        const userConfirmed = confirm('Are you sure you want to bulk sign off all?');
        
        if (userConfirmed) {
          document.querySelectorAll('a[href^="https://surfcom.sls.com.au/log-service-off?log_id="]').forEach(link => {
            let href = link.getAttribute('href');
            // Append "&bulkSupportOpsSignOff" to the href
            href += "&bulkSupportOpsSignOff";
            console.log('Opening link:', href); // Log the href being opened
            window.open(href, '_blank');
          });
        } else {
          // Log or handle the cancel action
          console.log('Bulk sign off canceled by the user.');
        }
      });

      targetDiv.appendChild(button);
    } else {
      console.error('Failed to find the target div using selector:', targetDivSelector);
    }
  }
});


window.addEventListener('load', function() {
  const currentPageUrl = window.location.href;

  // Use console logging to confirm the script is running
  console.log('Page fully loaded', currentPageUrl);

  // Check if the URL matches the desired pattern using RegExp
  if (/https:\/\/surfcom\.sls\.com\.au\/log-service-off\?log_id=/.test(currentPageUrl)) {
    // Targeting the .card-footer element directly
    const targetDiv = document.querySelector('.card-footer');

    // Log the targetDiv to ensure it's found
    console.log('Target Div:', targetDiv);

    if (targetDiv) {
      const button = document.createElement('button');
      button.innerText = 'Prefill & Signoff'; // Updated button text
      button.className = 'btn btn-warning';
      button.style.marginLeft = '4px'; 

      // Add the prefill and sign off functionality to the button click event
      button.addEventListener('click', function() {
        // Prefill the current location input
        const currentLocationInput = document.querySelector('input[type="text"].form-control[name="current_location"]');
        if (currentLocationInput) {
          currentLocationInput.value = "BASE";
        }

        // Simulate the submit button click
        const submitButton = document.querySelector('input[type="submit"].btn.btn-primary.mr-1');
        if (submitButton) {
          submitButton.click();
          setTimeout(() => window.close(), 1000); // Close the window after a delay, if desired
        }
      });

      // Append the button to the .card-footer div
      targetDiv.appendChild(button);
    } else {
      console.error('Failed to find the target div using selector: .card-footer');
    }
  }
});

function BulkSignOffBoxes() {
  const currentPageUrl = window.location.href;
  console.log('Page fully loaded', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/support-services')) {
    const targetDivSelector = '.col-12.col-md-4 .form-group';
    const targetDiv = document.querySelector(targetDivSelector);
    console.log('Target Div:', targetDiv);

    if (targetDiv) {
      // Check for the existence of the bulk sign-off button to prevent duplicates
      if (!document.querySelector('.bulk-sign-off-button')) {
        const bulkSignOffButton = document.createElement('button');
        bulkSignOffButton.innerText = 'Bulk Sign Off Selected';
        bulkSignOffButton.className = 'btn btn-warning bulk-sign-off-button'; // Added class for identification
        bulkSignOffButton.style.marginTop = '10px';
        bulkSignOffButton.style.marginLeft = '10px';
        bulkSignOffButton.disabled = true; // Initially disabled

        function updateButtonState() {
          const anyChecked = document.querySelectorAll('.signoff-checkbox:checked').length > 0;
          bulkSignOffButton.disabled = !anyChecked;
          bulkSignOffButton.classList.toggle('btn-disabled', !anyChecked);
        }

        bulkSignOffButton.addEventListener('click', function() {
          document.querySelectorAll('.signoff-checkbox:checked').forEach(checkbox => {
            let href = checkbox.getAttribute('data-href');
            href += '&bulkSupportOpsSignOff'; // Append the query parameter
            console.log('Opening link:', href);
            window.open(href, '_blank');
          });
        });

        targetDiv.appendChild(bulkSignOffButton);
      }

      const thead = document.querySelector('#supportServicesTable thead tr');
      // Ensure the "Sign Off" column is added only if it does not already exist
      if (!thead.querySelector('.select-checkbox-header')) {
        const th = document.createElement('th');
        th.innerText = 'Sign Off';
        th.className = 'select-checkbox-header';
        thead.prepend(th);
      }

      const tbody = document.querySelector('#supportServicesTable tbody');
      tbody.querySelectorAll('tr').forEach(row => {
        // Only add checkbox or dash if it does not already exist
        if (!row.querySelector('.signoff-checkbox-container')) { // Use a container div for identification
          const signOffLink = row.querySelector('a[href^="https://surfcom.sls.com.au/log-service-off?log_id="]');
          const td = document.createElement('td');
          td.className = 'signoff-checkbox-container'; // Added class for identification
          td.style.textAlign = 'center';

          if (signOffLink) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'signoff-checkbox';
            checkbox.setAttribute('data-href', signOffLink.href);

            checkbox.addEventListener('change', updateButtonState);

            td.appendChild(checkbox);
          } else {
            td.innerText = '';
          }
          row.prepend(td);
        }
      });

      // Update button state initially
      updateButtonState();
    } else {
      console.log('Failed to find the target div using selector:', targetDivSelector);
    }
  }
}


// Attach BulkSignOffBoxes to both load and click events as needed
window.addEventListener('load', BulkSignOffBoxes);
// Example of attaching to a specific clickable element, replace 'yourClickableElementSelector' with your actual selector
document.addEventListener('click', BulkSignOffBoxes);


// Define your locations array with latitudes, longitudes, and the service value that corresponds to each location.
const locationsArray = [
  { lat: -37.0598, lng: 149.91031, serviceValue: '940' }, // Aslings (Lifeguards)
  { lat: -34.30736, lng: 150.93439, serviceValue: '40' }, // Austinmer
  { lat: -34.30736, lng: 150.93439, serviceValue: '1139' }, // Austinmer (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '927' }, // Australian Lifeguard Service NSW (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1600' }, // Australian UAV Service
  { lat: -33.63593, lng: 151.33158, serviceValue: '41' }, // Avalon Beach
  { lat: -33.63593, lng: 151.33158, serviceValue: '754' }, // Avalon Beach (Lifeguards)
  { lat: -33.47068, lng: 151.43699, serviceValue: '1112' }, // Avoca (Lifeguards)
  { lat: -33.47068, lng: 151.43699, serviceValue: '42' }, // Avoca Beach
  { lat: -28.8681, lng: 153.59153, serviceValue: '44' }, // Ballina Lighthouse and Lismore SLSC
  { lat: -36.89521, lng: 149.92411, serviceValue: '947' }, // Bar Beach Bega (Lifeguards)
  { lat: -32.94168, lng: 151.767, serviceValue: '1097' }, // Bar Beach Newcastle (Lifeguards)
  { lat: -35.79373, lng: 150.22981, serviceValue: '50' }, // Batemans Bay
  { lat: 0, lng: 0, serviceValue: '1539' }, // Bay and Basin Community Nippers Club
  { lat: -34.36425, lng: 150.92009, serviceValue: '53' }, // Bellambi
  { lat: -34.36425, lng: 150.92009, serviceValue: '1140' }, // Bellambi (Lifeguards)
  { lat: -30.4674, lng: 153.04467, serviceValue: '82' }, // Bellinger Valley-North Beach SLSC
  { lat: -36.42573, lng: 150.07612, serviceValue: '54' }, // Bermagui
  { lat: -36.42573, lng: 150.07612, serviceValue: '935' }, // Bermagui (Lifeguards)
  { lat: -33.64635, lng: 151.32687, serviceValue: '47' }, // Bilgola Beach
  { lat: -33.64635, lng: 151.32687, serviceValue: '755' }, // Bilgola Beach (Lifeguards)
  { lat: -32.78327, lng: 152.07567, serviceValue: '70' }, // Birubi Point
  { lat: -32.78327, lng: 152.07567, serviceValue: '749' }, // Birubi Point (Lifeguards)
  { lat: -32.07081, lng: 152.54492, serviceValue: '63' }, // Black Head
  { lat: -32.07081, lng: 152.54492, serviceValue: '739' }, // Blackhead (Lifeguards)
  { lat: -34.56619, lng: 150.86788, serviceValue: '1158' }, // Blacks (Lifeguards)
  { lat: -33.08036, lng: 151.65711, serviceValue: '1100' }, // Blacksmiths Beach Swansea Belmont (Lifeguards)
  { lat: -34.65373, lng: 150.85705, serviceValue: '1164' }, // Bombo (Lifeguards)
  { lat: -33.89039, lng: 151.27715, serviceValue: '67' }, // Bondi
  { lat: -33.89039, lng: 151.27715, serviceValue: '1128' }, // Bondi (Lifeguards)
  { lat: -31.58934, lng: 152.83891, serviceValue: '1302' }, // Bonny Hills (Lifeguards)
  { lat: -32.33663, lng: 152.54569, serviceValue: '744' }, // Boomerang (Lifeguards)
  { lat: -28.70484, lng: 153.6146, serviceValue: '696' }, // Broken Head (Lifeguards)
  { lat: -33.90338, lng: 151.26773, serviceValue: '74' }, // Bronte
  { lat: -33.90338, lng: 151.26773, serviceValue: '1130' }, // Bronte (Lifeguards)
  { lat: -29.6059, lng: 153.33452, serviceValue: '715' }, // Brooms Head (Lifeguards)
  { lat: -35.85811, lng: 150.1762, serviceValue: '774' }, // Broulee (Lifeguards)
  { lat: -35.85811, lng: 150.1762, serviceValue: '75' }, // Broulee Surfers
  { lat: -28.54174, lng: 153.55574, serviceValue: '58' }, // Brunswick
  { lat: -28.54174, lng: 153.55574, serviceValue: '697' }, // Brunswick Heads (Lifeguards)
  { lat: -34.33967, lng: 150.92523, serviceValue: '79' }, // Bulli
  { lat: -34.33967, lng: 150.92523, serviceValue: '1141' }, // Bulli (Lifeguards)
  { lat: -33.66484, lng: 151.32066, serviceValue: '78' }, // Bungan Beach
  { lat: -33.66484, lng: 151.32066, serviceValue: '757' }, // Bungan Beach (Lifeguards)
  { lat: -34.18506, lng: 151.04464, serviceValue: '69' }, // Burning Palms
  { lat: -28.64115, lng: 153.61436, serviceValue: '83' }, // Byron Bay
  { lat: -28.64115, lng: 153.61436, serviceValue: '699' }, // Byron Bay (Lifeguards)
  { lat: -28.33187, lng: 153.57068, serviceValue: '691' }, // Cabarita (Lifeguards)
  { lat: -28.33187, lng: 153.57068, serviceValue: '84' }, // Cabarita Beach
  { lat: -31.63406, lng: 152.83331, serviceValue: '86' }, // Camden Haven
  { lat: -36.37819, lng: 150.07707, serviceValue: '934' }, // Camel Rock Beach (Lifeguards)
  { lat: -32.19533, lng: 152.53725, serviceValue: '95' }, // Cape Hawke
  { lat: -32.19533, lng: 152.53725, serviceValue: '742' }, // Cape Hawke (Lifeguards)
  { lat: -28.30452, lng: 153.57282, serviceValue: '692' }, // Casuarina Beach (Lifeguards)
  { lat: -33.15785, lng: 151.62912, serviceValue: '93' }, // Catherine Hill Bay
  { lat: -33.15785, lng: 151.62912, serviceValue: '1101' }, // Catherine Hill Bay (Lifeguards)
  { lat: -33.11031, lng: 151.64616, serviceValue: '505' }, // Caves Beach
  { lat: -33.11031, lng: 151.64616, serviceValue: '1102' }, // Caves Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1179' }, // CC - DUTY OFFICERS CLUB
  { lat: 0, lng: 0, serviceValue: '1532' }, // CC - SMAR
  { lat: 0, lng: 0, serviceValue: '1553' }, // CC - UAV
  { lat: 0, lng: 0, serviceValue: '684' }, // CC Support Operations
  { lat: -28.641742, lng: 153.624837, serviceValue: '698' }, // Clarks (Lifeguards)
  { lat: -33.91432, lng: 151.26677, serviceValue: '102' }, // Clovelly
  { lat: -33.91432, lng: 151.26677, serviceValue: '1131' }, // Clovelly (Lifeguards)
  { lat: -34.24459, lng: 150.97666, serviceValue: '105' }, // Coalcliff
  { lat: -34.24459, lng: 150.97666, serviceValue: '1142' }, // Coalcliff (Lifeguards)
  { lat: -30.29462, lng: 153.13927, serviceValue: '106' }, // Coffs Harbour
  { lat: -30.29462, lng: 153.13927, serviceValue: '1079' }, // Coffs Harbour (Lifeguards)
  { lat: -34.28775, lng: 150.94836, serviceValue: '107' }, // Coledale
  { lat: -34.28775, lng: 150.94836, serviceValue: '1143' }, // Coledale (Lifeguards)
  { lat: -33.73312, lng: 151.30238, serviceValue: '117' }, // Collaroy
  { lat: -33.73312, lng: 151.30238, serviceValue: '1122' }, // Collaroy (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '545' }, // Community (NSW)
  { lat: -33.92303, lng: 151.2579, serviceValue: '108' }, // Coogee (NSW)
  { lat: -33.92303, lng: 151.2579, serviceValue: '1132' }, // Coogee (NSW) (Lifeguards)
  { lat: -32.94168, lng: 151.767, serviceValue: '96' }, // Cooks Hill
  { lat: -33.49058, lng: 151.43192, serviceValue: '112' }, // Copacabana
  { lat: -33.49058, lng: 151.43192, serviceValue: '1113' }, // Copacabana (Lifeguards)
  { lat: -30.03513, lng: 153.19765, serviceValue: '783' }, // Corindi (Lifeguards)
  { lat: -30.05994, lng: 153.20068, serviceValue: '1088' }, // Corindi Arrawarra Beach (Lifeguards)
  { lat: -34.382, lng: 150.91485, serviceValue: '110' }, // Corrimal
  { lat: -34.382, lng: 150.91485, serviceValue: '1144' }, // Corrimal (Lifeguards)
  { lat: -31.18695, lng: 152.97893, serviceValue: '729' }, // Crescent Head (Lifeguards)
  { lat: -34.05601, lng: 151.1547, serviceValue: '116' }, // Cronulla
  { lat: -34.05601, lng: 151.1547, serviceValue: '1138' }, // Cronulla (Lifeguards)
  { lat: -34.90593, lng: 150.76586, serviceValue: '764' }, // Crookhaven (Lifeguards)
  { lat: -31.84263, lng: 152.74344, serviceValue: '114' }, // Crowdy Head
  { lat: -31.84263, lng: 152.74344, serviceValue: '735' }, // Crowdy Head (Lifeguards)
  { lat: -28.256, lng: 153.57863, serviceValue: '119' }, // Cudgen Headland
  { lat: -36.163, lng: 150.12464, serviceValue: '777' }, // Dalmeny (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1083' }, // Darlington Lorikeet (Lifeguards)
  { lat: -33.7524, lng: 151.29671, serviceValue: '123' }, // Dee Why
  { lat: -33.7524, lng: 151.29671, serviceValue: '1123' }, // Dee Why (Lifeguards)
  { lat: -32.04426, lng: 152.54123, serviceValue: '738' }, // Diamond Beach (Lifeguards)
  { lat: -30.27469, lng: 153.1424, serviceValue: '1085' }, // Diggers Beach (Lifeguards)
  { lat: -32.94493, lng: 151.76088, serviceValue: '126' }, // Dixon Park
  { lat: -32.94493, lng: 151.76088, serviceValue: '1094' }, // Dixon Park (Lifeguards)
  { lat: -28.16768, lng: 153.55119, serviceValue: '686' }, // Duranbah (Lifeguards)
  { lat: -34.68982, lng: 150.85308, serviceValue: '1166' }, // East Beach (Lifeguards)
  { lat: -34.04618, lng: 151.159, serviceValue: '134' }, // Elouera
  { lat: -34.04618, lng: 151.159, serviceValue: '1136' }, // Elouera (Lifeguards)
  { lat: -30.17082, lng: 153.18894, serviceValue: '1086' }, // Emerald Beach (Lifeguards)
  { lat: -34.18046, lng: 151.05227, serviceValue: '136' }, // Era
  { lat: -29.11223, lng: 153.43393, serviceValue: '713' }, // Evans Head (Lifeguards)
  { lat: -29.11223, lng: 153.43393, serviceValue: '139' }, // Evans Head/Casino SLSC
  { lat: -34.39628, lng: 150.90517, serviceValue: '149' }, // Fairy Meadow
  { lat: -34.39628, lng: 150.90517, serviceValue: '1145' }, // Fairy Meadow (Lifeguards)
  { lat: -32.74265, lng: 152.17114, serviceValue: '145' }, // Fingal Beach
  { lat: -32.74265, lng: 152.17114, serviceValue: '747' }, // Fingal Beach Port Stephens (Lifeguards)
  { lat: -28.19684, lng: 153.56666, serviceValue: '146' }, // Fingal Rovers
  { lat: -28.19684, lng: 153.56666, serviceValue: '687' }, // Fingal Tweed (Lifeguards)
  { lat: -28.63981, lng: 153.61067, serviceValue: '1180' }, // First Sun (Lifeguards)
  { lat: -28.84278, lng: 153.60571, serviceValue: '1556' }, // Flat Rock (Lifeguards)
  { lat: -31.44257, lng: 152.92582, serviceValue: '1091' }, // Flynns Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '683' }, // FNC - Duty Officers
  { lat: 0, lng: 0, serviceValue: '681' }, // FNC Support Operations
  { lat: -32.17792, lng: 152.51164, serviceValue: '151' }, // Forster
  { lat: -32.17792, lng: 152.51164, serviceValue: '741' }, // Forster (Lifeguards)
  { lat: -33.18703, lng: 151.62214, serviceValue: '1311' }, // Frazer Beach (Lifeguards)
  { lat: -33.78108, lng: 151.28992, serviceValue: '153' }, // Freshwater
  { lat: -33.78108, lng: 151.28992, serviceValue: '1124' }, // Freshwater (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1348' }, // FSC - Duty Officers
  { lat: 0, lng: 0, serviceValue: '1635' }, // FSC - Lifesaving
  { lat: 0, lng: 0, serviceValue: '1378' }, // FSC Support Operations
  { lat: -34.13753, lng: 151.1181, serviceValue: '155' }, // Garie
  { lat: -34.17018, lng: 151.06604, serviceValue: '761' }, // Garie (Lifeguards)
  { lat: -34.74282, lng: 150.83212, serviceValue: '157' }, // Gerringong
  { lat: -34.77263, lng: 150.80786, serviceValue: '1336' }, // Gerroa (Lifeguards)
  { lat: -30.79254, lng: 152.99775, serviceValue: '730' }, // Grassy Head Beach (Lifeguards)
  { lat: -28.3582, lng: 153.5748, serviceValue: '693' }, // Hastings Point (Lifeguards)
  { lat: -31.05441, lng: 153.05245, serviceValue: '167' }, // Hat Head
  { lat: -31.05441, lng: 153.05245, serviceValue: '731' }, // Hat Head (Lifeguards)
  { lat: -32.67346, lng: 152.18501, serviceValue: '745' }, // Hawks Nest (Lifeguards)
  { lat: -34.23075, lng: 150.98878, serviceValue: '169' }, // Helensburgh Stanwell Park
  { lat: -30.88337, lng: 153.04078, serviceValue: '732' }, // Horseshoe Bay (South West Rocks) (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1198' }, // HUN - Duty Officers
  { lat: 0, lng: 0, serviceValue: '678' }, // HUN Support Operations
  { lat: -30.52216, lng: 153.02705, serviceValue: '721' }, // Hungry Head Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1531' }, // Hyams Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1332' }, // ILL - Duty Officers
  { lat: 0, lng: 0, serviceValue: '1465' }, // ILL - Night Operations Group
  { lat: 0, lng: 0, serviceValue: '676' }, // ILL Support Operations
  { lat: -29.39552, lng: 153.37177, serviceValue: '716' }, // Iluka Bluff (Lifeguards)
  { lat: -31.18695, lng: 152.97893, serviceValue: '176' }, // Kempsey Crescent Head
  { lat: -34.68093, lng: 150.85391, serviceValue: '1165' }, // Kendalls (Lifeguards)
  { lat: -34.67599, lng: 150.85431, serviceValue: '180' }, // Kiama
  { lat: -34.67599, lng: 150.85431, serviceValue: '1578' }, // Kiama (Lifeguards)
  { lat: -34.63701, lng: 150.85505, serviceValue: '177' }, // Kiama Downs
  { lat: -34.63701, lng: 150.85505, serviceValue: '1163' }, // Kiama Downs (Lifeguards)
  { lat: -33.53248, lng: 151.35893, serviceValue: '181' }, // Killcare
  { lat: -33.53248, lng: 151.35893, serviceValue: '1114' }, // Killcare (Lifeguards)
  { lat: -28.25599, lng: 153.57865, serviceValue: '688' }, // Kingscliff (Lifeguards)
  { lat: -31.55034, lng: 152.85795, serviceValue: '1093' }, // Lake Cathie Beach (Lifeguards)
  { lat: -33.79034, lng: 151.00804, serviceValue: '1517' }, // Lake Parramatta (Lifeguards)
  { lat: -28.78527, lng: 153.59351, serviceValue: '707' }, // Lennox Head (Lifeguards)
  { lat: -28.78527, lng: 153.59351, serviceValue: '193' }, // Lennox Head Alstonville
  { lat: 0, lng: 0, serviceValue: '1355' }, // Lifeguard Magazine Club
  { lat: 0, lng: 0, serviceValue: '1177' }, // Lifeguards International Club (Lifeguards)
  { lat: -28.8681, lng: 153.59153, serviceValue: '708' }, // Lighthouse Beach (Ballina) (Lifeguards)
  { lat: -31.47526, lng: 152.93265, serviceValue: '1092' }, // Lighthouse Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1218' }, // Lismore - Rescue Helicopter
  { lat: 0, lng: 0, serviceValue: '1342' }, // LNC - DUTY OFFICERS
  { lat: 0, lng: 0, serviceValue: '1571' }, // LNC - UAV
  { lat: 0, lng: 0, serviceValue: '1064' }, // LNC Support Operations
  { lat: -33.74483, lng: 151.30461, serviceValue: '199' }, // Long Reef
  { lat: -33.74483, lng: 151.30461, serviceValue: '1305' }, // Long Reef (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1562' }, // Lord Howe Island Community Nipper Club
  { lat: -30.74485, lng: 152.99733, serviceValue: '228' }, // Macksville-Scotts Head
  { lat: -33.50067, lng: 151.42491, serviceValue: '218' }, // MacMasters
  { lat: -33.50067, lng: 151.42491, serviceValue: '1115' }, // MacMasters (Lifeguards)
  { lat: -33.31289, lng: 151.52654, serviceValue: '1340' }, // Magenta (Lifeguards)
  { lat: -35.79373, lng: 150.22981, serviceValue: '773' }, // Malua Bay (Lifeguards)
  { lat: -33.79961, lng: 151.29046, serviceValue: '202' }, // Manly
  { lat: -33.79961, lng: 151.29046, serviceValue: '1127' }, // Manly (Lifeguards)
  { lat: -33.94735, lng: 151.25664, serviceValue: '206' }, // Maroubra
  { lat: -33.94735, lng: 151.25664, serviceValue: '1133' }, // Maroubra (Lifeguards)
  { lat: -32.94977, lng: 151.75626, serviceValue: '212' }, // Merewether
  { lat: -32.94977, lng: 151.75626, serviceValue: '1095' }, // Merewether (Lifeguards)
  { lat: -32.95184, lng: 151.75563, serviceValue: '1511' }, // Merewether Ocean Baths (Lifeguards)
  { lat: -36.89759, lng: 149.91428, serviceValue: '938' }, // Merimbula (Lifeguards)
  { lat: -29.76909, lng: 153.29554, serviceValue: '234' }, // Minnie Water Wooli
  { lat: -29.76909, lng: 153.29554, serviceValue: '780' }, // Minnie Waters (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1345' }, // MNC - Duty Officers
  { lat: 0, lng: 0, serviceValue: '858' }, // MNC Support Operations
  { lat: -35.33894, lng: 150.47371, serviceValue: '224' }, // Mollymook
  { lat: -33.67865, lng: 151.31344, serviceValue: '225' }, // Mona Vale
  { lat: -33.67865, lng: 151.31344, serviceValue: '758' }, // Mona Vale (Lifeguards)
  { lat: -35.91342, lng: 150.15663, serviceValue: '227' }, // Moruya
  { lat: -35.91342, lng: 150.15663, serviceValue: '775' }, // Moruya (Lifeguards)
  { lat: -30.63872, lng: 153.01557, serviceValue: '252' }, // Nambucca Heads
  { lat: -30.63872, lng: 153.01557, serviceValue: '724' }, // Nambucca Heads Beach (Lifeguards)
  { lat: -36.22384, lng: 150.13977, serviceValue: '236' }, // Narooma
  { lat: -36.22384, lng: 150.13977, serviceValue: '778' }, // Narooma (Lifeguards)
  { lat: -33.705, lng: 151.30497, serviceValue: '239' }, // Narrabeen
  { lat: -33.71517, lng: 151.29992, serviceValue: '1303' }, // Narrabeen (Lifeguards)
  { lat: -35.31706, lng: 150.47197, serviceValue: '768' }, // Narrawallee (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1344' }, // NC - Duty Officers
  { lat: 0, lng: 0, serviceValue: '1338' }, // NC Support Operations
  { lat: -32.92931, lng: 151.78693, serviceValue: '249' }, // Newcastle
  { lat: -32.92931, lng: 151.78693, serviceValue: '1096' }, // Newcastle Beach (Lifeguards)
  { lat: -32.92959, lng: 151.79087, serviceValue: '1510' }, // Newcastle Ocean Baths (Lifeguards)
  { lat: -33.65382, lng: 151.3229, serviceValue: '264' }, // Newport
  { lat: -33.65382, lng: 151.3229, serviceValue: '756' }, // Newport Beach (Lifeguards)
  { lat: -32.92444, lng: 151.79175, serviceValue: '258' }, // Nobbys (NSW)
  { lat: -32.92444, lng: 151.79175, serviceValue: '1098' }, // Nobbys Beach Newcastle (Lifeguards)
  { lat: -33.45778, lng: 151.43936, serviceValue: '237' }, // North Avoca
  { lat: -33.47068, lng: 151.43699, serviceValue: '1116' }, // North Avoca (Lifeguards)
  { lat: -30.4674, lng: 153.04467, serviceValue: '722' }, // North Beach (Bellingen) (Lifeguards)
  { lat: -33.89007, lng: 151.28118, serviceValue: '240' }, // North Bondi
  { lat: -34.05062, lng: 151.15564, serviceValue: '246' }, // North Cronulla
  { lat: -34.05062, lng: 151.15564, serviceValue: '1137' }, // North Cronulla (Lifeguards)
  { lat: -33.76651, lng: 151.29939, serviceValue: '244' }, // North Curl Curl
  { lat: -33.76651, lng: 151.29939, serviceValue: '1306' }, // North Curl Curl (Lifeguards)
  { lat: -33.33407, lng: 151.50618, serviceValue: '247' }, // North Entrance
  { lat: -33.33407, lng: 151.50618, serviceValue: '1105' }, // North Entrance (Lifeguards)
  { lat: -31.63406, lng: 152.83331, serviceValue: '1301' }, // North Haven (Lifeguards)
  { lat: -35.90441, lng: 150.15079, serviceValue: '1575' }, // North Head - Moruya Airport (Lifeguards)
  { lat: -28.24, lng: 153.56867, serviceValue: '1487' }, // North Kingscliff (Lifeguards)
  { lat: -35.32458, lng: 150.48014, serviceValue: '769' }, // North Mollymook (Lifeguards)
  { lat: -33.705, lng: 151.30497, serviceValue: '257' }, // North Narrabeen
  { lat: -33.705, lng: 151.30497, serviceValue: '1121' }, // North Narrabeen (Lifeguards)
  { lat: -33.59075, lng: 151.32465, serviceValue: '262' }, // North Palm Beach
  { lat: -33.59075, lng: 151.32465, serviceValue: '752' }, // North Palm Beach (Lifeguards)
  { lat: -33.79085, lng: 151.28733, serviceValue: '267' }, // North Steyne
  { lat: -33.79085, lng: 151.28733, serviceValue: '1126' }, // North Steyne (Lifeguards)
  { lat: -34.41375, lng: 150.90146, serviceValue: '261' }, // North Wollongong
  { lat: -34.41375, lng: 150.90146, serviceValue: '1146' }, // North Wollongong (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '618' }, // Northern Region Helicopter Rescue Service
  { lat: -34.9339, lng: 150.77913, serviceValue: '269' }, // Nowra Culburra
  { lat: -33.52443, lng: 151.32112, serviceValue: '273' }, // Ocean Beach
  { lat: -33.52443, lng: 151.32112, serviceValue: '1117' }, // Ocean Beach Gosford (Lifeguards)
  { lat: -31.97077, lng: 152.59153, serviceValue: '736' }, // Old Bar Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1666' }, // On Water - NSW Flood Response Group
  { lat: -32.77934, lng: 152.11598, serviceValue: '748' }, // One Mile (Port Stephens) (Lifeguards)
  { lat: -32.33082, lng: 152.53687, serviceValue: '309' }, // Pacific Palms
  { lat: -32.33082, lng: 152.53687, serviceValue: '743' }, // Pacific Palms (Lifeguards)
  { lat: -33.59913, lng: 151.32454, serviceValue: '751' }, // Palm Beach (Lifeguards)
  { lat: -33.59913, lng: 151.32454, serviceValue: '286' }, // Palm Beach (NSW)
  { lat: -36.94135, lng: 149.90915, serviceValue: '284' }, // Pambula
  { lat: -36.94135, lng: 149.90915, serviceValue: '939' }, // Pambula Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '690' }, // Peppers Pool (Lifeguards)
  { lat: -29.44122, lng: 153.36692, serviceValue: '717' }, // Pippi (Lifeguards)
  { lat: -34.49199, lng: 150.90788, serviceValue: '1147' }, // Port Kembla (Lifeguards)
  { lat: -34.49199, lng: 150.90788, serviceValue: '298' }, // Port Kembla (NSW)
  { lat: -31.44257, lng: 152.92582, serviceValue: '305' }, // Port Macquarie
  { lat: -28.38411, lng: 153.56877, serviceValue: '694' }, // Pottsville North (Lifeguards)
  { lat: -28.3897, lng: 153.56882, serviceValue: '976' }, // Pottsville South (Lifeguards)
  { lat: -33.78601, lng: 151.28781, serviceValue: '318' }, // Queenscliff
  { lat: -33.78601, lng: 151.28781, serviceValue: '1125' }, // Queenscliff (MC Lifeguards)
  { lat: -29.98263, lng: 153.23038, serviceValue: '782' }, // Red Rock (Lifeguards)
  { lat: -29.98263, lng: 153.23038, serviceValue: '330' }, // Red Rock Corindi
  { lat: -33.01368, lng: 151.7198, serviceValue: '327' }, // Redhead
  { lat: -33.01368, lng: 151.7198, serviceValue: '1103' }, // Redhead (Lifeguards)
  { lat: -28.27697, lng: 153.57882, serviceValue: '554' }, // Salt
  { lat: -28.27697, lng: 153.57882, serviceValue: '689' }, // Salt Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '942' }, // Salt Pool (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '737' }, // Saltwater Beach (Lifeguards)
  { lat: -34.33089, lng: 150.92795, serviceValue: '342' }, // Sandon Point
  { lat: -34.33089, lng: 150.92795, serviceValue: '1148' }, // Sandon Point (Lifeguards)
  { lat: -30.23111, lng: 153.15287, serviceValue: '1087' }, // Sapphire Beach (Lifeguards)
  { lat: -30.36827, lng: 153.10215, serviceValue: '334' }, // Sawtell
  { lat: -30.36827, lng: 153.10215, serviceValue: '1080' }, // Sawtell (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1347' }, // SC - Duty Officers
  { lat: 0, lng: 0, serviceValue: '1169' }, // SC Support Operations
  { lat: -34.27446, lng: 150.9581, serviceValue: '339' }, // Scarborough Wombarra
  { lat: -34.27446, lng: 150.9581, serviceValue: '1149' }, // Scarborough Wombarra (Lifeguards)
  { lat: -30.74485, lng: 152.99733, serviceValue: '725' }, // Scotts Head Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1168' }, // Seven Mile Beach (Lifeguards)
  { lat: -28.83424, lng: 153.60497, serviceValue: '709' }, // Sharpes (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '348' }, // Shellharbour
  { lat: -34.572, lng: 150.8673, serviceValue: '1156' }, // Shellharbour North (Lifeguards)
  { lat: -34.57923, lng: 150.872, serviceValue: '1161' }, // Shellharbour Rock Pool (Lifeguards)
  { lat: -34.5824, lng: 150.87321, serviceValue: '1159' }, // Shellharbour South (Lifeguards)
  { lat: -28.865, lng: 153.5934, serviceValue: '710' }, // Shelly (Ballina) (Lifeguards)
  { lat: -33.37298, lng: 151.48721, serviceValue: '347' }, // Shelly Beach
  { lat: -33.37298, lng: 151.48721, serviceValue: '1106' }, // Shelly Beach (Wyong) (Lifeguards)
  { lat: -34.85105, lng: 150.74985, serviceValue: '349' }, // Shoalhaven Heads
  { lat: -34.85105, lng: 150.74985, serviceValue: '763' }, // Shoalhaven Heads (Lifeguards)
  { lat: -36.88395, lng: 149.93075, serviceValue: '937' }, // Short Point (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '860' }, // SLSNSW Southern Region HRS Sydney
  { lat: 0, lng: 0, serviceValue: '921' }, // SNB - Duty Officers
  { lat: 0, lng: 0, serviceValue: '1463' }, // SNB - Night Operations Group
  { lat: 0, lng: 0, serviceValue: '1554' }, // SNB - Surfcom Northern Beaches Team
  { lat: 0, lng: 0, serviceValue: '1577' }, // SNB - UAV Group
  { lat: 0, lng: 0, serviceValue: '679' }, // SNB Support Operations
  { lat: -33.28953, lng: 151.56658, serviceValue: '359' }, // Soldiers Beach
  { lat: -33.28953, lng: 151.56658, serviceValue: '1107' }, // Soldiers Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '711' }, // South Ballina (Lifeguards)
  { lat: -33.77329, lng: 151.29264, serviceValue: '338' }, // South Curl Curl
  { lat: -33.77329, lng: 151.29264, serviceValue: '1307' }, // South Curl Curl (Lifeguards)
  { lat: -28.49725, lng: 153.5508, serviceValue: '701' }, // South Golden (Lifeguards)
  { lat: -33.95132, lng: 151.25557, serviceValue: '353' }, // South Maroubra
  { lat: -35.33894, lng: 150.47371, serviceValue: '770' }, // South Mollymook (Lifeguards)
  { lat: -33.72288, lng: 151.29911, serviceValue: '356' }, // South Narrabeen
  { lat: -33.72288, lng: 151.29911, serviceValue: '1304' }, // South Narrabeen (Lifeguards)
  { lat: -30.8836, lng: 153.04225, serviceValue: '379' }, // South West Rocks
  { lat: -30.8836, lng: 153.04225, serviceValue: '733' }, // South West Rocks (Lifeguards)
  { lat: -34.23075, lng: 150.98878, serviceValue: '1150' }, // Stanwell Park (Lifeguards)
  { lat: -32.91121, lng: 151.78813, serviceValue: '371' }, // Stockton
  { lat: -32.91121, lng: 151.78813, serviceValue: '1099' }, // Stockton Beach (Lifeguards)
  { lat: -28.69025, lng: 153.61344, serviceValue: '700' }, // Suffolk Park (Lifeguards)
  { lat: -35.75878, lng: 150.2108, serviceValue: '772' }, // Surf Beach (Batemans Bay) (Lifeguards)
  { lat: -34.67599, lng: 150.85431, serviceValue: '1162' }, // Surf Beach (Kiama) (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1491' }, // Surf Life Saving NSW Coastsafe
  { lat: 0, lng: 0, serviceValue: '1594' }, // Surf Life Saving NSW Event Club
  { lat: 0, lng: 0, serviceValue: '1503' }, // Surf Life Saving NSW Event Services (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '862' }, // Surf Life Saving NSW Hunter Region HRS
  { lat: 0, lng: 0, serviceValue: '1276' }, // Surf Life Saving NSW LG Supervisors (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '861' }, // Surf Life Saving NSW Northern Region HRS
  { lat: 0, lng: 0, serviceValue: '1191' }, // Surf Life Saving NSW State Duty Officers Club
  { lat: 0, lng: 0, serviceValue: '680' }, // Surf Life Saving NSW State Operations Centre
  { lat: 0, lng: 0, serviceValue: '620' }, // Surf Life Saving NSW Support Operations Club
  { lat: 0, lng: 0, serviceValue: '619' }, // Surf Rescue 30 SYD
  { lat: 0, lng: 0, serviceValue: '551' }, // Surf Rescue 40 FNC
  { lat: 0, lng: 0, serviceValue: '857' }, // Surf Rescue 50 SC
  { lat: -35.18752, lng: 150.58219, serviceValue: '374' }, // Sussex Inlet
  { lat: -35.18752, lng: 150.58219, serviceValue: '767' }, // Sussex Inlet (Lifeguards)
  { lat: -33.08036, lng: 151.65711, serviceValue: '375' }, // Swansea Belmont
  { lat: 0, lng: 0, serviceValue: '674' }, // SYD - Duty Officers
  { lat: 0, lng: 0, serviceValue: '653' }, // SYD Support Operations
  { lat: 0, lng: 0, serviceValue: '917' }, // Sydney Northern Beaches CISM TIPS
  { lat: -31.47526, lng: 152.93265, serviceValue: '380' }, // Tacking Point
  { lat: -28.64515, lng: 153.63078, serviceValue: '704' }, // Tallows (Lifeguards)
  { lat: -33.8997, lng: 151.26996, serviceValue: '382' }, // Tamarama
  { lat: -33.8997, lng: 151.26996, serviceValue: '1129' }, // Tamarama (Lifeguards)
  { lat: -31.97077, lng: 152.59153, serviceValue: '396' }, // Taree Old Bar
  { lat: -36.7271, lng: 149.98253, serviceValue: '384' }, // Tathra
  { lat: -36.7271, lng: 149.98253, serviceValue: '936' }, // Tathra (Lifeguards)
  { lat: -32.67346, lng: 152.18501, serviceValue: '389' }, // Tea Gardens Hawks Nest
  { lat: 0, lng: 0, serviceValue: '943' }, // Tea Gardens Pool (Lifeguards)
  { lat: -33.4464, lng: 151.4445, serviceValue: '388' }, // Terrigal
  { lat: -33.4464, lng: 151.4445, serviceValue: '1118' }, // Terrigal (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '544' }, // Test NSW Club
  { lat: 0, lng: 0, serviceValue: '1533' }, // Test NSW Lifeguards
  { lat: 0, lng: 0, serviceValue: '1461' }, // Test NSW Support Ops Club
  { lat: -33.34792, lng: 151.50277, serviceValue: '387' }, // The Entrance
  { lat: -33.34792, lng: 151.50277, serviceValue: '1108' }, // The Entrance (Lifeguards)
  { lat: -33.25449, lng: 151.56233, serviceValue: '393' }, // The Lakes
  { lat: -33.25449, lng: 151.56233, serviceValue: '1109' }, // The Lakes (Lifeguards)
  { lat: -28.63716, lng: 153.62854, serviceValue: '703' }, // The Pass (Lifeguards)
  { lat: -34.316, lng: 150.92773, serviceValue: '392' }, // Thirroul
  { lat: -34.316, lng: 150.92773, serviceValue: '1151' }, // Thirroul (Lifeguards)
  { lat: -34.93133, lng: 150.77271, serviceValue: '765' }, // Tilbury (Lifeguards)
  { lat: -33.3622, lng: 151.49989, serviceValue: '397' }, // Toowoon Bay
  { lat: -33.3622, lng: 151.49989, serviceValue: '1110' }, // Toowoon Bay (Lifeguards)
  { lat: -31.44257, lng: 152.92582, serviceValue: '1090' }, // Town Beach (Lifeguards)
  { lat: -34.38674, lng: 150.91153, serviceValue: '399' }, // Towradgi
  { lat: -34.38674, lng: 150.91153, serviceValue: '1152' }, // Towradgi (Lifeguards)
  { lat: -29.43141, lng: 153.36292, serviceValue: '718' }, // Turners (Lifeguards)
  { lat: -36.06397, lng: 150.13678, serviceValue: '776' }, // Tuross Heads (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1572' }, // Tyagarah Beach (Lifeguards)
  { lat: -33.52713, lng: 151.31542, serviceValue: '409' }, // Umina
  { lat: -33.52713, lng: 151.31542, serviceValue: '1119' }, // Umina (Lifeguards)
  { lat: -30.52216, lng: 153.02705, serviceValue: '406' }, // Urunga SLSC
  { lat: -30.59707, lng: 153.01235, serviceValue: '726' }, // Valla Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '727' }, // Valla Beach Resort (Lifeguards)
  { lat: -33.43018, lng: 151.44676, serviceValue: '414' }, // Wamberal
  { lat: -33.43018, lng: 151.44676, serviceValue: '1120' }, // Wamberal (Lifeguards)
  { lat: -34.04337, lng: 151.16121, serviceValue: '415' }, // Wanda
  { lat: -34.04337, lng: 151.16121, serviceValue: '1135' }, // Wanda (Lifeguards)
  { lat: -34.54969, lng: 150.86865, serviceValue: '1157' }, // Warilla (Lifeguards)
  { lat: -34.54969, lng: 150.86865, serviceValue: '420' }, // Warilla Barrack Point
  { lat: -34.54651, lng: 150.87216, serviceValue: '1160' }, // Warilla North (Lifeguards)
  { lat: -34.55977, lng: 150.86903, serviceValue: '1509' }, // Warilla South (Lifeguards)
  { lat: -34.9339, lng: 150.77913, serviceValue: '766' }, // Warraine (Lifeguards)
  { lat: -33.6924, lng: 151.30884, serviceValue: '416' }, // Warriewood
  { lat: -33.6924, lng: 151.30884, serviceValue: '759' }, // Warriewood Beach (Lifeguards)
  { lat: -28.63687, lng: 153.63339, serviceValue: '705' }, // Wategos (Lifeguards)
  { lat: -34.13753, lng: 151.1181, serviceValue: '1170' }, // Wattamolla Beach (Lifeguards)
  { lat: -31.58934, lng: 152.83891, serviceValue: '418' }, // Wauchope Bonny Hills
  { lat: -34.74282, lng: 150.83212, serviceValue: '1167' }, // Werri (Lifeguards)
  { lat: 0, lng: 0, serviceValue: '1535' }, // Westpac Helicopter Moruya - Lifesaver 23
  { lat: 0, lng: 0, serviceValue: '1233' }, // Westpac Helicopter Sydney - Lifesaver 21
  { lat: -33.61145, lng: 151.33055, serviceValue: '429' }, // Whale Beach
  { lat: -33.61145, lng: 151.33055, serviceValue: '753' }, // Whale Beach (Lifeguards)
  { lat: -34.53828, lng: 150.87266, serviceValue: '433' }, // Windang
  { lat: -34.53828, lng: 150.87266, serviceValue: '1153' }, // Windang (Lifeguards)
  { lat: -34.42318, lng: 150.90595, serviceValue: '426' }, // Wollongong City
  { lat: -34.42318, lng: 150.90595, serviceValue: '1154' }, // Wollongong City Beach (Lifeguards)
  { lat: -30.10913, lng: 153.20191, serviceValue: '1081' }, // Woolgoolga (Lifeguards)
  { lat: -30.10913, lng: 153.20191, serviceValue: '427' }, // Woolgoolga SLSC
  { lat: -29.8867, lng: 153.26668, serviceValue: '781' }, // Wooli Beach (Lifeguards)
  { lat: -34.34863, lng: 150.9202, serviceValue: '440' }, // Woonona
  { lat: -34.34863, lng: 150.9202, serviceValue: '1155' }, // Woonona (Lifeguards)
  { lat: -29.43544, lng: 153.36404, serviceValue: '448' }, // Yamba
  { lat: -29.43544, lng: 153.36404, serviceValue: '719' }, // Yamba (Lifeguards)  
];

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    // The code here will run when the Escape key is pressed
    // event.preventDefault(); // Prevent the default action of the Escape key if needed
    fillClosestLocation();
  }
});

function fillClosestLocation() {
  const userLat = parseFloat(document.getElementById('incidentLatitude').value);
  const userLng = parseFloat(document.getElementById('incidentLongitude').value);
  if (!isNaN(userLat) && !isNaN(userLng)) {
    const closestService = findClosestService(userLat, userLng);
    if (closestService) {
      document.getElementById('primary_service').value = closestService;
      // If there's a change event attached to the dropdown, you might need to trigger it manually
      const event = new Event('change');
      document.getElementById('primary_service').dispatchEvent(event);
    }
  } else {
    alert('Please enter valid latitude and longitude values.');
  }
}

function findClosestService(userLat, userLng) {
  let closest = null;
  let closestDistance = Infinity;
  locationsArray.forEach((loc) => {
    const distance = haversineDistance(userLat, userLng, loc.lat, loc.lng);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = loc.serviceValue;
    }
  });
  return closest;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Function to convert text to uppercase
function convertToUppercase(text) {
  return text.toUpperCase();
}

// Function to handle textarea input event
function handleTextareaInput(event) {
  const textarea = event.target;
  const cursorPosition = textarea.selectionStart; // Get the current cursor position before changing the text
  const scrollPosition = textarea.scrollTop; // Get the current scroll position
  
  const newText = convertToUppercase(textarea.value);
  textarea.value = newText;
  
  // Restore the cursor position and scroll position
  textarea.selectionStart = cursorPosition;
  textarea.selectionEnd = cursorPosition;
  textarea.scrollTop = scrollPosition;
}

// Find textarea elements and attach event listener
const textareas = document.querySelectorAll('textarea[name="message"]');
textareas.forEach(textarea => {
  textarea.addEventListener('input', handleTextareaInput);
});

window.addEventListener('load', function() {
  // Check if the current page URL matches the specific pattern
  const currentPageUrl = window.location.href;
  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/record/')) {
    // Find the target div to append the icon
    const targetLabel = Array.from(document.querySelectorAll('.col-12.col-md-6 .form-group > label')).find(label => label.textContent.trim() === "If 'Other', specify:");
    const targetDiv = targetLabel ? targetLabel.closest('.col-12.col-md-6') : null;

    if (targetDiv) {
      // Create and append the icon as a clickable image
      const swapButton = document.createElement('img');
      swapButton.src = 'https://cdn-icons-png.flaticon.com/512/9126/9126056.png'; // Your icon URL
      swapButton.alt = 'Swap Message Direction';
      swapButton.style.cursor = 'pointer';
      swapButton.style.height = '32px'; // Adjust size as needed
      swapButton.style.width = '32px';
      swapButton.style.marginTop = '5px';
      swapButton.style.marginBottom = '15px';
      swapButton.style.marginLeft = '10px';

      // Add the click event listener to the button
      swapButton.addEventListener('click', function() {
        // Get both dropdowns
        const msgFrom = document.getElementById('msg_from');
        const msgTo = document.getElementById('msg_to');
        // Store the current values
        const currentFromValue = msgFrom.value;
        const currentToValue = msgTo.value;

        // Swap values for dropdowns
        msgFrom.value = currentToValue;
        msgTo.value = currentFromValue;

        // If "Other" is selected, swap the 'Other' input fields values
        if (currentFromValue === 'Other' || currentToValue === 'Other') {
          const fromOther = document.getElementById('from_other');
          const toOther = document.getElementById('to_other');
          const currentFromOtherValue = fromOther.value;
          const currentToOtherValue = toOther.value;

          fromOther.value = currentToOtherValue;
          toOther.value = currentFromOtherValue;
          
          // Remove 'disabled' attribute if necessary or set it based on the swapped values
          fromOther.disabled = currentToValue !== 'Other';
          toOther.disabled = currentFromValue !== 'Other';
        }

        // If needed, trigger any onchange handlers explicitly
        msgFrom.dispatchEvent(new Event('change', { 'bubbles': true }));
        msgTo.dispatchEvent(new Event('change', { 'bubbles': true }));
      });

      // Append the icon to the target div
      targetDiv.appendChild(swapButton);
    } else {
      console.error('Failed to find the target div');
    }
  }
});

window.addEventListener('load', initializeButtonAddition);
document.addEventListener('click', initializeButtonAddition); // Triggers on page clicks as well.

function initializeButtonAddition() {
  console.log('Initialization triggered.');

  const currentPageUrl = window.location.href;
  console.log('Current page URL:', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/view') || currentPageUrl.includes('https://surfcom.sls.com.au/incidents/search/submit')) {
    console.log('Correct page detected for script execution.');

    const table = document.getElementById('incidentSummaryTable');
    if (table) {
      console.log('Found the incidentSummaryTable.');

      const rows = table.querySelectorAll('tbody tr');
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "CLOSED") {
          console.log(`Row ${index + 1}: Status is 'CLOSED'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Reopen' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector('a.btn-dark')) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell = incidentCell.querySelector('a.btn');
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(`Row ${index + 1}: Creating new button for incidentId: ${incidentId}`);

                  const newButton = document.createElement('a');
                  newButton.className = 'btn btn-dark btn-block btn-xs'; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  newButton.style.width = 'auto';
                  // newButton.style.verticalAlign = 'bottom';
                  newButton.style.marginTop = "0px";
                  newButton.style.boxSizing = 'border-box';
                  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></svg> <span>Reopen</span>';

                  // Add click event listener for the confirmation dialog
                  newButton.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent the default action
                    const confirmReopen = confirm(`Are you sure you want to reopen ${incidentId}?`);
                    if (confirmReopen) {
                      // User confirmed, navigate to the reopen URL
                      window.location.href = `https://surfcom.sls.com.au/incidents/reopen/${incidentId}`;
                    }
                  });

                  actionsCell.appendChild(newButton);
                  console.log(`Row ${index + 1}: New 'Reopen' button added with confirmation dialog.`);
                } else {
                  console.log(`Row ${index + 1}: No button found in "Incident #" cell.`);
                }
              }
            } else {
              console.log(`Row ${index + 1}: 'Reopen' button already exists, skipping.`);
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.error('Incident table not found.');
    }
  } else {
    console.log('Script is not on the correct page for execution.');
  }
}

window.addEventListener('load', initializeButtonAddition22);
document.addEventListener('click', initializeButtonAddition22); // Triggers on page clicks as well.

function initializeButtonAddition22() {
  console.log('Initialization triggered.');

  const currentPageUrl = window.location.href;
  console.log('Current page URL:', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/view') || currentPageUrl.includes('https://surfcom.sls.com.au/incidents/search/submit')) {
    console.log('Correct page detected for script execution.');

    const table = document.getElementById('incidentSummaryTable');
    if (table) {
      console.log('Found the incidentSummaryTable.');

      const rows = table.querySelectorAll('tbody tr');
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "CLOSED") {
          console.log(`Row ${index + 1}: Status is 'CLOSED'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Download PDF' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector('a.btn-outline-danger')) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell = incidentCell.querySelector('a.btn');
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(`Row ${index + 1}: Creating new button for incidentId: ${incidentId}`);

                  const newButton = document.createElement('a');
                  newButton.className = 'btn btn-outline-danger'; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  newButton.style.width = 'auto';
                  newButton.style.marginTop = "0px";
                  newButton.style.boxSizing = 'border-box';
                  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/></svg> <span>PDF</span>';
                  newButton.href = `https://surfcom.sls.com.au/incidents/export-pdf/${incidentId}`; // Link to download PDF
                  newButton.target = '_blank'; // Open in a new tab

                  actionsCell.appendChild(newButton);
                  console.log(`Row ${index + 1}: New 'Download PDF' button added.`);
                } else {
                  console.log(`Row ${index + 1}: No button found in "Incident #" cell.`);
                }
              }
            } else {
              console.log(`Row ${index + 1}: 'Download PDF' button already exists, skipping.`);
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.error('Incident table not found.');
    }
  } else {
    console.log('Script is not on the correct page for execution.');
  }
}

window.addEventListener('load', initializeButtonAddition12);
document.addEventListener('click', initializeButtonAddition12); // Triggers on page clicks as well.

function initializeButtonAddition12() {
  console.log('Initialization triggered.');

  const currentPageUrl = window.location.href;
  console.log('Current page URL:', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/view') || currentPageUrl.includes('https://surfcom.sls.com.au/incidents/search/submit')) {
    console.log('Correct page detected for script execution.');

    const table = document.getElementById('incidentSummaryTable');
    if (table) {
      console.log('Found the incidentSummaryTable.');

      const rows = table.querySelectorAll('tbody tr');
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "CLOSED") {
          console.log(`Row ${index + 1}: Status is 'CLOSED'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Download CSV' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector('a.btn-outline-success')) { // Changed class to btn-outline-success for green outline
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell = incidentCell.querySelector('a.btn');
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(`Row ${index + 1}: Creating new button for incidentId: ${incidentId}`);

                  const newButton = document.createElement('a');
                  newButton.className = 'btn btn-outline-success'; // Changed to btn-outline-success for green outline
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  newButton.style.width = 'auto';
                  newButton.style.marginTop = "0px";
                  newButton.style.boxSizing = 'border-box';
                  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-csv" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.517 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879z"/></svg> <span>CSV</span>';
                  newButton.href = `https://surfcom.sls.com.au/incidents/xls/${incidentId}`; // Changed to a hypothetical CSV download link
                  newButton.target = '_blank'; // Open in a new tab
                  actionsCell.appendChild(newButton);
                  console.log(`Row ${index + 1}: New 'Download CSV' button added.`);
                } else {
                  console.log(`Row ${index + 1}: No button found in "Incident #" cell.`);
                }
              }
            } else {
              console.log(`Row ${index + 1}: 'Download CSV' button already exists, skipping.`);
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.error('Incident table not found.');
    }

  } else {
    console.log('Script is not on the correct page for execution.');
    }
}


window.addEventListener('load', initializeButtonAddition3);
document.addEventListener('click', initializeButtonAddition3); // Triggers on page clicks as well.

function initializeButtonAddition3() {
  console.log('Initialization2 triggered.');

  const currentPageUrl = window.location.href;
  console.log('Current page URL:', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/view') || currentPageUrl.includes('https://surfcom.sls.com.au/incidents/search/submit')) {
    console.log('Correct page detected for script execution.');

    const table = document.getElementById('incidentSummaryTable');
    if (table) {
      console.log('Found the incidentSummaryTable.');

      const rows = table.querySelectorAll('tbody tr');
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "Open") {
          console.log(`Row ${index + 1}: Status is 'Open'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Reopen' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector('a.btn-danger')) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell = incidentCell.querySelector('a.btn');
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(`Row ${index + 1}: Creating new button for incidentId: ${incidentId}`);

                  const newButton = document.createElement('a');
                  newButton.className = 'btn btn-danger btn-block btn-xs'; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  // newButton.style.verticalAlign = 'bottom';
                  newButton.style.marginTop = "0px";
                  newButton.style.width = 'auto';
                  newButton.style.boxSizing = 'border-box';
                  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/> <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z"/></svg> <span>Record</span>';

                  // Add click event listener for the confirmation dialog
                  newButton.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent the default action
                      // User confirmed, navigate to the reopen URL
                      window.location.href = `https://surfcom.sls.com.au/incidents/record/${incidentId}`;
                    
                  });

                  actionsCell.appendChild(newButton);
                  console.log(`Row ${index + 1}: New 'Reopen' button added with confirmation dialog.`);
                } else {
                  console.log(`Row ${index + 1}: No button found in "Incident #" cell.`);
                }
              }
            } else {
              console.log(`Row ${index + 1}: 'Reopen' button already exists, skipping.`);
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.error('Incident table not found.');
    }
  } else {
    console.log('Script is not on the correct page for execution.');
  }
}

window.addEventListener('load', initializeButtonAddition2);
document.addEventListener('click', initializeButtonAddition2); // Triggers on page clicks as well.

function initializeButtonAddition2() {
  console.log('Initialization2 triggered.');

  const currentPageUrl = window.location.href;
  console.log('Current page URL:', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/view') || currentPageUrl.includes('https://surfcom.sls.com.au/incidents/search/submit')) {
    console.log('Correct page detected for script execution.');

    const table = document.getElementById('incidentSummaryTable');
    if (table) {
      console.log('Found the incidentSummaryTable.');

      const rows = table.querySelectorAll('tbody tr');
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "Open") {
          console.log(`Row ${index + 1}: Status is 'Open'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Reopen' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector('a.btn-warning')) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell = incidentCell.querySelector('a.btn');
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(`Row ${index + 1}: Creating new button for incidentId: ${incidentId}`);

                  const newButton = document.createElement('a');
                  newButton.className = 'btn btn-warning btn-block btn-xs'; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  // newButton.style.verticalAlign = 'bottom';
                  newButton.style.marginRight = "2px";
                  newButton.style.marginTop = "0px";
                  newButton.style.width = 'auto';
                  newButton.style.boxSizing = 'border-box';
                  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/> <span>Close</span>';

                  // Add click event listener for the confirmation dialog
                  newButton.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent the default action
                      // User confirmed, navigate to the reopen URL
                      window.location.href = `https://surfcom.sls.com.au/incidents/close/${incidentId}`;
                    
                  });

                  actionsCell.appendChild(newButton);
                  console.log(`Row ${index + 1}: New 'Reopen' button added with confirmation dialog.`);
                } else {
                  console.log(`Row ${index + 1}: No button found in "Incident #" cell.`);
                }
              }
            } else {
              console.log(`Row ${index + 1}: 'Reopen' button already exists, skipping.`);
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.error('Incident table not found.');
    }
  } else {
    console.log('Script is not on the correct page for execution.');
  }
}

window.addEventListener('load', initializeStatusFormatting);
document.addEventListener('click', initializeStatusFormatting); // Triggers on page clicks as well.

function initializeStatusFormatting() {
  console.log('Initialization for status formatting triggered.');

  const currentPageUrl = window.location.href;
  console.log('Current page URL:', currentPageUrl);

  if (currentPageUrl.includes('https://surfcom.sls.com.au/incidents/view') || currentPageUrl.includes('https://surfcom.sls.com.au/incidents/search/submit')) {
    console.log('Correct page detected for script execution.');

    const table = document.getElementById('incidentSummaryTable');
    if (table) {
      console.log('Found the incidentSummaryTable.');

      const rows = table.querySelectorAll('tbody tr');
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell) {
          const statusText = statusCell.textContent.trim();
          if (statusText === "Open") {
            console.log(`Row ${index + 1}: Status is 'Open'. Formatting with pastel green.`);
            statusCell.innerHTML = `<span style="display: block; padding: 2px 5px; margin: 0; background-color: #b8d8b8; color: #3a5335; border-radius: 4px;">Open</span>`;
          } else if (statusText === "CLOSED") {
            console.log(`Row ${index + 1}: Status is 'CLOSED'. Formatting with pastel red.`);
            statusCell.innerHTML = `<span style="display: block; padding: 2px 5px; margin: 0; background-color: #f4bfbf; color: #7c2a2a; border-radius: 4px;">CLOSED</span>`;
          }
        } else {
          console.log(`Row ${index + 1}: Status cell not found.`);
        }
      });
    } else {
      console.error('Incident table not found.');
    }
  } else {
    console.log('Script is not on the correct page for execution.');
  }
}

document.addEventListener('keydown', function(event) {
  // Check if Ctrl + Enter was pressed and the event's target is the textarea
  if (event.ctrlKey && event.key === 'Enter' && event.target.id === 'message') {
      event.preventDefault(); // Prevent the default action (form submission or other)

      // Find the button by its id
      var button = document.getElementById('post_comment');

      // Trigger click event on the button
      button.click();
  }
});

document.addEventListener('keydown', function(event) {
  // Check if Ctrl + Enter was pressed and the event target is the textarea with name 'message'
  if (event.ctrlKey && event.key === 'Enter' && event.target.name === 'message') {
    event.preventDefault(); // Prevent the default action (form submission or other)

    // Trigger the button click to save the form
    document.querySelector('.check-incident-status').click();
  }
});

document.addEventListener('keydown', function(event) {
  // Check if Ctrl + Enter was pressed and the event target is the textarea with name 'message'
  if (event.ctrlKey && event.key === 'Enter' && event.target.name === 'incident_further') {
    event.preventDefault(); // Prevent the default action (form submission or other)

    // Trigger the button click to save the form
    document.querySelector('.check-incident-status').click();
  }
});

if (window.location.href.startsWith('https://surfcom.sls.com.au/')) {
  function modifyText() {
    // Query all span elements with the specific class
    const elements = document.querySelectorAll('span.brand-text.font-weight-light');

    elements.forEach((element) => {
      // Check if the text is exactly 'Surfcom', to avoid multiple additions
      if (element.textContent.trim().includes('Surfcom') && !element.innerHTML.includes('version-number')) {
        // Set the title attribute for the tooltip on the element
        element.title = "SurfCom Management System with enhancements and extra features, Contact Riley Porteous for extra details!";
        // Add '+' and the version number with styling
        element.innerHTML = 'Surfcom + <span class="version-number" style="color: lightgrey; font-size: smaller; font-style: italic;">v1.0</span>';
      }
    });
  }

  // Use MutationObserver to handle dynamic content loading
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Call modifyText on each mutation observed
      modifyText();
    });
  });

  // Observer Configuration: watch for childList changes, including within descendants
  const config = { childList: true, subtree: true };

  // Start observing the document body for mutations
  observer.observe(document.body, config);

  // Also call modifyText on initial load
  modifyText();
}

function colorMessageLogs() {
  const cardTitles = document.querySelectorAll('.card .card-header .card-title');

  cardTitles.forEach(title => {
      if (title.textContent.trim() === "Message Log") {
          const messageContainer = title.closest('.card').querySelector('.direct-chat-messages');
          if (messageContainer) {
              // Apply colors to existing messages
              applyColorsToMessages(messageContainer);

              // Create a MutationObserver to monitor for changes in the container
              const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                      if (mutation.addedNodes.length) {
                          applyColorsToMessages(messageContainer);
                      }
                  });
              });

              // Configuration of the observer:
              const config = { childList: true, subtree: true };

              // Start observing the target node for configured mutations
              observer.observe(messageContainer, config);
          }
      }
  });
}

function applyColorsToMessages(container) {
  container.querySelectorAll('.direct-chat-text').forEach(log => {
      const text = log.textContent.trim();
      // Override default blue background if present
      log.classList.remove('bg-primary');

      if (text.includes('{KEY}')) {
        log.style.backgroundColor = 'MediumPurple';
        log.style.color = 'white';
      } else if (text.includes('{STANDDOWN}')) {
        log.style.backgroundColor = 'DarkBlue';
        log.style.color = 'white';
      } else if (text.includes('{OPERATORCOMMENT}')) {
        log.style.backgroundColor = 'Bisque';
        log.style.color = 'white';
      } else if (text.includes('{SITREP}')) {
        log.style.backgroundColor = 'plum';
        log.style.color = 'white';
      } else if (text.includes('Status Change :: Unit=')) {
        log.style.backgroundColor = 'SlateGrey';
        log.style.color = 'white';
      } else if (text.includes('Attachment added to Incident ')) {
        log.style.backgroundColor = 'PapayaWhip';
        log.style.color = 'black';
      } else if (text.includes(' has been added to Incident #')) {
        log.style.backgroundColor = 'SlateGrey';
        log.style.color = 'white';
      } else if (text.includes('Unit Clear :: Unit')) {
        log.style.backgroundColor = 'SlateGrey';
        log.style.color = 'white';
      } else if (text.includes('{INTERAGENCY}')) {
        log.style.backgroundColor = 'LightSalmon';
        log.style.color = 'white';
      } else if (text.includes('SMS: ') && text.includes(' Serious Incident Notification SMS ')) {
        log.style.backgroundColor = 'MediumAquaMarine';
        log.style.color = 'white';
      } else if (text.includes('Further Information Log')) {
        log.style.backgroundColor = 'MediumSlateBlue';
        log.style.color = 'white';
      } else if (text.includes('Incident #') && text.includes(', Priority: ') && text.includes(') closed on ')) {
        log.style.backgroundColor = 'black';
        log.style.color = 'white';
      } else if (text.includes('Incident #') && text.includes(', Priority: ')) {
        log.style.backgroundColor = 'black';
        log.style.color = 'white';
      } else if (text.includes('Incident #') && text.includes('ETA') && text.includes('Confirmation via SMS')) {
        log.style.backgroundColor = 'PaleTurquoise';
        log.style.color = 'black';
      } else if (text.includes('Incident #') && text.includes('Unavailable on responding to incident') && text.includes('Confirmation via SMS')) {
        log.style.backgroundColor = 'RosyBrown';
        log.style.color = 'white';
      } else if (text.includes('SMS: ') && text.includes(' Emergency Call Out Team ')) {
        log.style.backgroundColor = 'Salmon';
        log.style.color = 'white';
      }
      // No need for a default action
  });
}

// Initial call to color the message logs and set up the observer
colorMessageLogs();


function colorTimelineMessages() {
  // Find all timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(item => {
      const body = item.querySelector('.timeline-body');

      if (body) {
          const text = body.textContent.trim();
          // Determine the background color based on message content
          if (text.includes('{KEY}')) {
            item.style.backgroundColor = 'MediumPurple';
            item.style.color = 'white';
          } else if (text.includes('{STANDDOWN}')) {
            item.style.backgroundColor = 'DarkBlue';
            item.style.color = 'white';
          } else if (text.includes('{OPERATORCOMMENT}')) {
            item.style.backgroundColor = 'Bisque';
            item.style.color = 'white';
          } else if (text.includes('{SITREP}')) {
            item.style.backgroundColor = 'plum';
            item.style.color = 'white';
          } else if (text.includes('Status Change :: Unit=')) {
            item.style.backgroundColor = 'SlateGrey';
            item.style.color = 'white';
          } else if (text.includes('Attachment added to Incident ')) {
            item.style.backgroundColor = 'PapayaWhip';
            item.style.color = 'black';
          } else if (text.includes(' has been added to Incident #')) {
            item.style.backgroundColor = 'SlateGrey';
            item.style.color = 'white';
          } else if (text.includes('Unit Clear :: Unit')) {
            item.style.backgroundColor = 'SlateGrey';
            item.style.color = 'white';
          } else if (text.includes('{INTERAGENCY}')) {
            item.style.backgroundColor = 'LightSalmon';
            item.style.color = 'white';
          } else if (text.includes('SMS: ') && text.includes('Serious Incident Notification SMS ')) {
            item.style.backgroundColor = 'MediumAquaMarine';
            item.style.color = 'white';
          } else if (text.includes('Further Information Log')) {
            item.style.backgroundColor = 'MediumSlateBlue';
            item.style.color = 'white';
          } else if (text.includes('Incident #') && text.includes('closed. Outcome: ')) {
            item.style.backgroundColor = 'black';
            item.style.color = 'white';
          } else if (text.includes('Incident #') && text.includes(' created on ')) {
            item.style.backgroundColor = 'black';
            item.style.color = 'white';
          } else if (text.includes('Unavailable on responding to incident. Confirmation via SMS')) {
            item.style.backgroundColor = 'RosyBrown';
            item.style.color = 'white';
          } else if (text.includes(' ETA ') && text.includes('Confirmation via SMS') && text.includes('is responding to incident')) {
            item.style.backgroundColor = 'PaleTurquoise';
            item.style.color = 'black';
          } else if (text.includes('SMS: ') && text.includes('Emergency Call Out Team')) {
            item.style.backgroundColor = 'Salmon';
            item.style.color = 'white';
          }
          
        }          
  });
}

// Call the function to apply color coding
colorTimelineMessages();

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired. Running the script.');

  const changeColors = () => {
      // Select all table rows in the document
      const rows = document.querySelectorAll('table tbody tr');
      console.log(`Found ${rows.length} rows in the document.`);

      // Loop through each row to check its content
      rows.forEach((row, index) => {
          const message = row.innerText;
          console.log(`Row ${index}: "${message}"`);

          // Define your conditions and the corresponding style changes
          if (message.includes('{KEY}')) {
              row.style.backgroundColor = 'MediumPurple';
              row.style.color = 'white';
              console.log(`Applied MediumPurple background to row ${index} due to {KEY}.`);
          } else if (message.includes('{STANDDOWN}')) {
              row.style.backgroundColor = 'DarkBlue';
              row.style.color = 'white';
              console.log(`Applied DarkBlue background to row ${index} due to {STANDDOWN}.`);
          } else if (message.includes('{OPERATORCOMMENT}')) {
              row.style.backgroundColor = 'Bisque';
              row.style.color = 'white';
              console.log(`Applied Bisque background to row ${index} due to {OPERATORCOMMENT}.`);
          } 

          // Additional conditions
          if (message.includes('Status Change :: Unit=')) {
              row.style.backgroundColor = 'SlateGrey';
              row.style.color = 'white';
              console.log(`Applied SlateGrey background to row ${index} due to status change.`);
          }
          if (message.includes('Attachment added to Incident ')) {
              row.style.backgroundColor = 'PapayaWhip';
              row.style.color = 'black';
              console.log(`Applied PapayaWhip background to row ${index} due to attachment addition.`);
          }
          // You can add more conditions here following the same structure
      });
  };

  // Call the function to apply the styles based on conditions
  changeColors();
});


document.addEventListener("DOMContentLoaded", function() {
  // Corrected regex pattern to match any characters between log_id= and &bulkSupportOpsSignOff
  const regexPattern = /^https:\/\/surfcom\.sls\.com\.au\/log-service-off\?log_id=.*&bulkSupportOpsSignOff$/;
  if (regexPattern.test(window.location.href)) {
    // Find the button by its class name
    const button = document.querySelector('button.btn.btn-warning[style="margin-left: 4px;"]');
    
    // Check if the button exists and click it
    if (button) {
      button.click();
      console.log("Yey")
    } else {
      console.error("Button not found!");
    }
  }
});

window.addEventListener('load', function() {
  const currentPageUrl = window.location.href;

  // Use console logging to confirm the script is running
  console.log('Page fully loaded', currentPageUrl);

  // Check if the URL matches the desired pattern for automatic trigger
  if (/&bulkSupportOpsSignOff$/.test(currentPageUrl)) {
    // Prefill the current location input
    const currentLocationInput = document.querySelector('input[type="text"].form-control[name="current_location"]');
    if (currentLocationInput) {
      currentLocationInput.value = "BASE";
      console.log('Location prefilled with "BASE".');
    } else {
      console.error('Failed to find the current location input.');
    }

    // Simulate the submit button click
    const submitButton = document.querySelector('input[type="submit"].btn.btn-primary.mr-1');
    if (submitButton) {
      submitButton.click();
      console.log('Submit button clicked.');

      // Optionally, close the window after a delay if that's still desired
      setTimeout(() => window.close(), 1000);
    } else {
      console.error('Failed to find the submit button.');
    }
  }
});

function updateButtonStyles() {
  // Select all rows in the table
  const rows = document.querySelectorAll('#supportServicesTable tbody tr');

  // Iterate through each row
  rows.forEach(row => {
      // Get the text content of the row
      const rowText = row.textContent;

      // Check if the row contains the specific keywords
      if (rowText.includes('(Reason):') && rowText.includes('(Duration):') && rowText.includes('(From):')) {
          // Find the button within this row and change its class
          const button = row.querySelector('button.btn-warning');
          if (button) {
              button.classList.remove('btn-warning');
              button.classList.add('btn-secondary');
          }
      }
  });
}

window.addEventListener('load', updateButtonStyles);
document.addEventListener('click', updateButtonStyles)

function addButtonToCallerDetailsHeader() {
  const svgHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
  </svg>`;

// Get all card headers
const cardHeaders = document.querySelectorAll('.card-primary.card-outline .card-header');

cardHeaders.forEach(header => {
  if(header.textContent.includes("Caller Details")) {
    // Create a new button element
    const button = document.createElement('button');
    button.innerHTML = svgHTML;
    button.style.color = 'green';
    button.setAttribute('type', 'button'); // Ensure proper button behavior
    button.style.backgroundColor = 'white';
    button.style.border = 'none';
    button.style.float = 'right';
    button.style.cursor = 'pointer';

    // Add an event listener to the button for the click event
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default button action
      showModal(); // Function to show modal with the table
    });

    header.appendChild(button);
  }
});
}

function showModal() {
  // Check if the modal already exists and remove it
  const existingModal = document.getElementById('dynamicModal');
  if (existingModal) {
    existingModal.parentElement.removeChild(existingModal);
  }

  // Create an overlay for the modal to simulate a pop-out effect
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '1000';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  // Create modal structure
  const modal = document.createElement('div');
  modal.id = 'dynamicModal';
  modal.className = 'modal-dialog';
  modal.setAttribute('role', 'document');
  modal.style.zIndex = '1001';
  modal.innerHTML = `
  <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="modalMapTitle">Contact Book</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">x</span>
    </button>
  </div>
  <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
    <input type="text" id="searchBar" placeholder="Search..." style="margin-bottom: 10px; width: 100%;">
    <style>
      .modal-content {
        width: 600px; /* Set the width of the modal */
      }
      #detailsTable td, #detailsTable th {
        padding-left: 10px;
        padding-right: 10px;
      }
    </style>
    <table id="detailsTable" style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
      <thead>
        <tr>
          <th onclick="sortTable(0)">Name</th>
          <th onclick="sortTable(1)">Organisation</th>
          <th onclick="sortTable(2)">Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Rows will be added dynamically -->
      </tbody>
    </table>
  </div>
</div>
`;  


    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  
    // Functionality to close the modal
    function closeModal() {
      document.body.removeChild(overlay);
    }
  
    // Closing the modal when the 'x' is clicked
    modal.querySelector('.close').addEventListener('click', function() {
      closeModal();
    });
  
    // Closing the modal when the overlay (but not the modal itself) is clicked
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {
        closeModal();
      }
    });
  
    // Prevent modal inner clicks from closing the modal
    modal.addEventListener('click', function(event) {
      event.stopPropagation();
    });

// Populate table with sample data
const sampleData = [
  {name: "Christopher Fillingham", organization: "", number: "416085727"},
  {name: "Erin Clarke", organization: "NSW State Duty Officer", number: "02 9457 1019"},
  {name: "Bar Beach LG (HUN) ", organization: "Newcastle Council LGS ", number: "249746694"},
  {name: "Daniel McLaughlin", organization: "Waverley Council Lifeguard Supervisor", number: "435399101"},
  {name: "Williamstown ATC", organization: "Air Traffic Control", number: "4034 6912 / 4034 7973 "},
  {name: "David  Dempsey", organization: "", number: "419221029"},
  {name: "Terry Hills Marine Rescue", organization: "Terry Hills Marine Rescue", number: "9999 3554"},
  {name: "Oliver Heys", organization: "UAV Operations Coordinator", number: "0472 651 733"},
  {name: "Wayne Seymour-Boyd", organization: "SYD 42", number: "0428 054 259"},
  {name: " Westpac Moruya Admin", organization: "", number: "44742066"},
  {name: "Brent  Manieri", organization: "General Manager, Public Safety and Emergency Management ", number: "0404 363 454"},
  {name: "Andy Gardiner", organization: "SYD 34", number: "04303 575 409"},
  {name: "Merimbula Marine Rescue", organization: "Merimbula Marine Rescue", number: "6495 3331"},
  {name: "Eden Water Police", organization: "Eden Water Police", number: "6496 0699"},
  {name: "Andrew Mills", organization: "FNC Tweed 13", number: "0409 145 699"},
  {name: " Westpac Sydney Tasking", organization: "Lifesaver 21", number: "0429 890 068"},
  {name: "Tony  Silvia", organization: "", number: "401870059"},
  {name: "Rod McDonagh", organization: "MNC 13", number: "428003934"},
  {name: "Bruce  O'Sullivan ", organization: "SC14", number: "418603833"},
  {name: "James Turnham", organization: "Lifeguard 14", number: "02 9471 8031"},
  {name: "Illuka/Yamba Marine Rescue ", organization: "", number: "6646 6311"},
  {name: "ERB Shelly Beach Manly", organization: "LGA Northern Beaches", number: "285501702 / 861879602"},
  {name: "Shayne Rettke", organization: "Bega 1", number: "0457 573 677"},
  {name: "Brody  Robertson", organization: "ILL 12", number: "0466 592 734"},
  {name: "13SURF National  ", organization: "", number: "1300 884 621"},
  {name: "Coffs Harbour Marine Rescue", organization: "Coffs Harbour Marine Rescue", number: "6652 3155"},
  {name: "Glenn Clarke", organization: "NSW State Duty Officer", number: "02 9457 1009"},
  {name: "James Caterson", organization: "SYD 36", number: "0419 976 300"},
  {name: "Sutherland 20 Primary rostered DO", organization: "", number: "0429 443 793"},
  {name: "Josh Douglas", organization: "SC 15", number: "438376233"},
  {name: "Scott  Pracy", organization: "Sutherland Council Manager", number: "0414 193 872"},
  {name: "Lachlan Pritchard", organization: "NSW State Duty Officer - Overnight", number: "02 9471 8010"},
  {name: "Gregory  Williams", organization: "", number: "466612501"},
  {name: "Norah Head  Marine Rescue", organization: "Norah Head Marine Rescue", number: "4396 6162"},
  {name: "The Entrance/Tuggerah Lakes Marine Rescue", organization: "The Entrance/Tuggerah Lakes Marine Rescue", number: "4332 3055"},
  {name: "Lake Illawarra Marine Rescue", organization: "Lake Illawara Marine Rescue", number: "4274 4455"},
  {name: "Far North Coast Branch Primary On-Call", organization: "FNC Duty Officer", number: "0432 217 500"},
  {name: "Joshua Lawrence", organization: "UAV 12, Supervisor NC & MNC", number: "0437 916 517"},
  {name: "Steven Pearce", organization: "SLSNSW", number: "+61 (04) 0973-4712 / 0409 734 712"},
  {name: "Kelly Nicol", organization: "Systems Manager", number: "0448 556 072"},
  {name: "Dan  Andrew", organization: "Byron 12", number: "409721250"},
  {name: "Todd Muller", organization: "", number: "419400663"},
  {name: "Port Macquarie Water Police", organization: "Port Macquarie Water Police", number: "6583 0199"},
  {name: "Michael Wasley", organization: "SNB 17", number: "414971949"},
  {name: "Brett Beswick", organization: "CC 11", number: "422066094"},
  {name: "Lower North Coast Primary Duty Officer ", organization: "LNC Duty Officer", number: "0447 513 002"},
  {name: "Wooli Marine Rescue", organization: "Wooli Marine Rescue", number: "0437 423 797"},
  {name: "Penrith VKG", organization: "RCO - Penrith VKG", number: "4721 9350"},
  {name: "ERB Coniston", organization: "LGA Wollongong", number: "285501709 / 861879609"},
  {name: "Michael Lette", organization: "SYD UAV Officer", number: "90190722"},
  {name: "Joshua  Dick", organization: "", number: "431036706"},
  {name: "Molly  Parker", organization: "NSW State Duty Officer", number: "0457 863 447"},
  {name: "Port Hacking Marine Rescue", organization: "Port Hacking Marine Rescue", number: "8071 4838"},
  {name: "Adam  Woodward", organization: "SC Probationary DO", number: "0423 436 611"},
  {name: "Glenn Wright", organization: "SC 18", number: "435821107"},
  {name: "Jake Ruso", organization: "ALS Supervisor - Bellingen/Nambucca", number: "0401 279 094"},
  {name: "Crowdy Head Marine Rescue", organization: "Crowdy Head Marine Rescue", number: "6556 1564"},
  {name: "Peter  Sweetman", organization: "Clarence 11", number: "0418 665 040 "},
  {name: "ERB Little Bay", organization: "ERB Randwick", number: "281880112"},
  {name: "Anthony Jones", organization: "NSW 13", number: "0420 427 396"},
  {name: "Matt Slattery", organization: "CC15", number: "0408 465 101"},
  {name: "Mereweather Ocean Baths LG ", organization: "Newcastle Council Lifeguard", number: "249746692"},
  {name: "ERB Fingal Spit", organization: "LGA Port Stephens", number: "285266931 / 861879633"},
  {name: "LS 21 Westpac Sydney Aircraft Mobile", organization: "", number: "408351111"},
  {name: "Adrian Futterleib", organization: "", number: "481751102"},
  {name: "Alexa  Bowdich", organization: "UAV 15 Supervisor Illawarra & South Coast", number: "0477 283 534"},
  {name: "Chris Barber", organization: "SYD 24", number: "0466 421 556"},
  {name: "Brendon Ryman", organization: "HUN 29", number: "413339635"},
  {name: "Phil Rock ", organization: "Port Stephens 1", number: "418498581"},
  {name: "ERB Kendalls", organization: "LGA Kiama", number: "285501713 / 861879613"},
  {name: "Ash Arundell", organization: "SYD 26", number: "408578359"},
  {name: "Maroubra LG Tower", organization: "Council LG contact point", number: "90936160"},
  {name: "Jerrad Allen", organization: "", number: "419532942"},
  {name: "Sue  Gerrish", organization: "", number: "414425501"},
  {name: "Brunswick Marine Rescue", organization: "Marine Rescue Brunswick", number: "6685 0148"},
  {name: "Cottage Point  Marine Rescue ", organization: "Cottage Point Marine Rescue ", number: "9450 2468"},
  {name: "Hawkesbury Marine Rescue", organization: "", number: "9985 9012"},
  {name: "David Rope", organization: "FNC Tweed 12", number: "433355563"},
  {name: "Matt Ingersole", organization: "SLSNSW Chief Information Officer", number: "418328524"},
  {name: "Nathan Perretta ", organization: "SC Probationary Do", number: "0412 164 677"},
  {name: "Tracey Hare-Boyd", organization: "SNB 20", number: "0416 042 465"},
  {name: "Richard Walsh", organization: "ILL 24", number: "0419 018 817"},
  {name: "Steve Foggett", organization: "HUN 21", number: "0417 313 589"},
  {name: "Paul Rayner ", organization: "MNC 12", number: "0427 838 287"},
  {name: "Gemma Margiotta", organization: "SNB Duty Officer ", number: "434341543"},
  {name: "Anthony  Turner", organization: "ILL 13", number: "0417 684 338"},
  {name: "Jay Davidson", organization: "", number: "408161707"},
  {name: "Peter  Everet", organization: "ILL 16", number: "0417 664 097"},
  {name: "Rapid Launch Trauma Coordinator (RLTC) ", organization: "NSW Ambulance Aeromedical", number: "9553 2233"},
  {name: "ERB Budgewoi", organization: "LGA Central Coast", number: "281880113"},
  {name: "Euan McKenzie", organization: "FSC 19", number: "400616399"},
  {name: "Andrew Lindop", organization: "Pittwater 2", number: "0420 571 754"},
  {name: "Jervis Bay Marine Rescue", organization: "Jervis Bay Marine Rescue", number: "4441 5433"},
  {name: "Nathan De Rooy ", organization: "LNC 11", number: "0423 662 097"},
  {name: "Andrew Edmunds", organization: "NSW State Duty Officer - Overnight", number: "02 9471 8037"},
  {name: "Chris Briggs", organization: "FSC 27", number: "427646550"},
  {name: "John Restuccia", organization: "SYD12, SLSNSW", number: "0401 171 044"},
  {name: "ERB Shellharbour", organization: "LGA Shellharbour", number: "285501723 / 861879623"},
  {name: "Jarrod  Barnes ", organization: "SC Probationary DO ", number: "0472 704 689"},
  {name: "Wattamola Satellite Phone ", organization: "ALS & Patrol Wattamolla Satellite phone", number: "0417 142 549"},
  {name: "Matt  Harper", organization: "SYD 33", number: "0450 567 030"},
  {name: "Kevin  Clancy", organization: "NC12 - Sawtell", number: "0422 326 032"},
  {name: "Oak Flats  VKG", organization: "RCO - Oak Flats VKG", number: "4232 5604"},
  {name: "Far North Coast Duty Officer", organization: "FNC Byron Duty Officer", number: "0419 092 217"},
  {name: "Gerry Stephenson", organization: "SYD 15", number: "0420 996 549"},
  {name: "Dylan  Kovacevich", organization: "SNB Duty Officer", number: "422288744"},
  {name: "James  McLennan", organization: "SYD 17", number: "425251349"},
  {name: "Nathan Mitchell", organization: "Wollongong Council - Mobile North Supervisor", number: "0437 668 049"},
  {name: "Gunther Enthaler", organization: "ILL 14", number: "0416 064 066"},
  {name: "Tony  Rettke", organization: "FSC 26", number: "427941467"},
  {name: "13SURF Queensland ", organization: "", number: "07 5631 7400 "},
  {name: "Bondi LG Tower  ", organization: "Waverley Council Lifeguards", number: "481466855"},
  {name: "Mick  Slater", organization: "NC UAV Officer", number: "0429 586 656"},
  {name: "Andrew Holt", organization: "FSC 16", number: "414980572"},
  {name: "ERB The Ruins", organization: "LGA Mid-Coast", number: "285501700 / 861879600"},
  {name: "Owen Skjeime", organization: "SYD 29 - Sutherland ", number: "0415 570 586"},
  {name: "Tom Donkin", organization: "121 - Northern Beaches Council Supervisor", number: "0409 044 169"},
  {name: "Lachlan Van der Pluijm", organization: "Membership Welfare Officer & SOC Operator", number: "0497 628 105"},
  {name: "SOC BOX 5 ", organization: "", number: "02 9457 1022"},
  {name: "Mark  Atkins", organization: "Branch UAV, Senior Supervisor", number: "0419 918 409 "},
  {name: "Phil Walmsley", organization: "", number: "415492287"},
  {name: "ERB Suffolk Park", organization: "LGA Byron", number: "281880117"},
  {name: "Romilly Madew", organization: "SNB 19", number: "412062157"},
  {name: "Shoalhaven Marine Rescue", organization: "Shoalhaven Marine Rescue", number: "4447 4455"},
  {name: "Terrigal  Marine Rescue ", organization: "Terrigal Marine Rescue", number: "4325 7929"},
  {name: "Brad Newton", organization: "SNB Duty Officer", number: "415874737"},
  {name: "Eastern Beaches 30 Primary rostered DO", organization: "Eastern Beaches", number: "0436 190 051"},
  {name: "Illawarra Marine Rescue", organization: "Illawarra Marine Rescue", number: "4274 4455"},
  {name: "Wollongong Council Duty Supervisor ", organization: "Mobile North/South", number: "0417 900 674"},
  {name: "Far North Coast Duty Officer", organization: "FNC Tweed Duty Officer", number: "0410 221 768"},
  {name: "Charlie Hort", organization: "NSW State Duty Officer", number: "0431 624 043"},
  {name: "Test Person", organization: "", number: "437000000"},
  {name: "Sydney VKG", organization: "RCO - Sydney VKG", number: "9215 3111"},
  {name: "ERB Wingdang Island", organization: "LGA Shellharbour", number: "285501724 / 861879624"},
  {name: "Cody  Bell", organization: "Tweed 2 (Holidays Only)", number: "477063601"},
  {name: "Jake McDonald", organization: "NSW State Duty Officer - Overnight", number: "02 9471 8022"},
  {name: "Kevin Morrison", organization: "NC14 - Nambucca", number: "0419 689 124"},
  {name: "13SURF Northern Territory ", organization: "", number: "0417 787 767 "},
  {name: "Melissa Thurlow", organization: "", number: "413156839"},
  {name: "Rod McGibbon", organization: "Sydney Northern Beaches Branch President", number: "0435 014 757"},
  {name: "South Coast Branch Primary On-Call", organization: "SC 10", number: "0448 943 197"},
  {name: "David Newhouse", organization: "SNB Duty Officer ", number: "419838485"},
  {name: "Ulladulla Marine Rescue", organization: "Ulladulla Marine Rescue", number: "4455 3403"},
  {name: "Dave  Ellis", organization: "LNC 15", number: "0417 654 584"},
  {name: "Emma Gale", organization: "HUN UAV Officer", number: "414564268"},
  {name: "Gary McKinnon", organization: "Emergency Management Manager", number: "0412 464 564"},
  {name: "Robert Gorkin", organization: "ILL UAV Officer", number: "401071021"},
  {name: "SafeWork Report", organization: "", number: "13 10 50"},
  {name: "Craig Healey", organization: "CC LG Gosford Mobile", number: "418438632"},
  {name: " Careflight", organization: "", number: "98435100"},
  {name: "Nobby Beach LG ", organization: "Newcastle Council LGS ", number: "249746697"},
  {name: "ERB Boomerang Beach", organization: "LGA Mid-Coast", number: "285501716 / 861879616"},
  {name: "Gary Howe", organization: "NC 15 - Red Rock", number: "0411 167 540"},
  {name: "Cameron Powell", organization: "SNB 11", number: "419436886"},
  {name: "Phil Carter", organization: "SYD 40", number: "0406 959 196"},
  {name: "Gordon Smith", organization: "", number: "438793253"},
  {name: "Adrienne Lowe", organization: "SNB Duty Officer", number: "431305153"},
  {name: " Police Air Wing", organization: "", number: "97969899"},
  {name: "Murray  Coppas", organization: "Wollongong Council LGS ", number: "0447 109 540"},
  {name: "Paul Stone", organization: "", number: "418656253"},
  {name: "Sydney ATC", organization: "Air Traffic Control ", number: "9556 6697"},
  {name: "Forster Tuncurry Marine Rescue", organization: "", number: "6554 5458"},
  {name: "Mid North Coast Branch Primary On-Call", organization: "MNC 10", number: "488334420"},
  {name: "Robert  Cook", organization: "SNB Duty Officer", number: "438463127"},
  {name: "Chris Bond", organization: "NSW 12", number: "439415582"},
  {name: "Surfcom Northern Beaches  ", organization: "", number: "9982 5959"},
  {name: "Joel Wiseman", organization: "SLSNSW Board", number: "0417 017 684"},
  {name: "Bruce  Hopkins", organization: "Waverley Council LG Co-Ordinator", number: "0420 304 167"},
  {name: "Sydney Branch on Call Duty Officer ", organization: "SYD 10", number: "0490 087 801"},
  {name: "Red Soc Phone ", organization: "", number: "61418680417"},
  {name: "Nick  Newton", organization: "UAV 13, Supervisor LNC - Birubi", number: "0428 371 120"},
  {name: "ERB Hill 60 Port Kembla", organization: "LGA Wollongong", number: "285501720 / 861879620"},
  {name: "Brianna Coyte", organization: "NSW State Duty Officer", number: "02 9471 8069 / 02 9471 8067"},
  {name: "RFS Helitac 204 Sat Phone ", organization: "", number: "0427 229 803"},
  {name: "SOC Duty Phone ", organization: "SOC", number: "61418680417"},
  {name: "Doug  Hockey", organization: "ILL 18", number: "0421 711 745"},
  {name: "Chris (CJ) Samuels", organization: "FNC Tweed 11", number: "422460501"},
  {name: "Evans Head  Marine Rescue", organization: "Marine Rescue Evans Head", number: "6682 4888"},
  {name: "Far North Coast Duty Officer", organization: "FNC Ballina/Richmond Duty Officer", number: "0419 945 745"},
  {name: "ERB Brunswick Breakwall", organization: "LGA Byron", number: "281880118"},
  {name: "Michael Byrne", organization: "SYD 23", number: "0419 716 001"},
  {name: "ERB Blackwoods Beach Cronulla ", organization: "LGA Sutherland Shire", number: "285501706 / 861879606"},
  {name: "Port Stephens Marine Rescue", organization: "Port Stephens Marine Rescue ", number: "4981 3585"},
  {name: "Trial Bay Marine Rescue", organization: "Trial Bay Marine Rescue", number: "6566 5240"},
  {name: "Clint Rose", organization: "120 - Northern Beaches Council Lifeguard Supervisor ", number: "0408 469 269"},
  {name: "Craig Bowley", organization: "Kiama 1 ", number: "0488 925 930"},
  {name: "Kioloa Marine Rescue ", organization: "Kioloa Marine Rescue ", number: "4457 1109"},
  {name: "Douglas  Lucas", organization: "SNB Duty Officer, SR30", number: "410517076"},
  {name: "North Wollongong LGS  ", organization: "North Wollongong Lgs ", number: "4228 0023"},
  {name: "Stuart Jackson", organization: "UAV 15, Supervisor, Sydney & Sydney Northern Beaches", number: "0438 004 920"},
  {name: "Richard Clark", organization: "ALS Supervisor - Kempsey/Bellingen/Nambucca", number: "61431202660"},
  {name: "Newcastle VKG", organization: "RCO - Newcastle VKG", number: "4929 0811"},
  {name: "Jimmy Keough", organization: "NSW State Duty Officer - Overnight", number: "02 9471 8050"},
  {name: "ERB Puckeys Beach", organization: "LGA Wollongong", number: "285501710 / 861879610"},
  {name: "Greg Woods", organization: "SNB Duty Officer", number: "451883400"},
  {name: "Eurobodalla South Supervisor ", organization: "Euro South", number: "0455 415 512"},
  {name: "Kim Rayner", organization: "MNC16", number: "61419760808"},
  {name: "Josh Cole", organization: "", number: "0410 101 712"},
  {name: "NSW Marine Area Command ", organization: "NSW MAC", number: "1800 622 727"},
  {name: "Jackson Towns", organization: "SYD 11 - Sutherland", number: "02 9471 8003"},
  {name: " Westpac Moruya Tasking", organization: "Lifesaver 23", number: "44742022"},
  {name: "Cameron Callaghan", organization: "NSW State Duty Officer", number: "0422 976 852"},
  {name: "Port Kembla  Marine Rescue", organization: "Port Kembla Marine Rescue", number: "4274 4455"},
  {name: "Ben Matthews", organization: "SNB Duty Officer", number: "492957969"},
  {name: "Garry Meredith", organization: "Ballina 11", number: "428811277"},
  {name: "UAV Duty Officer on Call ", organization: "UAV Duty Officer", number: "0417 429 377"},
  {name: "Fin  Crisp", organization: "", number: "490100800"},
  {name: "Wilson Cregan", organization: "FNC Branch Prsident", number: "0407 754 978"},
  {name: "Ryan Tindall", organization: "SYD 32", number: "0401 059 943"},
  {name: " Westpac Sydney Admin", organization: "Reception Phone", number: "96943100"},
  {name: "COMMS Desk Direct", organization: "", number: "294718059"},
  {name: "Bead  Elphick", organization: "Sutherland Team Leader", number: "0402 420 411"},
  {name: "Port Stephens  Water Police ", organization: "Port Stephens Water Police", number: "4984 9012"},
  {name: "Matt  Obrien ", organization: "Lifesaver 10 ", number: "0438 082 629"},
  {name: "LS 23 Westpac Moruya Aircraft Mobile", organization: "", number: "408351333"},
  {name: "Steve Leahy", organization: "", number: "418881521"},
  {name: "Eastern Beaches 31 Secondary rostered DO", organization: "Eastern Beaches 31", number: ""},
  {name: "Scott McCartney", organization: "Lifeguard 12, ALS, Lifeguard Supervisor", number: "61405579342"},
  {name: "Liam O'Neill", organization: "FSC 28", number: "0448 257 134"},
  {name: "Eurobodalla Lifeguard Operations ", organization: "Eurobodalla Council Lifeguard Operations", number: "0455 279 682 "},
  {name: "Jane Doe", organization: "", number: "488000000"},
  {name: "Tom  Lee", organization: "SNB Duty Officer", number: "467559957"},
  {name: "Scott Muir", organization: "SYD 35", number: "0433 471 545"},
  {name: "Darren Galea", organization: "SYD 16", number: "0407 061 067"},
  {name: "ERB Seven Mile/Lennox", organization: "LGA Ballina", number: "28188 0110"},
  {name: "Peter  Halcrow", organization: "Randwick Council Supervisor", number: "0419 125 553"},
  {name: "Vikki Marshall", organization: "FSC 29", number: "0438 882 824"},
  {name: "ERB The Entrance Channel", organization: "LGA Central Coast", number: "281880114"},
  {name: "Paul Hardy", organization: "AUAVS Manager", number: "438664622"},
  {name: "Broken Bay Marine Rescue ", organization: "Broken Bay Marine Rescue ", number: "9910 7899"},
  {name: "Eden Marine Rescue", organization: "Eden Marine Rescue", number: "6496 2167"},
  {name: "Karma Reeves", organization: "LNC 22", number: "0429 977 099"},
  {name: "Richard Hingston", organization: "SC16", number: "412444072"},
  {name: "Steve Downman", organization: "122 - Northern Beaches Council Supervisor ", number: "0409 044 539 "},
  {name: "Donna Wishart", organization: "SLSNSW", number: "+61 (04) 1441-4087"},
  {name: "Sheldon  Finn", organization: "UAV 14, Senior Supervisor HUNTER - FSC", number: "0407 073 588 "},
  {name: "Rohan Fisher", organization: "HUN 22", number: "460747408"},
  {name: "SOC BOX 2 ", organization: "", number: "02 9457 1018"},
  {name: "Birkenhead Marine Rescue", organization: "Birkenhead Marine Rescue", number: "9719 8069"},
  {name: "Port Macquarie Marine Rescue ", organization: "Port Macquarie Marine Rescue", number: "6581 1966"},
  {name: "Tash Argent ", organization: "SLSNSW Facilities and Fleet Coordinator", number: "0431 178 104 "},
  {name: "Brian Wilcox", organization: "LNC 13", number: "0421 344 024"},
  {name: "SOC BOX 4 ", organization: "", number: "02 9457 1010"},
  {name: "Thomas Koford", organization: "Shellharbour Council Lifeguard Supervisor", number: "0488 995 617"},
  {name: "Sutherland 21 Secondary rostered DO", organization: "Sutherland 21", number: ""},
  {name: "Emma O'Neill", organization: "FSC 24", number: "448257134"},
  {name: "SLSNSW Office ", organization: "", number: "294718000"},
  {name: "Henry Scruton", organization: "HUN 12", number: "0412 495 798"},
  {name: "Glenn  Matthews", organization: "SC11", number: "0408 627 684"},
  {name: "ERB Kiama Blowhole", organization: "LGA Kiama", number: "285501712 / 861879612"},
  {name: "ERB Pearl Beach", organization: "LGA Central Coast", number: "281880116"},
  {name: "Mark Green", organization: "SC 19 ", number: "403015097"},
  {name: "13SURF Victoria  ", organization: "", number: "03 9676 2244"},
  {name: "Ryan Rosenbaum", organization: "NSW State Duty Officer", number: "02 9471 8011"},
  {name: "Carl  Vanzino", organization: "Sutherland Shire Council Duty Officer ", number: "0402 240 454"},
  {name: "NSW Ambulance Aeromedical Control Centre ", organization: "", number: "1800 932 055"},
  {name: "David  Brunsden", organization: "", number: "419682994"},
  {name: "Matthew Bell", organization: "Tweed 14", number: "409776661"},
  {name: "Kel Hawkins", organization: "Port Stephens 2", number: "41935144"},
  {name: "Brittaney Banks", organization: "NSW State Duty Officer - Overnight", number: "0473 028 673"},
  {name: "David Jansen", organization: "FSC Branch UAV Coordinator", number: "0477 100 600"},
  {name: "Coffs Harbour Water Police", organization: "Coffs Harbour Water Police", number: "0428 244 448"},
  {name: "Lachlan Towns", organization: "SYD 21 - Sutherland", number: "0424 179 647"},
  {name: "Nowra ATC", organization: "Air Traffic Control", number: "4424 1820"},
  {name: "Al  Davis", organization: "", number: "418194374"},
  {name: "ERB Belongil Beach", organization: "LGA Byron", number: "285501722 / 861879622"},
  {name: "Michael Mottley", organization: "", number: "415492287"},
  {name: "Central Coast Council ", organization: "", number: "4306 7900"},
  {name: "Shaleigh Lennox", organization: "", number: "410571077"},
  {name: "Steve Jones", organization: "South Coast Branch President", number: "0407 210 133"},
  {name: "Emma Woodward", organization: "SC Probationary DO", number: "0414 878 742"},
  {name: "ERB North Kingscliff", organization: "LGA Tweed", number: "285501719 / 861879619"},
  {name: "Assure Progams ", organization: "", number: "1800 808 374"},
  {name: "Richard Andjelkovic", organization: "SNB DO", number: "402978658"},
  {name: "Coffs Harbour ATC", organization: "Air Traffic Control", number: "66502775"},
  {name: "Paul Moffatt", organization: "Randwick Council Lifeguard Supervisor", number: "0412 290 504"},
  {name: "Brad  Rope", organization: "Maroubra Lifeguard", number: "0410 691 500"},
  {name: "Lake Macquarie Marine Rescue", organization: "", number: "4971 3498"},
  {name: "Simon Torsellini", organization: "SYD 31", number: "0414 375 508"},
  {name: "Will Davison", organization: "NSW State Duty Officer", number: "0422 421 931"},
  {name: "Warilla Lifeguards ", organization: "Warilla Lifeguards", number: "0429 686 569"},
  {name: "Kieran Menzies", organization: "SNB 12", number: "427327433"},
  {name: "Greg  Hackfath", organization: "Coffs Harbour Council LG Team Leader", number: "0418 285 073"},
  {name: "Batemans Bay Marine Rescue", organization: "Batemans Bay Marine Rescue", number: "4472 3060"},
  {name: "Phil Aryes", organization: "SLSNSW", number: "0412 125 075"},
  {name: "Camden Haven Marine Rescue", organization: "Camden Haven Marine Rescue", number: "6559 7356"},
  {name: "Ben  Bate", organization: "FSC 15", number: "407929515"},
  {name: "Kai Darwin", organization: "NSW 14 ", number: "61429613885"},
  {name: "Surfcom Emergency Notifications", organization: "", number: "400717042"},
  {name: "Louise Skjeime", organization: "SYD 27", number: "0411 593 373"},
  {name: "Sydney Northern Beaches on Call Duty Officer ", organization: "SNB10", number: "0417 692 993"},
  {name: "Jessica  ", organization: "SNB Duty Officer", number: "435098214"},
  {name: "Andrew Mizzi", organization: "FSC 22", number: "402306024"},
  {name: "James  Crittenden", organization: "SNB Duty Officer", number: "438772800"},
  {name: "Ballina  Marine Rescue", organization: "Marine Rescue Ballina", number: "6686 3831"},
  {name: "Surf Rescue 30 Boat Phone", organization: "", number: "0408 330 246"},
  {name: "Ross Blowers", organization: "LNC19", number: "410678510"},
  {name: "Swansea SES Duty Officer ", organization: "", number: "429586094"},
  {name: "Coffs Harbour Council Lifeguard Supervisor", organization: "Coffs Harbour Council Lifeguard", number: "0400 508 921"},
  {name: "Michael Bonnici", organization: "SYD 13", number: "0415 779 853"},
  {name: "13SURF Western Australia  ", organization: "", number: "08 9207 6688 "},
  {name: "Darcy  Marr", organization: "Pittwater 3", number: "0450 452 100"},
  {name: "Woolgoolga  Marine Rescue", organization: "Woolgoolga Marine Rescue", number: "6654 1785"},
  {name: "Elissa  Hancock", organization: "Sydney Branch President", number: "0403 262 636"},
  {name: "Mitchell  Dawson", organization: "MNC 11", number: "438842959"},
  {name: "Damian Chester", organization: "", number: "435582720"},
  {name: "Byron  Vinkovic", organization: "Shellharbour Council Lifeguard", number: "059 465 653"},
  {name: "SOC BOX 1 ", organization: "", number: "02 9457 1009 / 0407 342 608"},
  {name: "Brad Dawson", organization: "CC 33", number: "0448 232 314"},
  {name: "ERB Diamond Beach", organization: "LGA Mid-Coast", number: "285501718 / 861879618"},
  {name: "SOC Emergency", organization: "SLSNSW", number: "(02) 9471-8091"},
  {name: "Paul Sharpe", organization: "CC 24 ", number: "415660058"},
  {name: "Ban Plunkett", organization: "Clarence 1 (Holidays Only)", number: "0411 113 434"},
  {name: "Andrew Ugarte", organization: "NSW Communications Systems Manager", number: "0410 932 503"},
  {name: "Mike  Hallahan", organization: "FSC 25", number: "406656329"},
  {name: "Benjamin Heenan", organization: "SYD 39", number: "0422 474 439"},
  {name: "Adam Rees", organization: "", number: "404555862"},
  {name: "Jason Domeny", organization: "FSC 13", number: "0403 316 698"},
  {name: "Darren Weidner", organization: "ILL19", number: "0497 797 256"},
  {name: "Mick Lang", organization: "", number: "61421851487"},
  {name: "Simon  Cusack", organization: "CC 12", number: "0418 209 051"},
  {name: "Marissa Saunders", organization: "SYD 38", number: "0418 222 641"},
  {name: "Richard Rogers", organization: "SNB Duty Officer", number: "0423 855 600"},
  {name: "SOC BOX 6 ", organization: "", number: "02 9457 1023"},
  {name: "Marc Andrews", organization: "Shellharbour 1", number: "0459 919 375"},
  {name: "ERB Sharky/Sharkies Beach", organization: "LGA Wollongong", number: "285501711 / 861879611"},
  {name: "Lower North Coast Secondary Duty Officer ", organization: "LNC Duty Officer ", number: "0493 400 687"},
  {name: "Chris Jacobson", organization: "SYD 16", number: "0488 572 430"},
  {name: "Bruce Gould", organization: "", number: "409605537"},
  {name: "Nicole Cooney", organization: "SYD 41", number: "0413 025 512"},
  {name: "Shaun Gersh", organization: "", number: "0413 481 463"},
  {name: "Chris Salisbury", organization: "Lifeguard 15", number: "0410 116 295"},
  {name: "Adrian  Hill", organization: "SNB 16", number: "414560884"},
  {name: "Graeme Shears", organization: "", number: "432342494"},
  {name: "Lachlan  Field", organization: "Tweed 1", number: "61432365935"},
  {name: "Sutherland Shire Council on call Duty Officer ", organization: "Sutherland Shire Council Duty Officer", number: "0414 193 614"},
  {name: "Broken Bay Water Police", organization: "Broken Bay Water Police", number: "9910 7899"},
  {name: "Jayne Morrison", organization: "NC 16", number: "0438 689 885"},
  {name: "Shellharbour Marine Rescue ", organization: "Shellharbour Marine Rescue", number: "4296 2640"},
  {name: "Lucas  Samways", organization: "", number: "432671190"},
  {name: "Mauricio Cobra Siqueira", organization: "Mid Coast 1 (Holidays only), ALS Supervisor", number: "433556059"},
  {name: "Tim  Cuthbert", organization: "SNB Duty Officer", number: "429916380"},
  {name: "SLSA IT EMERGENCY LINE ", organization: "", number: "9215 8094"},
  {name: "Point Danger  Marine Rescue ", organization: "Marine Rescue Point Danger", number: "(07) 5536 9333"},
  {name: "Les Pepper", organization: "NC 11 - Woolgoolga", number: "0410 542 320"},
  {name: "SOC Phone", organization: "Mobile", number: "0447 696 487"},
  {name: "Brendan Guiney", organization: "LNC 14", number: "0407 894 765"},
  {name: "Bruce McAslan", organization: "FSC 20", number: "0429 008 442"},
  {name: "ERB Greenhills Track 6 SYD", organization: "LGA Sutherland Shire ", number: "285501705 / 861879605"},
  {name: "Jason Gay", organization: "", number: "438233119"},
  {name: "Newcastle  Water Police", organization: "Newcastle Water Police", number: "4902 8230"},
  {name: "Shane  Wicks", organization: "SC 13", number: "418866417"},
  {name: "ERB Shelly Beach Port Macquarie ", organization: "LGA Port Macquarie-Hastings", number: "285501715 / 861879615"},
  {name: "Glen Dunkley", organization: "NSW State Duty Officer - Overnight", number: "02 9471 8060"},
  {name: "Bermagui Marine Rescue", organization: "Bermagui Marine Rescue", number: "6493 4506"},
  {name: "Shane Daw", organization: "SYD 25", number: "0467 002 283"},
  {name: "Far North Coast Duty Officer", organization: "FNC Clarence Duty Officer", number: "0427 050 559"},
  {name: "ERB Dreamtime", organization: "LGA Tweed", number: "285501701 / 861879601"},
  {name: "Trevor Roberts", organization: "Wyong Mobile - Central Coast Lifeguards", number: "407363046"},
  {name: "Tuross Marine Rescue", organization: "Tuross Marine Rescue", number: "6646 6311"},
  {name: "ERB Tuncurry ", organization: "LGA Mid-Coast", number: "285501717 / 861879617"},
  {name: "Royal National Park ", organization: "", number: "1300 072 757"},
  {name: "Luke Wiseman", organization: "", number: "438463844"},
  {name: "Darren Jameson", organization: "NSW State Duty Officer - Overnight", number: "02 9471 8054"},
  {name: "Steve Wescott", organization: "", number: "414627399"},
  {name: "ERB South Bombo", organization: "LGA Kiama", number: "285501714 / 861879614"},
  {name: "SDO Desk Direct", organization: "", number: "(02) 9471-8069"},
  {name: "ERB  East Corrimal Beach", organization: "LGA Wollongong", number: "861879608 / 285501708"},
  {name: "Cheryl McCarthy", organization: "NSW 15", number: "0484 134 157"},
  {name: " Search & Rescue Australia", organization: "", number: "1800815257"},
  {name: "Far South Coast Branch Primary On-Call", organization: "FSC 10", number: "0435 590 604 "},
  {name: "Trae Hare-Boyd", organization: "SNB Duty Officer", number: "418619013"},
  {name: "SOC BOX 3 ", organization: "", number: "02 9457 1017"},
  {name: "13SURF South Australia ", organization: "", number: "08 8354 6900"},
  {name: "Jacqueline Percy", organization: "ILL 25", number: "0431 463 974"},
  {name: "Julie  Wilcox", organization: "LNC12", number: "0413 187 367"},
  {name: "Nambucca Marine Rescue", organization: "Nambucca Marine Rescue ", number: "6569 4446"},
  {name: "Central Coast on Call Duty Officer ", organization: "CC 10", number: "0407 335 172"},
  {name: " On Call Media", organization: "Mobile", number: "0405 203 764"},
  {name: "Port Kembla Water Police", organization: "", number: "4274 0129"},
  {name: "Brian  Sedivy ", organization: "NC Duty Officer", number: "0411 502 504"},
  {name: "Blake  Polverino", organization: "Hastings 1", number: "0403 701 800"},
  {name: "Jake Nurmi", organization: "Maroubra Lifeguard", number: "0422 842 377"},
  {name: "Newcastle  Marine Rescue", organization: "Newcastle Marine Rescue", number: "4960 0263"},
  {name: "Narooma Marine Rescue", organization: "Narooma Marine Rescue", number: "4476 1443"},
  {name: "Anthony Bellette", organization: "FSC 12", number: "410614608"},
  {name: "Peter Agnew", organization: "SLSNSW President", number: "0407 938 880"},
  {name: "Mark  Freedman", organization: "FSC 18", number: "407929191"},
  {name: "Morgan  Clark", organization: "ILL 21", number: "0401 484 769"},
  {name: "Jeremy  Raper", organization: "124 - Northern Beaches Council Supervisor", number: "0435 652 953 "},
  {name: "Illawarra Branch Primary On-Call", organization: "ILL 10", number: "0431 308 959"},
  {name: "Claire Bevis", organization: "SLSNSW Membership Manager - Welfare", number: "0429 399 101 "},
  {name: "Shannon Fox", organization: "ILL 23", number: "0431 303 449"},
  {name: "Matthew Calbert", organization: "", number: "406724130"},
  {name: "Leigh Perrow", organization: "Central Coast Lifeguards - North Entrance ", number: "400936811"},
  {name: "Adrian  Walsh", organization: "SC 17", number: "0417 678 270"},
  {name: "ERB Potter Point Kurnell", organization: "LGA Sutherland Shire", number: "285501707 / 861879607"},
  {name: "ERB  Greenhills Track 1 SYD", organization: "LGA Sutherland Shire", number: "285501704 / 861879604  "},
  {name: "ERB Malabar", organization: "LGA Randwick", number: "281880111"},
  {name: "Wayne Cavanagh", organization: "SC 12", number: "0412 052 675"},
  {name: "13SURF Tasmania  ", organization: "", number: "03 6265 9697 "},
  {name: "Sussex Inlet Marine Rescue", organization: "Sussex Inlet Marine Rescue", number: "4441 3555"},
  {name: "ERB Fingal Island", organization: "LGA Port Stephens", number: "285501721 / 861879621"},
  {name: "Matt Lumby", organization: "ILL 11", number: "423516435"},
  {name: "Alec Swadling", organization: "Coffs Harbour Senior Lifeguard", number: "0428 285 073 / 0408 285 073"},
  {name: "Cape Byron  Marine Rescue ", organization: "", number: "266808417"},
  {name: "Steve Westcott", organization: "HUN20", number: "414628399"},
  {name: "Roger Beadman", organization: "FNC Byron 11", number: "404474331"},
  {name: "Kane Hughes", organization: "NSW State Duty Officer", number: "0402 846 784"},
  {name: "Hunter Branch Primary On-Call", organization: "HUN 10", number: "0419 965 570"},
  {name: "ERB Snapper Point", organization: "LGA Central Coast", number: "285501703 / 861879603"},
  {name: "Eurobodalla North Supervisor ", organization: "Euro North", number: "0459 637 985"},  
];

sampleData.sort((a, b) => a.name.localeCompare(b.name));

const tableBody = modal.querySelector('tbody');
sampleData.forEach(item => {
  const row = tableBody.insertRow();
  row.insertCell(0).textContent = item.name;
  row.insertCell(1).textContent = item.organization;
  row.insertCell(2).textContent = item.number;
  const selectButton = document.createElement('button');
  selectButton.textContent = 'Select';
  selectButton.style.backgroundColor = 'blue';
  selectButton.style.color = 'white';
  selectButton.onclick = function() {
    // Populate input fields with selected data
    document.getElementById('callerDetailsName').value = item.name;
    document.getElementById('callerDetailsOrganisation').value = item.organization;
    document.getElementById('callerDetailsNumber').value = item.number;

    // Close the modal
    closeModal();
  };
  row.insertCell(3).appendChild(selectButton);
});

// Add search bar functionality
document.getElementById('searchBar').addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();
  Array.from(tableBody.rows).forEach(row => {
    const nameCell = row.cells[0].textContent.toLowerCase().indexOf(searchTerm) > -1;
    const orgCell = row.cells[1].textContent.toLowerCase().indexOf(searchTerm) > -1;
    row.style.display = nameCell || orgCell ? '' : 'none';
  });
});


// Make modal visible
modal.style.display = 'block';
}

function sortTable(columnIndex) {
const table = document.getElementById('detailsTable');
let rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
switching = true;
// Set the sorting direction to ascending:
dir = 'asc';
/* Make a loop that will continue until
no switching has been done: */
while (switching) {
  // Start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /* Loop through all table rows (except the
  first, which contains table headers): */
  for (i = 1; i < (rows.length - 1); i++) {
    // Start by saying there should be no switching:
    shouldSwitch = false;
    /* Get the two elements you want to compare,
    one from current row and one from the next: */
    x = rows[i].getElementsByTagName('TD')[columnIndex];
    y = rows[i + 1].getElementsByTagName('TD')[columnIndex];
    /* Check if the two rows should switch place,
    based on the direction, asc or desc: */
    if (dir == 'asc') {
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    } else if (dir == 'desc') {
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
  }
  if (shouldSwitch) {
    /* If a switch has been marked, make the switch
    and mark that a switch has been done: */
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    // Each time a switch is done, increase this count by 1:
    switchCount ++;
  } else {
    /* If no switching has been done AND the direction is 'asc',
    set the direction to 'desc' and run the while loop again. */
    if (switchCount == 0 && dir == 'asc') {
      dir = 'desc';
      switching = true;
    }
  }
}
}

// Call the function to add the button to the specific header
addButtonToCallerDetailsHeader();


function addRadioButtonsAboveTextarea() {
  // Target the row above which the radio buttons should be added
  const targetRow = document.querySelector('.row > .col-12 > .form-group > textarea[name="message"]').parentNode.parentNode;

  // Define the radio buttons group HTML
  const radioButtonsHtml = `
  <div class="row mb-2">
  <div class="col">
</div>
<div class="row">
  <div class="col">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option1"> RADIO
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option2"> PHONE
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option3"> EMAIL
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option4"> TEAMS
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option5"> TEXT
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option6"> OTHER
      </label>
    </div>
  </div>
</div>
`;

  // Insert the radio buttons group above the target row
  targetRow.insertAdjacentHTML('beforebegin', radioButtonsHtml);

  // Target the textarea where the selected option text will be inserted
  const messageTextArea = document.querySelector('textarea[name="message"]');

  // Function to handle radio button click event
  const handleRadioButtonClick = (event) => {
    const selectedText = event.target.nextSibling.nodeValue.trim(); // Get the text associated with the clicked radio button
    const wrappedText = `${selectedText} - `;
    const regex = /^(.*?) - /; // Regex to find the text ending with " - "

    if (messageTextArea.value.match(regex)) {
      // If there's already a match, replace it
      messageTextArea.value = messageTextArea.value.replace(regex, wrappedText);
    } else {
      // If it's the first time, prepend it
      messageTextArea.value = `${wrappedText}${messageTextArea.value}`;
    }
  };

  // Add click event listeners to all radio buttons
  document.querySelectorAll('.btn-group-toggle input[type="radio"]').forEach(radio => {
      radio.addEventListener('click', handleRadioButtonClick);
  });
}

// Call the function to add radio buttons and setup their functionality
addRadioButtonsAboveTextarea();

// Function to attempt setting the dropdown value
function setDropdownValue() {
  var statusDropdown = document.getElementById('select-status');
  if (statusDropdown) {
      statusDropdown.value = 'Online';
      console.log('Dropdown value set to Online');
      // Optional: submit the form
      document.status_form.submit();
  } else {
      console.log('Dropdown not found.');
  }
}

// Create an observer instance linked to a callback function
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return;
      for (var i = 0; i < mutation.addedNodes.length; i++) {
          // Check if the added node is our target dropdown or contains it
          var node = mutation.addedNodes[i];
          if (node.id === 'select-status' || node.querySelector('#select-status')) {
              setDropdownValue();
              // Optional: Disconnect observer if no longer needed
              // observer.disconnect();
              break;
          }
      }
  });
});

// Start observing the document body for DOM changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Fallback to ensure the dropdown is set upon initial load if it exists
window.addEventListener('load', setDropdownValue);







// Function to handle the right-click event on the button
function handleRightClick(event) {
    event.preventDefault(); // Prevent the default context menu

    const form = this.closest('form'); // Find the closest form to the button

    if (form) {
        // Modify the form's action URL to include '&BulkSignOn'
        let action = form.getAttribute('action');
        if (action.includes('?')) {
            action += '&BulkSignOnforSupportOps2';
        } else {
            action += '?BulkSignOnforSupportOps2';
        }
        form.setAttribute('action', action);

        // Open the form submission in a new tab
        form.target = '_blank';

        // Submit the form
        form.submit();
    }
}

// Function to update button styles by attaching event listeners
function updateButtonStyles() {
    const submitButtons = document.querySelectorAll('.btn.btn-info'); // Select all submit buttons

    submitButtons.forEach((submitButton) => {
        submitButton.removeEventListener('contextmenu', handleRightClick); // Remove existing event listener to avoid duplicates
        submitButton.addEventListener('contextmenu', handleRightClick, true); // Add the right-click event listener
    });
}

// Main function to run the modifications
function runModifications() {
    convertDropdownToMultiple();
    updateButtonStyles();
}

// Attach the 'runModifications' function to the window's 'load' event
window.addEventListener('load', runModifications);

// Attach the 'runModifications' function to document's 'click' event to catch dynamically added content
document.addEventListener('click', runModifications);







window.addEventListener('load', function () {
  // Assuming your submit button has an id of 'submit-button'
  const submitButton = document.getElementById('submit-button');
  const selectElement = document.getElementById('unit_id');

  submitButton.addEventListener('click', function () {
      const selectedUnits = [];
      // Collecting all selected options
      for (let option of selectElement.options) {
          if (option.selected) {
              selectedUnits.push(option.value);
          }
      }

      // Example: Log to console or handle as needed
      console.log(selectedUnits);
      // Here you might send the selectedUnits array to your server, or process it as needed
  });
});














