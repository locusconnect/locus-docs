# Installation Overview and Project Delivery

!!! quote ""
    You already went through the Locus RTLS Demo kit Deployment and probably you have done on-site PoC or small scale test for your application.. 

The section on RTLS Installation aims to help you during the preparation and pre-deployment phase then initial setup with focus on larger installations with Locus RTLS technology. It should provide you answers to the most frequent questions and also give you some tips for positioning debugging and fine tuning. 

## Pre-Deployment
In the pre-deployment phase, you are supposed to upload your site floorplan images onto the Locus portal. On the the portal you can either create your own floorplan 3D model using the Locus Planner Tool, or ask for a Locus certified professional through the portal to get it done for you.

!!! quote "" 
    We recommend you to provide us with physical site images, floor area video shoots to our 3D engineers, so they may understand your requirements and provide you with best possible 3D maps.
    
Using our planner software you will get an estimate for the number of anchors needed to completely cover your floor area (that need tracking)

## Initial Setup

We have a simple 3 step installation process :

1. [Installing the Locus Location Engine (Edge Server)](/RTLS Installation/Installing the Location Engine)
2. [Installing the Anchors](/RTLS Installation/Installing the Anchors)
3. [Installing the Tags](/RTLS Installation/Installing the Tags)

!!! warning ""
    We very highly recommend to following this order. Most problems that occur during the installation of our RTLS are caused by faulty Ethernet cables. When you install the anchors first (without a gateway), you will only discover these issues afterwards, while if you install the gateway first, and connect the anchors to the gateway while you install them, you will get immediate feedback on the connectivity between the gateway and the anchor through the LED on the anchor [Mounting the anchors](/RTLS Installation/Installing the Anchors). This will allow you to immediately detect cable issues, and take direct action.



