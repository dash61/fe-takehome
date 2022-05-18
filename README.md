# NoiseAware FE Take Home Assessment

This assignment involves creating a list and a detail view of IoT devices.

Design file: https://www.figma.com/file/mBmESULVqfoDOpMRWVV2fs/Device-List-HW?node-id=0%3A1

API: https://jsonmock.hackerrank.com/api/iot_devices/search
Available query params
- status (optional): filter by device status
- page (optional): page of results

Given the design file and API information above, create a list view page that displays the IoT devices and their information.

Features on this list view page should include:
- Pagination
- Filtering by Status
- Detail view when clicking on individual device

While the designs do not address responsiveness, it should be a fully responsive implementation.

BONUS POINTS:

- Show a summary area (designs not provided) at the top of the table that contains the average rotor speed and root thresholds of the devices in the current page.

## Development Environment Setup

1.  (Windows only) Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)
    (verify windows version in prerequisites) and
    [Windows Terminal](https://aka.ms/terminal) (optional but recommended)

    note: any following commands should be run in a linux terminal (bash or similar),
    not the windows command prompt or powershell.

1.  If you haven't already, generate an SSH keypair and add it to
    [your github.com account](https://github.com/settings/keys)
    (note: when asked, do not enter a passphrase):

        ssh-keygen -t ed25519
        cat ~/.ssh/id_ed25519.pub

1.  Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

1.  Install Node.js 18.x:

        nvm install 18
        nvm alias default 18

1.  Close and reopen terminal. Verify node version:

        $ node --version
        v18.1.0

1.  Install Yarn

        npm i -g yarn

1.  Clone this repo

    WSL users please note: make sure to clone _into the linux filesystem_ (anywhere but
    `/mnt/c`). This is because, under the hood, the link to the windows filesystem is
    implemented as a network share, which makes interacting with the tens of thousands
    of files in `node_modules` _extremely_ slow.

        git clone git@github.com:NoiseAware/resteasy-ui.git /wherever/you/want/it

1.  Start the development server

        yarn start
