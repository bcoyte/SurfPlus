# SurfCom Management System Enhancements

This project enhances the SurfCom Management System with additional features and functionality. The enhancements are implemented using JavaScript code that interacts with the existing web application.

## Features

1. **Hotkey Shortcuts**: Various hotkey shortcuts are defined to automate tasks and streamline workflows. For example:
   - `F1`: Extracts incident data and formats it for pager messages.
   - `F2`: Extracts incident data, formats it for further information, and saves the form.
   - `F3`: Formats a standdown message and inserts it into the pager message field.
   - `F7`: Creates a dropdown menu for selecting Emergency Response Beacons (ERBs).
   - `F8` to `F12`: Prefills caller details for specific organizations.
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

## Usage

To use these enhancements, the JavaScript code needs to be injected into the SurfCom Management System web application. This can be done using browser extensions like Tampermonkey or by modifying the application's source code directly.

Once the code is injected, the enhanced functionality will be available within the application. Users can utilize the hotkey shortcuts, click on the added buttons, and interact with the new features seamlessly.

## Customization

The code can be customized to fit specific requirements or to add more features. The JavaScript code is well-commented and structured, making it easier to understand and modify.

## Disclaimer

Please note that these enhancements are provided as-is and may require modifications to work with future updates of the SurfCom Management System. It is recommended to thoroughly test the code before using it in a production environment.

## License

This project is open-source and available under the [MIT License](LICENSE).

Feel free to contribute, report issues, or suggest improvements by creating a pull request or opening an issue on the project's repository.
