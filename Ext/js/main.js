Ext.ns('Patton');

Patton.main = function(){
  Ext.QuickTips.init();
  
  return {
    region: 'center',
    id: 'main',
    title: 'Patton Web Interface',
    tbar: [
      '->',
      {text:'Save'},
      {text:'Reboot'}
    ],
    bbar: [
      'Patton Electronics Company',
      '->',
      '&copy; 2005-2009 <a href="">Terms & Conditions</a>'
    ],
    layout: 'border',
    items: [{
      border: false,
      region: 'west',
      width: 200,
      split: true,
      collapsible: true,
      layout: 'border',
      items: [
        Patton.navbar()
      ]
    },
      // main page goes here
      Patton.StaticRoute()
    ]
  };
};