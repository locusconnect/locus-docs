# Server activation 
# Installation 
!!! warning "Prerequisite"
    Please make sure you have been through the [Network interface requirements](Network%20interface%20requirements.md) before proceeding with the edge server setup.

  1. Plug in the power adapter of the Locus edge server. The gateway will automatically turn on. Give the gateway few minutes after boot, during this time the system perform many system checks and starts the core RTLS services.
  <!--   Here we need to mention some indication like other companies.... how they use LED to indicate -->
  3. Connect the edge server to your local network by plugging in an ethernet cable in the uplink network port LAN 1 ([Network interface requirements](Network%20interface%20requirements.md))
  4. Connect your computer to the anchor network 


Connect your computer to the anchor network by plugging in an ethernet cable in an anchor network port (Network interfaces & requirements).

Open your browser and go to [http://locus.local](http://locus.local). This will open the Pozyx web application running locally on your gateway. Note that it may take a few minutes for the gateway to start up before the application is available.

Go to Devices → Gateway → Info and scroll down to the Uplink network section to find the details about the uplink network interface.
By default, the gateway is configured to dynamically obtain an IP address (configured as DHCP client). Please make note of the Local IP address of the uplink network.
If your home or company network utilizes static IP's, you can configure the gateway’s IP by clicking Edit uplink network configuration.