document.addEventListener("keydown", function (event) {
  if (event.key === "F1") {
    event.preventDefault(); // Prevent the default F1 action

    // Branch identifiers and their latitudinal boundaries
    const branches = [
      { name: "QLD", start: -10.287612, end: -28.164557 },
      { name: "FNC", start: -28.164557, end: -29.610527 },
      { name: "NC", start: -29.610527, end: -30.665687 },
      { name: "MNC", start: -30.665687, end: -31.636052 },
      { name: "LNC", start: -31.636052, end: -32.447837 },
      { name: "HUN", start: -32.447837, end: -33.165642 },
      { name: "CC", start: -33.165642, end: -33.573543 },
      { name: "SNB", start: -33.573543, end: -33.82506 },
      { name: "SYD", start: -33.82506, end: -34.191638 },
      { name: "ILL", start: -34.191638, end: -34.548028 },
      { name: "SC", start: -34.548028, end: -35.664119 },
      { name: "FSC", start: -35.664119, end: -37.528407 },
      { name: "FSC", start: -35.664119, end: -37.528407 },
      { name: "VIC", start: -37.528407, end: -39.025418 },
    ];

    // Function to determine the branch based on latitude
    function determineBranch(latitude) {
      for (let i = 0; i < branches.length; i++) {
        if (latitude >= branches[i].end && latitude < branches[i].start) {
          return branches[i].name;
        }
      }
      return "Interstate"; // Return a default or error value if not found
    }

    // Extract latitude value
    let incidentLatitude = parseFloat(
      document.querySelector("#incidentLatitude").value
    );

    // Find the branch based on the latitude
    let branchIdentifier = determineBranch(incidentLatitude);

    // Extract data
    let incidentLevel = document
      .querySelector("#priority option:checked")
      .textContent.trim()
      .match(/\((\d+)\)/)?.[1];
    let incidentNumber = document
      .querySelector("small.text-muted")
      .textContent.trim()
      .match(/#(L\d+)/)?.[1];
    let locationValue = document.querySelector("#incidentLocation").value;
    let descriptionValue = document.querySelector(
      "#incidentBriefDescription"
    ).value;
    let incidentType = document
      .querySelector("#incidentType option:checked")
      .textContent.trim();
    let slsContact = document.querySelector("#incidentSLSContact").value;
    let textAfterLastSlash = slsContact.split("/").pop();

    // Extract username from email
    let email = document.querySelector(
      ".dropdown-menu .dropdown-item small:nth-of-type(2)"
    ).textContent;
    let username = email.substring(0, email.indexOf("@")).toUpperCase();

    // Convert locationValue to title case
    locationValue = locationValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    // Convert descriptionValue to sentence case
    descriptionValue =
      descriptionValue.charAt(0).toUpperCase() +
      descriptionValue.slice(1).toLowerCase();

    // Format the output including the branch identifier dynamically
    let output = `L${incidentLevel}. ${incidentNumber}. ${locationValue} (${branchIdentifier}). ${incidentType}. ${descriptionValue}. ${username}.`;

    // Insert into the textarea
    document.querySelector("#pager_message").value = output;
  }
});

// content.js for Chrome Extension to handle F1 key press to update SMS mailing groups
window.addEventListener("load", function () {
  const emailTemplateSelect = document.getElementById("email_template");
  const mailingGroupSelect = document.querySelector(".mailinggroup_id");
  const servicesTable = document.getElementById("servicesTable");

  if (!emailTemplateSelect || !mailingGroupSelect || !servicesTable) {
    console.log("Required elements not found on the page.");
    return;
  }

  // Define groups for SMS
  const smsGroups = [
    {
      name: [
        "66118_01-1 FNC Serious Incident Notification SMS",
        "82448_QLD Notifications",
      ],
      start: -10.287612,
      end: -28.164557,
    },
    {
      name: ["66118_01-1 FNC Serious Incident Notification SMS"],
      start: -28.164557,
      end: -29.610527,
    },
    {
      name: ["66120_02-1 NC Serious Incident Notification SMS"],
      start: -29.610527,
      end: -30.665687,
    },
    {
      name: ["66122_03-1 MNC Serious Incident Notification SMS"],
      start: -30.665687,
      end: -31.636052,
    },
    {
      name: ["66124_04-1 LNC Serious Incident Notification SMS"],
      start: -31.636052,
      end: -32.447837,
    },
    {
      name: ["66146_05-1 HUN Serious Incident Notification SMS"],
      start: -32.447837,
      end: -33.165642,
    },
    {
      name: ["66148_06-1 CC Serious Incident Notification SMS"],
      start: -33.165642,
      end: -33.573543,
    },
    {
      name: ["66151_07-1 SNB Serious Incident Notification SMS"],
      start: -33.573543,
      end: -33.82506,
    },
    {
      name: ["66153_08-1 SYD Serious Incident Notification SMS"],
      start: -33.82506,
      end: -34.191638,
    },
    {
      name: ["66155_09-1 ILL Serious Incident Notification SMS"],
      start: -34.191638,
      end: -34.548028,
    },
    {
      name: ["66157_10-1 SC Serious Incident Notification SMS"],
      start: -34.548028,
      end: -35.664119,
    },
    {
      name: ["66159_11-1 FSC Serious Incident Notification SMS"],
      start: -35.664119,
      end: -37.528407,
    },
    {
      name: [
        "66159_11-1 FSC Serious Incident Notification SMS",
        "82449_VIC Notifications",
      ],
      start: -37.528407,
      end: -39.025418,
    },
  ];

  // Function to update mailing group options based on the template selected
  function updateMailingGroupOptions() {
    const groups = smsGroups;
    setOptions(groups);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "F1") {
      event.preventDefault();

      // Check if the primary service is set to 'Lake Parramatta (Lifeguards)'
      const primaryServiceSelect = document.querySelector("#primary_service");
      if (primaryServiceSelect && primaryServiceSelect.value === "1517") {
        // 1517 is the value for 'Lake Parramatta (Lifeguards)'

        // Set the Surfguard Mailing Group to '00-5 ALS-AESS Staff Critical Incident Notification'
        const mailingGroupSelect = document.querySelector(".mailinggroup_id");
        if (mailingGroupSelect) {
          const optionToSelect = Array.from(mailingGroupSelect.options).find(
            (option) =>
              option.value ===
              "79946_00-5 ALS-AESS Staff Critical Incident Notification"
          );
          if (optionToSelect) {
            optionToSelect.selected = true;

            // Trigger change event to notify any listeners of the change
            const event = new Event("change", { bubbles: true });
            mailingGroupSelect.dispatchEvent(event);
          }
        }
      }
    }
  });

  // Function to set options based on current latitude and table content
  function setOptions(groups) {
    const currentLatitude = getCurrentLatitude();
    const isLifesaverPresent = checkTableForLifesaver();
    let selectedGroups = [];

    if (currentLatitude !== null) {
      const branchNames = getMailingGroupIds(groups, currentLatitude);
      if (branchNames) {
        selectedGroups.push(...branchNames);
      }
    }

    if (isLifesaverPresent) {
      selectedGroups.push("82296_00-8 Westpac Notifications");
    }

    // Apply all selected groups
    selectedGroups.forEach((branchName) => selectMailingGroup(branchName));
  }

  // Get current latitude from the latitude input field
  function getCurrentLatitude() {
    const latitudeInput = document.getElementById("incidentLatitude");
    return latitudeInput ? parseFloat(latitudeInput.value) : null;
  }

  // Determine the appropriate mailing group IDs based on latitude
  function getMailingGroupIds(groups, latitude) {
    for (let group of groups) {
      if (latitude >= group.end && latitude < group.start) {
        return group.name;
      }
    }
    return null;
  }

  // Check table for specific Lifesaver units
  function checkTableForLifesaver() {
    const rows = servicesTable.getElementsByTagName("tr");
    for (let row of rows) {
      const serviceCell = row.cells[1]; // assuming the service name is in the second column
      if (
        serviceCell &&
        (serviceCell.textContent.includes("Lifesaver 10") ||
          serviceCell.textContent.includes("Lifesaver 21") ||
          serviceCell.textContent.includes("Lifesaver 22") ||
          serviceCell.textContent.includes("Lifesaver 23") ||
          serviceCell.textContent.includes("Lifesaver 45") ||
          serviceCell.textContent.includes("Lifesaver 46") ||
          serviceCell.textContent.includes("Lifesaver 36"))
      ) {
        return true;
      }
    }
    return false;
  }

  // Select the mailing group in the dropdown
  function selectMailingGroup(branchName) {
    const options = mailingGroupSelect.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value.includes(branchName) && !options[i].selected) {
        options[i].selected = true;
      }
    }
    // Trigger a change event on the mailing group select element
    mailingGroupSelect.dispatchEvent(new Event("change"));
  }

  // Attach an event listener for F1 keydown to handle updating mailing groups
  window.addEventListener("keydown", function (event) {
    if (event.key === "F1") {
      event.preventDefault(); // Prevent the default F1 help screen
      updateMailingGroupOptions();
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F2") {
    event.preventDefault(); // Prevent the default F2 action

    // Extract data
    let locationValue = document.querySelector("#incidentLocation").value;
    let incidentType = document
      .querySelector("#incidentType option:checked")
      .textContent.trim();
    let descriptionValue = document.querySelector(
      "#incidentBriefDescription"
    ).value;

    // Format the output
    let output = `Emergency Surf Rescue call out. ${locationValue}. ${descriptionValue}. Please raise SurfCom on channel 3 once on scene, or contact SurfCom on (02) 9471 8091. Thank you.`;

    // Insert into the textarea
    document.querySelector('textarea[name="incident_further"]').value = output;

    // Trigger the button click to save the form
    document.querySelector(".check-incident-status").click();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F3") {
    event.preventDefault(); // Prevent the default F3 action

    // Extract data
    let locationValue = document.querySelector("#incidentLocation").value;
    let incidentType = document
      .querySelector("#incidentType option:checked")
      .textContent.trim();
    let descriptionValue = document.querySelector(
      "#incidentBriefDescription"
    ).value;

    // Format the output
    let output = `Emergency Surf Rescue call out. ${locationValue}. **PLEASE STAND DOWN** No further action or resources required. Thank you to those that responded.`;

    // Insert into the textarea
    document.querySelector("#pager_message").value = output;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F8") {
    event.preventDefault(); // Prevent the default F9 action

    // Set the value of the first dropdown
    var selectElementFrom = document.getElementById("msg_from");
    selectElementFrom.value = "unit_97";
    // Trigger the 'change' event for the select element
    var changeEventFrom = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElementFrom.dispatchEvent(changeEventFrom);

    // Set the value of the second dropdown
    var selectElementTo = document.getElementById("msg_to");
    selectElementTo.value = "unit_97";
    // Trigger the 'change' event for the select element
    var changeEventTo = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElementTo.dispatchEvent(changeEventTo);

    // Format the output
    let output = `**HANDOVER COMPLETE FROM NSW 10 DAY TO NSW 10 NIGHT AS PER DEPUTY ROSTER, NIL ISSUES**`;

    // Insert into the textarea
    document.querySelector('textarea[name="message"]').value = output;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F9") {
    event.preventDefault(); // Prevent the default F3 action

    // Format the output
    let org = `Marine Area Command`;
    let name = "MAC";
    let number = "1800 622 727";

    // Insert into the textarea
    document.querySelector("#callerDetailsName").value = name;
    document.querySelector("#callerDetailsOrganisation").value = org;
    document.querySelector("#callerDetailsNumber").value = number;
    document.querySelector("#callerDetails13Surf").checked = true;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F10") {
    event.preventDefault(); // Prevent the default F3 action

    // Format the output
    let org = `VKG Newcastle`;
    let name = "VKG Newcastle";
    let number = "(02) 4929 0811";

    // Insert into the textarea
    document.querySelector("#callerDetailsName").value = name;
    document.querySelector("#callerDetailsOrganisation").value = org;
    document.querySelector("#callerDetailsNumber").value = number;
    document.querySelector("#callerDetails13Surf").checked = true;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F11") {
    event.preventDefault(); // Prevent the default F3 action

    // Format the output
    let org = `VKG Sydney`;
    let name = "VKG Sydney";
    let number = "(02) 9265 4112";

    // Insert into the textarea
    document.querySelector("#callerDetailsName").value = name;
    document.querySelector("#callerDetailsOrganisation").value = org;
    document.querySelector("#callerDetailsNumber").value = number;
    document.querySelector("#callerDetails13Surf").checked = true;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F12") {
    event.preventDefault(); // Prevent the default F3 action

    // Format the output
    let org = `VKG Oak Flats`;
    let name = "VKG Oak Flats";
    let number = "(02) 4232 5640";

    // Insert into the textarea
    document.querySelector("#callerDetailsName").value = name;
    document.querySelector("#callerDetailsOrganisation").value = org;
    document.querySelector("#callerDetailsNumber").value = number;
    document.querySelector("#callerDetails13Surf").checked = true;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F7") {
    event.preventDefault(); // Prevent the default F7 action

    // Check if the dropdown already exists
    if (document.getElementById("erbNameDropdown")) {
      alert("Please select an ERB from the dropdown!");
      return; // Stop the function here to prevent creating another dropdown
    }

    // Create and populate the dropdown menu
    let dropdown = document.createElement("select");
    dropdown.id = "erbNameDropdown";
    dropdown.className = "form-control"; // Optional: for styling if using Bootstrap or similar

    // ERB names and their corresponding latitudes, longitudes, and branches
    let erbs = [
      {
        name: "North Kingscliff ERB (Kingscliff - Far North Coast)",
        lat: -28.240223,
        lon: 153.568423,
        branch: "Far North Coast",
      },
      {
        name: "Brunswick Breakwall ERB (Brunswick Heads - Far North Coast)",
        lat: -28.5383,
        lon: 153.55635,
        branch: "Far North Coast",
      },
      {
        name: "Belongil Beach/The Wreck ERB (Byron Bay - Far North Coast)",
        lat: -28.63699,
        lon: 153.60409,
        branch: "Far North Coast",
      },
      {
        name: "Suffolk Park ERB (Suffolk Park - Far North Coast)",
        lat: -28.69081,
        lon: 153.61417,
        branch: "Far North Coast",
      },
      {
        name: "Seven Mile Lennox Head ERB (Lennox Head - Far North Coast)",
        lat: -28.786265,
        lon: 153.593925,
        branch: "Far North Coast",
      },
      {
        name: "Shelly Beach ERB (Port Macquarie - Mid North Coast)",
        lat: -31.457766,
        lon: 152.932622,
        branch: "Mid North Coast",
      },
      {
        name: "Diamond Beach ERB (Diamond Beach - Lower North Coast)",
        lat: -32.044077,
        lon: 152.541142,
        branch: "Lower North Coast",
      },
      {
        name: "Tuncurry Beach ERB (Tuncurry - Lower North Coast)",
        lat: -32.173371,
        lon: 152.508961,
        branch: "Lower North Coast",
      },
      {
        name: "The Ruins ERB (Booti Booti - Lower North Coast)",
        lat: -32.31087,
        lon: 152.52105,
        branch: "Lower North Coast",
      },
      {
        name: "Boomerang Beach ERB (Boomerang Beach - Lower North Coast)",
        lat: -32.336374,
        lon: 152.5455,
        branch: "Lower North Coast",
      },
      {
        name: "Fingal Spit ERB (Fingal Bay - Hunter)",
        lat: -32.73955,
        lon: 152.18287,
        branch: "Hunter",
      },
      {
        name: "Fingal Island ERB (Fingal Bay - Hunter)",
        lat: -32.74208,
        lon: 152.19221,
        branch: "Hunter",
      },
      {
        name: "Snapper Point ERB (Frazer Park - Central Coast)",
        lat: -33.186083,
        lon: 151.628188,
        branch: "Central Coast",
      },
      {
        name: "Budgewoi ERB (Budgewoi - Central Coast)",
        lat: -33.23851,
        lon: 151.56971,
        branch: "Central Coast",
      },
      {
        name: "The Entrance Channel ERB (The Entrance - Central Coast)",
        lat: -33.34599,
        lon: 151.50262,
        branch: "Central Coast",
      },
      {
        name: "Pearl Beach ERB (Pearl Beach - Central Coast)",
        lat: -33.541723,
        lon: 151.30774,
        branch: "Central Coast",
      },
      {
        name: "Shelly Beach ERB (Manly - Sydney Northern Beaches)",
        lat: -33.800901,
        lon: 151.297836,
        branch: "Sydney Northern Beaches",
      },
      {
        name: "Malabar ERB (Malabar - Sydney)",
        lat: -33.963842,
        lon: 151.252012,
        branch: "Sydney",
      },
      {
        name: "Little Bay ERB (Little Bay - Sydney)",
        lat: -33.979961,
        lon: 151.251169,
        branch: "Sydney",
      },
      {
        name: "Potter Point ERB (Kurnell - Sydney)",
        lat: -34.041263,
        lon: 151.214189,
        branch: "Sydney",
      },
      {
        name: "Greenhills Track 1 ERB (Cronulla - Sydney)",
        lat: -34.034316,
        lon: 151.18413,
        branch: "Sydney",
      },
      {
        name: "Greenhills Track 6 ERB (Cronulla - Sydney)",
        lat: -34.040529,
        lon: 151.165024,
        branch: "Sydney",
      },
      {
        name: "Sharky Beach ERB (Coledale - Illawarra)",
        lat: -34.294615,
        lon: 150.943376,
        branch: "Illawarra",
      },
      {
        name: "East Corrimal ERB (East Corrimal - Illawarra)",
        lat: -34.377399,
        lon: 150.920598,
        branch: "Illawarra",
      },
      {
        name: "Puckys Beach ERB (Wollongong - Illawarra)",
        lat: -34.410413,
        lon: 150.901774,
        branch: "Illawarra",
      },
      {
        name: "Hill 60 ERB (Port Kembla - Illawarra)",
        lat: -34.493238,
        lon: 150.919691,
        branch: "Illawarra",
      },
      {
        name: "Windang Island/Lake Illawarra ERB (Lake Illawarra - South Coast)",
        lat: -34.543799,
        lon: 150.874818,
        branch: "South Coast",
      },
      {
        name: "Shellharbour ERB (Shellharbour - South Coast)",
        lat: -34.582453,
        lon: 150.873245,
        branch: "South Coast",
      },
      {
        name: "South Bombo ERB (Bombo - South Coast)",
        lat: -34.663681,
        lon: 150.853776,
        branch: "South Coast",
      },
      {
        name: "Kiama Blowhole ERB (Bombo - South Coast)",
        lat: -34.671656,
        lon: 150.86274,
        branch: "South Coast",
      },
      {
        name: "Kendalls ERB (Kiama - South Coast)",
        lat: -34.681704,
        lon: 150.854718,
        branch: "South Coast",
      },
      {
        name: "Dreamtime ERB (Fingal Head - Far North Coast)",
        lat: -28.201114,
        lon: 153.569519,
        branch: "Far North Coast",
      },
      {
        name: "Blackwoods ERB (Cronulla - Sydney)",
        lat: -34.05982936,
        lon: 151.1571563,
        branch: "Sydney",
      },
      {
        name: "Coniston ERB (Wollongong - Illawarra)",
        lat: -34.430177,
        lon: 150.902805,
        branch: "Illawarra",
      },
    ];

    // Sort ERB names alphabetically within their branches
    erbs.sort((a, b) => a.name.localeCompare(b.name));

    // Add the placeholder as the first option
    dropdown.appendChild(new Option("Select an ERB...", ""));

    // Function to append options under an optgroup
    function appendOptionsToGroup(groupLabel, erbArray) {
      let optgroup = document.createElement("optgroup");
      optgroup.label = groupLabel;
      erbArray.forEach(function (erb) {
        let option = document.createElement("option");
        option.value = JSON.stringify({
          name: erb.name,
          lat: erb.lat,
          lon: erb.lon,
        });
        option.text = erb.name;
        optgroup.appendChild(option);
      });
      dropdown.appendChild(optgroup);
    }

    // Group ERBs by branch
    let groupedErbs = {};

    // Populate the groupedErbs object
    erbs.forEach(function (erb) {
      if (!groupedErbs[erb.branch]) {
        groupedErbs[erb.branch] = [];
      }
      groupedErbs[erb.branch].push(erb);
    });

    // Order of branches
    let branchOrder = [
      "Far North Coast",
      "North Coast",
      "Mid North Coast",
      "Lower North Coast",
      "Hunter",
      "Central Coast",
      "Sydney Northern Beaches",
      "Sydney",
      "Illawarra",
      "South Coast",
      "Far South Coast",
    ];

    // Append options to dropdown for each group in the specified order
    branchOrder.forEach(function (branch) {
      if (groupedErbs[branch]) {
        appendOptionsToGroup(branch, groupedErbs[branch]);
      } else {
        console.log(`Branch not found in ERBs: ${branch}`);
      }
    });

    // Check if options are correctly added to the dropdown
    console.log("Dropdown options added:", dropdown.innerHTML);

    // Find the second column in the first row where the dropdown should be appended
    let targetColumn = document.querySelector(
      ".row.mb-2 .col-sm-6:nth-child(2)"
    );
    if (targetColumn) {
      targetColumn.appendChild(dropdown); // Append the dropdown to the second column
    }

    // Listener for the dropdown change event
    dropdown.addEventListener("change", function () {
      let selectedERB = JSON.parse(this.value);

      // Format the output with the selected ERB Name
      let location = `ERB - ${selectedERB.name}`;
      let org = `SLSNSW`;
      let name = `ERB - ${selectedERB.name}`;
      let number = "ERB";
      let tpi = "NIL";

      // Insert into the textarea
      let nameField = document.querySelector("#callerDetailsName");
      let orgField = document.querySelector("#callerDetailsOrganisation");
      let numberField = document.querySelector("#callerDetailsNumber");
      let locationField = document.querySelector("#incidentLocation");
      let tpiField = document.querySelector("#incidentThirdParty");
      let serviceField = document.getElementById("primary_service");

      nameField.value = name;
      orgField.value = org;
      numberField.value = number;
      locationField.value = location;
      tpiField.value = tpi;

      // Insert latitude and longitude
      let latitudeField = document.querySelector("#incidentLatitude");
      let longitudeField = document.querySelector("#incidentLongitude");

      latitudeField.value = selectedERB.lat;
      longitudeField.value = selectedERB.lon;

      serviceField.value = "680";
      // Trigger the 'change' event for the select element
      let changeEvent = new Event("change", {
        bubbles: true,
        cancelable: true,
      });
      serviceField.dispatchEvent(changeEvent);
      document.querySelector("#callerDetails13Surf").checked = false;

      // Lock the specific fields after selection
      if (window.location.href !== "https://surfcom.sls.com.au/incidents/add") {
        nameField.disabled = true;
        orgField.disabled = true;
        numberField.disabled = true;
        locationField.disabled = true;
        tpiField.disabled = true;
        latitudeField.disabled = true;
        longitudeField.disabled = true;
        serviceField.disabled = true;
      }

      // Optionally, remove the dropdown after selection
      dropdown.remove();
    });

    // Optionally, focus the dropdown to immediately start using it
    dropdown.focus();
  }
});

window.addEventListener("load", function () {
  document
    .querySelector(".btn.btn-app.check-incident-status")
    .addEventListener("click", function () {
      // Unlock the specific fields
      document.querySelector("#callerDetailsName").disabled = false;
      document.querySelector("#callerDetailsOrganisation").disabled = false;
      document.querySelector("#callerDetailsNumber").disabled = false;
      document.querySelector("#incidentLocation").disabled = false;
      document.querySelector("#incidentThirdParty").disabled = false;
      document.getElementById("primary_service").disabled = false;
      document.getElementById("incidentLatitude").disabled = false;
      document.getElementById("incidentLongitude").disabled = false;

      // Run the button's action
      document.getElementById("saveIncidentForm").submit();
    });
});

window.addEventListener("load", function () {
  // Lock fields on window load if they meet the conditions
  let nameField = document.querySelector("#callerDetailsName");
  let orgField = document.querySelector("#callerDetailsOrganisation");
  let numberField = document.querySelector("#callerDetailsNumber");
  let locationField = document.querySelector("#incidentLocation");
  let tpiField = document.querySelector("#incidentThirdParty");
  let serviceField = document.getElementById("primary_service");
  let latField = document.getElementById("incidentLatitude");
  let lngField = document.getElementById("incidentLongitude");

  let areAllFieldsLocked = false;

  if (
    nameField.value.startsWith("ERB -") &&
    orgField.value === "SLSNSW" &&
    numberField.value === "ERB" &&
    locationField.value.startsWith("ERB -") &&
    tpiField.value === "NIL" &&
    serviceField.value === "680" &&
    window.location.href !== "https://surfcom.sls.com.au/incidents/add"
  ) {
    nameField.disabled = true;
    orgField.disabled = true;
    numberField.disabled = true;
    locationField.disabled = true;
    tpiField.disabled = true;
    serviceField.disabled = true;
    latField.disabled = true;
    lngField.disabled = true;
    areAllFieldsLocked = true;
  }

  // Create the Unlock All button
  let unlockAllButton = document.createElement("button");
  unlockAllButton.className = "btn btn-app";
  unlockAllButton.innerHTML = `
    <svg class="svg-inline--fa fa-unlock" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="unlock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
      <path fill="currentColor" d="M400 224H112V144C112 64.47 176.5 0 256 0S400 64.47 400 144v16c0 8.836-7.164 16-16 16H336c-8.836 0-16-7.164-16-16V144c0-44.11-35.89-80-80-80S160 99.89 160 144v80h-48V448c0 35.35 28.65 64 64 64h208c35.35 0 64-28.65 64-64V256C448 238.3 433.7 224 416 224z"></path>
    </svg>
    Unlock All
  `;

  // Add the button to the DOM
  let buttonContainer = document.querySelector(".row.mb-4");
  buttonContainer.appendChild(unlockAllButton);

  // Add event listener to the Unlock All button
  unlockAllButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action

    // Unlock the specific fields
    nameField.disabled = false;
    orgField.disabled = false;
    numberField.disabled = false;
    locationField.disabled = false;
    tpiField.disabled = false;
    serviceField.disabled = false;
    latField.disabled = false;
    lngField.disabled = false;
  });

  // Remove button with type="reset" and class="btn btn-app"
  var resetButtons = document.querySelectorAll('button[type="reset"]');
  resetButtons.forEach(function (button) {
    if (
      button.classList.contains("btn") &&
      button.classList.contains("btn-app")
    ) {
      button.remove();
    }
  });

  // Remove anchor tag with specific class and href
  var anchor = document.querySelector(
    'a.btn.btn-app[href="https://surfcom.sls.com.au/incidents/view/0"]'
  );
  if (anchor) {
    anchor.remove();
  }
});

window.addEventListener("load", function () {
  // Function to unlock the input field
  function unlockField() {
    const inputField = document.getElementById("incidentSLSContact");
    if (inputField) {
      inputField.removeAttribute("readonly");
      inputField.style.backgroundColor = "#fff"; // Optional: change background color to indicate it's editable
    }
  }

  // Find the specific button containing the SVG element
  const unlockButton = document.querySelector(
    "button.btn.btn-app .fa-unlock"
  ).parentElement;

  // Add click event listener to the button
  if (unlockButton) {
    unlockButton.addEventListener("click", function (event) {
      event.preventDefault();
      unlockField();
    });
  } else {
    console.error("Unlock button not found");
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + S was pressed
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // Prevent the browser's save dialog
    // Trigger the button click to save the form
    document.querySelector(".check-incident-status").click();
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + R was pressed
  if (event.ctrlKey && event.key === "r") {
    event.preventDefault(); // Prevent the default action (page reload)

    // Get the current URL
    let currentUrl = window.location.href;

    // Replace 'Edit' with 'record' in the URL
    let newUrl = currentUrl.replace("edit", "record");

    // Update the URL without reloading the page
    window.location.href = newUrl;
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + R was pressed
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault(); // Prevent the default action (page reload)

    // Get the current URL
    let currentUrl = window.location.href;

    // Replace 'Edit' with 'record' in the URL
    let newUrl = currentUrl.replace("record", "edit");

    // Update the URL without reloading the page
    window.location.href = newUrl;
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + I was pressed
  if (event.ctrlKey && event.key === "i") {
    event.preventDefault(); // Prevent the default action (page reload)

    // Replace 'Edit' with 'record' in the URL
    let newUrl = "https://surfcom.sls.com.au/incidents/view/0";

    // Update the URL without reloading the page
    window.location.href = newUrl;
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + n was pressed
  if (event.ctrlKey && event.key === "b") {
    event.preventDefault(); // Prevent the default action (page reload)

    // Replace 'Edit' with 'record' in the URL
    let newUrl = "https://surfcom.sls.com.au/incidents/add";

    // Update the URL without reloading the page
    window.location.href = newUrl;
  }
});

window.addEventListener("load", function () {
  const currentPageUrl = window.location.href;

  // Use console logging to confirm the script is running
  console.log("Page fully loaded", currentPageUrl);

  if (currentPageUrl.includes("https://surfcom.sls.com.au/support-services")) {
    const targetDivSelector = ".col-12.col-md-4 .form-group";
    const targetDiv = document.querySelector(targetDivSelector);

    // Log the targetDiv to ensure it's found
    console.log("Target Div:", targetDiv);

    if (targetDiv) {
      const button = document.createElement("button");
      button.innerText = "Bulk Sign Off All";
      button.className = "btn btn-danger";
      button.style.marginTop = "10px"; // Add some spacing above the button

      button.addEventListener("click", function () {
        // Use prompt for input
        const userInput = prompt(
          "Type 'SIGNOFF' to confirm bulk sign off of all services:"
        );

        if (userInput === "SIGNOFF") {
          document
            .querySelectorAll(
              'a[href^="https://surfcom.sls.com.au/log-service-off?log_id="]'
            )
            .forEach((link) => {
              let href = link.getAttribute("href");
              // Append "&bulkSupportOpsSignOff" to the href
              href += "&bulkSupportOpsSignOff";
              console.log("Opening link:", href); // Log the href being opened
              window.open(href, "_blank");
            });
        } else {
          // Log or handle the incorrect input or cancel action
          console.log(
            "Bulk sign off not confirmed by the user or incorrect input."
          );
        }
      });

      targetDiv.appendChild(button);
    } else {
      console.log(
        "Failed to find the target div using selector:",
        targetDivSelector
      );
    }
  }
});

window.addEventListener("load", function () {
  const currentPageUrl = window.location.href;

  // Use console logging to confirm the script is running
  console.log("Page fully loaded", currentPageUrl);

  // Check if the URL matches the desired pattern using RegExp
  if (
    /https:\/\/surfcom\.sls\.com\.au\/log-service-off\?log_id=/.test(
      currentPageUrl
    )
  ) {
    // Targeting the .card-footer element directly
    const targetDiv = document.querySelector(".card-footer");

    // Log the targetDiv to ensure it's found
    console.log("Target Div:", targetDiv);

    if (targetDiv) {
      const button = document.createElement("button");
      button.innerText = "Prefill & Signoff"; // Updated button text
      button.className = "btn btn-warning";
      button.style.marginLeft = "4px";

      // Add the prefill and sign off functionality to the button click event
      button.addEventListener("click", function () {
        // Prefill the current location input
        const currentLocationInput = document.querySelector(
          'input[type="text"].form-control[name="current_location"]'
        );
        if (currentLocationInput) {
          currentLocationInput.value = "BASE";
        }

        // Simulate the submit button click
        const submitButton = document.querySelector(
          'input[type="submit"].btn.btn-primary.mr-1'
        );
        if (submitButton) {
          submitButton.click();
          setTimeout(() => window.close(), 1000); // Close the window after a delay, if desired
        }
      });

      // Append the button to the .card-footer div
      targetDiv.appendChild(button);
    } else {
      console.log("Failed to find the target div using selector: .card-footer");
    }
  }
});

function BulkSignOffBoxes() {
  const currentPageUrl = window.location.href;
  console.log("Page fully loaded", currentPageUrl);

  if (currentPageUrl.includes("https://surfcom.sls.com.au/support-services")) {
    const targetDivSelector = ".col-12.col-md-4 .form-group";
    const targetDiv = document.querySelector(targetDivSelector);
    console.log("Target Div:", targetDiv);

    if (targetDiv) {
      // Check for the existence of the bulk sign-off button to prevent duplicates
      if (!document.querySelector(".bulk-sign-off-button")) {
        const bulkSignOffButton = document.createElement("button");
        bulkSignOffButton.innerText = "Bulk Sign Off Selected";
        bulkSignOffButton.className = "btn btn-warning bulk-sign-off-button"; // Added class for identification
        bulkSignOffButton.style.marginTop = "10px";
        bulkSignOffButton.style.marginLeft = "10px";
        bulkSignOffButton.disabled = true; // Initially disabled

        function updateButtonState() {
          const anyChecked =
            document.querySelectorAll(".signoff-checkbox:checked").length > 0;
          bulkSignOffButton.disabled = !anyChecked;
          bulkSignOffButton.classList.toggle("btn-disabled", !anyChecked);
        }

        bulkSignOffButton.addEventListener("click", function () {
          document
            .querySelectorAll(".signoff-checkbox:checked")
            .forEach((checkbox) => {
              let href = checkbox.getAttribute("data-href");
              href += "&bulkSupportOpsSignOff"; // Append the query parameter
              console.log("Opening link:", href);
              window.open(href, "_blank");
            });
        });

        targetDiv.appendChild(bulkSignOffButton);
      }

      const thead = document.querySelector("#supportServicesTable thead tr");
      // Ensure the "Sign Off" column is added only if it does not already exist
      if (!thead.querySelector(".select-checkbox-header")) {
        const th = document.createElement("th");
        th.innerText = "Sign Off";
        th.className = "select-checkbox-header";
        thead.prepend(th);
      }

      const tbody = document.querySelector("#supportServicesTable tbody");
      tbody.querySelectorAll("tr").forEach((row) => {
        // Only add checkbox or dash if it does not already exist
        if (!row.querySelector(".signoff-checkbox-container")) {
          // Use a container div for identification
          const signOffLink = row.querySelector(
            'a[href^="https://surfcom.sls.com.au/log-service-off?log_id="]'
          );
          const td = document.createElement("td");
          td.className = "signoff-checkbox-container"; // Added class for identification
          td.style.textAlign = "center";

          if (signOffLink) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "signoff-checkbox";
            checkbox.setAttribute("data-href", signOffLink.href);

            checkbox.addEventListener("change", updateButtonState);

            td.appendChild(checkbox);
          } else {
            td.innerText = "";
          }
          row.prepend(td);
        }
      });

      // Update button state initially
      updateButtonState();
    } else {
      console.log(
        "Failed to find the target div using selector:",
        targetDivSelector
      );
    }
  }
}

// Attach BulkSignOffBoxes to both load and click events as needed
window.addEventListener("load", BulkSignOffBoxes);
// Example of attaching to a specific clickable element, replace 'yourClickableElementSelector' with your actual selector
document.addEventListener("click", BulkSignOffBoxes);

// Define your locations array with latitudes, longitudes, and the service value that corresponds to each location.
const locationsArray = [
  { lat: -37.0598, lng: 149.91031, serviceValue: "940" }, // Aslings (Lifeguards)
  { lat: -34.30736, lng: 150.93439, serviceValue: "40" }, // Austinmer
  { lat: -34.30736, lng: 150.93439, serviceValue: "1139" }, // Austinmer (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "927" }, // Australian Lifeguard Service NSW (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1600" }, // Australian UAV Service
  { lat: -33.63593, lng: 151.33158, serviceValue: "41" }, // Avalon Beach
  { lat: -33.63593, lng: 151.33158, serviceValue: "754" }, // Avalon Beach (Lifeguards)
  { lat: -33.47068, lng: 151.43699, serviceValue: "1112" }, // Avoca (Lifeguards)
  { lat: -33.47068, lng: 151.43699, serviceValue: "42" }, // Avoca Beach
  { lat: -28.8681, lng: 153.59153, serviceValue: "44" }, // Ballina Lighthouse and Lismore SLSC
  { lat: -36.89521, lng: 149.92411, serviceValue: "947" }, // Bar Beach Bega (Lifeguards)
  { lat: -32.94168, lng: 151.767, serviceValue: "1097" }, // Bar Beach Newcastle (Lifeguards)
  { lat: -35.79373, lng: 150.22981, serviceValue: "50" }, // Batemans Bay
  { lat: 0, lng: 0, serviceValue: "1539" }, // Bay and Basin Community Nippers Club
  { lat: -34.36425, lng: 150.92009, serviceValue: "53" }, // Bellambi
  { lat: -34.36425, lng: 150.92009, serviceValue: "1140" }, // Bellambi (Lifeguards)
  { lat: -30.4674, lng: 153.04467, serviceValue: "82" }, // Bellinger Valley-North Beach SLSC
  { lat: -36.42573, lng: 150.07612, serviceValue: "54" }, // Bermagui
  { lat: -36.42573, lng: 150.07612, serviceValue: "935" }, // Bermagui (Lifeguards)
  { lat: -33.64635, lng: 151.32687, serviceValue: "47" }, // Bilgola Beach
  { lat: -33.64635, lng: 151.32687, serviceValue: "755" }, // Bilgola Beach (Lifeguards)
  { lat: -32.78327, lng: 152.07567, serviceValue: "70" }, // Birubi Point
  { lat: -32.78327, lng: 152.07567, serviceValue: "749" }, // Birubi Point (Lifeguards)
  { lat: -32.07081, lng: 152.54492, serviceValue: "63" }, // Black Head
  { lat: -32.07081, lng: 152.54492, serviceValue: "739" }, // Blackhead (Lifeguards)
  { lat: -34.56619, lng: 150.86788, serviceValue: "1158" }, // Blacks (Lifeguards)
  { lat: -33.08036, lng: 151.65711, serviceValue: "1100" }, // Blacksmiths Beach Swansea Belmont (Lifeguards)
  { lat: -34.65373, lng: 150.85705, serviceValue: "1164" }, // Bombo (Lifeguards)
  { lat: -33.89039, lng: 151.27715, serviceValue: "67" }, // Bondi
  { lat: -33.89039, lng: 151.27715, serviceValue: "1128" }, // Bondi (Lifeguards)
  { lat: -31.58934, lng: 152.83891, serviceValue: "1302" }, // Bonny Hills (Lifeguards)
  { lat: -32.33663, lng: 152.54569, serviceValue: "744" }, // Boomerang (Lifeguards)
  { lat: -28.70484, lng: 153.6146, serviceValue: "696" }, // Broken Head (Lifeguards)
  { lat: -33.90338, lng: 151.26773, serviceValue: "74" }, // Bronte
  { lat: -33.90338, lng: 151.26773, serviceValue: "1130" }, // Bronte (Lifeguards)
  { lat: -29.6059, lng: 153.33452, serviceValue: "715" }, // Brooms Head (Lifeguards)
  { lat: -35.85811, lng: 150.1762, serviceValue: "774" }, // Broulee (Lifeguards)
  { lat: -35.85811, lng: 150.1762, serviceValue: "75" }, // Broulee Surfers
  { lat: -28.54174, lng: 153.55574, serviceValue: "58" }, // Brunswick
  { lat: -28.54174, lng: 153.55574, serviceValue: "697" }, // Brunswick Heads (Lifeguards)
  { lat: -34.33967, lng: 150.92523, serviceValue: "79" }, // Bulli
  { lat: -34.33967, lng: 150.92523, serviceValue: "1141" }, // Bulli (Lifeguards)
  { lat: -33.66484, lng: 151.32066, serviceValue: "78" }, // Bungan Beach
  { lat: -33.66484, lng: 151.32066, serviceValue: "757" }, // Bungan Beach (Lifeguards)
  { lat: -34.18506, lng: 151.04464, serviceValue: "69" }, // Burning Palms
  { lat: -28.64115, lng: 153.61436, serviceValue: "83" }, // Byron Bay
  { lat: -28.64115, lng: 153.61436, serviceValue: "699" }, // Byron Bay (Lifeguards)
  { lat: -28.33187, lng: 153.57068, serviceValue: "691" }, // Cabarita (Lifeguards)
  { lat: -28.33187, lng: 153.57068, serviceValue: "84" }, // Cabarita Beach
  { lat: -31.63406, lng: 152.83331, serviceValue: "86" }, // Camden Haven
  { lat: -36.37819, lng: 150.07707, serviceValue: "934" }, // Camel Rock Beach (Lifeguards)
  { lat: -32.19533, lng: 152.53725, serviceValue: "95" }, // Cape Hawke
  { lat: -32.19533, lng: 152.53725, serviceValue: "742" }, // Cape Hawke (Lifeguards)
  { lat: -28.30452, lng: 153.57282, serviceValue: "692" }, // Casuarina Beach (Lifeguards)
  { lat: -33.15785, lng: 151.62912, serviceValue: "93" }, // Catherine Hill Bay
  { lat: -33.15785, lng: 151.62912, serviceValue: "1101" }, // Catherine Hill Bay (Lifeguards)
  { lat: -33.11031, lng: 151.64616, serviceValue: "505" }, // Caves Beach
  { lat: -33.11031, lng: 151.64616, serviceValue: "1102" }, // Caves Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1179" }, // CC - DUTY OFFICERS CLUB
  { lat: 0, lng: 0, serviceValue: "1532" }, // CC - SMAR
  { lat: 0, lng: 0, serviceValue: "1553" }, // CC - UAV
  { lat: 0, lng: 0, serviceValue: "684" }, // CC Support Operations
  { lat: -28.641742, lng: 153.624837, serviceValue: "698" }, // Clarks (Lifeguards)
  { lat: -33.91432, lng: 151.26677, serviceValue: "102" }, // Clovelly
  { lat: -33.91432, lng: 151.26677, serviceValue: "1131" }, // Clovelly (Lifeguards)
  { lat: -34.24459, lng: 150.97666, serviceValue: "105" }, // Coalcliff
  { lat: -34.24459, lng: 150.97666, serviceValue: "1142" }, // Coalcliff (Lifeguards)
  { lat: -30.29462, lng: 153.13927, serviceValue: "106" }, // Coffs Harbour
  { lat: -30.29462, lng: 153.13927, serviceValue: "1079" }, // Coffs Harbour (Lifeguards)
  { lat: -34.28775, lng: 150.94836, serviceValue: "107" }, // Coledale
  { lat: -34.28775, lng: 150.94836, serviceValue: "1143" }, // Coledale (Lifeguards)
  { lat: -33.73312, lng: 151.30238, serviceValue: "117" }, // Collaroy
  { lat: -33.73312, lng: 151.30238, serviceValue: "1122" }, // Collaroy (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "545" }, // Community (NSW)
  { lat: -33.92303, lng: 151.2579, serviceValue: "108" }, // Coogee (NSW)
  { lat: -33.92303, lng: 151.2579, serviceValue: "1132" }, // Coogee (NSW) (Lifeguards)
  { lat: -32.94168, lng: 151.767, serviceValue: "96" }, // Cooks Hill
  { lat: -33.49058, lng: 151.43192, serviceValue: "112" }, // Copacabana
  { lat: -33.49058, lng: 151.43192, serviceValue: "1113" }, // Copacabana (Lifeguards)
  { lat: -30.03513, lng: 153.19765, serviceValue: "783" }, // Corindi (Lifeguards)
  { lat: -30.05994, lng: 153.20068, serviceValue: "1088" }, // Corindi Arrawarra Beach (Lifeguards)
  { lat: -34.382, lng: 150.91485, serviceValue: "110" }, // Corrimal
  { lat: -34.382, lng: 150.91485, serviceValue: "1144" }, // Corrimal (Lifeguards)
  { lat: -31.18695, lng: 152.97893, serviceValue: "729" }, // Crescent Head (Lifeguards)
  { lat: -34.05601, lng: 151.1547, serviceValue: "116" }, // Cronulla
  { lat: -34.05601, lng: 151.1547, serviceValue: "1138" }, // Cronulla (Lifeguards)
  { lat: -34.90593, lng: 150.76586, serviceValue: "764" }, // Crookhaven (Lifeguards)
  { lat: -31.84263, lng: 152.74344, serviceValue: "114" }, // Crowdy Head
  { lat: -31.84263, lng: 152.74344, serviceValue: "735" }, // Crowdy Head (Lifeguards)
  { lat: -28.256, lng: 153.57863, serviceValue: "119" }, // Cudgen Headland
  { lat: -36.163, lng: 150.12464, serviceValue: "777" }, // Dalmeny (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1083" }, // Darlington Lorikeet (Lifeguards)
  { lat: -33.7524, lng: 151.29671, serviceValue: "123" }, // Dee Why
  { lat: -33.7524, lng: 151.29671, serviceValue: "1123" }, // Dee Why (Lifeguards)
  { lat: -32.04426, lng: 152.54123, serviceValue: "738" }, // Diamond Beach (Lifeguards)
  { lat: -30.27469, lng: 153.1424, serviceValue: "1085" }, // Diggers Beach (Lifeguards)
  { lat: -32.94493, lng: 151.76088, serviceValue: "126" }, // Dixon Park
  { lat: -32.94493, lng: 151.76088, serviceValue: "1094" }, // Dixon Park (Lifeguards)
  { lat: -28.16768, lng: 153.55119, serviceValue: "686" }, // Duranbah (Lifeguards)
  { lat: -34.68982, lng: 150.85308, serviceValue: "1166" }, // East Beach (Lifeguards)
  { lat: -34.04618, lng: 151.159, serviceValue: "134" }, // Elouera
  { lat: -34.04618, lng: 151.159, serviceValue: "1136" }, // Elouera (Lifeguards)
  { lat: -30.17082, lng: 153.18894, serviceValue: "1086" }, // Emerald Beach (Lifeguards)
  { lat: -34.18046, lng: 151.05227, serviceValue: "136" }, // Era
  { lat: -29.11223, lng: 153.43393, serviceValue: "713" }, // Evans Head (Lifeguards)
  { lat: -29.11223, lng: 153.43393, serviceValue: "139" }, // Evans Head/Casino SLSC
  { lat: -34.39628, lng: 150.90517, serviceValue: "149" }, // Fairy Meadow
  { lat: -34.39628, lng: 150.90517, serviceValue: "1145" }, // Fairy Meadow (Lifeguards)
  { lat: -32.74265, lng: 152.17114, serviceValue: "145" }, // Fingal Beach
  { lat: -32.74265, lng: 152.17114, serviceValue: "747" }, // Fingal Beach Port Stephens (Lifeguards)
  { lat: -28.19684, lng: 153.56666, serviceValue: "146" }, // Fingal Rovers
  { lat: -28.19684, lng: 153.56666, serviceValue: "687" }, // Fingal Tweed (Lifeguards)
  { lat: -28.63981, lng: 153.61067, serviceValue: "1180" }, // First Sun (Lifeguards)
  { lat: -28.84278, lng: 153.60571, serviceValue: "1556" }, // Flat Rock (Lifeguards)
  { lat: -31.44257, lng: 152.92582, serviceValue: "1091" }, // Flynns Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "683" }, // FNC - Duty Officers
  { lat: 0, lng: 0, serviceValue: "681" }, // FNC Support Operations
  { lat: -32.17792, lng: 152.51164, serviceValue: "151" }, // Forster
  { lat: -32.17792, lng: 152.51164, serviceValue: "741" }, // Forster (Lifeguards)
  { lat: -33.18703, lng: 151.62214, serviceValue: "1311" }, // Frazer Beach (Lifeguards)
  { lat: -33.78108, lng: 151.28992, serviceValue: "153" }, // Freshwater
  { lat: -33.78108, lng: 151.28992, serviceValue: "1124" }, // Freshwater (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1348" }, // FSC - Duty Officers
  { lat: 0, lng: 0, serviceValue: "1635" }, // FSC - Lifesaving
  { lat: 0, lng: 0, serviceValue: "1378" }, // FSC Support Operations
  { lat: -34.13753, lng: 151.1181, serviceValue: "155" }, // Garie
  { lat: -34.17018, lng: 151.06604, serviceValue: "761" }, // Garie (Lifeguards)
  { lat: -34.74282, lng: 150.83212, serviceValue: "157" }, // Gerringong
  { lat: -34.77263, lng: 150.80786, serviceValue: "1336" }, // Gerroa (Lifeguards)
  { lat: -30.79254, lng: 152.99775, serviceValue: "730" }, // Grassy Head Beach (Lifeguards)
  { lat: -28.3582, lng: 153.5748, serviceValue: "693" }, // Hastings Point (Lifeguards)
  { lat: -31.05441, lng: 153.05245, serviceValue: "167" }, // Hat Head
  { lat: -31.05441, lng: 153.05245, serviceValue: "731" }, // Hat Head (Lifeguards)
  { lat: -32.67346, lng: 152.18501, serviceValue: "745" }, // Hawks Nest (Lifeguards)
  { lat: -34.23075, lng: 150.98878, serviceValue: "169" }, // Helensburgh Stanwell Park
  { lat: -30.88337, lng: 153.04078, serviceValue: "732" }, // Horseshoe Bay (South West Rocks) (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1198" }, // HUN - Duty Officers
  { lat: 0, lng: 0, serviceValue: "678" }, // HUN Support Operations
  { lat: -30.52216, lng: 153.02705, serviceValue: "721" }, // Hungry Head Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1531" }, // Hyams Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1332" }, // ILL - Duty Officers
  { lat: 0, lng: 0, serviceValue: "1465" }, // ILL - Night Operations Group
  { lat: 0, lng: 0, serviceValue: "676" }, // ILL Support Operations
  { lat: -29.39552, lng: 153.37177, serviceValue: "716" }, // Iluka Bluff (Lifeguards)
  { lat: -31.18695, lng: 152.97893, serviceValue: "176" }, // Kempsey Crescent Head
  { lat: -34.68093, lng: 150.85391, serviceValue: "1165" }, // Kendalls (Lifeguards)
  { lat: -34.67599, lng: 150.85431, serviceValue: "180" }, // Kiama
  { lat: -34.67599, lng: 150.85431, serviceValue: "1578" }, // Kiama (Lifeguards)
  { lat: -34.63701, lng: 150.85505, serviceValue: "177" }, // Kiama Downs
  { lat: -34.63701, lng: 150.85505, serviceValue: "1163" }, // Kiama Downs (Lifeguards)
  { lat: -33.53248, lng: 151.35893, serviceValue: "181" }, // Killcare
  { lat: -33.53248, lng: 151.35893, serviceValue: "1114" }, // Killcare (Lifeguards)
  { lat: -28.25599, lng: 153.57865, serviceValue: "688" }, // Kingscliff (Lifeguards)
  { lat: -31.55034, lng: 152.85795, serviceValue: "1093" }, // Lake Cathie Beach (Lifeguards)
  { lat: -33.79034, lng: 151.00804, serviceValue: "1517" }, // Lake Parramatta (Lifeguards)
  { lat: -28.78527, lng: 153.59351, serviceValue: "707" }, // Lennox Head (Lifeguards)
  { lat: -28.78527, lng: 153.59351, serviceValue: "193" }, // Lennox Head Alstonville
  { lat: 0, lng: 0, serviceValue: "1355" }, // Lifeguard Magazine Club
  { lat: 0, lng: 0, serviceValue: "1177" }, // Lifeguards International Club (Lifeguards)
  { lat: -28.8681, lng: 153.59153, serviceValue: "708" }, // Lighthouse Beach (Ballina) (Lifeguards)
  { lat: -31.47526, lng: 152.93265, serviceValue: "1092" }, // Lighthouse Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1218" }, // Lismore - Rescue Helicopter
  { lat: 0, lng: 0, serviceValue: "1342" }, // LNC - DUTY OFFICERS
  { lat: 0, lng: 0, serviceValue: "1571" }, // LNC - UAV
  { lat: 0, lng: 0, serviceValue: "1064" }, // LNC Support Operations
  { lat: -33.74483, lng: 151.30461, serviceValue: "199" }, // Long Reef
  { lat: -33.74483, lng: 151.30461, serviceValue: "1305" }, // Long Reef (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1562" }, // Lord Howe Island Community Nipper Club
  { lat: -30.74485, lng: 152.99733, serviceValue: "228" }, // Macksville-Scotts Head
  { lat: -33.50067, lng: 151.42491, serviceValue: "218" }, // MacMasters
  { lat: -33.50067, lng: 151.42491, serviceValue: "1115" }, // MacMasters (Lifeguards)
  { lat: -33.31289, lng: 151.52654, serviceValue: "1340" }, // Magenta (Lifeguards)
  { lat: -35.79373, lng: 150.22981, serviceValue: "773" }, // Malua Bay (Lifeguards)
  { lat: -33.79961, lng: 151.29046, serviceValue: "202" }, // Manly
  { lat: -33.79961, lng: 151.29046, serviceValue: "1127" }, // Manly (Lifeguards)
  { lat: -33.94735, lng: 151.25664, serviceValue: "206" }, // Maroubra
  { lat: -33.94735, lng: 151.25664, serviceValue: "1133" }, // Maroubra (Lifeguards)
  { lat: -32.94977, lng: 151.75626, serviceValue: "212" }, // Merewether
  { lat: -32.94977, lng: 151.75626, serviceValue: "1095" }, // Merewether (Lifeguards)
  { lat: -32.95184, lng: 151.75563, serviceValue: "1511" }, // Merewether Ocean Baths (Lifeguards)
  { lat: -36.89759, lng: 149.91428, serviceValue: "938" }, // Merimbula (Lifeguards)
  { lat: -29.76909, lng: 153.29554, serviceValue: "234" }, // Minnie Water Wooli
  { lat: -29.76909, lng: 153.29554, serviceValue: "780" }, // Minnie Waters (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1345" }, // MNC - Duty Officers
  { lat: 0, lng: 0, serviceValue: "858" }, // MNC Support Operations
  { lat: -35.33894, lng: 150.47371, serviceValue: "224" }, // Mollymook
  { lat: -33.67865, lng: 151.31344, serviceValue: "225" }, // Mona Vale
  { lat: -33.67865, lng: 151.31344, serviceValue: "758" }, // Mona Vale (Lifeguards)
  { lat: -35.91342, lng: 150.15663, serviceValue: "227" }, // Moruya
  { lat: -35.91342, lng: 150.15663, serviceValue: "775" }, // Moruya (Lifeguards)
  { lat: -30.63872, lng: 153.01557, serviceValue: "252" }, // Nambucca Heads
  { lat: -30.63872, lng: 153.01557, serviceValue: "724" }, // Nambucca Heads Beach (Lifeguards)
  { lat: -36.22384, lng: 150.13977, serviceValue: "236" }, // Narooma
  { lat: -36.22384, lng: 150.13977, serviceValue: "778" }, // Narooma (Lifeguards)
  { lat: -33.705, lng: 151.30497, serviceValue: "239" }, // Narrabeen
  { lat: -33.71517, lng: 151.29992, serviceValue: "1303" }, // Narrabeen (Lifeguards)
  { lat: -35.31706, lng: 150.47197, serviceValue: "768" }, // Narrawallee (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1344" }, // NC - Duty Officers
  { lat: 0, lng: 0, serviceValue: "1338" }, // NC Support Operations
  { lat: -32.92931, lng: 151.78693, serviceValue: "249" }, // Newcastle
  { lat: -32.92931, lng: 151.78693, serviceValue: "1096" }, // Newcastle Beach (Lifeguards)
  { lat: -32.92959, lng: 151.79087, serviceValue: "1510" }, // Newcastle Ocean Baths (Lifeguards)
  { lat: -33.65382, lng: 151.3229, serviceValue: "264" }, // Newport
  { lat: -33.65382, lng: 151.3229, serviceValue: "756" }, // Newport Beach (Lifeguards)
  { lat: -32.92444, lng: 151.79175, serviceValue: "258" }, // Nobbys (NSW)
  { lat: -32.92444, lng: 151.79175, serviceValue: "1098" }, // Nobbys Beach Newcastle (Lifeguards)
  { lat: -33.45778, lng: 151.43936, serviceValue: "237" }, // North Avoca
  { lat: -33.47068, lng: 151.43699, serviceValue: "1116" }, // North Avoca (Lifeguards)
  { lat: -30.4674, lng: 153.04467, serviceValue: "722" }, // North Beach (Bellingen) (Lifeguards)
  { lat: -33.89007, lng: 151.28118, serviceValue: "240" }, // North Bondi
  { lat: -34.05062, lng: 151.15564, serviceValue: "246" }, // North Cronulla
  { lat: -34.05062, lng: 151.15564, serviceValue: "1137" }, // North Cronulla (Lifeguards)
  { lat: -33.76651, lng: 151.29939, serviceValue: "244" }, // North Curl Curl
  { lat: -33.76651, lng: 151.29939, serviceValue: "1306" }, // North Curl Curl (Lifeguards)
  { lat: -33.33407, lng: 151.50618, serviceValue: "247" }, // North Entrance
  { lat: -33.33407, lng: 151.50618, serviceValue: "1105" }, // North Entrance (Lifeguards)
  { lat: -31.63406, lng: 152.83331, serviceValue: "1301" }, // North Haven (Lifeguards)
  { lat: -35.90441, lng: 150.15079, serviceValue: "1575" }, // North Head - Moruya Airport (Lifeguards)
  { lat: -28.24, lng: 153.56867, serviceValue: "1487" }, // North Kingscliff (Lifeguards)
  { lat: -35.32458, lng: 150.48014, serviceValue: "769" }, // North Mollymook (Lifeguards)
  { lat: -33.705, lng: 151.30497, serviceValue: "257" }, // North Narrabeen
  { lat: -33.705, lng: 151.30497, serviceValue: "1121" }, // North Narrabeen (Lifeguards)
  { lat: -33.59075, lng: 151.32465, serviceValue: "262" }, // North Palm Beach
  { lat: -33.59075, lng: 151.32465, serviceValue: "752" }, // North Palm Beach (Lifeguards)
  { lat: -33.79085, lng: 151.28733, serviceValue: "267" }, // North Steyne
  { lat: -33.79085, lng: 151.28733, serviceValue: "1126" }, // North Steyne (Lifeguards)
  { lat: -34.41375, lng: 150.90146, serviceValue: "261" }, // North Wollongong
  { lat: -34.41375, lng: 150.90146, serviceValue: "1146" }, // North Wollongong (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "618" }, // Northern Region Helicopter Rescue Service
  { lat: -34.9339, lng: 150.77913, serviceValue: "269" }, // Nowra Culburra
  { lat: -33.52443, lng: 151.32112, serviceValue: "273" }, // Ocean Beach
  { lat: -33.52443, lng: 151.32112, serviceValue: "1117" }, // Ocean Beach Gosford (Lifeguards)
  { lat: -31.97077, lng: 152.59153, serviceValue: "736" }, // Old Bar Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1666" }, // On Water - NSW Flood Response Group
  { lat: -32.77934, lng: 152.11598, serviceValue: "748" }, // One Mile (Port Stephens) (Lifeguards)
  { lat: -32.33082, lng: 152.53687, serviceValue: "309" }, // Pacific Palms
  { lat: -32.33082, lng: 152.53687, serviceValue: "743" }, // Pacific Palms (Lifeguards)
  { lat: -33.59913, lng: 151.32454, serviceValue: "751" }, // Palm Beach (Lifeguards)
  { lat: -33.59913, lng: 151.32454, serviceValue: "286" }, // Palm Beach (NSW)
  { lat: -36.94135, lng: 149.90915, serviceValue: "284" }, // Pambula
  { lat: -36.94135, lng: 149.90915, serviceValue: "939" }, // Pambula Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "690" }, // Peppers Pool (Lifeguards)
  { lat: -29.44122, lng: 153.36692, serviceValue: "717" }, // Pippi (Lifeguards)
  { lat: -34.49199, lng: 150.90788, serviceValue: "1147" }, // Port Kembla (Lifeguards)
  { lat: -34.49199, lng: 150.90788, serviceValue: "298" }, // Port Kembla (NSW)
  { lat: -31.44257, lng: 152.92582, serviceValue: "305" }, // Port Macquarie
  { lat: -28.38411, lng: 153.56877, serviceValue: "694" }, // Pottsville North (Lifeguards)
  { lat: -28.3897, lng: 153.56882, serviceValue: "976" }, // Pottsville South (Lifeguards)
  { lat: -33.78601, lng: 151.28781, serviceValue: "318" }, // Queenscliff
  { lat: -33.78601, lng: 151.28781, serviceValue: "1125" }, // Queenscliff (MC Lifeguards)
  { lat: -29.98263, lng: 153.23038, serviceValue: "782" }, // Red Rock (Lifeguards)
  { lat: -29.98263, lng: 153.23038, serviceValue: "330" }, // Red Rock Corindi
  { lat: -33.01368, lng: 151.7198, serviceValue: "327" }, // Redhead
  { lat: -33.01368, lng: 151.7198, serviceValue: "1103" }, // Redhead (Lifeguards)
  { lat: -28.27697, lng: 153.57882, serviceValue: "554" }, // Salt
  { lat: -28.27697, lng: 153.57882, serviceValue: "689" }, // Salt Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "942" }, // Salt Pool (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "737" }, // Saltwater Beach (Lifeguards)
  { lat: -34.33089, lng: 150.92795, serviceValue: "342" }, // Sandon Point
  { lat: -34.33089, lng: 150.92795, serviceValue: "1148" }, // Sandon Point (Lifeguards)
  { lat: -30.23111, lng: 153.15287, serviceValue: "1087" }, // Sapphire Beach (Lifeguards)
  { lat: -30.36827, lng: 153.10215, serviceValue: "334" }, // Sawtell
  { lat: -30.36827, lng: 153.10215, serviceValue: "1080" }, // Sawtell (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1347" }, // SC - Duty Officers
  { lat: 0, lng: 0, serviceValue: "1169" }, // SC Support Operations
  { lat: -34.27446, lng: 150.9581, serviceValue: "339" }, // Scarborough Wombarra
  { lat: -34.27446, lng: 150.9581, serviceValue: "1149" }, // Scarborough Wombarra (Lifeguards)
  { lat: -30.74485, lng: 152.99733, serviceValue: "725" }, // Scotts Head Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1168" }, // Seven Mile Beach (Lifeguards)
  { lat: -28.83424, lng: 153.60497, serviceValue: "709" }, // Sharpes (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "348" }, // Shellharbour
  { lat: -34.572, lng: 150.8673, serviceValue: "1156" }, // Shellharbour North (Lifeguards)
  { lat: -34.57923, lng: 150.872, serviceValue: "1161" }, // Shellharbour Rock Pool (Lifeguards)
  { lat: -34.5824, lng: 150.87321, serviceValue: "1159" }, // Shellharbour South (Lifeguards)
  { lat: -28.865, lng: 153.5934, serviceValue: "710" }, // Shelly (Ballina) (Lifeguards)
  { lat: -33.37298, lng: 151.48721, serviceValue: "347" }, // Shelly Beach
  { lat: -33.37298, lng: 151.48721, serviceValue: "1106" }, // Shelly Beach (Wyong) (Lifeguards)
  { lat: -34.85105, lng: 150.74985, serviceValue: "349" }, // Shoalhaven Heads
  { lat: -34.85105, lng: 150.74985, serviceValue: "763" }, // Shoalhaven Heads (Lifeguards)
  { lat: -36.88395, lng: 149.93075, serviceValue: "937" }, // Short Point (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "860" }, // SLSNSW Southern Region HRS Sydney
  { lat: 0, lng: 0, serviceValue: "921" }, // SNB - Duty Officers
  { lat: 0, lng: 0, serviceValue: "1463" }, // SNB - Night Operations Group
  { lat: 0, lng: 0, serviceValue: "1554" }, // SNB - Surfcom Northern Beaches Team
  { lat: 0, lng: 0, serviceValue: "1577" }, // SNB - UAV Group
  { lat: 0, lng: 0, serviceValue: "679" }, // SNB Support Operations
  { lat: -33.28953, lng: 151.56658, serviceValue: "359" }, // Soldiers Beach
  { lat: -33.28953, lng: 151.56658, serviceValue: "1107" }, // Soldiers Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "711" }, // South Ballina (Lifeguards)
  { lat: -33.77329, lng: 151.29264, serviceValue: "338" }, // South Curl Curl
  { lat: -33.77329, lng: 151.29264, serviceValue: "1307" }, // South Curl Curl (Lifeguards)
  { lat: -28.49725, lng: 153.5508, serviceValue: "701" }, // South Golden (Lifeguards)
  { lat: -33.95132, lng: 151.25557, serviceValue: "353" }, // South Maroubra
  { lat: -35.33894, lng: 150.47371, serviceValue: "770" }, // South Mollymook (Lifeguards)
  { lat: -33.72288, lng: 151.29911, serviceValue: "356" }, // South Narrabeen
  { lat: -33.72288, lng: 151.29911, serviceValue: "1304" }, // South Narrabeen (Lifeguards)
  { lat: -30.8836, lng: 153.04225, serviceValue: "379" }, // South West Rocks
  { lat: -30.8836, lng: 153.04225, serviceValue: "733" }, // South West Rocks (Lifeguards)
  { lat: -34.23075, lng: 150.98878, serviceValue: "1150" }, // Stanwell Park (Lifeguards)
  { lat: -32.91121, lng: 151.78813, serviceValue: "371" }, // Stockton
  { lat: -32.91121, lng: 151.78813, serviceValue: "1099" }, // Stockton Beach (Lifeguards)
  { lat: -28.69025, lng: 153.61344, serviceValue: "700" }, // Suffolk Park (Lifeguards)
  { lat: -35.75878, lng: 150.2108, serviceValue: "772" }, // Surf Beach (Batemans Bay) (Lifeguards)
  { lat: -34.67599, lng: 150.85431, serviceValue: "1162" }, // Surf Beach (Kiama) (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1491" }, // Surf Life Saving NSW Coastsafe
  { lat: 0, lng: 0, serviceValue: "1594" }, // Surf Life Saving NSW Event Club
  { lat: 0, lng: 0, serviceValue: "1503" }, // Surf Life Saving NSW Event Services (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "862" }, // Surf Life Saving NSW Hunter Region HRS
  { lat: 0, lng: 0, serviceValue: "1276" }, // Surf Life Saving NSW LG Supervisors (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "861" }, // Surf Life Saving NSW Northern Region HRS
  { lat: 0, lng: 0, serviceValue: "1191" }, // Surf Life Saving NSW State Duty Officers Club
  { lat: 0, lng: 0, serviceValue: "680" }, // Surf Life Saving NSW State Operations Centre
  { lat: 0, lng: 0, serviceValue: "620" }, // Surf Life Saving NSW Support Operations Club
  { lat: 0, lng: 0, serviceValue: "619" }, // Surf Rescue 30 SYD
  { lat: 0, lng: 0, serviceValue: "551" }, // Surf Rescue 40 FNC
  { lat: 0, lng: 0, serviceValue: "857" }, // Surf Rescue 50 SC
  { lat: -35.18752, lng: 150.58219, serviceValue: "374" }, // Sussex Inlet
  { lat: -35.18752, lng: 150.58219, serviceValue: "767" }, // Sussex Inlet (Lifeguards)
  { lat: -33.08036, lng: 151.65711, serviceValue: "375" }, // Swansea Belmont
  { lat: 0, lng: 0, serviceValue: "674" }, // SYD - Duty Officers
  { lat: 0, lng: 0, serviceValue: "653" }, // SYD Support Operations
  { lat: 0, lng: 0, serviceValue: "917" }, // Sydney Northern Beaches CISM TIPS
  { lat: -31.47526, lng: 152.93265, serviceValue: "380" }, // Tacking Point
  { lat: -28.64515, lng: 153.63078, serviceValue: "704" }, // Tallows (Lifeguards)
  { lat: -33.8997, lng: 151.26996, serviceValue: "382" }, // Tamarama
  { lat: -33.8997, lng: 151.26996, serviceValue: "1129" }, // Tamarama (Lifeguards)
  { lat: -31.97077, lng: 152.59153, serviceValue: "396" }, // Taree Old Bar
  { lat: -36.7271, lng: 149.98253, serviceValue: "384" }, // Tathra
  { lat: -36.7271, lng: 149.98253, serviceValue: "936" }, // Tathra (Lifeguards)
  { lat: -32.67346, lng: 152.18501, serviceValue: "389" }, // Tea Gardens Hawks Nest
  { lat: 0, lng: 0, serviceValue: "943" }, // Tea Gardens Pool (Lifeguards)
  { lat: -33.4464, lng: 151.4445, serviceValue: "388" }, // Terrigal
  { lat: -33.4464, lng: 151.4445, serviceValue: "1118" }, // Terrigal (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "544" }, // Test NSW Club
  { lat: 0, lng: 0, serviceValue: "1533" }, // Test NSW Lifeguards
  { lat: 0, lng: 0, serviceValue: "1461" }, // Test NSW Support Ops Club
  { lat: -33.34792, lng: 151.50277, serviceValue: "387" }, // The Entrance
  { lat: -33.34792, lng: 151.50277, serviceValue: "1108" }, // The Entrance (Lifeguards)
  { lat: -33.25449, lng: 151.56233, serviceValue: "393" }, // The Lakes
  { lat: -33.25449, lng: 151.56233, serviceValue: "1109" }, // The Lakes (Lifeguards)
  { lat: -28.63716, lng: 153.62854, serviceValue: "703" }, // The Pass (Lifeguards)
  { lat: -34.316, lng: 150.92773, serviceValue: "392" }, // Thirroul
  { lat: -34.316, lng: 150.92773, serviceValue: "1151" }, // Thirroul (Lifeguards)
  { lat: -34.93133, lng: 150.77271, serviceValue: "765" }, // Tilbury (Lifeguards)
  { lat: -33.3622, lng: 151.49989, serviceValue: "397" }, // Toowoon Bay
  { lat: -33.3622, lng: 151.49989, serviceValue: "1110" }, // Toowoon Bay (Lifeguards)
  { lat: -31.44257, lng: 152.92582, serviceValue: "1090" }, // Town Beach (Lifeguards)
  { lat: -34.38674, lng: 150.91153, serviceValue: "399" }, // Towradgi
  { lat: -34.38674, lng: 150.91153, serviceValue: "1152" }, // Towradgi (Lifeguards)
  { lat: -29.43141, lng: 153.36292, serviceValue: "718" }, // Turners (Lifeguards)
  { lat: -36.06397, lng: 150.13678, serviceValue: "776" }, // Tuross Heads (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1572" }, // Tyagarah Beach (Lifeguards)
  { lat: -33.52713, lng: 151.31542, serviceValue: "409" }, // Umina
  { lat: -33.52713, lng: 151.31542, serviceValue: "1119" }, // Umina (Lifeguards)
  { lat: -30.52216, lng: 153.02705, serviceValue: "406" }, // Urunga SLSC
  { lat: -30.59707, lng: 153.01235, serviceValue: "726" }, // Valla Beach (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "727" }, // Valla Beach Resort (Lifeguards)
  { lat: -33.43018, lng: 151.44676, serviceValue: "414" }, // Wamberal
  { lat: -33.43018, lng: 151.44676, serviceValue: "1120" }, // Wamberal (Lifeguards)
  { lat: -34.04337, lng: 151.16121, serviceValue: "415" }, // Wanda
  { lat: -34.04337, lng: 151.16121, serviceValue: "1135" }, // Wanda (Lifeguards)
  { lat: -34.54969, lng: 150.86865, serviceValue: "1157" }, // Warilla (Lifeguards)
  { lat: -34.54969, lng: 150.86865, serviceValue: "420" }, // Warilla Barrack Point
  { lat: -34.54651, lng: 150.87216, serviceValue: "1160" }, // Warilla North (Lifeguards)
  { lat: -34.55977, lng: 150.86903, serviceValue: "1509" }, // Warilla South (Lifeguards)
  { lat: -34.9339, lng: 150.77913, serviceValue: "766" }, // Warraine (Lifeguards)
  { lat: -33.6924, lng: 151.30884, serviceValue: "416" }, // Warriewood
  { lat: -33.6924, lng: 151.30884, serviceValue: "759" }, // Warriewood Beach (Lifeguards)
  { lat: -28.63687, lng: 153.63339, serviceValue: "705" }, // Wategos (Lifeguards)
  { lat: -34.13753, lng: 151.1181, serviceValue: "1170" }, // Wattamolla Beach (Lifeguards)
  { lat: -31.58934, lng: 152.83891, serviceValue: "418" }, // Wauchope Bonny Hills
  { lat: -34.74282, lng: 150.83212, serviceValue: "1167" }, // Werri (Lifeguards)
  { lat: 0, lng: 0, serviceValue: "1535" }, // Westpac Helicopter Moruya - Lifesaver 23
  { lat: 0, lng: 0, serviceValue: "1233" }, // Westpac Helicopter Sydney - Lifesaver 21
  { lat: -33.61145, lng: 151.33055, serviceValue: "429" }, // Whale Beach
  { lat: -33.61145, lng: 151.33055, serviceValue: "753" }, // Whale Beach (Lifeguards)
  { lat: -34.53828, lng: 150.87266, serviceValue: "433" }, // Windang
  { lat: -34.53828, lng: 150.87266, serviceValue: "1153" }, // Windang (Lifeguards)
  { lat: -34.42318, lng: 150.90595, serviceValue: "426" }, // Wollongong City
  { lat: -34.42318, lng: 150.90595, serviceValue: "1154" }, // Wollongong City Beach (Lifeguards)
  { lat: -30.10913, lng: 153.20191, serviceValue: "1081" }, // Woolgoolga (Lifeguards)
  { lat: -30.10913, lng: 153.20191, serviceValue: "427" }, // Woolgoolga SLSC
  { lat: -29.8867, lng: 153.26668, serviceValue: "781" }, // Wooli Beach (Lifeguards)
  { lat: -34.34863, lng: 150.9202, serviceValue: "440" }, // Woonona
  { lat: -34.34863, lng: 150.9202, serviceValue: "1155" }, // Woonona (Lifeguards)
  { lat: -29.43544, lng: 153.36404, serviceValue: "448" }, // Yamba
  { lat: -29.43544, lng: 153.36404, serviceValue: "719" }, // Yamba (Lifeguards)
];

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // The code here will run when the Escape key is pressed
    // event.preventDefault(); // Prevent the default action of the Escape key if needed
    fillClosestLocation();
  }
});

function fillClosestLocation() {
  const userLat = parseFloat(document.getElementById("incidentLatitude").value);
  const userLng = parseFloat(
    document.getElementById("incidentLongitude").value
  );
  if (!isNaN(userLat) && !isNaN(userLng)) {
    const closestService = findClosestService(userLat, userLng);
    if (closestService) {
      document.getElementById("primary_service").value = closestService;
      // If there's a change event attached to the dropdown, you might need to trigger it manually
      const event = new Event("change");
      document.getElementById("primary_service").dispatchEvent(event);
    }
  } else {
    alert("Please enter valid latitude and longitude values.");
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
    return (x * Math.PI) / 180;
  }

  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
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
textareas.forEach((textarea) => {
  textarea.addEventListener("input", handleTextareaInput);
});

window.addEventListener("load", function () {
  // Check if the current page URL matches the specific pattern
  const currentPageUrl = window.location.href;
  if (currentPageUrl.includes("https://surfcom.sls.com.au/incidents/record/")) {
    // Find the target div to append the icon
    const targetLabel = Array.from(
      document.querySelectorAll(".col-12.col-md-6 .form-group > label")
    ).find((label) => label.textContent.trim() === "If 'Other', specify:");
    const targetDiv = targetLabel
      ? targetLabel.closest(".col-12.col-md-6")
      : null;

    if (targetDiv) {
      // Create and append the icon as a clickable image
      const swapButton = document.createElement("img");
      swapButton.src =
        "https://cdn-icons-png.flaticon.com/512/9126/9126056.png"; // Your icon URL
      swapButton.alt = "Swap Message Direction";
      swapButton.style.cursor = "pointer";
      swapButton.style.height = "32px"; // Adjust size as needed
      swapButton.style.width = "32px";
      swapButton.style.marginTop = "5px";
      swapButton.style.marginBottom = "15px";
      swapButton.style.marginLeft = "10px";

      // Add the click event listener to the button
      swapButton.addEventListener("click", function () {
        // Get both dropdowns
        const msgFrom = document.getElementById("msg_from");
        const msgTo = document.getElementById("msg_to");
        // Store the current values
        const currentFromValue = msgFrom.value;
        const currentToValue = msgTo.value;

        // Swap values for dropdowns
        msgFrom.value = currentToValue;
        msgTo.value = currentFromValue;

        // If "Other" is selected, swap the 'Other' input fields values
        if (currentFromValue === "Other" || currentToValue === "Other") {
          const fromOther = document.getElementById("from_other");
          const toOther = document.getElementById("to_other");
          const currentFromOtherValue = fromOther.value;
          const currentToOtherValue = toOther.value;

          fromOther.value = currentToOtherValue;
          toOther.value = currentFromOtherValue;

          // Remove 'disabled' attribute if necessary or set it based on the swapped values
          fromOther.disabled = currentToValue !== "Other";
          toOther.disabled = currentFromValue !== "Other";
        }

        // If needed, trigger any onchange handlers explicitly
        msgFrom.dispatchEvent(new Event("change", { bubbles: true }));
        msgTo.dispatchEvent(new Event("change", { bubbles: true }));
      });

      // Append the icon to the target div
      targetDiv.appendChild(swapButton);
    } else {
      console.log("Failed to find the target div");
    }
  }
});

window.addEventListener("load", initializeButtonAddition);
document.addEventListener("click", initializeButtonAddition); // Triggers on page clicks as well.

function initializeButtonAddition() {
  console.log("Initialization triggered.");

  const currentPageUrl = window.location.href;
  console.log("Current page URL:", currentPageUrl);

  if (
    currentPageUrl.includes("https://surfcom.sls.com.au/incidents/view") ||
    currentPageUrl.includes(
      "https://surfcom.sls.com.au/incidents/search/submit"
    )
  ) {
    console.log("Correct page detected for script execution.");

    const table = document.getElementById("incidentSummaryTable");
    if (table) {
      console.log("Found the incidentSummaryTable.");

      const rows = table.querySelectorAll("tbody tr");
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "CLOSED") {
          console.log(`Row ${index + 1}: Status is 'CLOSED'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Reopen' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector("a.btn-dark")) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell =
                  incidentCell.querySelector("a.btn");
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(
                    `Row ${
                      index + 1
                    }: Creating new button for incidentId: ${incidentId}`
                  );

                  const newButton = document.createElement("a");
                  newButton.className = "btn btn-dark btn-block btn-xs"; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  newButton.style.width = "auto";
                  // newButton.style.verticalAlign = 'bottom';
                  newButton.style.marginTop = "0px";
                  newButton.style.boxSizing = "border-box";
                  newButton.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></svg> <span>Reopen</span>';

                  // Add click event listener for the confirmation dialog
                  newButton.addEventListener("click", function (e) {
                    e.preventDefault(); // Prevent the default action
                    const confirmReopen = confirm(
                      `Are you sure you want to reopen ${incidentId}?`
                    );
                    if (confirmReopen) {
                      // User confirmed, navigate to the reopen URL
                      window.location.href = `https://surfcom.sls.com.au/incidents/reopen/${incidentId}`;
                    }
                  });

                  actionsCell.appendChild(newButton);
                  console.log(
                    `Row ${
                      index + 1
                    }: New 'Reopen' button added with confirmation dialog.`
                  );
                } else {
                  console.log(
                    `Row ${index + 1}: No button found in "Incident #" cell.`
                  );
                }
              }
            } else {
              console.log(
                `Row ${index + 1}: 'Reopen' button already exists, skipping.`
              );
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.log("Incident table not found.");
    }
  } else {
    console.log("Script is not on the correct page for execution.");
  }
}

window.addEventListener("load", initializeButtonAddition22);
document.addEventListener("click", initializeButtonAddition22); // Triggers on page clicks as well.

function initializeButtonAddition22() {
  console.log("Initialization triggered.");

  const currentPageUrl = window.location.href;
  console.log("Current page URL:", currentPageUrl);

  if (
    currentPageUrl.includes("https://surfcom.sls.com.au/incidents/view") ||
    currentPageUrl.includes(
      "https://surfcom.sls.com.au/incidents/search/submit"
    )
  ) {
    console.log("Correct page detected for script execution.");

    const table = document.getElementById("incidentSummaryTable");
    if (table) {
      console.log("Found the incidentSummaryTable.");

      const rows = table.querySelectorAll("tbody tr");
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "CLOSED") {
          console.log(`Row ${index + 1}: Status is 'CLOSED'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Download PDF' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector("a.btn-outline-danger")) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell =
                  incidentCell.querySelector("a.btn");
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(
                    `Row ${
                      index + 1
                    }: Creating new button for incidentId: ${incidentId}`
                  );

                  const newButton = document.createElement("a");
                  newButton.className = "btn btn-outline-danger"; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  newButton.style.width = "auto";
                  newButton.style.marginTop = "0px";
                  newButton.style.boxSizing = "border-box";
                  newButton.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/></svg> <span>PDF</span>';
                  newButton.href = `https://surfcom.sls.com.au/incidents/export-pdf/${incidentId}`; // Link to download PDF
                  newButton.target = "_blank"; // Open in a new tab

                  actionsCell.appendChild(newButton);
                  console.log(
                    `Row ${index + 1}: New 'Download PDF' button added.`
                  );
                } else {
                  console.log(
                    `Row ${index + 1}: No button found in "Incident #" cell.`
                  );
                }
              }
            } else {
              console.log(
                `Row ${
                  index + 1
                }: 'Download PDF' button already exists, skipping.`
              );
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.log("Incident table not found.");
    }
  } else {
    console.log("Script is not on the correct page for execution.");
  }
}

window.addEventListener("load", initializeButtonAddition12);
document.addEventListener("click", initializeButtonAddition12); // Triggers on page clicks as well.

function initializeButtonAddition12() {
  console.log("Initialization triggered.");

  const currentPageUrl = window.location.href;
  console.log("Current page URL:", currentPageUrl);

  if (
    currentPageUrl.includes("https://surfcom.sls.com.au/incidents/view") ||
    currentPageUrl.includes(
      "https://surfcom.sls.com.au/incidents/search/submit"
    )
  ) {
    console.log("Correct page detected for script execution.");

    const table = document.getElementById("incidentSummaryTable");
    if (table) {
      console.log("Found the incidentSummaryTable.");

      const rows = table.querySelectorAll("tbody tr");
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "CLOSED") {
          console.log(`Row ${index + 1}: Status is 'CLOSED'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Download CSV' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector("a.btn-outline-success")) {
              // Changed class to btn-outline-success for green outline
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell =
                  incidentCell.querySelector("a.btn");
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(
                    `Row ${
                      index + 1
                    }: Creating new button for incidentId: ${incidentId}`
                  );

                  const newButton = document.createElement("a");
                  newButton.className = "btn btn-outline-success"; // Changed to btn-outline-success for green outline
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  newButton.style.width = "auto";
                  newButton.style.marginTop = "0px";
                  newButton.style.boxSizing = "border-box";
                  newButton.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-csv" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.517 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879z"/></svg> <span>CSV</span>';
                  newButton.href = `https://surfcom.sls.com.au/incidents/xls/${incidentId}`; // Changed to a hypothetical CSV download link
                  newButton.target = "_blank"; // Open in a new tab
                  actionsCell.appendChild(newButton);
                  console.log(
                    `Row ${index + 1}: New 'Download CSV' button added.`
                  );
                } else {
                  console.log(
                    `Row ${index + 1}: No button found in "Incident #" cell.`
                  );
                }
              }
            } else {
              console.log(
                `Row ${
                  index + 1
                }: 'Download CSV' button already exists, skipping.`
              );
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.log("Incident table not found.");
    }
  } else {
    console.log("Script is not on the correct page for execution.");
  }
}

window.addEventListener("load", initializeButtonAddition3);
document.addEventListener("click", initializeButtonAddition3); // Triggers on page clicks as well.

function initializeButtonAddition3() {
  console.log("Initialization2 triggered.");

  const currentPageUrl = window.location.href;
  console.log("Current page URL:", currentPageUrl);

  if (
    currentPageUrl.includes("https://surfcom.sls.com.au/incidents/view") ||
    currentPageUrl.includes(
      "https://surfcom.sls.com.au/incidents/search/submit"
    )
  ) {
    console.log("Correct page detected for script execution.");

    const table = document.getElementById("incidentSummaryTable");
    if (table) {
      console.log("Found the incidentSummaryTable.");

      const rows = table.querySelectorAll("tbody tr");
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "Open") {
          console.log(`Row ${index + 1}: Status is 'Open'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Reopen' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector("a.btn-danger")) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell =
                  incidentCell.querySelector("a.btn");
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(
                    `Row ${
                      index + 1
                    }: Creating new button for incidentId: ${incidentId}`
                  );

                  const newButton = document.createElement("a");
                  newButton.className = "btn btn-danger btn-block btn-xs"; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  newButton.style.marginRight = "2px";
                  // newButton.style.verticalAlign = 'bottom';
                  newButton.style.marginTop = "0px";
                  newButton.style.width = "auto";
                  newButton.style.boxSizing = "border-box";
                  newButton.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/> <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z"/></svg> <span>Record</span>';

                  // Add click event listener for the confirmation dialog
                  newButton.addEventListener("click", function (e) {
                    e.preventDefault(); // Prevent the default action
                    // User confirmed, navigate to the reopen URL
                    window.location.href = `https://surfcom.sls.com.au/incidents/record/${incidentId}`;
                  });

                  actionsCell.appendChild(newButton);
                  console.log(
                    `Row ${
                      index + 1
                    }: New 'Reopen' button added with confirmation dialog.`
                  );
                } else {
                  console.log(
                    `Row ${index + 1}: No button found in "Incident #" cell.`
                  );
                }
              }
            } else {
              console.log(
                `Row ${index + 1}: 'Reopen' button already exists, skipping.`
              );
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.log("Incident table not found.");
    }
  } else {
    console.log("Script is not on the correct page for execution.");
  }
}

window.addEventListener("load", initializeButtonAddition2);
document.addEventListener("click", initializeButtonAddition2); // Triggers on page clicks as well.

function initializeButtonAddition2() {
  console.log("Initialization2 triggered.");

  const currentPageUrl = window.location.href;
  console.log("Current page URL:", currentPageUrl);

  if (
    currentPageUrl.includes("https://surfcom.sls.com.au/incidents/view") ||
    currentPageUrl.includes(
      "https://surfcom.sls.com.au/incidents/search/submit"
    )
  ) {
    console.log("Correct page detected for script execution.");

    const table = document.getElementById("incidentSummaryTable");
    if (table) {
      console.log("Found the incidentSummaryTable.");

      const rows = table.querySelectorAll("tbody tr");
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell && statusCell.textContent.trim() === "Open") {
          console.log(`Row ${index + 1}: Status is 'Open'.`);

          const actionsCell = row.cells[row.cells.length - 1]; // The last cell is the "Actions" cell

          if (actionsCell) {
            // Check if a 'Reopen' button already exists in this row to prevent duplicates.
            if (!actionsCell.querySelector("a.btn-warning")) {
              const incidentCell = row.cells[0]; // The first cell is the "Incident #" cell
              if (incidentCell) {
                const buttonInIncidentCell =
                  incidentCell.querySelector("a.btn");
                if (buttonInIncidentCell) {
                  const incidentId = buttonInIncidentCell.textContent.trim();
                  console.log(
                    `Row ${
                      index + 1
                    }: Creating new button for incidentId: ${incidentId}`
                  );

                  const newButton = document.createElement("a");
                  newButton.className = "btn btn-warning btn-block btn-xs"; // Apply success button class
                  newButton.style.display = "inline-block";
                  newButton.style.padding = "4px 5px";
                  // newButton.style.verticalAlign = 'bottom';
                  newButton.style.marginRight = "2px";
                  newButton.style.marginTop = "0px";
                  newButton.style.width = "auto";
                  newButton.style.boxSizing = "border-box";
                  newButton.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/> <span>Close</span>';

                  // Add click event listener for the confirmation dialog
                  newButton.addEventListener("click", function (e) {
                    e.preventDefault(); // Prevent the default action
                    // User confirmed, navigate to the reopen URL
                    window.location.href = `https://surfcom.sls.com.au/incidents/close/${incidentId}`;
                  });

                  actionsCell.appendChild(newButton);
                  console.log(
                    `Row ${
                      index + 1
                    }: New 'Reopen' button added with confirmation dialog.`
                  );
                } else {
                  console.log(
                    `Row ${index + 1}: No button found in "Incident #" cell.`
                  );
                }
              }
            } else {
              console.log(
                `Row ${index + 1}: 'Reopen' button already exists, skipping.`
              );
            }
          } else {
            console.log(`Row ${index + 1}: Could not find necessary cells.`);
          }
        } else {
          console.log(`Row ${index + 1}: Status is not 'CLOSED', skipping.`);
        }
      });
    } else {
      console.log("Incident table not found.");
    }
  } else {
    console.log("Script is not on the correct page for execution.");
  }
}

window.addEventListener("load", initializeStatusFormatting);
document.addEventListener("click", initializeStatusFormatting); // Triggers on page clicks as well.

function initializeStatusFormatting() {
  console.log("Initialization for status formatting triggered.");

  const currentPageUrl = window.location.href;
  console.log("Current page URL:", currentPageUrl);

  if (
    currentPageUrl.includes("https://surfcom.sls.com.au/incidents/view") ||
    currentPageUrl.includes(
      "https://surfcom.sls.com.au/incidents/search/submit"
    )
  ) {
    console.log("Correct page detected for script execution.");

    const table = document.getElementById("incidentSummaryTable");
    if (table) {
      console.log("Found the incidentSummaryTable.");

      const rows = table.querySelectorAll("tbody tr");
      console.log(`Found ${rows.length} rows in the table.`);

      rows.forEach((row, index) => {
        const statusCell = row.cells[7]; // Assuming the "Status" column is the 8th column
        if (statusCell) {
          const statusText = statusCell.textContent.trim();
          if (statusText === "Open") {
            console.log(
              `Row ${
                index + 1
              }: Status is 'Open'. Formatting with pastel green.`
            );
            statusCell.innerHTML = `<span style="display: block; padding: 2px 5px; margin: 0; background-color: #b8d8b8; color: #3a5335; border-radius: 4px;">Open</span>`;
          } else if (statusText === "CLOSED") {
            console.log(
              `Row ${
                index + 1
              }: Status is 'CLOSED'. Formatting with pastel red.`
            );
            statusCell.innerHTML = `<span style="display: block; padding: 2px 5px; margin: 0; background-color: #f4bfbf; color: #7c2a2a; border-radius: 4px;">CLOSED</span>`;
          }
        } else {
          console.log(`Row ${index + 1}: Status cell not found.`);
        }
      });
    } else {
      console.log("Incident table not found.");
    }
  } else {
    console.log("Script is not on the correct page for execution.");
  }
}

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Enter was pressed and the event's target is the textarea
  if (event.ctrlKey && event.key === "Enter" && event.target.id === "message") {
    event.preventDefault(); // Prevent the default action (form submission or other)

    // Find the button by its id
    var button = document.getElementById("post_comment");

    // Trigger click event on the button
    button.click();
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Enter was pressed and the event target is the textarea with name 'message'
  if (
    event.ctrlKey &&
    event.key === "Enter" &&
    event.target.name === "message"
  ) {
    event.preventDefault(); // Prevent the default action (form submission or other)

    // Trigger the button click to save the form
    document.querySelector(".check-incident-status").click();
  }
});

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Enter was pressed and the event target is the textarea with name 'message'
  if (
    event.ctrlKey &&
    event.key === "Enter" &&
    event.target.name === "incident_further"
  ) {
    event.preventDefault(); // Prevent the default action (form submission or other)

    // Trigger the button click to save the form
    document.querySelector(".check-incident-status").click();
  }
});

if (window.location.href.startsWith("https://surfcom.sls.com.au/")) {
  // Function to modify text with dynamic version number
  function modifyText(version) {
    // Query all span elements with the specific class
    const elements = document.querySelectorAll(
      "span.brand-text.font-weight-light"
    );

    elements.forEach((element) => {
      // Check if the text is exactly 'Surfcom', to avoid multiple additions
      if (
        element.textContent.trim().includes("Surfcom") &&
        !element.innerHTML.includes("version-number")
      ) {
        // Set the title attribute for the tooltip on the element
        element.title =
          "SurfCom Management System with enhancements and extra features, Contact Riley Porteous for extra details!";
        // Add '+' and the version number with styling
        element.innerHTML = `Surfcom + <span class="version-number" style="color: lightgrey; font-size: smaller; font-style: italic;">v${version}</span>`;
      }
    });
  }

  // Use MutationObserver to handle dynamic content loading
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Call modifyText on each mutation observed
      chrome.runtime.sendMessage({ action: "getVersion" }, (response) => {
        modifyText(response.version);
      });
    });
  });

  // Observer Configuration: watch for childList changes, including within descendants
  const config = { childList: true, subtree: true };

  // Start observing the document body for mutations
  observer.observe(document.body, config);

  // Also call modifyText on initial load
  chrome.runtime.sendMessage({ action: "getVersion" }, (response) => {
    modifyText(response.version);
  });
}

function colorMessageLogs() {
  const cardTitles = document.querySelectorAll(
    ".card .card-header .card-title"
  );

  cardTitles.forEach((title) => {
    if (title.textContent.trim() === "Message Log") {
      const messageContainer = title
        .closest(".card")
        .querySelector(".direct-chat-messages");
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
  container.querySelectorAll(".direct-chat-text").forEach((log) => {
    const text = log.textContent.trim();
    // Override default blue background if present
    log.classList.remove("bg-primary");

    if (text.includes("{KEY}")) {
      log.style.backgroundColor = "MediumPurple";
      log.style.color = "white";
    } else if (text.includes("{STANDDOWN}")) {
      log.style.backgroundColor = "DarkBlue";
      log.style.color = "white";
    } else if (text.includes("{OPERATORCOMMENT}")) {
      log.style.backgroundColor = "Bisque";
      log.style.color = "white";
    } else if (text.includes("{SITREP}")) {
      log.style.backgroundColor = "plum";
      log.style.color = "white";
    } else if (text.includes("Status Change :: Unit=")) {
      log.style.backgroundColor = "SlateGrey";
      log.style.color = "white";
    } else if (text.includes("Attachment added to Incident ")) {
      log.style.backgroundColor = "PapayaWhip";
      log.style.color = "black";
    } else if (text.includes("Attachment deleted from Incident ")) {
      log.style.backgroundColor = "PapayaWhip";
      log.style.color = "black";
    } else if (text.includes(" has been added to Incident #")) {
      log.style.backgroundColor = "SlateGrey";
      log.style.color = "white";
    } else if (text.includes("Unit Clear :: Unit")) {
      log.style.backgroundColor = "SlateGrey";
      log.style.color = "white";
    } else if (text.includes("{INTERAGENCY}")) {
      log.style.backgroundColor = "LightSalmon";
      log.style.color = "white";
    } else if (
      text.includes("SMS: ") &&
      text.includes(" Serious Incident Notification SMS ")
    ) {
      log.style.backgroundColor = "MediumAquaMarine";
      log.style.color = "white";
    } else if (text.includes("Further Information Log")) {
      log.style.backgroundColor = "MediumSlateBlue";
      log.style.color = "white";
    } else if (
      text.includes("Incident #") &&
      text.includes(", Priority: ") &&
      text.includes(") closed on ")
    ) {
      log.style.backgroundColor = "black";
      log.style.color = "white";
    } else if (text.includes("Incident #") && text.includes(", Priority: ")) {
      log.style.backgroundColor = "black";
      log.style.color = "white";
    } else if (
      text.includes("Incident #") &&
      text.includes("ETA") &&
      text.includes("Confirmation via SMS")
    ) {
      log.style.backgroundColor = "PaleTurquoise";
      log.style.color = "black";
    } else if (
      text.includes("Incident #") &&
      text.includes("Unavailable on responding to incident") &&
      text.includes("Confirmation via SMS")
    ) {
      log.style.backgroundColor = "RosyBrown";
      log.style.color = "white";
    } else if (
      text.includes("SMS: ") &&
      text.includes(" Emergency Call Out Team ")
    ) {
      log.style.backgroundColor = "Salmon";
      log.style.color = "white";
    } else if (text.includes(" accessed this incident at ")) {
      log.style.backgroundColor = "black";
      log.style.color = "white";
    }
    // No need for a default action
  });
}

// Initial call to color the message logs and set up the observer
colorMessageLogs();

function colorTimelineMessages() {
  // Find all timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    const body = item.querySelector(".timeline-body");

    if (body) {
      const text = body.textContent.trim();
      // Determine the background color based on message content
      if (text.includes("{KEY}")) {
        item.style.backgroundColor = "MediumPurple";
        item.style.color = "white";
      } else if (text.includes("{STANDDOWN}")) {
        item.style.backgroundColor = "DarkBlue";
        item.style.color = "white";
      } else if (text.includes("{OPERATORCOMMENT}")) {
        item.style.backgroundColor = "Bisque";
        item.style.color = "white";
      } else if (text.includes("{SITREP}")) {
        item.style.backgroundColor = "plum";
        item.style.color = "white";
      } else if (text.includes("Status Change :: Unit=")) {
        item.style.backgroundColor = "SlateGrey";
        item.style.color = "white";
      } else if (text.includes("Attachment added to Incident ")) {
        item.style.backgroundColor = "PapayaWhip";
        item.style.color = "black";
      } else if (text.includes(" has been added to Incident #")) {
        item.style.backgroundColor = "SlateGrey";
        item.style.color = "white";
      } else if (text.includes("Unit Clear :: Unit")) {
        item.style.backgroundColor = "SlateGrey";
        item.style.color = "white";
      } else if (text.includes("{INTERAGENCY}")) {
        item.style.backgroundColor = "LightSalmon";
        item.style.color = "white";
      } else if (
        text.includes("SMS: ") &&
        text.includes("Serious Incident Notification SMS ")
      ) {
        item.style.backgroundColor = "MediumAquaMarine";
        item.style.color = "white";
      } else if (text.includes("Further Information Log")) {
        item.style.backgroundColor = "MediumSlateBlue";
        item.style.color = "white";
      } else if (
        text.includes("Incident #") &&
        text.includes("closed. Outcome: ")
      ) {
        item.style.backgroundColor = "black";
        item.style.color = "white";
      } else if (text.includes("Incident #") && text.includes(" created on ")) {
        item.style.backgroundColor = "black";
        item.style.color = "white";
      } else if (
        text.includes(
          "Unavailable on responding to incident. Confirmation via SMS"
        )
      ) {
        item.style.backgroundColor = "RosyBrown";
        item.style.color = "white";
      } else if (
        text.includes(" ETA ") &&
        text.includes("Confirmation via SMS") &&
        text.includes("is responding to incident")
      ) {
        item.style.backgroundColor = "PaleTurquoise";
        item.style.color = "black";
      } else if (
        text.includes("SMS: ") &&
        text.includes("Emergency Call Out Team")
      ) {
        item.style.backgroundColor = "Salmon";
        item.style.color = "white";
      }
    }
  });
}

// Call the function to apply color coding
colorTimelineMessages();

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired. Running the script.");

  const changeColors = () => {
    // Select all table rows in the document
    const rows = document.querySelectorAll("table tbody tr");
    console.log(`Found ${rows.length} rows in the document.`);

    // Loop through each row to check its content
    rows.forEach((row, index) => {
      const message = row.innerText;
      console.log(`Row ${index}: "${message}"`);

      // Define your conditions and the corresponding style changes
      if (message.includes("{KEY}")) {
        row.style.backgroundColor = "MediumPurple";
        row.style.color = "white";
        console.log(
          `Applied MediumPurple background to row ${index} due to {KEY}.`
        );
      } else if (message.includes("{STANDDOWN}")) {
        row.style.backgroundColor = "DarkBlue";
        row.style.color = "white";
        console.log(
          `Applied DarkBlue background to row ${index} due to {STANDDOWN}.`
        );
      } else if (message.includes("{OPERATORCOMMENT}")) {
        row.style.backgroundColor = "Bisque";
        row.style.color = "white";
        console.log(
          `Applied Bisque background to row ${index} due to {OPERATORCOMMENT}.`
        );
      }

      // Additional conditions
      if (message.includes("Status Change :: Unit=")) {
        row.style.backgroundColor = "SlateGrey";
        row.style.color = "white";
        console.log(
          `Applied SlateGrey background to row ${index} due to status change.`
        );
      }
      if (message.includes("Attachment added to Incident ")) {
        row.style.backgroundColor = "PapayaWhip";
        row.style.color = "black";
        console.log(
          `Applied PapayaWhip background to row ${index} due to attachment addition.`
        );
      }
      // You can add more conditions here following the same structure
    });
  };

  // Call the function to apply the styles based on conditions
  changeColors();
});

document.addEventListener("DOMContentLoaded", function () {
  // Corrected regex pattern to match any characters between log_id= and &bulkSupportOpsSignOff
  const regexPattern =
    /^https:\/\/surfcom\.sls\.com\.au\/log-service-off\?log_id=.*&bulkSupportOpsSignOff$/;
  if (regexPattern.test(window.location.href)) {
    // Find the button by its class name
    const button = document.querySelector(
      'button.btn.btn-warning[style="margin-left: 4px;"]'
    );

    // Check if the button exists and click it
    if (button) {
      button.click();
      console.log("Yey");
    } else {
      console.log("Button not found!");
    }
  }
});

window.addEventListener("load", function () {
  const currentPageUrl = window.location.href;

  // Use console logging to confirm the script is running
  console.log("Page fully loaded", currentPageUrl);

  // Check if the URL matches the desired pattern for automatic trigger
  if (/&bulkSupportOpsSignOff$/.test(currentPageUrl)) {
    // Prefill the current location input
    const currentLocationInput = document.querySelector(
      'input[type="text"].form-control[name="current_location"]'
    );
    if (currentLocationInput) {
      currentLocationInput.value = "BASE";
      console.log('Location prefilled with "BASE".');
    } else {
      console.log("Failed to find the current location input.");
    }

    // Simulate the submit button click
    const submitButton = document.querySelector(
      'input[type="submit"].btn.btn-primary.mr-1'
    );
    if (submitButton) {
      submitButton.click();
      console.log("Submit button clicked.");

      // Optionally, close the window after a delay if that's still desired
      setTimeout(() => window.close(), 1000);
    } else {
      console.log("Failed to find the submit button.");
    }
  }
});

function updateButtonStyles() {
  // Select all rows in the table
  const rows = document.querySelectorAll("#supportServicesTable tbody tr");

  // Iterate through each row
  rows.forEach((row) => {
    // Get the text content of the row
    const rowText = row.textContent;

    // Check if the row contains the specific keywords
    if (
      rowText.includes("(Reason):") &&
      rowText.includes("(Duration):") &&
      rowText.includes("(From):")
    ) {
      // Find the button within this row and change its class
      const button = row.querySelector("button.btn-warning");
      if (button) {
        button.classList.remove("btn-warning");
        button.classList.add("btn-secondary");
      }
    }
  });
}

window.addEventListener("load", updateButtonStyles);
document.addEventListener("click", updateButtonStyles);

function addRadioButtonsAboveTextarea() {
  // Target the row above which the radio buttons should be added
  const targetRow = document.querySelector(
    '.row > .col-12 > .form-group > textarea[name="message"]'
  ).parentNode.parentNode;

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
        <input type="radio" name="options" id="option5"> SMS
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option6"> ICEMS
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option7"> OTHER
      </label>
    </div>
  </div>
</div>
`;

  // Insert the radio buttons group above the target row
  targetRow.insertAdjacentHTML("beforebegin", radioButtonsHtml);

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
  document
    .querySelectorAll('.btn-group-toggle input[type="radio"]')
    .forEach((radio) => {
      radio.addEventListener("click", handleRadioButtonClick);
    });
}

// Call the function to add radio buttons and setup their functionality
addRadioButtonsAboveTextarea();

// // Function to attempt setting the dropdown value
// function setDropdownValue() {
//   var statusDropdown = document.getElementById("select-status");
//   if (statusDropdown) {
//     statusDropdown.value = "Online";
//     console.log("Dropdown value set to Online");
//     // Optional: submit the form
//     document.status_form.submit();
//   } else {
//     console.log("Dropdown not found.");
//   }
// }

// // Create an observer instance linked to a callback function
// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (!mutation.addedNodes) return;
//     for (var i = 0; i < mutation.addedNodes.length; i++) {
//       // Check if the added node is our target dropdown or contains it
//       var node = mutation.addedNodes[i];
//       if (node.id === "select-status" || node.querySelector("#select-status")) {
//         setDropdownValue();
//         // Optional: Disconnect observer if no longer needed
//         // observer.disconnect();
//         break;
//       }
//     }
//   });
// });

// // Start observing the document body for DOM changes
// observer.observe(document.body, {
//   childList: true,
//   subtree: true,
// });

// // Fallback to ensure the dropdown is set upon initial load if it exists
// window.addEventListener("load", setDropdownValue);

// Function to handle the right-click event on the button
function handleRightClick(event) {
  event.preventDefault(); // Prevent the default context menu

  const form = this.closest("form"); // Find the closest form to the button

  if (form) {
    // Modify the form's action URL to include '&BulkSignOn'
    let action = form.getAttribute("action");
    if (action.includes("?")) {
      action += "&BulkSignOnforSupportOps2";
    } else {
      action += "?BulkSignOnforSupportOps2";
    }
    form.setAttribute("action", action);

    // Open the form submission in a new tab
    form.target = "_blank";

    // Submit the form
    form.submit();
  }
}

// Function to update button styles by attaching event listeners
function updateButtonStyles() {
  const submitButtons = document.querySelectorAll(".btn.btn-info"); // Select all submit buttons

  submitButtons.forEach((submitButton) => {
    submitButton.removeEventListener("contextmenu", handleRightClick); // Remove existing event listener to avoid duplicates
    submitButton.addEventListener("contextmenu", handleRightClick, true); // Add the right-click event listener
  });
}

// Main function to run the modifications
function runModifications() {
  // convertDropdownToMultiple();
  updateButtonStyles();
}

// Attach the 'runModifications' function to the window's 'load' event
window.addEventListener("load", runModifications);

// Attach the 'runModifications' function to document's 'click' event to catch dynamically added content
document.addEventListener("click", runModifications);

window.addEventListener("load", function () {
  // Assuming your submit button has an id of 'submit-button'
  const submitButton = document.getElementById("submit-button");
  const selectElement = document.getElementById("unit_id");

  submitButton.addEventListener("click", function () {
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

// Function to calculate the time difference and format it as HH:MM:SS
function calculateTimeDifference(dateOpen, timeOpen, dateClosed, timeClosed) {
  const startDateTime = new Date(`${formatDate(dateOpen)}T${timeOpen}`);

  let endDateTime;
  if (dateClosed && timeClosed) {
    endDateTime = new Date(`${formatDate(dateClosed)}T${timeClosed}`);
  } else {
    endDateTime = new Date(); // Use current system date and time
  }

  const timeDiff = Math.abs(endDateTime - startDateTime);

  const hours = Math.floor(timeDiff / 3600000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeDiff % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeDiff % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

// Function to format the date string to YYYY-MM-DD format
function formatDate(dateString) {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month}-${day}`;
}

// Function to insert or update the time open counter
function insertOrUpdateTimeOpenCounter() {
  const dateOpenInput = document.getElementById("date_open");
  const timeOpenInput = document.getElementById("time_open");
  const dateClosedInput = document.getElementById("date_closed");
  const timeClosedInput = document.getElementById("time_closed");

  if (dateOpenInput && timeOpenInput) {
    const dateOpen = dateOpenInput.value;
    const timeOpen = timeOpenInput.value;
    let dateClosed = "";
    let timeClosed = "";
    if (dateClosedInput && timeClosedInput) {
      dateClosed = dateClosedInput.value;
      timeClosed = timeClosedInput.value;
    }
    const timeDifference = calculateTimeDifference(
      dateOpen,
      timeOpen,
      dateClosed,
      timeClosed
    );

    // Attempt to find an existing "Duration Open" container
    let durationOpenContainer = document.getElementById("durationOpen");

    if (!durationOpenContainer) {
      // If it doesn't exist, create it
      const timeOpenCounterContainer = document.createElement("div");
      timeOpenCounterContainer.className = "form-group";
      timeOpenCounterContainer.innerHTML = `<input class="form-control" type="text" name="durationOpen" id="durationOpen" value="${timeDifference}" readonly="">`;

      const ambulanceTimeContainer =
        document.querySelector(".input-group.mb-3");
      if (ambulanceTimeContainer) {
        const parentRow = ambulanceTimeContainer.closest(".row");
        const leftCell = parentRow.querySelector(
          ".col-12.col-md-6:first-child"
        );

        // Remove any existing content in the left cell
        while (leftCell.firstChild) {
          leftCell.removeChild(leftCell.firstChild);
        }

        if (leftCell) {
          leftCell.appendChild(timeOpenCounterContainer);
          durationOpenContainer = document.getElementById("durationOpen");
        }
      }
    } else {
      // If it does exist, simply update its value
      durationOpenContainer.value = timeDifference;
    }

    // Check if the duration is 01:00:00 or more
    if (timeDifference >= "01:00:00") {
      // Toggle the background color every other second
      if (durationOpenContainer.style.backgroundColor === "lightgray") {
        durationOpenContainer.style.backgroundColor = "";
      } else {
        durationOpenContainer.style.backgroundColor = "lightgray";
      }
    } else {
      durationOpenContainer.style.backgroundColor = "";
    }

    // If the closed date and time are blank, rerun the function every second
    if (!dateClosed || !timeClosed) {
      setTimeout(insertOrUpdateTimeOpenCounter, 1000);
    }
  }
}

// Call the function to insert or update the time open counter
insertOrUpdateTimeOpenCounter();

// content.js
window.addEventListener("load", function () {
  const resultContainerId = "weatherapi-results";
  if (document.getElementById(resultContainerId)) {
    return;
  }

  const latitudeInput = document.querySelector("input#incidentLatitude");
  const longitudeInput = document.querySelector("input#incidentLongitude");

  if (latitudeInput && longitudeInput) {
    const lat = latitudeInput.value;
    const lon = longitudeInput.value;

    if (lat && lon) {
      chrome.runtime.sendMessage(
        { action: "fetchWeatherData", lat, lon },
        (response) => {
          if (response.data) {
            displayWeatherAndMarineData(
              response.data.weatherData,
              response.data.marineData,
              response.data.forecastData
            );
          } else if (response.error) {
            console.log("Error fetching weather data:", response.error);
          }
        }
      );
    }
  }
});

function convertCompassPoint(abbreviatedDirection) {
  const compassPoints = {
    N: "North",
    NE: "North-East",
    E: "East",
    SE: "South-East",
    S: "South",
    SW: "South-West",
    W: "West",
    NW: "North-West",
    NNE: "North-North-East",
    ENE: "East-North-East",
    ESE: "East-South-East",
    SSE: "South-South-East",
    SSW: "South-South-West",
    WSW: "West-South-West",
    WNW: "West-North-West",
    NNW: "North-North-West",
  };

  return compassPoints[abbreviatedDirection] || abbreviatedDirection;
}

function adjustToUTC10(date) {
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const utc10Time = new Date(utcTime + 3600000 * 10);
  return utc10Time;
}

function findNextTide(tides, currentTime) {
  let nextTide = null;
  tides.forEach((tide) => {
    const tideTime = adjustToUTC10(new Date(tide.tide_time.replace(" ", "T")));
    if (
      tideTime > currentTime &&
      (!nextTide || tideTime < new Date(nextTide.tide_time.replace(" ", "T")))
    ) {
      nextTide = tide;
    }
  });
  return nextTide;
}

function displayWeatherAndMarineData(weatherData, marineData, forecastData) {
  const container = document.querySelector(".container-fluid");
  if (container) {
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "weatherapi-results";
    resultsDiv.className = "weather-details";
    resultsDiv.style.display = "flex";
    resultsDiv.style.flexWrap = "wrap";
    resultsDiv.style.justifyContent = "space-between";
    resultsDiv.style.gap = "15px";

    const currentTime = adjustToUTC10(
      new Date(marineData.location.localtime.replace(" ", "T"))
    );
    let currentTide = null;
    let nextTide = null;
    let forecastDays = marineData.forecast.forecastday;

    forecastDays.some((forecastDay) => {
      const tides = forecastDay.day.tides[0].tide;
      nextTide = findNextTide(tides, currentTime);
      return !!nextTide;
    });

    const tidesToday = forecastDays[0].day.tides[0].tide;
    tidesToday.forEach((tide) => {
      const tideTime = adjustToUTC10(
        new Date(tide.tide_time.replace(" ", "T"))
      );
      if (
        tideTime < currentTime &&
        (!currentTide ||
          tideTime > new Date(currentTide.tide_time.replace(" ", "T")))
      ) {
        currentTide = tide;
      }
    });

    const currentTideInfo = currentTide
      ? `<span title='Date: ${currentTide.tide_time.split(" ")[0]}'>${
          currentTide.tide_type
        } at ${currentTide.tide_time.split(" ")[1]} (${
          currentTide.tide_height_mt
        }m)</span>`
      : "Not available";
    const nextTideInfo = nextTide
      ? `<span title='Date: ${nextTide.tide_time.split(" ")[0]}'>${
          nextTide.tide_type
        } at ${nextTide.tide_time.split(" ")[1]} (${
          nextTide.tide_height_mt
        }m)</span>`
      : "Not available";

    const swellDirection = forecastDays[0].hour[0].swell_dir_16_point;
    const swellDirectionFull = convertCompassPoint(swellDirection);

    const sunriseTime = forecastData.forecast.forecastday[0].astro.sunrise;
    const sunsetTime = forecastData.forecast.forecastday[0].astro.sunset;

    resultsDiv.innerHTML = `
          <div class="weather-detail"><strong>Current Temperature:</strong> <a href="#" style="color: blue;">${weatherData.current.temp_c}°C</a></div>
          <div class="weather-detail"><strong>Current Wind:</strong> <a href="#" style="color: blue;">${weatherData.current.wind_kph} kph</a></div>
          <div class="weather-detail"><strong>Swell Direction:</strong> <a href="#" style="color: blue;">${swellDirectionFull}</a></div>
          <div class="weather-detail"><strong>Current Tide:</strong> <a href="#" style="color: blue;">${currentTideInfo}</a></div>
          <div class="weather-detail"><strong>Next Tide:</strong> <a href="#" style="color: blue;">${nextTideInfo}</a></div>
          <div class="weather-detail"><strong>Sunrise:</strong> <a href="#" style="color: blue;">${sunriseTime}</a></div>
          <div class="weather-detail"><strong>Sunset:</strong> <a href="#" style="color: blue;">${sunsetTime}</a></div>
      `;

    container.insertBefore(resultsDiv, container.firstChild);
  }
}

// Add event listener to the document for a click event
document.addEventListener(
  "click",
  function (event) {
    let targetElement = event.target;
    while (targetElement != null) {
      if (
        targetElement.matches(".weather-details") ||
        targetElement.matches(".weather-detail")
      ) {
        const latitude = document.querySelector("#incidentLatitude").value;
        const longitude = document.querySelector("#incidentLongitude").value;

        const messageTextArea = document.querySelector("textarea#message");
        if (messageTextArea) {
          let weatherDetailsText = `Current Weather at ${latitude}, ${longitude} - `;
          const details = Array.from(
            document.querySelectorAll(".weather-detail")
          ).map((detail) => detail.innerText);
          weatherDetailsText += details.join(", ");
          messageTextArea.value = weatherDetailsText;

          ["msg_to", "msg_from"].forEach((selectId) => {
            const selectElement = document.querySelector(`select#${selectId}`);
            if (selectElement) {
              selectElement.value = "Surfcom";
              selectElement.dispatchEvent(
                new Event("change", { bubbles: true })
              );
            }
          });

          // const recordButtonById = document.getElementById("post_comment");
          // if (recordButtonById) {
          //   recordButtonById.click();
          // }
        }
        break;
      }
      targetElement = targetElement.parentElement;
    }
  },
  false
);

// Add event listener to the document for a click event
document.addEventListener(
  "click",
  function (event) {
    // Check if the clicked element or its parent has the class 'weather-details'
    let targetElement = event.target;
    while (targetElement != null) {
      if (
        targetElement.matches(".weather-details") ||
        targetElement.matches(".weather-detail")
      ) {
        // Fetch latitude and longitude values
        const latitude = document.querySelector("#incidentLatitude").value;
        const longitude = document.querySelector("#incidentLongitude").value;

        // Find the textarea to insert the weather data into
        const messageTextArea = document.querySelector("textarea#message");
        if (messageTextArea) {
          // Format the introduction text with the fetched latitude and longitude
          let weatherDetailsText = `Current Weather at ${latitude}, ${longitude} - `;

          // Collect each weather detail and join them with a comma and a space
          const details = Array.from(
            document.querySelectorAll(".weather-detail")
          ).map((detail) => detail.innerText);
          weatherDetailsText += details.join(", ");

          // Insert the formatted weather data into the textarea
          messageTextArea.value = weatherDetailsText;

          // Set 'Surfcom' as the value for both 'To' and 'From' select fields and dispatch change events
          ["msg_to", "msg_from"].forEach((selectId) => {
            const selectElement = document.querySelector(`select#${selectId}`);
            if (selectElement) {
              selectElement.value = "Surfcom";
              selectElement.dispatchEvent(
                new Event("change", { bubbles: true })
              );
            }
          });

          // Use the ID or name of the button to correctly identify the 'Record' button and click it
          // Assuming the button has a unique ID "post_comment"
          const recordButtonById = document.getElementById("post_comment");
          if (recordButtonById) {
            recordButtonById.click();
          }
          // If you prefer to use the name attribute, uncomment and use the following:
          // const recordButtonByName = document.querySelector("input[name='post_comment']");
          // if (recordButtonByName) {
          //     recordButtonByName.click();
          // }
        }
        break; // Stop the loop once the relevant action is performed
      }
      targetElement = targetElement.parentElement; // Move up to the parent element
    }
  },
  false
);

window.addEventListener("load", function () {
  const helicopterNames = [
    "Lifesaver 21",
    "Lifesaver 22",
    "Lifesaver 23",
    "Lifesaver 36",
    "Lifesaver 45",
    "Lifesaver 46",
  ]; // List of possible helicopter names
  const externalControlName = "Aeromedical Control";
  const buttonParentDiv =
    document.getElementById("post_comment").parentNode.parentNode;

  const helicopterExists = Array.from(
    document.querySelectorAll("#servicesTable tbody tr td:nth-child(2)")
  ).some((td) =>
    helicopterNames.some((helicopterName) =>
      td.textContent.includes(helicopterName)
    )
  );

  const externalControlExists = Array.from(
    document.querySelectorAll(".row .direct-chat-name")
  ).some((name) => name.textContent.includes(externalControlName));

  if (helicopterExists && !externalControlExists && buttonParentDiv) {
    const alertDiv = document.createElement("div");
    alertDiv.style.position = "relative";
    alertDiv.style.width = "100%";
    alertDiv.style.textAlign = "center";
    alertDiv.style.padding = "10px 0";
    alertDiv.style.background = "red";
    alertDiv.style.color = "white";
    alertDiv.style.fontSize = "16px";
    alertDiv.textContent =
      "Notify RLTC / NSWA Aeromedical Control on 1800 932 055 (and radio log)";
    alertDiv.className = "pulsate";

    buttonParentDiv.parentNode.insertBefore(alertDiv, buttonParentDiv);

    if (!document.getElementById("pulsateStyle")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "pulsateStyle";
      styleSheet.type = "text/css";
      styleSheet.innerText = `
          @keyframes pulsate {
              0% { background-color: red; }
              50% { background-color: darkred; }
              100% { background-color: red; }
          }
          .pulsate {
              animation: pulsate 2s ease-in-out infinite;
          }
      `;
      document.head.appendChild(styleSheet);
    }
  }
});

const API_KEY = "a72468e1e3234dc3b0543634242403";

function createWeatherButton() {
  const weatherButton = document.createElement("button");
  weatherButton.classList.add("btn", "btn-app");
  weatherButton.innerHTML = `
    <i class="fa-solid fa-cloud-sun-rain"></i> Weather
  `;
  weatherButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action
    openWeatherBoard();
  });

  const buttonContainer = document.querySelector(".row.mb-4");
  if (buttonContainer) {
    buttonContainer.appendChild(weatherButton);
  }
}

function openWeatherBoard() {
  const latitude = document.getElementById("incidentLatitude").value;
  const longitude = document.getElementById("incidentLongitude").value;

  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=1`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      showWeatherModal(data);
    })
    .catch((error) => {
      console.log("Error fetching weather data:", error);
    });
}

function showWeatherModal(weatherData) {
  const now = new Date();
  const currentHour = now.getHours();
  let hoursOptions = weatherData.forecast.forecastday[0].hour
    .filter((hourData) => new Date(hourData.time).getHours() >= currentHour)
    .map((hourData, index) => {
      let hour = new Date(hourData.time).getHours();
      let isNow = hour === currentHour;
      return `<option value="${index}" ${isNow ? "selected" : ""}>${
        isNow ? "Now" : `${hour}:00`
      }</option>`;
    })
    .join("");

  const modalHtml = `
    <div class="modal fade show" id="weatherModal" tabindex="-1" role="dialog" aria-labelledby="weatherModalLabel" aria-modal="true" style="display: block; z-index: 1001; margin: auto; margin-top: 70px;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="weatherModalLabel">Weather Forecast for ${weatherData.location.name}</h5>
            <button type="button" class="close" id="closeWeather" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <select id="forecastHourDropdown" class="form-control">${hoursOptions}</select>
            <div id="weatherDetails"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  const overlay = document.createElement("div");
  overlay.id = "modalOverlay";
  overlay.innerHTML = modalHtml;
  document.body.appendChild(overlay);

  function updateWeatherDetails(selectedIndex) {
    const filteredHours = weatherData.forecast.forecastday[0].hour.filter(
      (hourData) => new Date(hourData.time).getHours() >= currentHour
    );
    const selectedHourData = filteredHours[selectedIndex];

    const willItRainText = selectedHourData.will_it_rain === 1 ? "Yes" : "No";

    document.getElementById("weatherDetails").innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
        <div>
          <h4>Weather Details</h4>
          <p><strong>Temperature:</strong> ${selectedHourData.temp_c}°C</p>
          <p><strong>Feels Like:</strong> ${selectedHourData.feelslike_c}°C</p>
          <p><strong>Condition:</strong> ${selectedHourData.condition.text}</p>
          <p><strong>Wind:</strong> ${selectedHourData.wind_kph} kph (${selectedHourData.wind_dir})</p>
          <p><strong>Humidity:</strong> ${selectedHourData.humidity}%</p>
          <p><strong>Precipitation:</strong> ${selectedHourData.precip_mm} mm</p>
          <p><strong>Visibility:</strong> ${selectedHourData.vis_km} km</p>
          <p><strong>Gust:</strong> ${selectedHourData.gust_kph} kph</p>
          <p><strong>UV Index:</strong> ${selectedHourData.uv}</p>
          <p><strong>Will it Rain?:</strong> ${willItRainText}</p>
          <p><strong>Chance of Rain:</strong> ${selectedHourData.chance_of_rain}%</p>
        </div>
      </div>
    `;
  }

  updateWeatherDetails(
    document.getElementById("forecastHourDropdown").selectedIndex
  );

  document
    .getElementById("forecastHourDropdown")
    .addEventListener("change", function () {
      updateWeatherDetails(this.value);
    });

  const closeModal = function () {
    const overlay = document.getElementById("modalOverlay");
    overlay.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(overlay);
    }, 300);
  };

  document.getElementById("closeWeather").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

createWeatherButton();

window.addEventListener("load", function () {
  // Move the "Responding Services" card above the "Response SMS Notification" card
  const respondingServicesCard = document.querySelector(".responding-services");
  const smsNotificationCard = document.getElementById(
    "response-sms-notification"
  );
  if (respondingServicesCard && smsNotificationCard) {
    smsNotificationCard.parentNode.insertBefore(
      respondingServicesCard,
      smsNotificationCard
    );
  }

  // Adjust the width of all Select2 containers to be 100% for responsive design
  document
    .querySelectorAll(".select2-container")
    .forEach(function (selectContainer) {
      selectContainer.style.width = "100%"; // Ensure Select2 dropdowns fit their containers exactly
    });

  // Specifically fix the "Select Mailing Group:" element to not be oversized
  const mailingGroupSelect2 =
    document.querySelector(".mailinggroup_id").nextElementSibling; // Target the Select2 container generated for the "mailinggroup_id" select
  if (mailingGroupSelect2) {
    mailingGroupSelect2.style.width = "100%"; // Correct the width to match its container
  }

  // Correct positioning adjustments for buttons
  document
    .querySelectorAll(".add_unit_quick, #sendSMSResponse")
    .forEach(function (button) {
      button.classList.add("float-right"); // Adjust button positioning to the right
      button.style.marginLeft = "20px"; // Correctly adjust the button positioning with a margin to the left
    });

  // Consistent styling for textareas and select elements
  document.querySelectorAll("textarea, select").forEach(function (element) {
    element.classList.add("form-control"); // Apply Bootstrap's form-control class for styling
  });

  // Dynamic font size adjustment for the table based on container size
  const tableResponsive = document.querySelector(".table-responsive");
  if (tableResponsive) {
    tableResponsive.style.overflowX = "auto";
    tableResponsive.style.maxHeight = "none";

    new ResizeObserver(function (entries) {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        document.querySelectorAll("#servicesTable").forEach(function (table) {
          table.style.fontSize = containerWidth < 768 ? "0.8em" : "1em";
        });
      }
    }).observe(tableResponsive);
  }
});

if (
  window.location.href.startsWith("https://surfcom.sls.com.au/incidents/edit/")
) {
  window.addEventListener("load", function () {
    // Function to count statuses from table rows
    function countStatuses() {
      const statuses = {
        Notified: 0,
        Enroute: 0,
        Arrived: 0,
        Returning: 0,
        Standby: 0,
        "Stood Down": 0,
      };
      const rows = document.querySelectorAll("#servicesTable tbody tr");
      if (!rows.length) return statuses; // If no rows found, return default counts
      rows.forEach((row) => {
        const status = row.cells[2]?.textContent.trim();
        if (status && status in statuses) {
          statuses[status]++;
        }
      });
      return statuses;
    }

    // Function to count responding members
    function countResponding() {
      let respondingCount = 0;
      let unavailableCount = 0;
      const rows = document.querySelectorAll("#sms-members-content tr");
      if (!rows.length) return { respondingCount, unavailableCount }; // If no rows found, return 0
      rows.forEach((row) => {
        const response = row.cells[2]?.textContent.trim();
        if (response) {
          if (response !== "Unavailable") {
            respondingCount++;
          } else {
            unavailableCount++;
          }
        }
      });
      return { respondingCount, unavailableCount };
    }

    // Function to create a card element for displaying a status
    function createStatusCard(title, count) {
      const card = document.createElement("div");
      card.style.cssText =
        "margin: 0 3px; padding: 5px 10px; background-color: #f0f0f0; border-radius: 4px; display: flex; flex-direction: column; align-items: center; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);";

      const statusElement = document.createElement("div");
      statusElement.textContent = title;
      statusElement.style.cssText =
        "font-size: 14px; margin-bottom: 2px; font-weight: 600;";

      const countElement = document.createElement("div");
      countElement.textContent = count;
      countElement.style.cssText =
        "font-size: 16px; font-weight: bold; color: #007bff;";

      card.appendChild(statusElement);
      card.appendChild(countElement);

      return card;
    }

    // Function to append status cards to a container
    function appendStatusesToContainer(
      container,
      statuses,
      respondingCount,
      unavailableCount
    ) {
      Object.entries(statuses).forEach(([status, count]) => {
        const statusCard = createStatusCard(status, count);
        container.appendChild(statusCard);
      });

      const verticalLine = document.createElement("div");
      verticalLine.style.cssText =
        "border-left: 2px solid #ccc; height: 40px; margin: 0 8px;";
      container.appendChild(verticalLine);

      const respondingCard = createStatusCard("Responding", respondingCount);
      container.appendChild(respondingCard);

      const unavailableCard = createStatusCard("Unavailable", unavailableCount);
      container.appendChild(unavailableCard);
    }

    // Main execution block to create status container and append it to the DOM
    const statusCounts = countStatuses();
    const { respondingCount, unavailableCount } = countResponding();
    const container = document.createElement("div");
    container.style.cssText =
      "display: flex; align-items: center; justify-content: flex-end; flex-grow: 1; position: relative; top: -7px;";

    appendStatusesToContainer(
      container,
      statusCounts,
      respondingCount,
      unavailableCount
    );

    const targetDiv = document.querySelector(".row.mb-4");
    if (targetDiv) {
      targetDiv.appendChild(container);
    } else {
      document.body.appendChild(container); // If targetDiv not found, append to body
    }
  });
}

window.addEventListener("load", function () {
  const respondingServicesHeader = document.querySelector(
    ".responding-services .card-header"
  );
  const respondingServicesBody = document.querySelector(
    ".responding-services .card-body"
  );
  const toggleArrow = document.createElement("div");

  // Style for the toggle arrow
  toggleArrow.style.cursor = "pointer";
  toggleArrow.style.fontSize = "24px";
  toggleArrow.style.float = "right"; // Position to the right of the header text
  toggleArrow.innerHTML = "▼"; // Down arrow symbol

  // Initially, the card body is shown, so the arrow points down
  let isCardBodyVisible = true;

  toggleArrow.addEventListener("click", () => {
    if (isCardBodyVisible) {
      respondingServicesBody.style.display = "none";
      toggleArrow.innerHTML = "▲"; // Change to up arrow symbol
    } else {
      respondingServicesBody.style.display = "";
      toggleArrow.innerHTML = "▼"; // Change to down arrow symbol
    }
    isCardBodyVisible = !isCardBodyVisible;
  });

  respondingServicesHeader.appendChild(toggleArrow);

  const servicesTable = document.getElementById("servicesTable");
  const tableRows = servicesTable.querySelectorAll("tbody tr");

  // Collapsing the element if there are more than 10 rows in the table
  if (tableRows.length > 10) {
    respondingServicesBody.style.display = "none";
    toggleArrow.innerHTML = "▲";
    isCardBodyVisible = false;
  }
});

// This script waits for the DOM to be fully loaded before attempting to modify it.
window.addEventListener("load", function () {
  // Looks for the element with class 'card-title' that is a descendant of the div with ID 'response-sms-notification'.
  var cardTitleElement = document.querySelector(
    "#response-sms-notification .card-title"
  );
  if (cardTitleElement) {
    // If the element is found, change its text content.
    cardTitleElement.textContent = "Response SMS Notification (Callout SMS)";
  }
});

// Content.js for Chrome Extension to change the title of the card

// Function to change the title of the card
function changeCardTitle(newTitle) {
  // Select the card title element
  var cardTitleElement = document.querySelector(
    ".card.card-primary.card-outline.generate-message .card-header .card-title"
  );

  // Check if the card title element exists
  if (cardTitleElement) {
    // Change the inner text of the card title element to the new title
    cardTitleElement.innerText = newTitle;
  } else {
    // Log an error if the card title element is not found
    console.log("Card title element not found.");
  }
}

// Call the function to change the card title with the desired new title
changeCardTitle("Generate Message (Notification SMSs and SitReps)");

// Function to parse date from timestamp string
function parseDate(timestamp) {
  const parts = timestamp.match(/(\d+)(?:th|nd|rd|st) (\w+) (\d+) (\d+):(\d+)/);
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  if (parts && months[parts[2]]) {
    const year = parts[3];
    const month = months[parts[2]];
    const day = parts[1].padStart(2, "0");
    const hour = parts[4];
    const minute = parts[5];
    return new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
  }
  return null;
}

// Function to format time duration in days, hours, and minutes
function formatDuration(durationInMinutes) {
  const days = Math.floor(durationInMinutes / (60 * 24));
  const hours = Math.floor((durationInMinutes % (60 * 24)) / 60);
  const minutes = durationInMinutes % 60;
  let formattedDuration = "";
  if (days > 0) {
    formattedDuration += `${days} day${days !== 1 ? "s" : ""}, `;
  }
  if (hours > 0 || days > 0) {
    formattedDuration += `${hours} hour${hours !== 1 ? "s" : ""}, `;
  }
  formattedDuration += `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  return formattedDuration;
}

// Function to get the most recent "SITUATION REPORT" timestamp
function getLastSitRepTimestamp() {
  const messages = Array.from(document.querySelectorAll(".direct-chat-msg"));
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    const messageText = message.querySelector(".direct-chat-text").textContent;
    if (messageText.includes("Situation Report")) {
      const timestampText = message.querySelector(
        ".direct-chat-timestamp"
      ).textContent;
      return parseDate(timestampText);
    }
  }
  return null;
}

// Function to replace an existing element if it exists
function replaceIfExists(parentElement, newElement) {
  const existingElement = parentElement.querySelector(
    `.${newElement.className}`
  );
  if (existingElement) {
    parentElement.replaceChild(newElement, existingElement);
  } else {
    parentElement.appendChild(newElement);
  }
}

// Function to display the time since the last "SITUATION REPORT"
function displayTimeSinceLastReport() {
  const prioritySelect = document.getElementById("priority");
  if (!prioritySelect || prioritySelect.value !== "3") {
    return; // Only run if priority is 3
  }

  const durationOpenElement = document.getElementById("durationOpen");
  const openDuration = durationOpenElement.value.split(":");
  const openHours = parseInt(openDuration[0], 10);
  const openMinutes = parseInt(openDuration[1], 10);
  const totalOpenMinutes = openHours * 60 + openMinutes;

  if (totalOpenMinutes < 60) {
    return; // Do not display if open time is less than 60 minutes
  }

  const lastReportTime = getLastSitRepTimestamp();
  const cardBodyDiv = document.querySelector(".card-body");
  if (!lastReportTime) {
    const counterElement = document.createElement("div");
    counterElement.textContent = `SitRep Due, None sent yet.`;
    counterElement.style.padding = "10px";
    counterElement.style.marginTop = "5px";
    counterElement.style.backgroundColor = "orange";
    counterElement.style.textAlign = "center";
    counterElement.style.fontWeight = "bold";
    counterElement.className = "pulsate";
    replaceIfExists(cardBodyDiv, counterElement);
    return;
  }

  const currentTime = new Date();
  const differenceInMinutes = (currentTime - lastReportTime) / (1000 * 60);

  if (differenceInMinutes > 60) {
    const formattedDifference = formatDuration(Math.floor(differenceInMinutes));
    const counterElement = document.createElement("div");
    counterElement.textContent = `SitRep is due, last sent ${formattedDifference} ago`;
    counterElement.style.padding = "10px";
    counterElement.style.marginTop = "5px";
    counterElement.style.backgroundColor = "orange";
    counterElement.style.textAlign = "center";
    counterElement.style.fontWeight = "bold";
    counterElement.className = "pulsate";
    replaceIfExists(cardBodyDiv, counterElement);
  }
}

// CSS for pulsating effect
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulsate {
  0% { background-color: orange; }
  50% { background-color: darkorange; }
  100% { background-color: orange; }
}
.pulsate {
  animation: pulsate 2s infinite;
}
`;
document.head.appendChild(style);

// Setup MutationObserver to update the display when new chat messages are added
function observeChatChanges() {
  const prioritySelect = document.getElementById("priority");
  if (!prioritySelect || prioritySelect.value !== "3") {
    return; // Only set up observer if priority is 3
  }

  const chatMessagesContainer = document.querySelector(".direct-chat-messages");
  const observer = new MutationObserver(() => {
    displayTimeSinceLastReport();
  });
  observer.observe(chatMessagesContainer, { childList: true });
}

// Initialize the script after DOM is fully loaded
window.addEventListener("load", () => {
  const prioritySelect = document.getElementById("priority");
  if (prioritySelect) {
    prioritySelect.addEventListener("change", () => {
      if (prioritySelect.value === "3") {
        displayTimeSinceLastReport();
        observeChatChanges();
      }
    });

    if (prioritySelect.value === "3") {
      displayTimeSinceLastReport();
      observeChatChanges();
    }
  }
});

// Function to update the time every second
function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString().slice(17, 25); // Extracting UTC time in HH:MM:SS format
  const utcSeconds = now.toUTCString().slice(23, 25); // Extracting seconds from UTC time
  const aestTime = formatTime(
    now.toLocaleString("en-AU", {
      timeZone: "Australia/Brisbane",
      hour12: false,
    }),
    utcSeconds
  );
  const aedtTime = formatTime(
    now.toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
      hour12: false,
    }),
    utcSeconds
  );

  const clockElement = document.getElementById("clock");
  clockElement.innerHTML = `
    <div class="clock-container">
      <div class="clock-box">
        <div class="clock-label">UTC/ZULU</div>
        <div class="clock-time">${utcTime}</div>
      </div>
      <div class="clock-box">
        <div class="clock-label">AEST</div>
        <div class="clock-time">${aestTime}</div>
      </div>
      <div class="clock-box">
        <div class="clock-label">AEDT</div>
        <div class="clock-time">${aedtTime}</div>
      </div>
    </div>
  `;
}

// Helper function to format time strings and append UTC seconds
function formatTime(timeString, utcSeconds) {
  const baseTime = timeString.split(" ")[1].slice(0, 5); // Extracts HH:MM format
  return `${baseTime}:${utcSeconds}`; // Appends UTC seconds to local time in HH:MM:SS format
}

// Function to create and insert the clock element into the navbar
function createClockElement() {
  const clockItem = document.createElement("div");
  clockItem.id = "clock";
  clockItem.style.cssText = `
    text-align: center;
    flex: 1 1 auto;
    padding: 5px 0;
    pointer-events: none; // Allows click events to pass through
  `;

  // Find the navbar and insert the clock in the center
  const navbar = document.querySelector(".navbar");
  const navContainer = document.createElement("li");
  navContainer.classList.add("nav-item");
  navContainer.style.cssText = `
    flex-grow: 1;
    display: flex;
    justify-content: center;
  `;
  navContainer.appendChild(clockItem);
  navbar.insertBefore(
    navContainer,
    navbar.querySelector(".navbar-nav.ml-auto")
  );

  // Style the clock containers and labels
  const style = document.createElement("style");
  style.textContent = `
    .clock-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .clock-box {
      margin: 0 10px;
      padding: 5px 10px;
      background-color: #fff; // Only the clock boxes have a background
      border: 1px solid #ccc;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 80px; // Adjusted for longer times including seconds
      box-shadow: 0 2px 4px rgba(0,0,0,0.1); // subtle shadow for better visibility
      pointer-events: auto; // Restores click functionality within the box
      height: 20px; // Fixed height for each box
    }
    .clock-label {
      font-weight: bold;
      font-size: 10px;
      margin-bottom: 2px;
    }
    .clock-time {
      font-size: 14px;
    }
  `;
  document.head.appendChild(style);

  updateTime();
  setInterval(updateTime, 1000);
}

// Add the clock when the window loads
window.addEventListener("load", createClockElement);

window.addEventListener("load", function () {
  const updateETATimes = () => {
    const table = document.getElementById("sms-members");
    if (table) {
      const rows = table.querySelectorAll("tbody#sms-members-content > tr");
      rows.forEach((row) => {
        const etaCell = row.cells[3];
        if (etaCell) {
          const etaText = etaCell.textContent.trim();
          // Extracting and parsing the date assuming the format "DD/MM HH:mm"
          const match = etaText.match(/(\d{2})\/(\d{2}) (\d{2}):(\d{2})/);
          if (match) {
            const [_, day, month, hour, minute] = match;
            const etaDate = new Date();
            etaDate.setMonth(parseInt(month) - 1, parseInt(day));
            etaDate.setHours(parseInt(hour), parseInt(minute), 0, 0);

            const now = new Date();
            const diff = Math.round(
              (etaDate.getTime() - now.getTime()) / 60000
            );

            if (
              !isNaN(diff) &&
              diff >= 0 &&
              !/\(\d+ mins\)/.test(etaCell.textContent)
            ) {
              etaCell.textContent += ` (${diff} mins)`;
            }
          }
        }
      });
    }
  };

  // Initial run when the content loads
  updateETATimes();
});

window.addEventListener("load", function () {
  // Define the SVG icon with proper viewBox and styling to ensure full visibility
  const svgHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="cadetblue" class="bi bi-info-circle-fill" viewBox="0 0 16 17" style="cursor: pointer; vertical-align: top; display: block;">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
  `;

  // Select the element next to which the SVG icon should be appended
  const globeButton = document.querySelector("#inline");

  if (globeButton) {
    // Create a span to contain the SVG
    const iconSpan = document.createElement("span");
    iconSpan.innerHTML = svgHTML;
    iconSpan.style.display = "inline-block";
    iconSpan.style.verticalAlign = "top";
    iconSpan.style.width = "28.8px";
    iconSpan.style.height = "28.8px";
    iconSpan.style.marginLeft = "10px";
    iconSpan.style.overflow = "visible";

    // Append the span with SVG next to the globe button
    globeButton.parentNode.insertBefore(iconSpan, globeButton.nextSibling);

    // Add click event to open a window with placeholder text
    iconSpan.addEventListener("click", function () {
      const formHTML = `
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Extra Information for 13SURF Database</title>
      <style>
          body {
              font-family: Arial, sans-serif;
          }
          #inputForm {
              width: 60%;
              margin: 20px auto;
              padding: 20px;
              background-color: #f4f4f4;
              border: 1px solid #ddd;
              box-shadow: 0 0 10px #ccc;
          }
          label {
              display: block;
              margin-bottom: 10px;
          }
          select, input[type="number"] {
              width: calc(100% - 22px);
              padding: 10px;
              margin-top: 6px;
          }
          button {
              width: 100%;
              padding: 10px;
              background-color: #0056b3;
              color: white;
              border: none;
              cursor: pointer;
              font-size: 16px;
          }
          button:hover {
              background-color: #004494;
          }
          h1 {
              text-align: center;
              color: #333;
          }
      </style>
  </head>
  <body>
  <form id="inputForm" style="text-align: center;">
      <h1>Extra Information for Database</h1>
      <label>Tasking Issues? <span style="color: red;">*</span>
          <select name="taskingIssues" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
      </label><br>
      <label>Activity at time of incident <span style="color: red;">*</span>
          <select name="activity" required>
              <option value="">Select...</option>
              <option value="swimming">Swimming</option>
              <option value="boating">Boating</option>
              <option value="tsunami">Tsunami</option>
              <option value="crowdControl">Crowd Control</option>
              <option value="debris">Debris</option>
              <option value="divingSnorkelling">Diving/Snorkelling</option>
              <option value="suicideSelfHarm">Suicide/Self Harm</option>
              <option value="environmental">Environmental</option>
              <option value="floodAssistance">Flood assistance</option>
              <option value="other">Other</option>
              <option value="rockFishing">Rockfishing</option>
              <option value="missingPersonLand">Missing Person - Land</option>
              <option value="sup">Surfcraft (non-powered) - SUP</option>
              <option value="kayak">Surfcraft (non-powered) - Kayak</option>
              <option value="surfing">Surfcraft (non-powered) - Surfing</option>
              <option value="windsurfer">Surfcraft (non-powered) - Windsurfer</option>
              <option value="parachuteParasail">Other - Parachute/parasail</option>
              <option value="lightAircraftCrash">Other - Light aircraft crash</option>
              <option value="landBasedObservation">Other - land based observation</option>
              <option value="aerialBasedObservation">Other - aerial based observation</option>
              <option value="rockCliffRelated">Rock/Cliff related</option>
              <option value="unknown">Unknown</option>
          </select>
      </label><br>
      <label>Approximate Age <span style="color: red;">*</span>
          <input type="number" name="age" min="0" required/>
      </label><br>
      <label>Wearing a life jacket? <span style="color: red;">*</span>
          <select name="lifeJacket" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
      </label><br>
      <label>Patrolled Location? <span style="color: red;">*</span>
          <select name="patrolledLocation" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
      </label><br>
      <label>Distance to nearest patrolled location <span style="color: red;">*</span>
          <select name="distancePatrolled" required>
              <option value="">Select...</option>
              <option value="<1km">&lt;1km</option>
              <option value="1-5km">1-5km</option>
              <option value=">5km">&gt;5km</option>
          </select>
      </label><br>
      <label>During Patrol Hours (of location) <span style="color: red;">*</span>
          <select name="patrolHours" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
      </label><br>
      <label>Distance Of Responding Resource <span style="color: red;">*</span>
          <select name="distanceResource" required>
              <option value="">Select...</option>
              <option value="onLocation">On Patrol At Location</option>
              <option value="patrol1-5km">Patrol 1-5km away</option>
              <option value="patrol>5km">Patrol &gt;5km away</option>
              <option value="callout">Callout</option>
              <option value="dutyOnly">Duty Officer Only</option>
              <option value="dutyHelicopter">Duty Officer + Helicopter</option>
              <option value="helicopterOnly">Helicopter Only</option>
              <option value="noResponse">No Response</option>
              <option value="calloutDuty">Callout + Duty Officer</option>
              <option value="dutyRWC">Duty Officer + RWC</option>
          </select>
      </label><br>
      <label>Summary Outcome <span style="color: red;">*</span>
          <select name="summaryOutcome" required>
              <option value="">Select...</option>
              <option value="patientsRescued">Patients Rescued</option>
              <option value="stoodDown">Stood Down Before Response/Enroute</option>
              <option value="rescued">Rescued</option>
              <option value="personFound">Person Found</option>
              <option value="noActionNothingFound">No Further Action; Nothing Found/No Assistance Required</option>
              <option value="gotOut">No Further Action; Got Out By Themselves</option>
              <option value="rescuedByOthers">No Further Action; Rescued By Others</option>
              <option value="drowningDeaths">Drowning / Deaths</option>
              <option value="noFurtherAction">No Further Action</option>
              <option value="medical">Medical</option>
              <option value="otherOutcome">Other</option>
          </select>
      </label><br>
      <label>In-Water Search Conducted? <span style="color: red;">*</span>
          <select name="inWaterSearch" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
      </label><br>
      <label>DSW Active <span style="color: red;">*</span>
          <select name="dswActive" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
      </label><br>
      <button type="submit">Submit & Save Incident</button>
      </form>
      </body>
  
        `;

      const popup = window.open("", "", "width=600,height=600");
      popup.document.write(formHTML);

      const textArea = document.querySelector('.form-control[name="message"]');
      const regex = /\{\{\{([^{}]*)\}\}\}/;

      const messages = document.querySelectorAll(
        ".direct-chat-msg .direct-chat-text"
      );
      let matchFound = false;

      messages.forEach((message) => {
        const match = regex.exec(message.innerHTML);
        if (match && !matchFound) {
          const defaults = match[1].split(", ").reduce((acc, curr) => {
            const [key, value] = curr.split(": ");
            acc[key.trim()] = value.trim();
            return acc;
          }, {});

          Object.entries(defaults).forEach(([key, value]) => {
            const input = popup.document.querySelector(`[name="${key}"]`);
            if (input) input.value = value;
          });

          matchFound = true; // Stop after finding the first match
        }
      });

      popup.document.getElementById("inputForm").onsubmit = function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        let newData = "{{{";
        formData.forEach((value, key) => {
          newData += `${key}: ${value}, `;
        });
        newData = newData.slice(0, -2) + "}}}";

        let existingText = textArea.value;
        existingText = regex.test(existingText)
          ? existingText.replace(regex, newData)
          : existingText + newData;

        textArea.value = existingText;

        const fromSelect = document.querySelector("#from");
        const toSelect = document.querySelector("#to");

        if (fromSelect) {
          fromSelect.value = "unit_1996";
          console.log("'From' dropdown set to ``user``.");
        } else {
          console.error("'From' dropdown not found");
        }

        if (toSelect) {
          toSelect.value = "unit_1997";
          console.log("'To' dropdown set to ``systemLog``.");
        } else {
          console.error("'To' dropdown not found");
        }

        // Trigger the 'Record' button click and then clear the text area
        let recordButton = document.querySelector("#post_comment");
        if (recordButton) {
          recordButton.click();
          console.log("Record button clicked.");

          // Clear the text area after a short delay
          setTimeout(() => {
            if (textArea) {
              textArea.value = "";
              console.log("Text area cleared.");
            }
          }, 250); // Adjust the delay as needed
        }

        popup.close();
        return false;
      };
    });
  }
});

window.addEventListener("load", function () {
  const checkbox = document.querySelector("#callerDetails13Surf");
  const closeButton = document.querySelector(
    "a.btn.btn-app.check-incident-status"
  );
  const textArea = document.querySelector(
    'textarea.form-control[name="message"]'
  );

  closeButton.addEventListener("click", function (event) {
    // Always prevent the default action of the button if the checkbox is checked
    if (checkbox && checkbox.checked) {
      event.preventDefault(); // Prevents the default button action

      // Check for text within {{{}}} in the direct chat messages
      const regex = /\{\{\{(.+?)\}\}\}/;
      const messages = document.querySelectorAll(
        ".direct-chat-msg .direct-chat-text"
      );
      let matchFound = false;

      messages.forEach((message) => {
        const match = regex.exec(message.innerHTML);
        if (match && !matchFound) {
          matchFound = true;
        }
      });

      if (!matchFound) {
        // If there's no text in {{{}}}, show an alert and keep the action stopped
        alert(
          'You haven\'t completed the "Extra Information for Database" window, click on the blue information circle next to the map!'
        );
      }
    }
  });
});

window.addEventListener("load", function () {
  const surfCheckbox = document.querySelector("#callerDetails13Surf");
  const priorityDropdown = document.querySelector("#priority");

  // Function to update the dropdown options
  function updatePriorityOptions() {
    const lowOption = priorityDropdown.querySelector('option[value="1"]');

    if (surfCheckbox.checked) {
      // If Low (1) is already selected, update the priority and show an alert
      if (priorityDropdown.value === "1") {
        priorityDropdown.value = "2";
        alert(
          "13SURF Incidents can not be Priority 1 (Low). Incident updated to be Priority 2 (Medium)."
        );
      }

      // Remove the Low (1) option
      if (lowOption) {
        lowOption.remove();
      }
    } else {
      // If checkbox is unchecked, ensure Low (1) is an option
      if (!priorityDropdown.querySelector('option[value="1"]')) {
        const newLowOption = document.createElement("option");
        newLowOption.value = "1";
        newLowOption.textContent = "Low (1)";
        priorityDropdown.appendChild(newLowOption);
      }
    }
  }

  // Check the status of the checkbox on page load
  updatePriorityOptions();

  // Add an event listener for changes to the checkbox
  surfCheckbox.addEventListener("change", updatePriorityOptions);
});

// Function to check the incident type and add the alert
function checkIncidentTypeAndAddAlert() {
  const incidentTypeSelect = document.querySelector("#incidentType");
  const selectedIncidentType =
    incidentTypeSelect.options[incidentTypeSelect.selectedIndex].text;

  if (selectedIncidentType === "Shark Attack (IRD)") {
    const chatMessages = document.querySelectorAll(".direct-chat-msg");
    let messageExists = false;

    chatMessages.forEach((msg) => {
      const chatName = msg.querySelector(".direct-chat-name");
      if (
        chatName &&
        chatName.textContent.includes(
          "Surfcom to EXTERNAL - NSW Dept Primary Industries"
        )
      ) {
        messageExists = true;
      }
    });

    if (!messageExists) {
      const alertElement = document.createElement("div");
      alertElement.textContent =
        "DPI Notification required. (Don't forget to log message to NSW Dept Primary Industries.)";
      alertElement.style.padding = "10px";
      alertElement.style.marginTop = "5px";
      alertElement.style.backgroundColor = "orange";
      alertElement.style.textAlign = "center";
      alertElement.style.fontWeight = "bold";
      alertElement.className = "pulsate";
      const cardBodyDiv = document.querySelector(".card-body");
      replaceIfExists(cardBodyDiv, alertElement);
    }
  }
}

// Call the function when the page loads
window.addEventListener("load", checkIncidentTypeAndAddAlert);

// Function to replace an existing element if it exists
function replaceIfExists(parent, newElement) {
  const existingElement = parent.querySelector(`.${newElement.className}`);
  if (existingElement) {
    parent.replaceChild(newElement, existingElement);
  } else {
    parent.appendChild(newElement);
  }
}

// CSS for pulsating effect
const pulsateStyle = document.createElement("style");
pulsateStyle.innerHTML = `
@keyframes pulsate {
  0% { background-color: orange; }
  50% { background-color: darkorange; }
  100% { background-color: orange; }
}
.pulsate {
  animation: pulsate 2s infinite;
}
`;
document.head.appendChild(pulsateStyle);

// Function to check the incident type and add an alert if necessary
function checkIncidentTypeAndAddAlert() {
  const incidentTypeElement = document.getElementById("incidentType");
  if (!incidentTypeElement) return;

  const criticalIncidentTypes = [
    "B07", // Capsized Vessel (IRD)
    "E01", // Diving Accident (IRD)
    "E02", // Drowning (IRD)
    "B05", // Flare Sighting
    "A02", // Missing Person - Water (IRD)
    "C04", // Rock Fishing Incident (IRD)
    "A03", // Missing Vessel (IRD)
    "B06", // Shark Attack (IRD)
  ];

  const selectedIncidentType = incidentTypeElement.value;
  if (
    criticalIncidentTypes.includes(selectedIncidentType) &&
    !callerDetailsContainMAC() &&
    !messageToPoliceMACExists()
  ) {
    addAlertBanner();
  }
}

// Function to check if the caller details contain MAC or MACLO
function callerDetailsContainMAC() {
  const callerNameElement = document.getElementById("callerDetailsName");
  const callerOrganisationElement = document.getElementById(
    "callerDetailsOrganisation"
  );

  if (!callerNameElement || !callerOrganisationElement) return false;

  const callerName = callerNameElement.value;
  const callerOrganisation = callerOrganisationElement.value;

  return (
    callerName.includes("MAC") ||
    callerName.includes("MACLO") ||
    callerOrganisation.includes("MAC") ||
    callerOrganisation.includes("MACLO")
  );
}

// Function to check if a message to Police - Marine Area Command (MAC) exists
function messageToPoliceMACExists() {
  const chatMessages = document.querySelectorAll(
    ".direct-chat-msg .direct-chat-name"
  );
  for (let msg of chatMessages) {
    if (msg.textContent.includes("Surfcom to Police - Marine Area Command")) {
      return true;
    }
  }
  return false;
}

// Function to add the alert banner
function addAlertBanner() {
  const alertElement = document.createElement("div");
  alertElement.textContent =
    "Notify Marine Area Command and radio log the transmission.";
  alertElement.style.padding = "10px";
  alertElement.style.marginTop = "5px";
  alertElement.style.backgroundColor = "orange";
  alertElement.style.textAlign = "center";
  alertElement.style.fontWeight = "bold";
  alertElement.className = "pulsate";
  const cardBodyDiv = document.querySelector(".card-body");
  replaceIfExists(cardBodyDiv, alertElement);
}

// Function to replace an existing element if it exists
function replaceIfExists(parent, newElement) {
  const existingElement = parent.querySelector(`.${newElement.className}`);
  if (existingElement) {
    parent.replaceChild(newElement, existingElement);
  } else {
    parent.appendChild(newElement);
  }
}

// Add CSS for pulsating effect if not already added
function addPulsateStyle() {
  if (!document.getElementById("pulsate-style")) {
    const style = document.createElement("style");
    style.id = "pulsate-style";
    style.innerHTML = `
    @keyframes pulsate {
      0% { background-color: orange; }
      50% { background-color: darkorange; }
      100% { background-color: orange; }
    }
    .pulsate {
      animation: pulsate 2s infinite;
    }
    `;
    document.head.appendChild(style);
  }
}

// Call the function when the page loads
window.addEventListener("load", () => {
  addPulsateStyle();
  checkIncidentTypeAndAddAlert();
});

window.addEventListener("load", function () {
  // Function to add counter and character limit
  function addCounter(inputId, labelFor, maxLength) {
    const inputField = document.getElementById(inputId);
    const label = document.querySelector(`label[for="${labelFor}"]`);

    // Create the counter element
    const counter = document.createElement("span");
    counter.style.marginLeft = "5px";
    counter.style.fontStyle = "italic";
    counter.style.color = "darkgray";
    label.appendChild(counter);

    // Update the counter and limit the input length
    function updateCounter() {
      const currentLength = inputField.value.length;
      counter.textContent = `(${currentLength}/${maxLength})`;
    }

    // Prevent adding characters beyond the limit
    function enforceMaxLength(event) {
      const isCtrlA = event.ctrlKey && event.key === "a";
      const isNavigationKey = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ].includes(event.key);

      if (
        inputField.value.length >= maxLength &&
        !isCtrlA &&
        !isNavigationKey
      ) {
        event.preventDefault();
      }
    }

    // Initial counter update
    updateCounter();

    // Event listeners for input changes and keydown to enforce character limit
    inputField.addEventListener("input", updateCounter);
    inputField.addEventListener("keydown", enforceMaxLength);
  }

  // Apply counter and limit to each specified input field
  addCounter("incidentLocation", "incidentLocation", 512);
  addCounter("incidentThirdParty", "incidentThirdParty", 16);
  addCounter("incidentSLSContact", "incidentSLSContact", 100);
  addCounter("callerDetailsName", "callerDetailsName", 128);
  addCounter("callerDetailsOrganisation", "callerDetailsOrganisation", 128);
  addCounter("callerDetailsNumber", "callerDetailsNumber", 16);
  addCounter("incidentLatitude", "incidentLatitude", 32);
  addCounter("incidentLongitude", "incidentLongitude", 32);
});

// Function to extract and format phone number from URL
function extractPhoneNumber(url) {
  const urlParams = new URLSearchParams(url.split("?")[1]);
  let phoneNumber = urlParams.get("mobile_number");
  if (phoneNumber) {
    phoneNumber = phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  }
  return phoneNumber;
}

// Function to add phone number column and populate it
function addPhoneNumberColumn() {
  const table = document.getElementById("sms-members");
  const tbody = document.getElementById("sms-members-content");

  if (!table || !tbody) {
    return;
  }

  // Add Phone Number header
  const headerRow = table.querySelector("thead tr");
  const phoneNumberHeader = document.createElement("th");
  phoneNumberHeader.textContent = "Phone Number";
  headerRow.insertBefore(phoneNumberHeader, headerRow.children[1]);

  // Add Phone Number data
  const rows = tbody.querySelectorAll("tr");
  rows.forEach((row) => {
    const etaCell = row.querySelector('td a[href*="mobile_number"]');
    const phoneNumber = etaCell ? extractPhoneNumber(etaCell.href) : "";

    const phoneNumberCell = document.createElement("td");
    phoneNumberCell.textContent = phoneNumber;
    row.insertBefore(phoneNumberCell, row.children[1]);
  });
}

// Execute the function when the content is loaded
window.addEventListener("load", addPhoneNumberColumn);

window.addEventListener("load", function () {
  // Get the latitude and longitude input fields
  var latInput = document.getElementById("incidentLatitude");
  var lngInput = document.getElementById("incidentLongitude");

  // Function to allow only numbers in the input fields
  function allowOnlyNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  // Add event listeners to restrict input to numbers only
  latInput.addEventListener("keypress", allowOnlyNumbers);
  lngInput.addEventListener("keypress", allowOnlyNumbers);

  // Optionally, you can force the input type to 'number' for better UX
  latInput.setAttribute("type", "number");
  lngInput.setAttribute("type", "number");
});

window.addEventListener("load", function () {
  // Create the card element
  const newCard = document.createElement("div");
  newCard.classList.add("card", "card-primary", "card-outline");
  newCard.style.width = "100%"; // Set the card's width to 100%

  // Create the card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.style.display = "flex";
  cardHeader.style.justifyContent = "space-between";
  cardHeader.style.alignItems = "center";

  // Create the card title
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "Incident Viewed by Log";

  // Create the download button
  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Download CSV";
  downloadButton.classList.add("btn", "btn-primary");
  downloadButton.addEventListener("click", function (event) {
    event.preventDefault();
    downloadCSV();
  });

  // Append the title and button to the header
  cardHeader.appendChild(cardTitle);
  cardHeader.appendChild(downloadButton);

  // Create the card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.style.width = "100%"; // Ensure the card body takes up 100% width

  // Create the table
  const table = document.createElement("table");
  table.style.width = "100%";
  table.classList.add("table", "table-bordered");

  // Create the table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const columns = [
    "User",
    "# Times Accessed",
    "First Accessed",
    "Last Accessed",
  ];
  columns.forEach((colName) => {
    const th = document.createElement("th");
    th.textContent = colName;
    th.style.width = "25%"; // Each column takes 25% of the table width
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body (to be populated dynamically)
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // Append the table to the card body
  cardBody.appendChild(table);

  // Append header and body to the card
  newCard.appendChild(cardHeader);
  newCard.appendChild(cardBody);

  // Find the target element to insert before
  const targetElement = document.querySelector(".row .col-12.font-italic");
  if (targetElement) {
    targetElement.parentNode.insertBefore(newCard, targetElement);
  }

  let currentPopout = null;

  // Function to add a row to the table
  function addTableRow(
    user,
    timesAccessed,
    firstAccessed,
    lastAccessed,
    accessTimes
  ) {
    const row = document.createElement("tr");

    const userCell = document.createElement("td");
    userCell.textContent = user;
    row.appendChild(userCell);

    const timesAccessedCell = document.createElement("td");
    timesAccessedCell.textContent = timesAccessed;
    timesAccessedCell.classList.add("times-accessed-cell");
    row.appendChild(timesAccessedCell);

    const firstAccessedCell = document.createElement("td");
    firstAccessedCell.textContent = firstAccessed;
    row.appendChild(firstAccessedCell);

    const lastAccessedCell = document.createElement("td");
    lastAccessedCell.textContent = lastAccessed;
    row.appendChild(lastAccessedCell);

    timesAccessedCell.addEventListener("mouseover", function () {
      showPopout(timesAccessedCell, accessTimes);
    });

    timesAccessedCell.addEventListener("mouseout", function () {
      if (!timesAccessedCell.popout.matches(":hover")) {
        hidePopout();
      }
    });

    tbody.appendChild(row);
  }

  // Function to show popout
  function showPopout(cell, accessTimes) {
    if (currentPopout) {
      currentPopout.remove();
    }

    const popout = document.createElement("div");
    popout.classList.add("popout");
    popout.style.position = "absolute";
    popout.style.backgroundColor = "white";
    popout.style.border = "1px solid black";
    popout.style.padding = "10px";
    popout.style.zIndex = "1000";
    popout.style.maxHeight = "200px"; // Set max height for scrollable area
    popout.style.overflowY = "auto";

    const timesList = document.createElement("div");
    accessTimes
      .slice()
      .reverse()
      .forEach((time) => {
        const listItem = document.createElement("div");
        listItem.textContent = time;
        timesList.appendChild(listItem);
      });

    popout.appendChild(timesList);
    document.body.appendChild(popout);

    const rect = cell.getBoundingClientRect();
    const popoutHeight = popout.offsetHeight;
    const bottomSpace = window.innerHeight - rect.bottom;
    const topSpace = rect.top;

    if (bottomSpace < popoutHeight && topSpace > popoutHeight) {
      // Position above the cell
      popout.style.left = `${rect.left + window.scrollX}px`;
      popout.style.top = `${rect.top + window.scrollY - popoutHeight}px`;
    } else {
      // Position below the cell
      popout.style.left = `${rect.left + window.scrollX}px`;
      popout.style.top = `${rect.bottom + window.scrollY}px`;
    }

    cell.popout = popout;
    currentPopout = popout;

    popout.addEventListener("mouseout", function () {
      if (!cell.matches(":hover")) {
        hidePopout();
      }
    });

    popout.addEventListener("mouseover", function () {
      cell.removeEventListener("mouseout", hidePopout);
    });

    popout.addEventListener("mouseout", function () {
      cell.addEventListener("mouseout", hidePopout);
    });

    cell.addEventListener("wheel", function (event) {
      if (popout.scrollHeight > popout.clientHeight) {
        const scrollTop = popout.scrollTop;
        const maxScrollTop = popout.scrollHeight - popout.clientHeight;

        if (
          (event.deltaY < 0 && scrollTop > 0) ||
          (event.deltaY > 0 && scrollTop < maxScrollTop)
        ) {
          popout.scrollTop += event.deltaY;
          event.preventDefault(); // Prevent default scrolling of the page if not at top or bottom
        }
      }
    });
  }

  // Function to hide popout
  function hidePopout() {
    if (currentPopout) {
      currentPopout.remove();
      currentPopout = null;
    }
  }

  // Function to parse and update the table
  function updateTable() {
    // Clear the current table body
    tbody.innerHTML = "";

    // Parse the message log
    const messageLog = document.querySelectorAll(
      ".direct-chat-msg .direct-chat-text"
    );
    const accessLogs = {};

    messageLog.forEach((msg) => {
      const textContent = msg.textContent;
      const match = textContent.match(
        /"([^"]+)" accessed this incident at "([^"]+)"/
      );

      if (match) {
        const user = match[1];
        const timestamp = match[2];

        if (!accessLogs[user]) {
          accessLogs[user] = {
            timesAccessed: 1,
            firstAccessed: timestamp,
            lastAccessed: timestamp,
            accessTimes: [timestamp],
          };
        } else {
          accessLogs[user].timesAccessed++;
          accessLogs[user].lastAccessed = timestamp;
          accessLogs[user].accessTimes.push(timestamp);
        }
      }
    });

    // Populate the table with parsed data
    for (const user in accessLogs) {
      const log = accessLogs[user];
      addTableRow(
        user,
        log.timesAccessed,
        log.lastAccessed,
        log.firstAccessed,
        log.accessTimes
      );
    }
  }

  // Function to download the log data as CSV
  function downloadCSV() {
    const messageLog = document.querySelectorAll(
      ".direct-chat-msg .direct-chat-text"
    );
    const logEntries = [];

    messageLog.forEach((msg) => {
      const textContent = msg.textContent;
      const match = textContent.match(
        /"([^"]+)" accessed this incident at "([^"]+)"/
      );

      if (match) {
        const user = match[1];
        const timestamp = match[2];
        logEntries.push({ user, timestamp });
      }
    });

    // Sort log entries chronologically
    logEntries.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    // Get the current date and time
    const now = new Date();
    const formattedDate = now.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Convert to CSV format
    const csvRows = ["User,Timestamp,,Accurate as of " + formattedDate];
    logEntries.forEach((entry) => {
      csvRows.push(`${entry.user},${entry.timestamp}`);
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    // Extract incident number from the URL
    const incidentNumber = window.location.pathname.split("/").pop();
    const filename = `${incidentNumber} Access Log.csv`;

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }

  // Initial update
  updateTable();

  // Recheck and update the table after 5 seconds
  setTimeout(updateTable, 5000);
});

window.addEventListener("load", function () {
  console.log("Page loaded. Current URL: " + window.location.href);
  console.log("Referrer URL: " + document.referrer);

  // Check if the current URL matches the incident edit page pattern
  if (
    window.location.href.includes("https://surfcom.sls.com.au/incidents/edit/")
  ) {
    // Check if the referrer does not contain specific paths
    const excludedReferrers = [
      "https://surfcom.sls.com.au/incidents/edit/",
      "https://surfcom.sls.com.au/incidents/record/",
      "https://surfcom.sls.com.au/incidents/view-incident-log/",
      "https://surfcom.sls.com.au/incidents/close/",
    ];

    let shouldRun = true;
    for (let excludedReferrer of excludedReferrers) {
      if (document.referrer.includes(excludedReferrer)) {
        shouldRun = false;
        break;
      }
    }

    if (shouldRun) {
      console.log(
        "Running script because referrer does not contain excluded paths"
      );

      // Extract username and email from the dropdown menu
      let userDropdown = document.querySelector(
        ".dropdown-menu-lg .dropdown-item p"
      );
      if (userDropdown) {
        let userText = userDropdown.innerHTML;
        let userName = userText.split("<br>")[0].trim(); // Extract the full name
        let userHandle = userText
          .split("<small>")[1]
          .split("</small>")[0]
          .trim(); // Extract the username

        // Get the current date and time in the format dd/mm/yyyy hh:mm:ss
        let now = new Date();
        let day = String(now.getDate()).padStart(2, "0");
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let year = now.getFullYear();
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padStart(2, "0");
        let seconds = String(now.getSeconds()).padStart(2, "0");
        let formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        // Prepare the message content
        let messageContent = `"${userName} (${userHandle})" accessed this incident at "${formattedDateTime}"`;

        // Fill the textarea with the prepared message
        let textArea = document.querySelector("#message");
        if (textArea) {
          textArea.value = messageContent;
          console.log("Message content set in text area.");
        } else {
          console.error("Text area not found");
        }

        // Set 'From' and 'To' dropdowns to "Surfcom"
        let fromSelect = document.querySelector("#msg_from");
        let toSelect = document.querySelector("#msg_to");

        if (fromSelect) {
          fromSelect.value = "unit_1996";
          console.log("'From' dropdown set to Surfcom.");
        } else {
          console.error("'From' dropdown not found");
        }

        if (toSelect) {
          toSelect.value = "unit_1997";
          console.log("'To' dropdown set to Surfcom.");
        } else {
          console.error("'To' dropdown not found");
        }

        // Trigger the 'Record' button click and then clear the text area
        let recordButton = document.querySelector("#post_comment");
        if (recordButton) {
          recordButton.click();
          console.log("Record button clicked.");

          // Clear the text area after a short delay
          setTimeout(() => {
            if (textArea) {
              textArea.value = "";
              console.log("Text area cleared.");
            }
          }, 250); // Adjust the delay as needed
        } else {
          console.error("Record button not found.");
        }
      } else {
        console.error("User dropdown not found.");
      }
    } else {
      console.log(
        "Script not running because referrer contains an excluded path"
      );
    }
  } else {
    console.log(
      "Script not running because current URL does not match 'https://surfcom.sls.com.au/incidents/edit/' pattern"
    );
  }
});

// Function to extract the username from the email before the @ symbol
function extractUsername() {
  let emailElement = document.querySelector(
    ".dropdown-menu .dropdown-item small:last-of-type"
  );
  if (emailElement) {
    let email = emailElement.textContent;
    let username = email.split("@")[0].toUpperCase();
    if (username === "SOC") {
      return promptForUsername();
    }
    return username;
  }
  return promptForUsername();
}

// Function to prompt the user for their first initial and surname
function promptForUsername() {
  let firstInitial;
  do {
    firstInitial = prompt("Please enter your first initial:").replace(
      /\s+/g,
      ""
    );
  } while (!firstInitial || firstInitial.length !== 1);

  let surname = prompt("Please enter your surname:").replace(/\s+/g, "");
  return `${firstInitial}${surname}`.toUpperCase();
}

// Function to create the role selection buttons and the remove button
function createRoleButtons(callback) {
  let container = document.createElement("div");
  container.id = "role-buttons-container";
  container.style.marginTop = "10px";

  let title = document.createElement("p");
  title.innerHTML = "<strong>Add me to incident as:</strong>";
  container.appendChild(title);

  let roles = ["ERO", "UAVERO", "SERO", "SDO"];
  roles.forEach((role) => {
    let button = document.createElement("button");
    button.textContent = role;
    button.style.marginRight = "10px";
    button.onclick = (e) => {
      e.preventDefault();
      callback(role);
    };
    container.appendChild(button);
  });

  // Create the remove button with red bin icon
  let removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  removeButton.style.marginLeft = "10px";
  removeButton.style.float = "right";
  removeButton.style.color = "red";
  removeButton.style.background = "none";
  removeButton.style.border = "none";
  removeButton.style.cursor = "pointer";
  removeButton.onclick = (e) => {
    e.preventDefault();
    removeUser();
  };
  container.appendChild(removeButton);

  return container;
}

// Function to insert the role selection buttons next to the SLS contact field
function insertRoleButtons() {
  let targetDiv = document.querySelector("#incidentSLSContact").parentNode
    .parentNode.parentNode;
  let addButtonContainer = createRoleButtons((role) => {
    let username = extractUsername();
    if (username) {
      let inputField = document.querySelector("#incidentSLSContact");
      if (inputField) {
        let currentValue = inputField.value;
        let newEntry = `${username} (${role})`;
        let entries = currentValue ? currentValue.split(" / ") : [];
        let entryExists = false;
        let usernamePattern = new RegExp(`^${username} \\(`);

        for (let i = 0; i < entries.length; i++) {
          if (usernamePattern.test(entries[i])) {
            entries[i] = newEntry;
            entryExists = true;
            break;
          }
        }

        if (!entryExists) {
          entries.push(newEntry);
        }

        entries.sort((a, b) => {
          let rolesOrder = ["ERO", "UAVERO", "SERO", "SDO"];
          let roleA = a.match(/\(([^)]+)\)/)[1];
          let roleB = b.match(/\(([^)]+)\)/)[1];
          return rolesOrder.indexOf(roleA) - rolesOrder.indexOf(roleB);
        });

        inputField.value = entries.join(" / ");
      }
    } else {
      alert("Username not found.");
    }
  });

  if (targetDiv) {
    let newColDiv = document.createElement("div");
    newColDiv.className = "col-12 col-md-6";
    newColDiv.appendChild(addButtonContainer);
    targetDiv.appendChild(newColDiv);
  }
}

// Function to remove the user from the field
function removeUser() {
  let username = extractUsername();
  if (username) {
    let inputField = document.querySelector("#incidentSLSContact");
    if (inputField) {
      let currentValue = inputField.value;
      let entries = currentValue ? currentValue.split(" / ") : [];
      let usernamePattern = new RegExp(`^${username} \\(`);
      let updatedEntries = entries.filter(
        (entry) => !usernamePattern.test(entry)
      );

      if (updatedEntries.length === entries.length) {
        alert("User is not part of this incident.");
      } else {
        inputField.value = updatedEntries.join(" / ");
      }
    }
  } else {
    alert("Username not found.");
  }
}

// Wait for the DOM to load before running the script
window.addEventListener("load", insertRoleButtons);

window.addEventListener("load", function () {
  // Lock the input field on window load
  const inputField = document.getElementById("incidentSLSContact");
  if (inputField) {
    inputField.readOnly = true;

    // Add horizontal scrollbar to the input field
    inputField.style.overflowX = "auto";
    inputField.style.whiteSpace = "nowrap";

    // Create the scroll buttons
    const scrollLeftButton = document.createElement("button");
    scrollLeftButton.id = "scrollLeft";
    scrollLeftButton.innerHTML = "&lt;";
    scrollLeftButton.style.marginRight = "5px";

    const scrollRightButton = document.createElement("button");
    scrollRightButton.id = "scrollRight";
    scrollRightButton.innerHTML = "&gt;";
    scrollRightButton.style.marginLeft = "5px";

    // Insert the buttons after the input field
    inputField.parentNode.insertBefore(
      scrollLeftButton,
      inputField.nextSibling
    );
    inputField.parentNode.insertBefore(
      scrollRightButton,
      scrollLeftButton.nextSibling
    );

    // Add event listeners to the scroll buttons
    scrollLeftButton.addEventListener("click", function (event) {
      event.preventDefault();
      inputField.scrollLeft -= 50; // Adjust the value as needed
    });

    scrollRightButton.addEventListener("click", function (event) {
      event.preventDefault();
      inputField.scrollLeft += 50; // Adjust the value as needed
    });
  }

  // Add an event listener to the button to unlock the input field and run the function
  const button = document.querySelector("button.check-incident-status");
  if (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (inputField) {
        inputField.readOnly = false;
      }

      // Run the function associated with the button
      const form = document.getElementById("saveIncidentForm");
      if (form) {
        form.submit();
      }
    });
  }
});

window.addEventListener("load", function () {
  // Select the element with the incidentSLSContact field
  var incidentSLSContactElement = document.querySelector("#incidentSLSContact");

  // Navigate to the parent .col-12.col-md-6 div
  if (incidentSLSContactElement) {
    var parentColDiv = incidentSLSContactElement.closest(".col-12.col-md-6");

    // Check if the next sibling exists and has the empty .form-group
    if (parentColDiv && parentColDiv.nextElementSibling) {
      var nextSiblingColDiv = parentColDiv.nextElementSibling;
      var emptyFormGroup = nextSiblingColDiv.querySelector(".form-group");

      // Remove the next sibling .col-12.col-md-6 if it contains an empty .form-group
      if (emptyFormGroup && emptyFormGroup.children.length === 0) {
        nextSiblingColDiv.remove();
      }
    }
  }
});

// Function to filter messages
function filterMessages() {
  const messages = document.querySelectorAll(".direct-chat-msg");
  const showSystemMessages = document.querySelector(
    "#display-system-messages"
  ).checked;

  messages.forEach((message) => {
    const messageFrom = message.querySelector(".direct-chat-name").innerText;

    if (
      !showSystemMessages &&
      messageFrom.includes("``user`` to ``systemLog``")
    ) {
      message.style.display = "none";
    } else {
      message.style.display = "block";
    }
  });
}

// Add filter checkbox to the UI
function addFilterCheckbox() {
  const filterContainer = document.createElement("div");
  filterContainer.classList.add("form-group");
  filterContainer.style.marginTop = "0px";

  const filterLabel = document.createElement("label");
  filterLabel.classList.add("checkbox-inline");
  filterLabel.innerHTML =
    '<input type="checkbox" id="display-system-messages"> Display SurfPlus System Messages';
  filterContainer.appendChild(filterLabel);

  const messageLogContainer = document.querySelector(".direct-chat-messages")
    .parentNode.parentNode;
  messageLogContainer.parentNode.insertBefore(
    filterContainer,
    messageLogContainer
  );

  const checkbox = document.querySelector("#display-system-messages");
  checkbox.addEventListener("change", filterMessages);
}

// Mutation observer to monitor changes in the message log
function observeMessageLog() {
  const messageLog = document.querySelector(".direct-chat-messages");
  const observer = new MutationObserver(() => {
    filterMessages();
  });

  observer.observe(messageLog, { childList: true });
}

// Initialize filter and observer
addFilterCheckbox();
filterMessages();
observeMessageLog();

function applyToggleButtons() {
  // Select all "Delivered to" messages
  const deliveredToMessages = document.querySelectorAll(
    ".direct-chat-text ul li"
  );

  deliveredToMessages.forEach((message) => {
    const deliveredText = message.innerHTML;
    const startIndex = deliveredText.indexOf("(");

    if (startIndex !== -1) {
      const visiblePart = deliveredText.slice(0, startIndex).trim();
      const hiddenPart = " " + deliveredText.slice(startIndex).trim(); // Add a space before hidden part

      // Create a span for the hidden content
      const hiddenSpan = document.createElement("span");
      hiddenSpan.style.display = "none";
      hiddenSpan.innerHTML = hiddenPart;

      // Create a button to toggle the visibility
      const toggleButton = document.createElement("button");
      toggleButton.textContent = "Show Contacts";
      toggleButton.style.marginLeft = "10px";
      toggleButton.style.cursor = "pointer";

      toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (hiddenSpan.style.display === "none") {
          hiddenSpan.style.display = "inline";
          toggleButton.textContent = "Hide";
        } else {
          hiddenSpan.style.display = "none";
          toggleButton.textContent = "Show Contacts";
        }
      });

      // Clear the existing content and add the new elements
      message.innerHTML = "";
      message.appendChild(document.createTextNode(visiblePart));
      message.appendChild(hiddenSpan);
      message.appendChild(toggleButton);
    }
  });
}

function observeMessageLog2() {
  const messageLog = document.querySelector(".direct-chat-messages");
  if (messageLog) {
    const observer = new MutationObserver(() => {
      applyToggleButtons();
    });

    observer.observe(messageLog, { childList: true });
  }
}

window.addEventListener("load", function () {
  applyToggleButtons();
  observeMessageLog2();
});

// Function to click the OK button within the specific div
function clickOkButton() {
  const okButton = document.querySelector(
    ".swal2-confirm.swal2-styled.swal2-default-outline"
  );
  if (okButton) {
    okButton.click();
  }
}

// Observer to detect the appearance of the specific div
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      clickOkButton();
    }
  });
});

// Function to start the observer if the URL matches
function autoDismiss() {
  const currentUrl = window.location.href;
  const urlPattern = /^https:\/\/surfcom\.sls\.com\.au\/incidents\/edit/;

  if (urlPattern.test(currentUrl)) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial check in case the div is already present
    clickOkButton();
  }
}

// Initialize the script
autoDismiss();

window.addEventListener("load", function () {
  formatCalloutMessages();
  addObserverForMessageLog();
});

function formatCalloutMessages() {
  // Select all direct chat messages
  const messages = document.querySelectorAll(".direct-chat-msg");

  messages.forEach(function (message) {
    // Check if the message ends with "Confirmation via SMS" and starts with "Incident #"
    const textElement = message.querySelector(".direct-chat-text");
    if (
      textElement &&
      textElement.textContent.trim().endsWith("Confirmation via SMS")
    ) {
      const textContent = textElement.textContent.trim();

      // Extracting necessary details using regex
      const incidentRegex = /Incident #(L\d{9})/;
      const respondentRegex = / - ([\w\s-]+ \([\w\s]+\))/;
      const respondentMobileRegex = /\((\d{10})\)/;
      const locationRegex = /Current location ([^\.]+)\./;
      const etaRegex = /ETA (\d+) Minutes/;

      const incidentMatch = textContent.match(incidentRegex);
      const respondentMatch = textContent.match(respondentRegex);
      const respondentMobileMatch = textContent.match(respondentMobileRegex);
      const locationMatch = textContent.match(locationRegex);
      const etaMatch = textContent.match(etaRegex);

      if (
        incidentMatch &&
        respondentMatch &&
        respondentMobileMatch &&
        locationMatch &&
        etaMatch
      ) {
        const formattedMessage = `Incident #${incidentMatch[1]} - ${respondentMatch[1]} (${respondentMobileMatch[1]}) is responding to incident. Current location ${locationMatch[1]}. ETA ${etaMatch[1]} Minutes.`;

        // Update the text content
        textElement.innerHTML = `<span style="color:#000"><b>${formattedMessage}</b></span>`;
      }
    }
  });
}

function addObserverForMessageLog() {
  const messageLog = document.querySelector(".direct-chat-messages");

  if (messageLog) {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          formatCalloutMessages();
        }
      });
    });

    const config = { childList: true, subtree: true };
    observer.observe(messageLog, config);
  }
}
