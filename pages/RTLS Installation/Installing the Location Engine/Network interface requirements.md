# Network interface requirements
## Subnets
The Location engine edge server has two independent physical network interfaces (eth0, eth1) and two individual subnets on each interfaces. Our standard edge server is labelled with each ethernet interfaces

1. **`ETH0`** or **`LAN 0`** or **`ANCHOR NETWORK`** - is responsible for anchor network in your local anchor network. It is strongly recommended that this network network is dedicated to connecting anchors and networking switches only. On the anchor network, a DHCP server is configured which assigns IP addresses within the subnetwork 10.0.0.1/24. When a device is connected to the anchor network, it will receive an IP address from the edge server.

!!! info "Note"
    The DHCP will assign IP within the subnet 192.168.0.1/24

2. **`ETH1`** or **`LAN 1`**or **`UPLINK NETWORK`** - is responsible for connecting the Locus Location Engine to your corporate network. The location engine is accessible through this network. By default the edge server will request for an IP address from the DHCP server running on this network. The edge server dashboard is also accessible through it's host name on the local network through [http://rtls.local](http://rtls.local)

## Ports

For a proper operation of the Locus RTLS, please make sure that the correct ports are opened if your corporate network is using a firewall.

|Port Number|Type|Direction|Interface|Purpose
|-----------|----|---------|---|-------
|53         |  TCP  | IN/OUT       |ETH0 & ETH1|  DNS <br/> Required for discovering edge server on LAN and resolving hostname    |
|3334       | TCP   |  IN/OUT      |ETH0|  RTLS Controller <br/> Required by the installation tool: RTLS controller to configure the Locus Anchor network      
|3335          |TCP    |  IN/OUT    |ETH0   |  RTLS Controller <br/> These are required by the RTLS Controller software tool to receive ACK from anchors and diagnostics     
|3000       | TCP   |  IN/OUT      |ETH0|  ANCHOR NETWORK <br/> Required by anchors to report the location packets to location engine and receive back instructions from location engine.

