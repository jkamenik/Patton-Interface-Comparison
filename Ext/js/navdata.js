Ext.ns('Patton');

Patton.navdata = [{
  text: 'Patton Home Page',
  icon: '',
  leaf: true
},{
  text: 'Home',
  leaf: true
},{
  text: 'System',
  leaf: false,
  expanded: true,
  children: [{
    text: 'Information',leaf: true
  },{
    text: 'Services',leaf: true
  },{
    text: 'Configuration',leaf: true
  },{
    text: 'Software Update',leaf: true
  },{
    text: 'Autoupdate',leaf: true
  },{
    text: 'Authentication',leaf: true
  },{
    text: 'Logging',leaf: true
  },{
    text: 'Interface',leaf: true
  },{
    text: 'DNS Server',leaf: true
  },{
    text: 'Time',leaf: true
  },{
    text: 'SSL',leaf: true
  }]
},{
  text: 'Interface Configuration',
  leaf: false,
  expanded: true,
  children: [{
    text: 'IP Interface',leaf: true
  },{
    text: 'VLAN',leaf: true
  },{
    text: 'Bridge Group',leaf: true
  },{
    text: 'Cellular Modem',leaf: true
  },{
    text: 'PPP',leaf: true
  },{
    text: 'ARP',leaf: true
  },{
    text: 'DHCP Server',leaf: true
  }]
},{
  text: 'Routing Configuration',
  leaf: false,
  expanded: true,
  children: [{
    text: 'Static Route',leaf: true
  },{
    text: 'RIP',leaf: true
  }]
},{
  text: 'Traffic Management',
  leaf: false,
  expanded: true,
  children: [{
    text: 'QoS',leaf: true
  },{
    text: 'Policing',leaf: true
  },{
    text: 'Firewall',leaf: true
  }]
},{
  text: 'Support',
  leaf: true
}];