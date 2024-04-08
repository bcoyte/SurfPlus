# SurfCom Management System Enhancements

This project enhances the SurfCom Management System with additional features and functionality. The enhancements are implemented using JavaScript code that interacts with the existing web application.

## Features

1. **Hotkey Shortcuts**: Various hotkey shortcuts are defined to automate tasks and streamline users workflow. For example:

- `F1`: Extracts incident data and formats it for pager messages.

- `F2`: Extracts incident data, formats it for further information, and saves the form.

- `F3`: Formats a standdown message and inserts it into the pager message field.

- `F7`: Creates a dropdown menu for selecting Emergency Response Beacons (ERBs).

- `F8`: Inserts a generic Close of Business message into the radio log screen, confirming handover.

- `F9` to `F12`: Prefills caller details for specific organizations.

- `Ctrl + S`: Saves the form.

- `Ctrl + R`: Switches between record and edit mode.

- `Ctrl + I`: Navigates to the incident view page.

- `Ctrl + B`: Navigates to the incident add page.

2. **Bulk Sign Off**: Adds a "Bulk Sign Off All" button to the support services page, allowing users to sign off all services in bulk.

3. **Prefill and Sign Off**: Adds a "Prefill & Signoff" button to the log service off page, prefilling the current location and automatically submitting the form.

4. **Contact Book Modal**: Adds a contact book modal to the caller details section, allowing users to search and select contact details.

5. **Message Direction Swapping**: Adds a swapping functionality to the message direction dropdowns, allowing users to easily swap the "From" and "To" values.

6. **Closest Location Finder**: Implements a feature to find the closest service location based on the provided latitude and longitude.

7. **Uppercase Conversion**: Converts the text in the message textarea to uppercase as the user types.

8. **Message Log Coloring**: Applies color coding to the message logs based on specific keywords or phrases.

9. **Incident Table Enhancements**: Adds additional buttons to the incident table, such as "Reopen", "Download PDF", and "Download CSV", and applies color formatting to the status column.

10. **Radio Buttons for Communication Method**: Adds radio buttons above the message textarea to select the communication method (e.g., radio, phone, email).

## Installation

To install the SurfCom Management System Enhancements, follow these steps:

1. Go to the project's GitHub repository.

2. Click on the "Code" button and select "Download ZIP" to download the project as a ZIP file.

3. Once the download is complete, locate the ZIP file in your downloads directory.

4. Extract the contents of the ZIP file to a folder of your choice. You can do this by right-clicking on the ZIP file and selecting "Extract All" (on Windows) or double-clicking the ZIP file (on macOS).

5. Open Google Chrome and navigate to the Extensions page. You can do this by typing `chrome://extensions` in the address bar and pressing Enter.

6. Enable Developer mode by toggling the switch located in the top right corner of the Extensions page.

7. Click on the "Load unpacked" button that appears after enabling Developer mode.

8. In the file explorer window that opens, navigate to the folder where you extracted the project files in step 4.

9. Select the folder that contains the project files (it should have files like `manifest.json` and the JavaScript files) and click "Open" or "Select Folder" (depending on your operating system).

10. Chrome will now load the extension, and you should see it listed on the Extensions page.

11. If the extension requires any additional permissions, Chrome may prompt you to grant them. Review the permissions carefully and click "Allow" or "Grant" if you trust the extension.

12. The extension should now be installed and active in Chrome. You can verify this by checking if the extension's icon appears in the Chrome toolbar.

13. Navigate to the SurfCom Management System web application, and the extension should automatically inject the JavaScript code and provide the enhanced functionality.

Note: If you make any changes to the extension's code after installation, you need to click the "Reload" button next to the extension on the Extensions page to apply the changes.

## Customization

The code can be customized to fit specific requirements or to add more features. The JavaScript code is well-commented and structured, making it easier to understand and modify.

## Disclaimer

Please note that these enhancements are provided as-is and may require modifications to work with future updates of the SurfCom Management System. It is recommended to thoroughly test the code before using it in a production environment.

## License

This project is open-source and available under the [MIT License](LICENSE).

Feel free to contribute, report issues, or suggest improvements by creating a pull request or opening an issue on the project's repository.
